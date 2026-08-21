import type { Metadata } from "next";
import "./globals.css";
import "./production-refresh.css";

export const metadata: Metadata = {
  title: "Booth Marketing | Automation Systems for Gyms",
  description: "Booth Marketing helps independent gym owners capture enquiries, improve trial follow-up and reduce repetitive admin with practical automation systems.",
  metadataBase: new URL("https://www.boothmarketing.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Booth Marketing | Automation Systems for Gyms",
    description: "Practical automation systems for independent gyms: better enquiry handling, trial follow-up and less repetitive admin.",
    url: "/",
    siteName: "Booth Marketing",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
