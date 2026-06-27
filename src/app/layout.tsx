import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "./_cursor-glow";
import MetricoolTracker from "./_metricool-tracker";
import { LyfionInteractionProvider } from "./_lyfion-interaction";
import { BRAND_FAVICON, BRAND_ICON_512 } from "./_shared";
import { SiteStructuredData } from "./_structured-data";
import LocaleBoot from "./_locale-boot";
import HashScroll from "./_hash-scroll";

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
  metadataBase: new URL("https://lyfion.digital"),
  robots: { index: true, follow: true },
  title: {
    default:
      "Lyfion.digital | Practical Digital Systems, Websites and Automation Workflows",
    template: "%s | Lyfion.digital",
  },
  icons: {
    icon: [
      { url: BRAND_FAVICON, type: "image/svg+xml" },
      { url: "/brand/lyfion/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/brand/lyfion/favicon/apple-touch-icon.png",
    shortcut: "/brand/lyfion/favicon/favicon.ico",
  },
  openGraph: {
    images: [{ url: BRAND_ICON_512, width: 512, height: 512, alt: "Lyfion Digital" }],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleBoot />
        <SiteStructuredData />
        <LyfionInteractionProvider>
          <CursorGlow />
          <HashScroll />
          {children}
          <MetricoolTracker />
        </LyfionInteractionProvider>
      </body>
    </html>
  );
}
