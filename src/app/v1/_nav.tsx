"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, GRADIENT, BASE, MAILTO_CTA } from "./_shared";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === BASE ? pathname === BASE : pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(2,11,6,0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between h-16">
        <Link href={BASE || "/"} className="flex items-center gap-2 flex-shrink-0">
          <span
            className="font-extrabold text-lg tracking-[0.28em] select-none"
            style={{
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LYFION
          </span>
          <span
            className="text-[10px] font-mono tracking-widest"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            .DIGITAL
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive(l.href) ? "#38bdf8" : "rgba(255,255,255,0.6)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={MAILTO_CTA}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
          style={{ background: GRADIENT, color: "#ffffff" }}
        >
          Start with a system review
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-md"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className="block h-px bg-current transition-all duration-200 origin-center"
              style={{ transform: open ? "rotate(45deg) translateY(4px)" : "none" }}
            />
            <span
              className="block h-px bg-current transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px bg-current transition-all duration-200 origin-center"
              style={{
                transform: open ? "rotate(-45deg) translateY(-4px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 420 : 0,
          background: "rgba(2,9,6,0.97)",
          borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: isActive(l.href) ? "#38bdf8" : "rgba(255,255,255,0.7)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={MAILTO_CTA}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold"
            style={{ background: GRADIENT, color: "#ffffff" }}
          >
            Start with a system review
          </a>
        </div>
      </div>
    </nav>
  );
}
