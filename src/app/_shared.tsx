// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — shared design tokens, primitives, Footer, and content data.
// Server-safe module (no "use client").
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";

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

export const OFFER_PRICE = "from $499 / €429";

export const MAILTO_CTA =
  "mailto:support@lyfion.digital?subject=Lyfion.digital%20System%20Review%20Request&body=Hi%20Lyfion%20Digital%2C%0A%0AI%20would%20like%20to%20request%20a%20system%20review.%0A%0AProject%20/%20business%20name%3A%0ACurrent%20website%20or%20links%3A%0AWhat%20needs%20to%20be%20improved%3A%0ATools%20currently%20used%3A%0APriority%3A%0A%0AThank%20you.";

export const MAILTO_DIRECT =
  "mailto:filip@lyfion.digital?subject=Lyfion.digital%20Business%20Development%20Inquiry&body=Hi%20Lyfion%20Digital%2C%0A%0AI%20would%20like%20to%20discuss%20business%20development%20or%20European%20execution.%0A%0AName%20/%20company%3A%0AProject%20context%3A%0APriority%3A%0A%0AThank%20you.";

export const OFFER_DISCLAIMER =
  "From $499 / €429. Final scope, deliverables, timeline, taxes/VAT and payment terms are confirmed before work begins. No guaranteed business outcome, lead volume, ranking, automation result, or revenue result is implied.";

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
    "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90";
  const sty = {
    background: GRADIENT,
    color: "#ffffff",
    boxShadow: "0 4px 24px rgba(14,165,233,0.3)",
  };
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} style={sty}>
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
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-white/10"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.82)",
      }}
    >
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

export const NAV_ITEMS = [
  { label: "Home", href: BASE || "/" },
  { label: "Services", href: `${BASE}/services` },
  { label: "Process", href: `${BASE}/process` },
  { label: "Work", href: `${BASE}/work` },
  { label: "Contact", href: `${BASE}/contact` },
];

export function FooterSignal() {
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
      <span>Review</span>
      <span style={{ color: "#38bdf8" }}>→</span>
      <span>Build</span>
      <span style={{ color: "#38bdf8" }}>→</span>
      <span>Production</span>
    </div>
  );
}

export function Footer() {
  const entityCard = {
    background: CARD_BG,
    border: `1px solid ${CARD_BORDER}`,
  };
  const linkStyle = {
    color: "rgba(45,212,191,0.9)",
    textDecoration: "none" as const,
  };

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
          {/* Left — LYFION LLC (mobile order 1) */}
          <div
            className="order-1 rounded-xl px-4 py-4 w-full lg:max-w-[240px]"
            style={entityCard}
          >
            <div className="w-8 h-px mb-3" style={{ background: GRADIENT }} />
            <p
              className="text-xs font-semibold tracking-wide mb-2"
              style={{ color: TEXT_CARD_TITLE }}
            >
              LYFION LLC
            </p>
            <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
              Digital systems and automation operations
            </p>
            <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
              Principal Office:
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
              Support:
            </p>
            <a href={MAILTO_CTA} style={linkStyle} className="text-xs">
              {SUPPORT_EMAIL}
            </a>
          </div>

          {/* Center — nav + signal (mobile order 3) */}
          <div className="order-3 lg:order-none flex flex-col items-center justify-center gap-4 lg:px-4 lg:min-w-[210px] lg:pt-1">
            <LyfionWordmark size="sm" className="inline-flex opacity-85" />
            <nav className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
              {NAV_ITEMS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <FooterSignal />
          </div>

          {/* Right — LYFION S.L. (mobile order 2) */}
          <div
            className="order-2 rounded-xl px-4 py-4 w-full lg:max-w-[240px] lg:ml-auto"
            style={entityCard}
          >
            <div className="w-8 h-px mb-3" style={{ background: GRADIENT }} />
            <p
              className="text-xs font-semibold tracking-wide mb-2"
              style={{ color: TEXT_CARD_TITLE }}
            >
              LYFION S.L.
            </p>
            <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
              Business development and European execution
            </p>
            <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
              Dirección social:
            </p>
            <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
              Rbla Catalunya, 38
            </p>
            <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
              08007 Barcelona
            </p>
            <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_MUTED }}>
              Barcelona, Spain
            </p>
            <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
              NIF/CIF:
            </p>
            <p className="text-xs leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
              B24818064
            </p>
            <p className="text-xs leading-relaxed mb-1" style={{ color: TEXT_MUTED }}>
              Contact:
            </p>
            <a href={MAILTO_DIRECT} style={linkStyle} className="text-xs">
              {DIRECT_EMAIL}
            </a>
          </div>
        </div>

        <p
          className="text-xs leading-relaxed mt-8 pt-6 text-center max-w-2xl mx-auto"
          style={{
            color: TEXT_MUTED,
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          Practical systems for websites, intake, workflows, and AI-assisted
          production.
        </p>
        <p
          className="text-[11px] leading-relaxed mt-4 text-center"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          © 2026 Lyfion.digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Centralised content data ─────────────────────────────────────────────────

export interface ServiceContent {
  id: string;
  title: string;
  short: string;
  whoFor: string;
  problem: string;
  builds: string[];
  outcome: string;
}

export const SERVICES: ServiceContent[] = [
  {
    id: "business-os",
    title: "Business OS Setup",
    short:
      "Source-of-truth, project control, permissions, SOPs, and AI-ready delegation.",
    whoFor:
      "Founders and teams running several projects who keep losing track of decisions, versions, and ownership.",
    problem:
      "Work is scattered across chats, docs, and tools, and no one is fully sure what the current source of truth is.",
    builds: [
      "A single source-of-truth structure",
      "Project boards and ownership rules",
      "Permissions and access boundaries",
      "SOPs and repeatable checklists",
      "AI-ready delegation instructions",
    ],
    outcome:
      "A clearer operating base where the team can find, trust, and act on the right information.",
  },
  {
    id: "website",
    title: "Website / Landing System",
    short:
      "A clear public page, conversion path, CTA logic, basic SEO structure, and a controlled launch checklist.",
    whoFor:
      "Projects that need a credible public page and a clear path from visitor to next step.",
    problem:
      "A site exists but it does not explain the offer clearly or guide visitors toward action.",
    builds: [
      "Modern, scalable Next.js website or landing page",
      "Clear structure and messaging",
      "CTA logic and conversion path",
      "Basic SEO / metadata structure",
      "Controlled launch checklist",
    ],
    outcome:
      "A clean digital base that presents the business clearly and is ready for a controlled launch.",
  },
  {
    id: "crm",
    title: "CRM / Lead Intake System",
    short:
      "Forms, routing, status tracking, follow-up structure, and practical verification so leads do not disappear.",
    whoFor:
      "Businesses that collect leads, applications, client requests, or operational forms.",
    problem:
      "Forms collect data but nothing structured happens next, so leads stall or get lost.",
    builds: [
      "Intake forms and field structure",
      "Routing and assignment logic",
      "Lead status and pipeline structure",
      "Follow-up flow design",
      "Practical verification steps",
    ],
    outcome:
      "A practical intake structure where requests are captured, routed, and followed up consistently.",
  },
  {
    id: "automation",
    title: "Automation Workflow Plan",
    short:
      "Controlled routing, reporting, notifications, intake, and follow-up automation.",
    whoFor:
      "Teams doing repetitive manual steps who want automation only where the process is already clear.",
    problem:
      "Manual steps get forgotten or delayed, but adding automation blindly would just automate the chaos.",
    builds: [
      "Mapped current process",
      "Controlled routing and notifications",
      "Reporting and status updates",
      "Intake and follow-up automation plan",
      "Clear approval and fail-safe points",
    ],
    outcome:
      "A documented automation plan that reduces manual chasing without losing human control.",
  },
  {
    id: "ai-content",
    title: "AI Content Production System",
    short:
      "Repeatable AI-assisted image/video/content workflows with QA and approval rules.",
    whoFor:
      "Brands that want consistent AI-assisted content without quality or brand drift.",
    problem:
      "AI content is produced ad hoc, with inconsistent quality and no review before publishing.",
    builds: [
      "Prompt and template systems",
      "Output QA and brand-realism checks",
      "Content workflow structure",
      "Approval gates before publishing",
      "Asset organisation and handoff",
    ],
    outcome:
      "A repeatable content workflow with quality checks and approval steps built in.",
  },
  {
    id: "market-test",
    title: "Digital Market Test Pack",
    short:
      "A structured way to test an idea and gather evidence before bigger investment.",
    whoFor:
      "Founders who want evidence for an idea before committing serious time or money.",
    problem:
      "Big decisions are made on assumptions instead of structured, observable signals.",
    builds: [
      "Landing page or concept demo",
      "Clear offer framing",
      "Structured test setup",
      "Observation and feedback structure",
      "Findings and next-step recommendation",
    ],
    outcome:
      "A structured market test that produces practical evidence to guide the next decision.",
  },
];

export interface ProcessStep {
  title: string;
  summary: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Review",
    summary:
      "Understand the project, source material, current tools, risks, and desired outcome.",
    detail:
      "We start by looking at what already exists: files, tools, forms, sites, and goals. Then we propose the next step.",
  },
  {
    title: "Structure",
    summary:
      "Define source of truth, service logic, user flow, CTA, forms, CRM, and approval boundaries.",
    detail:
      "We define the structure and approval boundaries first, so the build has a clear backbone instead of guesswork.",
  },
  {
    title: "Build",
    summary:
      "Create the website, workflow, CRM and intake structure, content system, or operating layer.",
    detail:
      "We build in scoped, reviewable steps, keeping each change controlled and easy to check.",
  },
  {
    title: "QA",
    summary:
      "Check claims, routing, mobile view, form logic, proof, data risk, and launch readiness.",
    detail:
      "We verify claims, data exposure, mobile behaviour, and routing before anything is considered ready.",
  },
  {
    title: "Launch / Handoff",
    summary: "Only after approval. No uncontrolled publishing.",
    detail:
      "Nothing goes public without explicit approval. Launch and handoff happen on your sign-off, not automatically.",
  },
  {
    title: "Iterate",
    summary: "Measure response, improve the offer, and build the next layer.",
    detail:
      "After launch we observe the response, refine the offer, and plan the next controlled layer.",
  },
];

export interface WorkCategory {
  title: string;
  desc: string;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    title: "Internal operating systems",
    desc: "Source-of-truth files, project boards, permission rules, agent-ready instructions, and execution structures for complex business ecosystems.",
  },
  {
    title: "Websites and landing systems",
    desc: "Modern Next.js websites and landing pages designed around structure, clarity, CTA logic, and future scalability.",
  },
  {
    title: "CRM / lead intake workflows",
    desc: "Intake forms, routing logic, lead status structures, follow-up flows, and practical verification systems.",
  },
  {
    title: "AI production workflows",
    desc: "Prompt systems, output QA, brand realism checks, content workflow structures, and approval gates before publishing.",
  },
  {
    title: "Internal dashboard logic",
    desc: "Internal operational dashboard logic for workflow structure, intake thinking, and process control. No private data shown.",
  },
];
