import type { Metadata } from "next";
import "./globals.css";
import "./production-refresh.css";

export const metadata: Metadata = {
  title: "Booth Marketing | Automation Systems for Business",
  description: "Booth Marketing helps businesses reduce manual work, connect workflows and improve operations through practical automation systems.",
  metadataBase: new URL("https://www.boothmarketing.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Booth Marketing | Automation Systems for Business",
    description: "Reduce repetitive work and improve how information moves through your business with practical automation systems.",
    url: "/",
    siteName: "Booth Marketing",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
