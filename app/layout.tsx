import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Booth Marketing | Practical Business Automation", template: "%s | Booth Marketing" },
  description: "Booth Marketing helps established businesses identify and remove operational work that no longer needs manual handling.",
  openGraph: {
    title: "Booth Marketing | Practical Business Automation",
    description: "Automation systems built around real business operations.",
    type: "website",
    siteName: "Booth Marketing",
  },
  icons: { icon: "/booth-marketing-logo.png", apple: "/booth-marketing-logo.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08090b" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-[#08090b] text-zinc-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
