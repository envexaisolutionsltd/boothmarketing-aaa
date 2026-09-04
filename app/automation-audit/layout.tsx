import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Automation Audit | Booth Marketing',
  description: 'Request a free Automation Audit from Booth Marketing and leave knowing what is worth automating, what should stay human and where to start.',
  alternates: { canonical: '/automation-audit' },
  openGraph: {
    title: 'Free AI Automation Audit | Booth Marketing',
    description: 'Request a free Automation Audit from Booth Marketing and leave knowing what is worth automating, what should stay human and where to start.',
    url: '/automation-audit',
  },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
