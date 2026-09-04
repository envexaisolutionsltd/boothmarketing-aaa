import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://boothmarketing.co.uk/sitemap.xml',
    host: 'https://boothmarketing.co.uk',
  }
}
