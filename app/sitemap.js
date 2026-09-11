import { PRODUCTS_DATA } from "@/data/products"

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saenterprises.com'
    const lastModified = new Date().toISOString().split('T')[0]

    const staticRoutes = [
        '',
        '/about',
        '/solutions',
        '/solutions/it-hardware',
        '/solutions/office-equipment',
        '/solutions/networking',
        '/solutions/printing-consumables',
        '/solutions/accessories',
        '/solutions/custom-procurement',
        '/products',
        '/industries',
        '/faq',
        '/contact'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : (route.startsWith('/solutions') || route === '/products' ? 0.8 : 0.6),
    }))

    const productRoutes = PRODUCTS_DATA.map((prod) => ({
        url: `${baseUrl}/products/${prod.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

    return [...staticRoutes, ...productRoutes]
}
