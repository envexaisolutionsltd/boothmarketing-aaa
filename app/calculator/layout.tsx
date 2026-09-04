import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operational Capacity Calculator | Booth Marketing',
  description: 'Estimate how much staff capacity repetitive operational work may be consuming and explore a realistic automation scenario with Booth Marketing.',
  alternates: { canonical: '/calculator' },
  openGraph: {
    title: 'Operational Capacity Calculator | Booth Marketing',
    description: 'Estimate how much staff capacity repetitive operational work may be consuming and explore a realistic automation scenario with Booth Marketing.',
    url: '/calculator',
  },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
