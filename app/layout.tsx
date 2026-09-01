import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Booth Marketing | B2B Lead Generation & Appointment Setting',
  description: 'Done-for-you B2B lead generation and appointment setting for UK professional services and tech firms.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
