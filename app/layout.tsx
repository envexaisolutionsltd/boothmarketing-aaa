import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://boothmarketing.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Booth Marketing | Automation Audit for Established Businesses',
  description: 'Find where repetitive work, disconnected systems and manual processes are consuming business capacity. Request a practical Automation Audit from Booth Marketing.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Booth Marketing | Automation Audit for Established Businesses',
    description: 'Find where repetitive work, disconnected systems and manual processes are consuming business capacity. Request a practical Automation Audit from Booth Marketing.',
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
    title: 'Booth Marketing | Automation Audit for Established Businesses',
    description: 'Find where repetitive work, disconnected systems and manual processes are consuming business capacity. Request a practical Automation Audit from Booth Marketing.',
    images: ['/booth-marketing-logo.png'],
  },
  icons: {
    icon: '/booth-marketing-logo.png',
    shortcut: '/booth-marketing-logo.png',
    apple: '/booth-marketing-logo.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
