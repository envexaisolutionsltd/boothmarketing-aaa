import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.boothmarketing.co.uk'
const CONTENT_LAST_MODIFIED = new Date('2026-09-09T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/websites`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/website-audit`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${SITE_URL}/how-it-works`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/agent-info`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/llms.txt`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
