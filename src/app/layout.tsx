import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lyfion — Life, Technology & Business Growth",
  description:
    "A premium digital ecosystem connecting web development, AI workflows, brand infrastructure, business growth and real-world ventures across multiple markets.",
  keywords: [
    "Lyfion",
    "digital ecosystem",
    "web development",
    "AI systems",
    "business growth",
    "brand infrastructure",
    "media platforms",
  ],
  openGraph: {
    title: "Lyfion — Life, Technology & Business Growth",
    description:
      "A premium digital ecosystem connecting web development, AI workflows, brand infrastructure, business growth and real-world ventures.",
    siteName: "Lyfion",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfion — Life, Technology & Business Growth",
    description:
      "A premium digital ecosystem connecting web development, AI workflows, brand infrastructure and business growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
