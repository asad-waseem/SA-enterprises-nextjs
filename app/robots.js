export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saenterprises.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/admin/', '/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
