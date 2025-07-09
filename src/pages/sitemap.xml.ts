import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  // URL base do site - ajuste conforme necessário
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://markdev.com.br' 
    : 'http://localhost:3000';

  const pages = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/blog',
    '/services'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}; 