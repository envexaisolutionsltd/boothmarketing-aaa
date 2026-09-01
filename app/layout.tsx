import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Booth Marketing | AI Automation Audit for Established Businesses',
  description: 'Booth Marketing helps established businesses identify repetitive operational work, disconnected workflows and practical automation opportunities through a focused Automation Audit.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
