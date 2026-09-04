import type { MetadataRoute } from 'next'

const SITE_URL = 'https://boothmarketing.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/websites`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/website-audit`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${SITE_URL}/how-it-works`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/automation`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/automation-audit`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE_URL}/calculator`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
