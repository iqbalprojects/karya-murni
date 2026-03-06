/**
 * Converts Plate.js (Slate-based) JSON content blocks into semantic HTML.
 *
 * Handles the flat structure from Plate.js IndentListPlugin:
 *  - Regular paragraphs
 *  - Bold, italic, underline text and custom font sizes
 *  - Ordered lists (decimal) and unordered lists (disc)
 *  - Nested/indented lists
 *  - List item continuation paragraphs (description text under list items)
 *  - Empty paragraphs as spacers
 *  - Newline characters in text
 */

interface PlateChild {
	text: string;
	bold?: boolean;
	fontSize?: string;
	italic?: boolean;
	underline?: boolean;
}

interface PlateBlock {
	type: string;
	id?: string;
	children: PlateChild[];
	indent?: number;
	listStyleType?: string;
	listStart?: number;
	listRestartPolite?: number;
}

function renderChildren(children: PlateChild[]): string {
	return children
		.map((child) => {
			if (child.text === '') return '';

			let html = escapeHtml(child.text);

			// Convert newline characters to <br> tags
			html = html.replace(/\n/g, '<br>');

			if (child.bold) {
				html = `<strong>${html}</strong>`;
			}
			if (child.italic) {
				html = `<em>${html}</em>`;
			}
			if (child.underline) {
				html = `<u>${html}</u>`;
			}
			if (child.fontSize) {
				html = `<span style="font-size: ${child.fontSize}">${html}</span>`;
			}

			return html;
		})
		.join('');
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

/**
 * Determines the list tag based on the listStyleType.
 * "decimal" → <ol>, "disc" (or other) → <ul>
 */
function getListTag(listStyleType: string): 'ol' | 'ul' {
	return listStyleType === 'decimal' ? 'ol' : 'ul';
}

export function plateToHtml(jsonString: string): string {
	if (!jsonString) return '';

	let blocks: PlateBlock[];
	try {
		blocks = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
	} catch {
		return '';
	}

	if (!Array.isArray(blocks) || blocks.length === 0) return '';

	let html = '';
	let i = 0;

	while (i < blocks.length) {
		const block = blocks[i];

		// If it's a list item, process the entire list group
		if (block.listStyleType && block.indent) {
			const result = processListGroup(blocks, i);
			html += result.html;
			i = result.nextIndex;
		} else {
			// Regular paragraph
			html += renderParagraph(block);
			i++;
		}
	}

	return html;
}

/**
 * Processes a group of list items starting at `startIndex`.
 *
 * In Plate.js IndentListPlugin (flat structure), list items and their
 * description/continuation paragraphs are siblings:
 *
 *   { indent:1, listStyleType:"decimal", children: "Land Clearing" }   ← list item
 *   { indent:1,                          children: "Old palms..." }    ← continuation
 *   { indent:1, listStyleType:"decimal", children: "Soil Prep" }      ← next list item
 *   { indent:1,                          children: "The soil..." }     ← continuation
 *
 * Continuation paragraphs (same indent, no listStyleType) are rendered
 * inside the preceding <li> element.
 */
function processListGroup(
	blocks: PlateBlock[],
	startIndex: number
): { html: string; nextIndex: number } {
	const baseIndent = blocks[startIndex].indent!;
	const listType = blocks[startIndex].listStyleType!;
	const tag = getListTag(listType);

	let html = `<${tag}>`;
	let i = startIndex;

	while (i < blocks.length) {
		const block = blocks[i];

		// Exit if block has no indent or is at a lower indent level
		if (!block.indent || block.indent < baseIndent) break;

		// Exit if block is a different list type at the same indent level
		if (block.indent === baseIndent && block.listStyleType && block.listStyleType !== listType)
			break;

		if (block.indent === baseIndent && block.listStyleType === listType) {
			// This is a list item at our level
			const content = renderChildren(block.children);
			html += `<li>${content}`;
			i++;

			// Collect follow-up content for this list item:
			// - Continuation/description paragraphs (same indent, no listStyleType)
			// - Nested sub-lists (higher indent with listStyleType)
			while (i < blocks.length) {
				const next = blocks[i];

				// Exit if no indent or lower indent than our base
				if (!next.indent || next.indent < baseIndent) break;

				// Exit if next block is another list item at the same level
				if (next.indent === baseIndent && next.listStyleType) break;

				if (next.indent > baseIndent && next.listStyleType) {
					// Nested sub-list at a deeper indent
					const nested = processListGroup(blocks, i);
					html += nested.html;
					i = nested.nextIndex;
				} else if (!next.listStyleType) {
					// Continuation paragraph (description text under the list item)
					const desc = renderChildren(next.children);
					if (desc) {
						html += `<p>${desc}</p>`;
					}
					i++;
				} else {
					break;
				}
			}

			html += '</li>';
		} else if (block.indent > baseIndent) {
			// Deeper indent encountered — could be a nested list or orphaned content
			if (block.listStyleType) {
				const nested = processListGroup(blocks, i);
				html += nested.html;
				i = nested.nextIndex;
			} else {
				// Orphaned indented paragraph without preceding list item — render inline
				const content = renderChildren(block.children);
				if (content) {
					html += `<p>${content}</p>`;
				}
				i++;
			}
		} else {
			break;
		}
	}

	html += `</${tag}>`;
	return { html, nextIndex: i };
}

/**
 * Renders a single non-list paragraph block.
 */
function renderParagraph(block: PlateBlock): string {
	const content = renderChildren(block.children);

	// Empty paragraph → spacer
	if (!content) {
		return '<br />';
	}

	return `<p>${content}</p>`;
}
