import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_nav";
import CursorGlow from "./_cursor-glow";
import { LyfionInteractionProvider } from "./_lyfion-interaction";
import { Footer, BRAND_FAVICON, BRAND_ICON_512 } from "./_shared";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LyfionInteractionProvider>
          <CursorGlow />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LyfionInteractionProvider>
      </body>
    </html>
  );
}
