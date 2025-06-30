import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// TODO: Generate sitemap dynamically based on the latest data
	const lastUpdated = '2025-06-30T00:00:00.000Z';

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://asimov.directory/</loc>
		<lastmod>${lastUpdated}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
	<url>
		<loc>https://asimov.directory/modules</loc>
		<lastmod>${lastUpdated}</lastmod>
		<changefreq>daily</changefreq>
		<priority>0.8</priority>
	</url>
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
};
