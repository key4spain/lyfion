// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — shared design tokens, primitives, Footer, and content data.
// Server-safe module (no "use client").
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import { type Locale, getContent, localizePath } from "./_i18n";
export { INTAKE_FORM_URL } from "./_constants";

// ─── Brand constants (reused from this project's design language) ─────────────

export const GRADIENT =
  "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 45%, #10b981 100%)";
export const HERO_BG =
  "radial-gradient(ellipse at 68% 28%, #0c3d5c 0%, #042018 42%, #020b06 100%)";
export const DARK_BG = "#030e08";
export const DARK_BG_ALT = "#020b06";
export const CARD_BG = "rgba(3,12,9,0.72)";
export const CARD_BORDER = "rgba(255,255,255,0.12)";
export const TEXT_BODY = "rgba(255,255,255,0.78)";
export const TEXT_MUTED = "rgba(255,255,255,0.52)";
export const TEXT_CARD_TITLE = "#ffffff";
export const FOG_BLUE = "rgba(14,165,233,0.088)";
export const FOG_GREEN = "rgba(16,185,129,0.078)";
export const FOG_DEEP = "rgba(8,40,64,0.48)";
export const FOG_MIST = "rgba(56,189,248,0.042)";
export const FOOTER_BG = `linear-gradient(180deg, ${DARK_BG_ALT} 0%, #031510 40%, ${DARK_BG_ALT} 100%)`;
export const SECTION_PAD = "py-20 md:py-28";
export const SECTION_PAD_COMPACT = "py-16 md:py-24";
export const BRAND_WORDMARK = "/brand/lyfion/svg/lyfion_wordmark_primary.svg";
export const BRAND_WORDMARK_DARK = "/brand/lyfion/svg/lyfion_wordmark_dark.svg";
export const BRAND_FAVICON = "/brand/lyfion/favicon/favicon.svg";
export const BRAND_ICON_512 = "/brand/lyfion/png/lyfion_icon_512.png";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lyfion.digital/",
  tiktok: "https://www.tiktok.com/@lyfion.digital",
} as const;

export const SOCIAL_SAME_AS = [
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.tiktok,
];

export const SECTION_FOG_BLUE = (base: string) => base;
export const SECTION_FOG_GREEN = (base: string) => base;
export const SECTION_FOG_DEEP = (base: string) => base;

export function sectionBg(tone: "a" | "b" | "deep" = "a"): string {
  const tones = {
    a: `linear-gradient(180deg, ${DARK_BG} 0%, #041a12 48%, ${DARK_BG} 100%)`,
    b: `linear-gradient(180deg, ${DARK_BG_ALT} 0%, #031510 52%, ${DARK_BG_ALT} 100%)`,
    deep: `linear-gradient(180deg, #020b06 0%, #082840 38%, ${DARK_BG} 100%)`,
  };
  return tones[tone];
}

export function FogBackdrop({
  variant = "blue",
}: {
  variant?: "blue" | "green" | "deep" | "dual";
}) {
  const layers: Record<string, string> = {
    blue: [
      `radial-gradient(ellipse 130% 95% at 100% 0%, ${FOG_BLUE} 0%, transparent 54%)`,
      `radial-gradient(ellipse 75% 60% at 72% 38%, ${FOG_MIST} 0%, transparent 50%)`,
    ].join(", "),
    green: [
      `radial-gradient(ellipse 130% 95% at 0% 100%, ${FOG_GREEN} 0%, transparent 54%)`,
      `radial-gradient(ellipse 70% 55% at 18% 72%, rgba(16,185,129,0.022) 0%, transparent 50%)`,
    ].join(", "),
    deep: [
      `radial-gradient(ellipse 115% 85% at 50% -12%, ${FOG_DEEP} 0%, transparent 58%)`,
      `radial-gradient(ellipse 85% 65% at 92% 85%, ${FOG_BLUE} 0%, transparent 52%)`,
      `radial-gradient(ellipse 85% 65% at 8% 15%, ${FOG_GREEN} 0%, transparent 52%)`,
    ].join(", "),
    dual: [
      `radial-gradient(ellipse 130% 95% at 100% 0%, ${FOG_BLUE} 0%, transparent 54%)`,
      `radial-gradient(ellipse 130% 95% at 0% 100%, ${FOG_GREEN} 0%, transparent 54%)`,
    ].join(", "),
  };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: layers[variant] }}
    />
  );
}

/** Soft lamp-style radial glow behind content (not over text). */
export function SpotlightBackdrop({
  position = "center",
}: {
  position?: "center" | "top";
}) {
  const y = position === "top" ? "28%" : "48%";
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: [
          `radial-gradient(ellipse 52% 42% at 50% ${y}, rgba(14,165,233,0.13) 0%, transparent 72%)`,
          `radial-gradient(ellipse 38% 32% at 50% ${y}, rgba(16,185,129,0.075) 0%, transparent 68%)`,
          `radial-gradient(ellipse 70% 50% at 50% ${y}, rgba(45,212,191,0.045) 0%, transparent 75%)`,
        ].join(", "),
      }}
    />
  );
}

export function LyfionWordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const scale = {
    sm: { main: "text-sm", suffix: "text-[9px]", tracking: "tracking-[0.22em]", gap: "ml-1" },
    md: { main: "text-lg", suffix: "text-[10px]", tracking: "tracking-[0.24em]", gap: "ml-1.5" },
    lg: { main: "text-xl", suffix: "text-[11px]", tracking: "tracking-[0.26em]", gap: "ml-2" },
  }[size];

  return (
    <span className={`inline-flex items-baseline select-none ${className}`}>
      <span
        className={`font-extrabold ${scale.main} ${scale.tracking}`}
        style={GRADIENT_TEXT}
      >
        LYFION
      </span>
      <span
        className={`font-mono font-medium ${scale.suffix} tracking-[0.3em] ${scale.gap}`}
        style={{ color: "rgba(148,163,184,0.78)" }}
      >
        .DIGITAL
      </span>
    </span>
  );
}

export const SUPPORT_EMAIL = "support@lyfion.digital";
export const DIRECT_EMAIL = "filip@lyfion.digital";

export const MAILTO_SUPPORT = `mailto:${SUPPORT_EMAIL}`;

export const MAILTO_DIRECT = `mailto:${DIRECT_EMAIL}`;

export const GRADIENT_TEXT: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// Route prefix — "" = root (promoted from /v1)
export const BASE = "";

// ─── Primitives ───────────────────────────────────────────────────────────────

export function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={className} style={GRADIENT_TEXT}>
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-4 h-px" style={{ background: GRADIENT }} />
      <span
        className="text-xs font-semibold tracking-[0.25em] uppercase"
        style={GRADIENT_TEXT}
      >
        {children}
      </span>
      <span className="w-4 h-px" style={{ background: GRADIENT }} />
    </div>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M7 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 flex-shrink-0"
    >
      <path
        d="M2.5 7.5l3 3 6-7"
        stroke="#10b981"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Roman-numeral index label — small, premium, teal/blue gradient accent.
const ROMAN = [
  "I", "II", "III", "IV", "V", "VI",
  "VII", "VIII", "IX", "X", "XI", "XII",
];

export function toRoman(n: number): string {
  return ROMAN[n - 1] ?? String(n);
}

export function RomanLabel({
  n,
  total,
  className = "",
}: {
  n: number;
  total?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-1 text-xs font-semibold uppercase tracking-[0.3em] ${className}`}
      style={GRADIENT_TEXT}
    >
      {toRoman(n)}
      {total != null && (
        <span className="tracking-[0.2em] opacity-50">/ {toRoman(total)}</span>
      )}
    </span>
  );
}

// Shared CTA button styles — renders <a> for mailto/external, <Link> for internal routes
export function PrimaryCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const cls =
    "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer";
  const sty = {
    background: GRADIENT,
    color: "#ffffff",
    boxShadow: "0 4px 24px rgba(14,165,233,0.3)",
  };
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        style={sty}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={sty}>
      {children}
      <Arrow />
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const cls =
    "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-white/10 cursor-pointer";
  const sty = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.82)",
  };
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        style={sty}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={sty}>
      {children}
    </Link>
  );
}

// Reusable page header band for sub-pages (clears the fixed nav).
export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: HERO_BG }}>
      <FogBackdrop variant="deep" />
      <SpotlightBackdrop position="top" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-36 pb-20 md:pt-44 md:pb-28">
        <SectionLabel>{label}</SectionLabel>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="text-base md:text-lg leading-relaxed mt-7 max-w-2xl"
            style={{ color: TEXT_BODY }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function FooterSignal({ locale }: { locale: Locale }) {
  const f = getContent(locale).footer;
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-mono tracking-wide"
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        color: TEXT_BODY,
      }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: "#10b981" }}
      />
      <span>{f.signalReview}</span>
      <span style={{ color: "#38bdf8" }}>→</span>
      <span>{f.signalBuild}</span>
      <span style={{ color: "#38bdf8" }}>→</span>
      <span>{f.signalProduction}</span>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 text-slate-400/55 border border-white/[0.06] bg-white/[0.02] hover:text-sky-400/85 hover:border-sky-500/25 hover:bg-sky-500/10"
    >
      {children}
    </a>
  );
}

export function FooterSocial() {
  return (
    <div className="flex items-center gap-2.5">
      <SocialLink href={SOCIAL_LINKS.instagram} label="Lyfion Digital on Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.25 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.25 6z" />
        </svg>
      </SocialLink>
      <SocialLink href={SOCIAL_LINKS.tiktok} label="Lyfion Digital on TikTok">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 3h3.2l.1 2.2a5.8 5.8 0 0 0 4.2 2V10a8.4 8.4 0 0 1-4.5-1.3v7.4a6.2 6.2 0 1 1-6.2-6.2c.3 0 .6 0 .9.1v3.1a3.1 3.1 0 1 0 2.2 3V3z" />
        </svg>
      </SocialLink>
    </div>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const f = getContent(locale).footer;
  const navItems = getContent(locale).nav.items;
  const entityCard = {
    background: CARD_BG,
    border: `1px solid ${CARD_BORDER}`,
  };
  const linkStyle = {
    color: "rgba(45,212,191,0.9)",
    textDecoration: "none" as const,
  };

  // Lead with the market-relevant entity: ES → S.L. (Barcelona) first.
  const llcCard = (
    <div className="rounded-xl px-4 py-4 w-full lg:max-w-[240px]" style={entityCard}>
      <div className="w-8 h-px mb-3" style={{ background: GRADIENT }} />
      <p className="text-xs font-semibold tracking-wide mb-2" style={{ color: TEXT_CARD_TITLE }}>
        {f.llcName}
      </p>
      <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
        {f.llcRole}
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        {f.llcOfficeLabel}
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        30 N Gould St Ste R
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        Sheridan, WY 82801
      </p>
      <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_MUTED }}>
        United States
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        {f.supportLabel}
      </p>
      <a href={MAILTO_SUPPORT} style={linkStyle} className="text-xs">
        {SUPPORT_EMAIL}
      </a>
    </div>
  );

  const slCard = (
    <div className="rounded-xl px-4 py-4 w-full lg:max-w-[240px] lg:ml-auto" style={entityCard}>
      <div className="w-8 h-px mb-3" style={{ background: GRADIENT }} />
      <p className="text-xs font-semibold tracking-wide mb-2" style={{ color: TEXT_CARD_TITLE }}>
        {f.slName}
      </p>
      <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
        {f.slRole}
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        {f.slAddressLabel}
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        Rambla Catalunya, 38
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        08007 Barcelona
      </p>
      <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_MUTED }}>
        Barcelona, Spain
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        {f.nifLabel}
      </p>
      <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
        B24818064
      </p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
        {f.contactLabel}
      </p>
      <a href={MAILTO_SUPPORT} style={linkStyle} className="text-xs">
        {SUPPORT_EMAIL}
      </a>
    </div>
  );

  const primaryCard = locale === "es" ? slCard : llcCard;
  const secondaryCard = locale === "es" ? llcCard : slCard;

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: FOOTER_BG,
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <FogBackdrop variant="blue" />
      <SpotlightBackdrop position="top" />
      <div className="relative z-10 max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-8 lg:gap-6 items-start">
          {/* Market-relevant entity first */}
          <div className="order-1">{primaryCard}</div>

          {/* Center — nav + signal (mobile order 3) */}
          <div className="order-3 lg:order-none flex flex-col items-center justify-center gap-4 lg:px-4 lg:min-w-[210px] lg:pt-1">
            <LyfionWordmark size="sm" className="inline-flex opacity-85" />
            <nav className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
              {navItems.map((l) => (
                <Link
                  key={l.key}
                  href={localizePath(l.href, locale)}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <FooterSignal locale={locale} />
            <FooterSocial />
          </div>

          {/* Secondary entity */}
          <div className="order-2">{secondaryCard}</div>
        </div>

        <p
          className="text-xs leading-relaxed mt-8 pt-6 text-center max-w-2xl mx-auto"
          style={{
            color: TEXT_MUTED,
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {f.tagline}
        </p>
        <p
          className="text-[11px] leading-relaxed mt-4 text-center"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          {f.rights}
        </p>
      </div>
    </footer>
  );
}
