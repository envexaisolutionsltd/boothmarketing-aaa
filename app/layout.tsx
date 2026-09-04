import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://boothmarketing.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Booth Marketing | AI Automation Agency for Established Businesses',
  description: 'Booth Marketing helps established businesses reduce repetitive admin, improve workflows and identify what is genuinely worth automating. Request a free Automation Audit.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Booth Marketing | AI Automation Agency for Established Businesses',
    description: 'Reduce repetitive admin, improve workflows and identify what is genuinely worth automating with Booth Marketing.',
    url: SITE_URL,
    siteName: 'Booth Marketing',
    type: 'website',
    images: [
      {
        url: '/booth-marketing-logo.png',
        alt: 'Booth Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Booth Marketing | AI Automation Agency for Established Businesses',
    description: 'Reduce repetitive admin, improve workflows and identify what is genuinely worth automating with Booth Marketing.',
    images: ['/booth-marketing-logo.png'],
  },
  icons: {
    icon: '/booth-marketing-logo.png',
    shortcut: '/booth-marketing-logo.png',
    apple: '/booth-marketing-logo.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Booth Marketing',
  url: SITE_URL,
  logo: `${SITE_URL}/booth-marketing-logo.png`,
  description: 'AI automation agency helping established businesses reduce unnecessary manual work, improve workflows and identify where automation genuinely makes sense.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Booth Marketing',
  url: SITE_URL,
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation and Workflow Automation',
  provider: {
    '@type': 'Organization',
    name: 'Booth Marketing',
    url: SITE_URL,
  },
  serviceType: [
    'AI Automation',
    'Workflow Automation',
    'Business Process Automation',
    'Automation Audits',
    'Workflow Diagnosis',
    'Automation Implementation',
  ],
  areaServed: 'Worldwide',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </body>
    </html>
  )
}
