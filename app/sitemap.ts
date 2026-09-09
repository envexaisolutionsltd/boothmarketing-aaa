import type { MetadataRoute } from 'next'
import { publicUrls } from '@/lib/public-urls'

const MODIFIED = {
  core: new Date('2026-09-09T00:00:00.000Z'),
  legal: new Date('2026-09-09T00:00:00.000Z'),
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: publicUrls.home, lastModified: MODIFIED.core, changeFrequency: 'weekly', priority: 1 },
    { url: publicUrls.websites, lastModified: MODIFIED.core, changeFrequency: 'monthly', priority: 0.9 },
    { url: publicUrls.websiteAudit, lastModified: MODIFIED.core, changeFrequency: 'monthly', priority: 0.95 },
    { url: publicUrls.howItWorks, lastModified: MODIFIED.core, changeFrequency: 'monthly', priority: 0.8 },
    { url: publicUrls.about, lastModified: MODIFIED.core, changeFrequency: 'monthly', priority: 0.6 },
    { url: publicUrls.agentInfo, lastModified: MODIFIED.core, changeFrequency: 'monthly', priority: 0.7 },
    { url: publicUrls.llms, lastModified: MODIFIED.core, changeFrequency: 'monthly', priority: 0.7 },
    { url: publicUrls.privacy, lastModified: MODIFIED.legal, changeFrequency: 'yearly', priority: 0.2 },
    { url: publicUrls.terms, lastModified: MODIFIED.legal, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
