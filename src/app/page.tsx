"use client";

import { useState, useEffect } from "react";

// ─── Brand constants ──────────────────────────────────────────────────────────

const GRADIENT = "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 45%, #10b981 100%)";
const HERO_BG = "radial-gradient(ellipse at 70% 40%, #082840 0%, #031a10 45%, #020b06 100%)";
const DARK_BG = "#030e08";
const DARK_BG_ALT = "#020b06";

// ─── Shared primitives ────────────────────────────────────────────────────────

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{
        background: GRADIENT,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function LyfionLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sz = {
    sm: "text-xl tracking-[0.32em]",
    md: "text-2xl tracking-[0.32em]",
    lg: "text-6xl md:text-7xl tracking-[0.15em]",
  };
  return (
    <GradientText className={`font-extrabold ${sz[size]} select-none`}>
      LYFION
    </GradientText>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div
        className="w-4 h-px"
        style={{ background: GRADIENT }}
      />
      <span
        className="text-xs font-semibold tracking-[0.25em] uppercase"
        style={{
          background: GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
      </span>
      <div
        className="w-4 h-px"
        style={{ background: GRADIENT }}
      />
    </div>
  );
}

function LiveDot() {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{
        background: "#10b981",
        boxShadow: "0 0 0 0 rgba(16,185,129,0.4)",
        animation: "dotPulse 2s ease-in-out infinite",
      }}
    />
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "References", href: "#references" },
  { label: "AI Guide", href: "#ai-guide" },
  { label: "Affiliates", href: "#affiliates" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        background: solid ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "blur(16px)" : "none",
        boxShadow: solid ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex-shrink-0">
          <LyfionLogo size="sm" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: solid ? "#374151" : "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = solid ? "#111827" : "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = solid ? "#374151" : "rgba(255,255,255,0.7)";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md"
          style={{ color: solid ? "#374151" : "rgba(255,255,255,0.8)" }}
          aria-label="Toggle menu"
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
        style={{
          overflow: "hidden",
          maxHeight: open ? 400 : 0,
          transition: "max-height 0.3s ease",
          background: "rgba(255,255,255,0.97)",
          borderTop: open ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Hero visual (CSS-only abstract) ─────────────────────────────────────────

function HeroVisual() {
  return (
    <div
      className="relative flex items-center justify-center animate-fade-in"
      style={{ minHeight: 460 }}
    >
      {/* Outer ambient orb */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.16) 0%, rgba(16,185,129,0.08) 55%, transparent 75%)",
          filter: "blur(48px)",
          animation: "pulseGlow 7s ease-in-out infinite",
        }}
      />

      {/* Mid orb */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)",
          filter: "blur(24px)",
          animation: "pulseGlow 5s ease-in-out infinite reverse",
        }}
      />

      {/* Orbital ring 1 */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(14,165,233,0.13)",
          animation: "spinSlow 32s linear infinite",
        }}
      >
        {/* Dot on ring */}
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#0ea5e9",
            boxShadow: "0 0 10px 3px rgba(14,165,233,0.55)",
            top: "50%",
            left: -4,
            transform: "translateY(-50%)",
          }}
        />
      </div>

      {/* Orbital ring 2 */}
      <div
        style={{
          position: "absolute",
          width: 310,
          height: 310,
          borderRadius: "50%",
          border: "1px dashed rgba(16,185,129,0.14)",
          animation: "spinReverse 22s linear infinite",
        }}
      >
        {/* Dot on ring */}
        <div
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#10b981",
            boxShadow: "0 0 8px 3px rgba(16,185,129,0.55)",
            bottom: -3,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Outer thin ring */}
      <div
        style={{
          position: "absolute",
          width: 530,
          height: 530,
          borderRadius: "50%",
          border: "1px solid rgba(14,165,233,0.05)",
          animation: "spinSlow 60s linear infinite",
        }}
      />

      {/* Horizontal energy line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          top: "38%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.2) 30%, rgba(16,185,129,0.2) 70%, transparent 100%)",
        }}
      />
      {/* Diagonal energy line */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          height: 1,
          top: "62%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.12) 50%, transparent 100%)",
          transform: "rotate(-3deg)",
        }}
      />

      {/* Glass panel — floating */}
      <div
        className="relative z-10 animate-float"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "28px 28px",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          minWidth: 290,
          maxWidth: 330,
        }}
      >
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-5">
          <LiveDot />
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "rgba(52,211,153,0.7)" }}
          >
            Digital Ecosystem · Active
          </span>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            "Web Development",
            "AI Systems",
            "Brand Infrastructure",
            "Business Growth",
            "Media Platforms",
            "Partner Ventures",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "7px 10px",
                color: "rgba(255,255,255,0.55)",
                fontSize: 11,
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(14,165,233,0.6)" }}
          >
            lyfion.digital
          </span>
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © 2026
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: HERO_BG,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top noise / texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(16,185,129,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center py-16 md:py-24">
        {/* Left — text */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <LiveDot />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase font-mono"
              style={{ color: "rgba(56,189,248,0.7)" }}
            >
              LYFION.DIGITAL · 2026
            </span>
          </div>

          {/* Logo headline */}
          <div className="mb-6 animate-fade-in-up">
            <LyfionLogo size="lg" />
          </div>

          {/* Subheadline */}
          <h2
            className="text-2xl md:text-3xl font-light leading-snug mb-6 animate-fade-in-up-delay-1"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Life, technology and business growth —{" "}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              built together.
            </span>
          </h2>

          {/* Body paragraph */}
          <p
            className="text-base leading-relaxed mb-10 max-w-md animate-fade-in-up-delay-2"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            A premium digital ecosystem connecting web development, AI
            workflows, brand infrastructure, business growth and real-world
            ventures across multiple markets.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: GRADIENT,
                color: "#ffffff",
                boxShadow: "0 4px 24px rgba(14,165,233,0.3)",
              }}
            >
              Explore ecosystem
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#references"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
              }}
            >
              View references
            </a>

            <a
              href="#ai-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
              }}
            >
              AI guide coming soon ↗
            </a>
          </div>
        </div>

        {/* Right — abstract visual */}
        <div className="flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, transparent, #ffffff)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

// ─── Ecosystem section ────────────────────────────────────────────────────────

const ECOSYSTEM_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6l4-4 4 4M8 2v14M14 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 18h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Development",
    desc: "Full-stack digital experiences built for performance, clarity and long-term growth.",
    color: "#0ea5e9",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.93 4.93l2.12 2.12M14.95 14.95l2.12 2.12M4.93 17.07l2.12-2.12M14.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "AI Systems",
    desc: "Intelligent workflows, automation, synthetic content and operational AI infrastructure.",
    color: "#38bdf8",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 15l9 5 9-5M2 11l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Brand Infrastructure",
    desc: "Coherent visual identity, messaging systems and digital brand architecture.",
    color: "#10b981",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-8 4 4 3-6 5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Business Growth",
    desc: "Strategy, partnerships, market positioning and revenue infrastructure for real ventures.",
    color: "#34d399",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9l5 2.5L9 14V9z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    title: "Media Platforms",
    desc: "Multilingual media channels, educational content and audience-driven publishing.",
    color: "#0ea5e9",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.93 4.93l1.41 1.41M15.66 15.66l1.41 1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Partner Ventures",
    desc: "Real-world partnerships across mobility, wellness, real estate and service sectors.",
    color: "#10b981",
  },
];

function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Ecosystem</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            A living digital ecosystem
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Lyfion connects projects, brands, tools, people and digital systems
            into one growth-oriented structure. From media channels and AI
            infrastructure to real estate, mobility, wellness, rentals and
            business development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECOSYSTEM_CARDS.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-2xl p-6 border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/80"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${card.color}12`,
                  color: card.color,
                }}
              >
                {card.icon}
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.desc}
              </p>

              {/* Accent line on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}40, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── References section ───────────────────────────────────────────────────────

const ECOSYSTEM_PROJECTS = [
  {
    name: "El Código Patrimonio",
    category: "Business media / Investment education",
    desc: "A Spanish-language media brand focused on business, patrimony, investment thinking, personal growth and market analysis.",
    tag: "Coming soon" as string | null,
    hue: "#0ea5e9",
    link: "https://elcodigopatrimonio.com",
    linkSoon: true,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Lo Que Nadie Te Dice",
    category: "Media / Public conversation",
    desc: "A Spanish-language media channel focused on hidden truths, consumer topics, society, public conversation and stories that deserve attention.",
    tag: "Coming soon" as string | null,
    hue: "#8b5cf6",
    link: "https://loquenadietedice.es",
    linkSoon: true,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "LYFION World AI",
    category: "AI models / Brand ambassadors",
    desc: "An AI model and digital ambassador direction for creating exclusive AI faces that can represent, promote and sell for one brand at a time. Each model is intended to be unique inside the LYFION ecosystem and not reused for competing brands.",
    tag: "Coming soon" as string | null,
    hue: "#38bdf8",
    link: undefined as string | undefined,
    linkSoon: false,
    note: "Protection and usage rules will be reviewed before public launch.",
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Ready Rent",
    category: "Mobility / Premium rentals",
    desc: "A rental and mobility-related project connected to premium service, transport and future digital infrastructure.",
    tag: null as string | null,
    hue: "#f59e0b",
    link: "https://readyrent.rs",
    linkSoon: false,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "SkyLens Enterprise",
    category: "Creative production / Digital marketing",
    desc: "A creative and digital marketing direction focused on media production, visual content, brand visibility and growth.",
    tag: null as string | null,
    hue: "#f97316",
    link: "https://skylens-enterprise.rs",
    linkSoon: false,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Key4Spain",
    category: "Spain advisory / Real estate / Relocation",
    desc: "A Spain-focused advisory brand for international clients interested in property, relocation, investment and practical support.",
    tag: null as string | null,
    hue: "#0d9488",
    link: "https://key4spain.com",
    linkSoon: false,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Keys4Spain",
    category: "Legal-administrative coordination",
    desc: "A legal-administrative support direction connected with licensed professionals for documentation, NIE, residence and institutional processes in Spain.",
    tag: null as string | null,
    hue: "#64748b",
    link: "https://keys4spain.com",
    linkSoon: false,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Key4SpainGroup",
    category: "Spain-focused advisory ecosystem",
    desc: "The umbrella ecosystem connecting property, relocation, investment, legal-administrative coordination and trusted local support in Spain.",
    tag: null as string | null,
    hue: "#059669",
    link: undefined as string | undefined,
    linkSoon: false,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Great App",
    category: "Mobility / Courier / P2P platform concept",
    desc: "A future mobility, courier and P2P app platform direction connected with electric mobility, fleet operations, peer-to-peer services and app-based local logistics.",
    tag: "Launch date: 11.11.2026" as string | null,
    hue: "#eab308",
    link: undefined as string | undefined,
    linkSoon: false,
    note: undefined as string | undefined,
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
  {
    name: "Veterans Europe Gateway",
    category: "Veteran pathways / Spain-first Europe gateway",
    desc: "An independent Spain-first platform helping U.S. veterans and military-connected families explore education, GI Bill pathways, pilot training, relocation, property, business and life opportunities in Europe.",
    tag: "Independent platform" as string | null,
    hue: "#2563eb",
    link: "https://veterans-europe-gateway.com/",
    linkSoon: false,
    note: "Not affiliated with the U.S. Department of Veterans Affairs, the U.S. government or any official military agency.",
    premium: false,
    highlight: undefined as { label: string; sub: string } | undefined,
  },
];

const VSP_CARDS = [
  {
    name: "Biomelem",
    category: "Family business / Cosmetic products / Full-stack store",
    badge: "Very Special Product",
    hue: "#10b981",
    desc: "A family business direction focused on cosmetic and natural products, developed as a full-stack digital store with a premium product ecosystem.",
    highlight: "Sampion product line",
    sub: "A product direction connected with sports spirit, healthy values, family identity and premium positioning.",
    link: "https://biomelem.rs",
    future: undefined as string | undefined,
  },
  {
    name: "VSP.rs",
    category: "Premium product identity / Quality standard",
    badge: "VSP",
    hue: "#b45309",
    desc: "VSP represents a premium product identity built around the idea of the best healthy, value-driven and quality-led standard — from family values to product excellence.",
    highlight: undefined as string | undefined,
    sub: "Designed to symbolize a higher product benchmark inside the wider ecosystem. VSP is a brand and product identity direction, not a legal certification body or official health certification.",
    link: "https://vsp.rs",
    future: undefined as string | undefined,
  },
  {
    name: "Sampion",
    category: "Sports media / Podcast / Brand channel",
    badge: "Sports spirit",
    hue: "#dc2626",
    desc: "A sports-focused media and podcast direction built around sports news, public conversation, athlete stories and strong brand energy.",
    highlight: undefined as string | undefined,
    sub: "Designed as a future sports-facing communication channel connected to the wider Biomelem and product ecosystem.",
    link: undefined as string | undefined,
    future: "Long-term positioning may include regional sports culture and selected international club directions.",
  },
];

function ReferencesSection() {
  return (
    <section
      id="references"
      className="py-24 md:py-32"
      style={{ background: "#f8fafb" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <SectionLabel>Ecosystem</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selected ecosystem projects
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Real ventures, media brands, operating projects and future directions connected within the LYFION digital ecosystem.
          </p>
        </div>

        {/* Ecosystem Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {ECOSYSTEM_PROJECTS.map((ref) => (
            <div
              key={ref.name}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 flex flex-col"
            >
              {/* Tag badge */}
              {ref.tag && (
                <div
                  className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${ref.hue}14`,
                    color: ref.hue,
                    border: `1px solid ${ref.hue}22`,
                  }}
                >
                  {ref.tag}
                </div>
              )}

              {/* Color bar */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ background: `linear-gradient(90deg, ${ref.hue}, ${ref.hue}60)` }}
              />

              <h3 className="text-base font-bold text-gray-900 mb-1 pr-20">
                {ref.name}
              </h3>

              {/* Category */}
              <div className="text-xs font-medium mb-3" style={{ color: ref.hue }}>
                {ref.category}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {ref.desc}
              </p>

              {/* Additional note */}
              {ref.note && (
                <p className="text-xs text-gray-400 leading-relaxed mt-2 italic">
                  {ref.note}
                </p>
              )}

              {/* Domain link */}
              {ref.link && (
                <div className="mt-4">
                  {ref.linkSoon ? (
                    <span className="text-xs text-gray-400 font-mono">
                      {ref.link.replace("https://", "")}
                    </span>
                  ) : (
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono transition-colors duration-200 hover:underline"
                      style={{ color: ref.hue }}
                    >
                      {ref.link.replace("https://", "").replace(/\/$/, "")}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Very Special Product subsection ── */}
        <div className="border-t border-gray-200 pt-14">
          <div className="text-center mb-10">
            <SectionLabel>Very Special Product</SectionLabel>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Very Special Product
            </h3>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              A product-focused direction connected to family values, quality, healthy living, sports spirit and premium brand positioning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VSP_CARDS.map((card) => (
              <div
                key={card.name}
                className="relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 flex flex-col"
              >
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 self-start"
                  style={{
                    background: `${card.hue}14`,
                    color: card.hue,
                    border: `1px solid ${card.hue}22`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: card.hue }} />
                  {card.badge}
                </div>

                {/* Color bar */}
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ background: `linear-gradient(90deg, ${card.hue}, ${card.hue}60)` }}
                />

                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {card.name}
                </h3>

                <div className="text-xs font-medium mb-3" style={{ color: card.hue }}>
                  {card.category}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {card.desc}
                </p>

                {/* Highlighted product line */}
                {card.highlight && (
                  <div
                    className="mt-4 rounded-xl px-4 py-3"
                    style={{ background: `${card.hue}0d`, border: `1px solid ${card.hue}20` }}
                  >
                    <div className="text-sm font-bold" style={{ color: card.hue }}>
                      {card.highlight}
                    </div>
                    {card.sub && (
                      <div className="text-xs text-gray-500 mt-0.5">{card.sub}</div>
                    )}
                  </div>
                )}

                {/* Supporting text (when no highlight block) */}
                {!card.highlight && card.sub && (
                  <p className="text-xs text-gray-400 leading-relaxed mt-3 italic">
                    {card.sub}
                  </p>
                )}

                {/* Future direction note */}
                {card.future && (
                  <p className="text-xs text-gray-400 leading-relaxed mt-2 italic">
                    {card.future}
                  </p>
                )}

                {/* Link */}
                {card.link && (
                  <div className="mt-4">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono transition-colors duration-200 hover:underline"
                      style={{ color: card.hue }}
                    >
                      {card.link.replace("https://", "").replace(/\/$/, "")}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Tools we recommend section ──────────────────────────────────────────────

type ToolCard = {
  name: string;
  category: string;
  badge: string;
  hue: string;
  desc: string;
  notes?: string[];
  note?: string;
  caution?: string;
  link?: string;
  linkLabel?: string;
  disclosure?: string;
};

const FREE_TOOLS: ToolCard[] = [
  {
    name: "sarena.ai",
    category: "Free AI tool / Learning and testing",
    badge: "Free tool concept",
    hue: "#22c55e",
    desc: "A free AI learning and testing direction for people entering AI, exploring prompts, comparing use cases and building confidence with practical workflows.",
    note: "Link coming later.",
  },
  {
    name: "sarenadesigne.ai",
    category: "Free design AI / Creative workflows",
    badge: "Free design concept",
    hue: "#8b5cf6",
    desc: "A free design-focused AI direction for creators, small businesses and beginners who want to explore visual AI, creative prompts and design workflows.",
    note: "Link coming later.",
  },
];

const PAID_TOOLS: ToolCard[] = [
  {
    name: "AI Helper",
    category: "AI operations / Business helper system",
    badge: "Recommended AI tool",
    hue: "#0ea5e9",
    desc: "An AI helper system positioned as 12 specialized workers inside one subscription, designed to support daily business operations, content, social media, planning and execution workflows.",
    notes: [
      "Best used with a structured setup period: 7–21 days, around 4 hours per day, plus up to 2 hours of daily operational work after setup.",
      "LYFION may provide a tutorial book and guided setup process for configuring the tool properly.",
      "Discount or guided onboarding may be added later only if officially approved.",
    ],
  },
  {
    name: "MCloud",
    category: "Cloud / Hosting / Serbian infrastructure",
    badge: "Recommended infrastructure",
    hue: "#6366f1",
    desc: "A recommended hosting and cloud infrastructure option for Serbian domain projects, local clients and scalable online presence.",
    note: "Link coming later.",
  },
  {
    name: "Hostinger",
    category: "Premium hosting / Website infrastructure",
    badge: "Premium option",
    hue: "#f59e0b",
    desc: "A premium hosting and website infrastructure option for clients who want a stronger managed setup, higher service level and more complete support. It is not the cheapest path, but can fit projects where quality and reliability matter more than minimum cost.",
    link: "https://www.hostinger.com?REFERRALCODE=E4DKEY4SPV0I",
    linkLabel: "Visit Hostinger",
    disclosure: "Affiliate link: LYFION may earn a commission if you purchase through this link, at no extra cost to you.",
  },
  {
    name: "OpenClaw",
    category: "Open-source AI agent / Advanced automation",
    badge: "Advanced option",
    hue: "#ef4444",
    desc: "An open-source AI assistant and automation direction for advanced users who want more control over AI agents, background tasks and self-hosted workflows.",
    caution: "Requires careful setup, permissions review and security awareness before use. Not suitable for beginners without technical guidance.",
  },
  {
    name: "HeyGen",
    category: "AI video / Avatar production",
    badge: "Content production",
    hue: "#f97316",
    desc: "An AI video and avatar production tool that can support multilingual presentations, explainers, sales videos and content workflows when used with clear scripts and responsible brand guidelines.",
  },
  {
    name: "ElevenLabs",
    category: "AI voice / Audio production",
    badge: "Voice production",
    hue: "#a855f7",
    desc: "An AI voice and audio tool direction for narration, multilingual voiceovers, training material and content production.",
    caution: "Voice usage should respect consent, rights and platform rules.",
  },
  {
    name: "Kling",
    category: "AI video generation / Creative production",
    badge: "Video generation",
    hue: "#ec4899",
    desc: "An AI video generation direction for creative experiments, campaign visuals and short-form production workflows.",
  },
  {
    name: "Hexus / tool to confirm",
    category: "AI presentation / Content system",
    badge: "To confirm",
    hue: "#94a3b8",
    desc: "A potential AI content or presentation tool to review before adding as a formal recommendation.",
    note: "Exact product name and fit are not yet verified. Listed for internal review only.",
  },
];

function ToolCard({ tool }: { tool: ToolCard }) {
  return (
    <div className="relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 flex flex-col">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 self-start"
        style={{
          background: `${tool.hue}14`,
          color: tool.hue,
          border: `1px solid ${tool.hue}22`,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tool.hue }} />
        {tool.badge}
      </div>

      {/* Color bar */}
      <div
        className="w-8 h-1 rounded-full mb-4"
        style={{ background: `linear-gradient(90deg, ${tool.hue}, ${tool.hue}60)` }}
      />

      <h3 className="text-base font-bold text-gray-900 mb-1">{tool.name}</h3>

      <div className="text-xs font-medium mb-3" style={{ color: tool.hue }}>
        {tool.category}
      </div>

      <p className="text-sm text-gray-500 leading-relaxed flex-1">{tool.desc}</p>

      {tool.notes && tool.notes.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {tool.notes.map((n, i) => (
            <li key={i} className="text-xs text-gray-400 leading-relaxed flex gap-1.5">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-gray-300" />
              {n}
            </li>
          ))}
        </ul>
      )}

      {tool.caution && (
        <div
          className="mt-4 rounded-xl px-3 py-2.5 flex gap-2"
          style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
        >
          <span className="text-xs text-red-500 leading-relaxed">{tool.caution}</span>
        </div>
      )}

      {tool.note && (
        <p className="text-xs text-gray-400 leading-relaxed mt-3 italic">{tool.note}</p>
      )}

      {tool.disclosure && (
        <p className="text-xs text-gray-400 leading-relaxed mt-3 italic border-t border-gray-100 pt-3">
          {tool.disclosure}
        </p>
      )}

      {tool.link && (
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity duration-200 hover:opacity-70 self-start"
          style={{ color: tool.hue }}
        >
          {tool.linkLabel ?? "Learn more"}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1.5 6h9M7 2.5l3.5 3.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
}

function ToolsSection() {
  return (
    <section id="affiliates" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Tools we recommend</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools we recommend
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Selected free and paid tools we may recommend for AI learning, business workflows, automation, hosting, content production and digital infrastructure. Recommendations are based on practical fit, not hype.
          </p>
        </div>

        {/* Group A — Free / learning tools */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              Free / learning tools
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {FREE_TOOLS.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>

        {/* Group B — Paid / professional tools */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              Paid / professional tools
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PAID_TOOLS.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-10 max-w-2xl mx-auto leading-relaxed">
          Recommendations are based on practical fit and may change over time. Some links may be affiliate or partner links. LYFION does not claim official partnership unless explicitly stated. No tool guarantees business results, AI rankings, revenue or automation success.
        </p>

      </div>
    </section>
  );
}

// ─── AI Guide section ─────────────────────────────────────────────────────────

const AI_GUIDE_CARDS = [
  {
    title: "AI for entrepreneurs",
    desc: "Tools, frameworks and systems for business founders operating in modern markets.",
  },
  {
    title: "AI for content systems",
    desc: "Workflows for media production, publishing, automation and multilingual content.",
  },
  {
    title: "AI for automation",
    desc: "Practical implementation of task automation across business operations.",
  },
  {
    title: "AI for business operations",
    desc: "Applying AI in real daily business contexts — from logistics to customer flows.",
  },
  {
    title: "AI for multilingual growth",
    desc: "Scaling presence and communication across languages, cultures and markets.",
  },
  {
    title: "Responsible AI workflows",
    desc: "Ethical use, compliance awareness and sustainable AI integration principles.",
  },
];

const LANGUAGES = [
  "English",
  "Spanish",
  "Turkish",
  "German",
  "Russian",
  "Italian",
  "French",
  "Arabic",
  "Serbian",
  "Scandinavian languages",
  "and more",
];

function AIGuideSection() {
  return (
    <section
      id="ai-guide"
      className="py-24 md:py-32"
      style={{ background: DARK_BG }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>AI Guide</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#ffffff" }}>
            AI Guide for the world
          </h2>
          <p
            className="text-xl md:text-2xl font-light mb-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            An AI handbook for global builders.
          </p>
          <p
            className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Lyfion is preparing a practical AI guide designed for entrepreneurs,
            creators, operators and teams in multiple world languages. The goal
            is to explain tools, workflows, automation, content systems,
            business use cases and responsible AI implementation in a clear and
            useful way.
          </p>

          {/* Language pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {LANGUAGES.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.18)",
                  color: "rgba(56,189,248,0.8)",
                }}
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Coming soon badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-2"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <LiveDot />
            <span
              className="text-xs font-mono tracking-wider"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              In preparation · Launching gradually
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_GUIDE_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="text-xs font-mono mb-3"
                style={{ color: "rgba(14,165,233,0.5)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
                {card.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Coming Soon section ──────────────────────────────────────────────────────

function ComingSoonSection() {
  return (
    <section
      id="coming-soon"
      className="py-24 md:py-32"
      style={{ background: DARK_BG_ALT }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Now entering the market</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Pilot direction
          </h2>
        </div>

        {/* Feature card */}
        <div className="max-w-xl mx-auto mb-8">
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(14,165,233,0.18)",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 80% 20%, rgba(14,165,233,0.1) 0%, rgba(16,185,129,0.05) 60%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(14,165,233,0.14)",
                  border: "1px solid rgba(14,165,233,0.28)",
                  color: "#38bdf8",
                }}
              >
                Pilot version live
              </span>
            </div>

            {/* Title — linked */}
            <a
              href="https://lyfion.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-2xl font-bold mb-4 hover:opacity-80 transition-opacity duration-200"
              style={{
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              lyfion.ai
            </a>

            {/* Primary description */}
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              LYFION.AI is the pilot software direction for AI entity trust,
              visibility audits, canonical business profiles, structured data
              workflows, prompt monitoring and digital evidence records.
            </p>

            {/* Secondary paragraph */}
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.32)" }}
            >
              The pilot version is already connected to the LYFION direction. We
              are continuing the build while gradually merging the digital
              ecosystem, client workflows and AI trust infrastructure into one
              clearer product path.
            </p>

            {/* Feature list */}
            <div
              className="rounded-xl px-5 py-4 mb-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <ul className="space-y-2">
                {[
                  "AI visibility audits",
                  "Canonical entity profiles",
                  "JSON-LD / Schema.org workflows",
                  "AI prompt monitoring",
                  "Proof-of-existence records",
                  "Pilot workflow validation",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#38bdf8" }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="https://lyfion.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#38bdf8" }}
            >
              Visit lyfion.ai
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-sm max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          LYFION.DIGITAL remains the bridge for ecosystem projects, references
          and recommended tools. LYFION.AI is the pilot AI trust and visibility
          software direction, now entering the market while the platform
          continues to evolve.
        </p>
      </div>
    </section>
  );
}

// ─── Contact section ──────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-36"
      style={{
        background: `radial-gradient(ellipse at 30% 60%, #082840 0%, ${DARK_BG} 60%)`,
      }}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <SectionLabel>Contact</SectionLabel>

        <h2
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: "#ffffff" }}
        >
          Let&apos;s build{" "}
          <GradientText className="font-bold">what grows.</GradientText>
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Lyfion is open to selected digital projects, partner ventures, web
          development, AI workflows, brand infrastructure and growth-focused
          collaborations.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:contact@lyf-ion.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: GRADIENT,
              color: "#ffffff",
              boxShadow: "0 4px 24px rgba(14,165,233,0.28)",
            }}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#coming-soon"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
            }}
          >
            Coming soon
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{ background: "#020906", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="text-center md:text-left">
          <div className="mb-2">
            <LyfionLogo size="sm" />
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Life, energy, technology and growth.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-5 justify-center">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Sub-footer */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          Lyfion © 2026
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
          Built as part of the Lyfion ecosystem.
        </span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <EcosystemSection />
        <ReferencesSection />
        <ToolsSection />
        <AIGuideSection />
        <ComingSoonSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
