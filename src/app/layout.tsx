// src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Link3 — Where creators own their work. Everyone earns.",
  description: "Provenance, fair royalties, and attention rewards — for creators and fans.",
  openGraph: {
    title: "Link3 — Where creators own their work. Everyone earns.",
    description: "Provenance, fair royalties, and attention rewards — for creators and fans.",
    url: "https://link3.io",
    siteName: "Link3",
    images: [
      {
        url: "https://link3.io/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link3 — Where creators own their work. Everyone earns.",
    description: "Provenance, fair royalties, and attention rewards — for creators and fans.",
    images: ["https://link3.io/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-neutral-50 text-neutral-900 antialiased selection:bg-primary/20",
          inter.variable
        )}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
