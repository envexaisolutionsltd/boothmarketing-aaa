import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation for Established Businesses | Booth Marketing',
  description: 'AI automation and workflow systems that reduce repetitive handling while keeping important decisions under human control.',
  alternates: { canonical: '/automation' },
  openGraph: {
    title: 'AI Automation for Established Businesses | Booth Marketing',
    description: 'Reduce repetitive handling while keeping important decisions under human control.',
    url: '/automation',
  },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
