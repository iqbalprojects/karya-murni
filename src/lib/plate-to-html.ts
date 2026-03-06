/**
 * Converts Plate.js (Slate-based) JSON description blocks into semantic HTML.
 *
 * Handles:
 *  - Regular paragraphs
 *  - Bold text and custom font sizes
 *  - Ordered lists (decimal) and unordered lists (disc)
 *  - Nested/indented lists
 *  - Empty paragraphs as spacers
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
}

function renderChildren(children: PlateChild[]): string {
	return children
		.map((child) => {
			if (child.text === '') return '';

			let html = escapeHtml(child.text);

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

		// If it's a list item, group consecutive list items at this indent level
		if (block.listStyleType && block.indent) {
			html += renderListGroup(blocks, i);
			// Skip past all blocks consumed by renderListGroup
			i = skipListGroup(blocks, i, block.indent);
		} else {
			// Regular paragraph
			html += renderParagraph(block);
			i++;
		}
	}

	return html;
}

/**
 * Renders a group of list items starting at `startIndex`,
 * including nested sub-lists.
 */
function renderListGroup(blocks: PlateBlock[], startIndex: number): string {
	const baseIndent = blocks[startIndex].indent!;
	const listType = blocks[startIndex].listStyleType!;
	const tag = getListTag(listType);

	let html = `<${tag}>`;
	let i = startIndex;

	while (i < blocks.length) {
		const block = blocks[i];

		// Stop if this block is not a list item or has a lower indent than our base
		if (!block.listStyleType || !block.indent || block.indent < baseIndent) {
			break;
		}

		// If the block is at the same indent level, it's a direct <li>
		if (block.indent === baseIndent) {
			const content = renderChildren(block.children);
			// Check if the next block(s) are nested sub-lists
			const nextIndex = i + 1;
			if (
				nextIndex < blocks.length &&
				blocks[nextIndex].indent &&
				blocks[nextIndex].indent! > baseIndent &&
				blocks[nextIndex].listStyleType
			) {
				// This <li> has nested content
				html += `<li>${content}`;
				html += renderListGroup(blocks, nextIndex);
				html += `</li>`;
				i = skipListGroup(blocks, nextIndex, blocks[nextIndex].indent!);
			} else {
				html += `<li>${content}</li>`;
				i++;
			}
		} else {
			// Deeper indent encountered without parent — render as nested group
			html += renderListGroup(blocks, i);
			i = skipListGroup(blocks, i, block.indent);
		}
	}

	html += `</${tag}>`;
	return html;
}

/**
 * Skips past all consecutive list blocks at `baseIndent` or deeper.
 * Returns the next index to process.
 */
function skipListGroup(blocks: PlateBlock[], startIndex: number, baseIndent: number): number {
	let i = startIndex;
	while (i < blocks.length) {
		const block = blocks[i];
		if (!block.listStyleType || !block.indent || block.indent < baseIndent) {
			break;
		}
		i++;
	}
	return i;
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
