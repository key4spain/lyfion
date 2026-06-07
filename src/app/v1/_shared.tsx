// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — V1 staged mini-site · shared design + data
//
// Server-safe module (no "use client"). Holds the reused design tokens,
// presentational primitives, the Footer, and the centralised content data so
// the homepage previews and the detail pages stay consistent.
//
// Source of truth: LYFION_DIGITAL_SITE_IMPLEMENTATION_PROMPT_v3.md
// Mode: CONTROLLED / NO DEPLOY. No forms, CRM, analytics, payments connected.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";

// ─── Brand constants (reused from this project's design language) ─────────────

export const GRADIENT =
  "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 45%, #10b981 100%)";
export const HERO_BG =
  "radial-gradient(ellipse at 70% 35%, #082840 0%, #031a10 45%, #020b06 100%)";
export const DARK_BG = "#030e08";
export const DARK_BG_ALT = "#020b06";
export const CARD_BG = "rgba(255,255,255,0.04)";
export const CARD_BORDER = "rgba(255,255,255,0.08)";

export const GRADIENT_TEXT: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// Route prefix — change to "" when promoting /v1 to homepage
export const BASE = "/v1";

export const MAILTO_CTA =
  "mailto:filip@lyfion.digital?subject=Lyfion.digital%20System%20Review%20Request&body=Hi%20Lyfion%20Digital%2C%0A%0AI%20would%20like%20to%20request%20a%20system%20review.%0A%0AProject%20/%20business%20name%3A%0ACurrent%20website%20or%20links%3A%0AWhat%20needs%20to%20be%20improved%3A%0ATools%20currently%20used%3A%0APriority%3A%0A%0AThank%20you.";

export const OFFER_DISCLAIMER =
  "From $499. Final scope, deliverables, timeline, taxes/VAT and payment terms are confirmed before work begins. No guaranteed business outcome, lead volume, ranking, automation result, or revenue result is implied.";

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
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 18% 90%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-36 pb-20 md:pt-44 md:pb-28">
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
            style={{ color: "rgba(255,255,255,0.6)" }}
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
  { label: "Home", href: BASE },
  { label: "Services", href: `${BASE}/services` },
  { label: "Process", href: `${BASE}/process` },
  { label: "Work", href: `${BASE}/work` },
  { label: "Contact", href: `${BASE}/contact` },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#020906",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href={BASE} className="flex items-center gap-2">
            <GradientText className="font-extrabold text-base tracking-[0.28em] select-none">
              LYFION
            </GradientText>
            <span
              className="text-[10px] font-mono tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              .DIGITAL
            </span>
          </Link>

          <nav className="flex flex-wrap gap-5 justify-center">
            {NAV_ITEMS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Company signal block */}
        <div
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div
            className="rounded-xl px-5 py-4 w-full md:max-w-md"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="w-8 h-px mb-3" style={{ background: GRADIENT }} />
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#2dd4bf" }}
              />
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                LYFION LLC
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                · Registered in Wyoming, United States
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Principal Office: 30 N Gould St Ste R, Sheridan, WY 82801, USA
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Contact:{" "}
              <a
                href={MAILTO_CTA}
                style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}
              >
                filip@lyfion.digital
              </a>
            </p>
          </div>
        </div>

        <p
          className="text-xs leading-relaxed mt-8 pt-6 max-w-3xl"
          style={{
            color: "rgba(255,255,255,0.3)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          Practical digital systems, websites, workflows, and AI-assisted
          production structures for modern business execution.
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
      "We start by looking at what already exists — files, tools, forms, sites, and goals — before proposing anything.",
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
      "Nothing goes public without explicit approval. Launch and handoff happen on your sign-off — never automatically.",
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
