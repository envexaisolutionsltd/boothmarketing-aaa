import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Automation: How It Works | Booth Marketing',
  description: 'See how Booth Marketing assesses workflows, keeps human judgment where it matters and identifies where automation can reduce unnecessary manual work.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'Business Automation: How It Works | Booth Marketing',
    description: 'See how Booth Marketing assesses workflows, keeps human judgment where it matters and identifies where automation can reduce unnecessary manual work.',
    url: '/how-it-works',
  },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
