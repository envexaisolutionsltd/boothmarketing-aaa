import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booth Marketing | AI Automation Agency",
  description:
    "Booth Marketing helps businesses reduce manual work, connect workflows and improve operations through practical automation systems.",
  metadataBase: new URL("https://boothmarketing.co.uk"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
