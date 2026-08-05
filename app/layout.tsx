import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://itsarbit.ai";

export const metadata: Metadata = {
  title: "Arbit Chen — Production AI Infrastructure",
  description:
    "Co-founder and CTO designing reliable, failure-aware infrastructure for production AI.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Arbit Chen — Production AI Infrastructure",
    description: "Infrastructure for AI that has to work.",
    type: "website",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1731, height: 909, alt: "Arbit Chen — Infrastructure for AI that has to work." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbit Chen — Production AI Infrastructure",
    description: "Infrastructure for AI that has to work.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
