import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://www.boothmarketing.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Booth Marketing | Conversion-Focused Websites for Established Businesses',
  description: 'Booth Marketing builds conversion-focused websites for established businesses, designed for faster trust, clearer positioning and stronger action in an AI-assisted buying environment.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Booth Marketing | Conversion-Focused Websites for Established Businesses',
    description: 'Conversion-focused websites built for faster trust, clearer positioning and stronger action in an AI-assisted buying environment.',
    url: SITE_URL,
    siteName: 'Booth Marketing',
    type: 'website',
    images: [{ url: '/booth-marketing-logo.svg', alt: 'Booth Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Booth Marketing | Conversion-Focused Websites for Established Businesses',
    description: 'Conversion-focused websites built for faster trust, clearer positioning and stronger action in an AI-assisted buying environment.',
    images: ['/booth-marketing-logo.svg'],
  },
  icons: {
    icon: '/booth-marketing-mark.svg',
    shortcut: '/booth-marketing-mark.svg',
    apple: '/booth-marketing-mark.svg',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Booth Marketing',
  url: SITE_URL,
  logo: `${SITE_URL}/booth-marketing-logo.svg`,
  description: 'Booth Marketing builds conversion-focused websites and AI automation systems for established businesses.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Booth Marketing',
  url: SITE_URL,
}

const websiteServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conversion-Focused Website Design and Development',
  provider: { '@type': 'Organization', name: 'Booth Marketing', url: SITE_URL },
  serviceType: ['Conversion-Focused Websites', 'Website Strategy', 'Landing Pages', 'Website Conversion Audits', 'Mobile-First Web Development'],
  areaServed: 'Worldwide',
}

const automationServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation and Workflow Automation',
  provider: { '@type': 'Organization', name: 'Booth Marketing', url: SITE_URL },
  serviceType: ['AI Automation', 'Workflow Automation', 'Business Process Automation', 'Automation Audits'],
  areaServed: 'Worldwide',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(automationServiceSchema) }} />
      </body>
    </html>
  )
}
