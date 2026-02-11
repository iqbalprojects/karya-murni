import type { RequestHandler } from '@sveltejs/kit';

const pages = [
	'',
	'/about',
	'/projects',
	'/equipments',
	'/services',
	'/services/land-clearing',
	'/news',
	'/privacy-policy',
	'/terms-conditions'
];

const equipmentCategories = [
	'excavator',
	'bulldozers',
	'dumptruck',
	'grader',
	'compactor',
	'tracktor'
];

export const GET: RequestHandler = async ({ url }) => {
	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
  
  ${pages
		.map(
			(page) => `
	<url>
		<loc>${url.origin}${page}</loc>
		<changefreq>daily</changefreq>
		<priority>${page === '' ? 1.0 : 0.8}</priority>
	</url>
  `
		)
		.join('')}
		
  ${equipmentCategories
		.map(
			(slug) => `
	<url>
		<loc>${url.origin}/equipments/${slug}</loc>
		<changefreq>weekly</changefreq>
		<priority>0.7</priority>
	</url>
  `
		)
		.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
};
