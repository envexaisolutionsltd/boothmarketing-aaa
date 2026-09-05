import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'V2 Configuration | Booth Marketing',
  description: 'This area of the Booth Marketing website is temporarily undergoing backend configuration.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: { canonical: '/v2' },
}

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
