"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GRADIENT, LyfionWordmark } from "./_shared";
import {
  type Locale,
  getContent,
  localizePath,
  mirrorPath,
  resolveHref,
} from "./_i18n";
import { persistLocale } from "./_locale-pref";

function LanguageToggle({
  locale,
  pathname,
  size = "desktop",
}: {
  locale: Locale;
  pathname: string;
  size?: "desktop" | "mobile";
}) {
  const c = getContent(locale);
  const base =
    size === "desktop"
      ? "text-xs font-semibold px-2 py-1 rounded-md transition-colors"
      : "text-sm font-semibold px-3 py-1.5 rounded-md transition-colors";

  const item = (target: Locale, label: string) => {
    const active = locale === target;
    return (
      <Link
        href={mirrorPath(pathname, target)}
        hrefLang={target}
        aria-current={active ? "true" : undefined}
        onClick={() => persistLocale(target)}
        className={base}
        style={{
          color: active ? "#38bdf8" : "rgba(255,255,255,0.55)",
          background: active ? "rgba(56,189,248,0.10)" : "transparent",
        }}
      >
        {target === "en" ? "EN" : "ES"}
      </Link>
    );
  };

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-lg p-0.5"
      role="group"
      aria-label={c.nav.languageLabel}
      style={{ border: "1px solid rgba(255,255,255,0.10)" }}
    >
      {item("en", "EN")}
      <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.18)" }}>
        |
      </span>
      {item("es", "ES")}
    </div>
  );
}

export default function NavBar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const c = getContent(locale);
  const items = c.nav.items;
  const ctaHref = resolveHref("/services#digital-refresh", locale);

  const isActive = (href: string) => {
    const localized = localizePath(href, locale);
    return localized === "/" || localized === "/es"
      ? pathname === localized
      : pathname.startsWith(localized);
  };

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
        <Link href={localizePath("/", locale)} className="flex items-center flex-shrink-0">
          <LyfionWordmark size="md" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {items.map((l) => (
            <Link
              key={l.key}
              href={localizePath(l.href, locale)}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive(l.href) ? "#38bdf8" : "rgba(255,255,255,0.6)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + language */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle locale={locale} pathname={pathname} />
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
            style={{ background: GRADIENT, color: "#ffffff" }}
          >
            {c.nav.cta}
          </Link>
        </div>

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
              style={{ transform: open ? "rotate(-45deg) translateY(-4px)" : "none" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 480 : 0,
          background: "rgba(2,9,6,0.97)",
          borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {items.map((l) => (
            <Link
              key={l.key}
              href={localizePath(l.href, locale)}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: isActive(l.href) ? "#38bdf8" : "rgba(255,255,255,0.7)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 mb-1 px-3">
            <LanguageToggle locale={locale} pathname={pathname} size="mobile" />
          </div>
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold"
            style={{ background: GRADIENT, color: "#ffffff" }}
          >
            {c.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
