import type { Metadata } from "next";
import NavBar from "./_nav";
import { Footer } from "./_shared";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  title: {
    default:
      "Lyfion.digital — Practical Digital Systems, Websites & Automation Workflows",
    template: "%s — Lyfion.digital",
  },
};

export default function V1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
