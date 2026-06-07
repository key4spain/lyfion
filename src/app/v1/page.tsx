import type { Metadata } from "next";
import Link from "next/link";
import {
  GRADIENT,
  GRADIENT_TEXT,
  HERO_BG,
  DARK_BG,
  DARK_BG_ALT,
  CARD_BG,
  CARD_BORDER,
  GradientText,
  SectionLabel,
  RomanLabel,
  Arrow,
  Check,
  PrimaryCta,
  SecondaryCta,
  SERVICES,
  PROCESS_STEPS,
  WORK_CATEGORIES,
  BASE,
  MAILTO_CTA,
  OFFER_DISCLAIMER,
} from "./_shared";

// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — Homepage V1 (STAGED PREVIEW)  ·  route: /v1
//
// Overview page. Nav + Footer are provided by ./layout.tsx. CTAs link to
// /v1/contact only — no form, CRM, payment, or external integration connected.
// Source of truth: LYFION_DIGITAL_SITE_IMPLEMENTATION_PROMPT_v3.md
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute:
      "Lyfion.digital — AI-Powered Business Systems, Websites & Automation Workflows",
  },
  description:
    "Lyfion.digital builds practical AI-powered business systems, websites, automation workflows, CRM and lead intake operations, content engines, and internal operating structures for projects that need speed, structure, and controlled execution.",
};

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";
const SECTION = "py-28 md:py-36";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: HERO_BG,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 96,
        paddingBottom: 80,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 18% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />
      <div className={`relative ${CONTAINER} w-full`}>
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 animate-fade-in"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#10b981" }}
          />
          <span
            className="text-[11px] font-mono tracking-wider"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Lyfion.digital · Practical digital systems studio
          </span>
        </div>

        <div className="max-w-3xl animate-fade-in-up">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-7"
            style={{ color: "#ffffff" }}
          >
            Practical AI-powered{" "}
            <GradientText>business systems</GradientText> for projects that need
            structure, speed, and execution.
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Lyfion.digital builds websites, automation workflows, CRM and lead
            intake systems, content engines, and internal Business OS structures
            for founders and teams that need clarity instead of chaos.
          </p>

          <div className="flex flex-wrap gap-4">
            <PrimaryCta href={MAILTO_CTA}>Start with a system review</PrimaryCta>
            <SecondaryCta href={`${BASE}/services`}>See what we build</SecondaryCta>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-12 text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {["Practical, not hype", "Structured execution", "Proof before scale"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-3">
                  <span>{item}</span>
                  {i < arr.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.18)" }}>·</span>
                  )}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

const PROBLEM_POINTS = [
  "Business ideas are spread across chats, docs, tools, and unfinished tasks.",
  "Websites are launched without intake, CRM, or follow-up structure.",
  "Forms collect data but do not create controlled operations.",
  "AI tools are used without proof, QA, or business logic.",
  "Teams move fast but lose source-of-truth control.",
  "Automation is added before the process is clear.",
];

function ProblemSection() {
  return (
    <section className={SECTION} style={{ background: DARK_BG }}>
      <div className={CONTAINER}>
        <div className="max-w-3xl mb-14">
          <SectionLabel>The problem</SectionLabel>
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Most projects do not fail because the idea is bad. They fail because
            the <GradientText>execution system is scattered.</GradientText>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_POINTS.map((point, i) => (
            <div
              key={point}
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <RomanLabel n={i + 1} className="mb-4" />
              <p
                className="text-sm md:text-[15px] leading-relaxed mt-3"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What We Build ────────────────────────────────────────────────────────────

const BUILD_CATEGORIES = [
  {
    title: "Business operating systems",
    desc: "Source-of-truth, project control, permissions, SOPs, and AI-ready delegation so execution stays organised as the work grows.",
  },
  {
    title: "Websites and landing pages",
    desc: "Clear public pages, a real conversion path, CTAs, and a controlled launch checklist instead of a page that just sits there.",
  },
  {
    title: "Automation workflows",
    desc: "Controlled routing, reporting, notifications, intake, and follow-up so the right steps happen without manual chasing.",
  },
  {
    title: "CRM / Lead Intake Systems",
    desc: "Forms, routing, status tracking, follow-up structure, and practical verification so leads do not disappear.",
  },
  {
    title: "AI content production workflows",
    desc: "Repeatable AI-assisted image, video, and content workflows with QA and approval rules built in.",
  },
  {
    title: "Proof and market-test systems",
    desc: "Structured ways to test an idea and gather evidence before committing to a bigger investment.",
  },
];

function WhatWeBuildSection() {
  return (
    <section id="what-we-build" className={SECTION} style={{ background: DARK_BG_ALT }}>
      <div className={CONTAINER}>
        <div className="max-w-2xl mb-16">
          <SectionLabel>What we build</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: "#ffffff" }}
          >
            Lyfion.digital builds the digital structure behind serious execution.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Each build is a practical outcome — not a buzzword. Here is what that
            looks like in practice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILD_CATEGORIES.map((c, i) => (
            <div
              key={c.title}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <RomanLabel n={i + 1} className="mb-4" />
              <div className="w-8 h-1 rounded-full mb-4 mt-3" style={{ background: GRADIENT }} />
              <h3 className="text-base font-semibold mb-2" style={{ color: "rgba(255,255,255,0.92)" }}>
                {c.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services preview (links to /v1/services) ─────────────────────────────────

function ServicesPreview() {
  return (
    <section className={SECTION} style={{ background: DARK_BG }}>
      <div className={CONTAINER}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel>Service pillars</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              Six ways we can work together.
            </h2>
          </div>
          <Link
            href={`${BASE}/services`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 self-start md:self-auto"
            style={GRADIENT_TEXT}
          >
            See all services
            <span style={{ color: "#38bdf8" }}>
              <Arrow />
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Link
              key={s.id}
              href={`${BASE}/services#${s.id}`}
              className="group rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <RomanLabel n={i + 1} total={SERVICES.length} className="mb-4" />
              <h3 className="text-lg font-semibold mb-2 mt-3" style={{ color: "rgba(255,255,255,0.92)" }}>
                {s.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                {s.short}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold mt-5 transition-opacity opacity-60 group-hover:opacity-100"
                style={{ color: "#38bdf8" }}
              >
                Learn more <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Who It Is For ────────────────────────────────────────────────────────────

const WHO_FOR_ITEMS = [
  {
    title: "Founders with scattered execution",
    desc: "Ideas, tools, documents, and unfinished tasks spread across chats and platforms with no clear source of truth.",
  },
  {
    title: "Service businesses that need intake structure",
    desc: "A stronger website, lead intake, follow-up flow, and CRM logic so potential clients do not fall through the gaps.",
  },
  {
    title: "Teams using AI tools without guardrails",
    desc: "AI workflows running without a clear source-of-truth, QA process, or approval boundaries before publishing.",
  },
  {
    title: "Projects that need market evidence first",
    desc: "A structured test layer before committing serious time or investment to a bigger build.",
  },
  {
    title: "Businesses not ready for complex systems",
    desc: "Practical automation and operating structure without the overhead of enterprise platforms or long agency contracts.",
  },
];

function WhoItIsForSection() {
  return (
    <section className={SECTION} style={{ background: DARK_BG }}>
      <div className={CONTAINER}>
        <div className="max-w-2xl mb-14">
          <SectionLabel>Who it is for</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: "#ffffff" }}
          >
            Built for founders, teams, and service businesses that need{" "}
            <GradientText>structure before scale.</GradientText>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Not for every project. Built for the ones where execution is the
            problem, not the idea.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHO_FOR_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <RomanLabel n={i + 1} className="mb-4" />
              <h3
                className="text-base font-semibold mb-2 mt-3"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm md:text-[15px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Proof / Internal systems ─────────────────────────────────────────────────

const PROOF_CARDS = [
  {
    title: "Business OS structure",
    desc: "Source-of-truth files, project maps, permission rules, and operating boards built for multi-project business environments.",
  },
  {
    title: "Website and landing systems",
    desc: "Structured pages, CTA logic, service framing, and launch-readiness checklists built as real digital infrastructure.",
  },
  {
    title: "CRM / intake workflows",
    desc: "Forms, routing logic, lead and application tracking, follow-up structure, and practical verification steps.",
  },
  {
    title: "AI production workflow",
    desc: "Prompt systems, content planning structures, output QA review, and approval gates before any publishing step.",
  },
];

function ProofSection() {
  return (
    <section
      className={SECTION}
      style={{
        background: `radial-gradient(ellipse at 75% 30%, #082840 0%, ${DARK_BG_ALT} 60%)`,
      }}
    >
      <div className={CONTAINER}>
        <div className="max-w-2xl mb-12">
          <SectionLabel>Proof / internal systems</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: "#ffffff" }}>
            Built from real internal systems,{" "}
            <GradientText>not theory.</GradientText>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Lyfion.digital is shaped through real internal builds: business
            operating files, website structures, CRM and intake logic, intake
            workflows, content production systems, QA checklists, and controlled
            project documentation used across internal and client-facing work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PROOF_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.12)" }}
            >
              <RomanLabel n={i + 1} className="mb-4" />
              <h3
                className="text-sm font-semibold mb-2 mt-3"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                {card.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={`${BASE}/work`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#38bdf8" }}
          >
            See selected work <Arrow />
          </Link>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
            High-level references only — no screenshots, metrics, or private data.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Process preview (links to /v1/process) ───────────────────────────────────

function ProcessPreview() {
  return (
    <section className={SECTION} style={{ background: DARK_BG }}>
      <div className={CONTAINER}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              A controlled path from messy input to working system.
            </h2>
          </div>
          <Link
            href={`${BASE}/process`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 self-start md:self-auto"
            style={{ color: "#38bdf8" }}
          >
            See the full process <Arrow />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <RomanLabel n={i + 1} className="mb-4" />
              <h3 className="text-base font-semibold mb-2 mt-3" style={{ color: "rgba(255,255,255,0.92)" }}>
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {step.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Work preview (links to /v1/work) ─────────────────────────────────────────

function WorkPreview() {
  return (
    <section className={SECTION} style={{ background: DARK_BG_ALT }}>
      <div className={CONTAINER}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              Real systems, staged concepts, and project infrastructure.
            </h2>
          </div>
          <Link
            href={`${BASE}/work`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 self-start md:self-auto"
            style={{ color: "#38bdf8" }}
          >
            View selected work <Arrow />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {WORK_CATEGORIES.map((c) => (
            <span
              key={c.title}
              className="px-4 py-2.5 rounded-full text-sm"
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {c.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Offer: Digital Refresh Review ───────────────────────────────────────────

const REVIEW_DELIVERABLES = [
  "Review of current website, landing page, or digital presence",
  "Forms, intake, and lead flow assessment",
  "Tools and automation audit",
  "Content or AI workflow review if relevant",
  "Gap and risk identification",
  "First-step build recommendation with clear scope and priorities",
];

function OfferSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        background: `radial-gradient(ellipse at 20% 50%, rgba(14,165,233,0.05) 0%, ${DARK_BG} 65%)`,
      }}
    >
      <div className={`${CONTAINER} max-w-4xl`}>
        <div className="text-center mb-10">
          <SectionLabel>Where most projects start</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-3"
            style={{ color: "#ffffff" }}
          >
            Digital Refresh Review
          </h2>
          <span
            className="text-2xl font-bold"
            style={GRADIENT_TEXT}
          >
            from $499
          </span>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: CARD_BG,
            border: "1px solid rgba(14,165,233,0.22)",
          }}
        >
          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            We review your current digital setup — website, forms, tools, intake
            logic, and content workflow — and map the first practical build step
            with clear scope and priorities.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10">
            {REVIEW_DELIVERABLES.map((d) => (
              <li key={d} className="flex gap-2.5">
                <Check />
                <span
                  className="text-sm md:text-[15px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  {d}
                </span>
              </li>
            ))}
          </ul>

          <div className="mb-6">
            <PrimaryCta href={MAILTO_CTA}>Start with a system review</PrimaryCta>
          </div>

          <p
            className="text-xs leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {OFFER_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Safety ───────────────────────────────────────────────────────────

function TrustSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: DARK_BG }}>
      <div className={`${CONTAINER} max-w-3xl text-center`}>
        <SectionLabel>Trust &amp; safety</SectionLabel>
        <p
          className="text-xl md:text-2xl font-light leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          We build practical systems from verified source material, clear scope,
          and controlled execution. No fake guarantees, no uncontrolled
          automation, and no public claims without proof.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Every build starts with structure: source review, scope, workflow, QA,
          and approval gates before launch.
        </p>
      </div>
    </section>
  );
}

// ─── CTA (links to /v1/contact) ───────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      className="py-28 md:py-40"
      style={{ background: `radial-gradient(ellipse at 30% 60%, #082840 0%, ${DARK_BG} 60%)` }}
    >
      <div className={`${CONTAINER} max-w-3xl text-center`}>
        <SectionLabel>Get started</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#ffffff" }}>
          Start with a <GradientText>system review.</GradientText>
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Send your project, current tools, website, forms, or workflow. We
          review what exists, identify the gaps, and map the first practical
          build step.
        </p>
        <div className="flex justify-center">
          <PrimaryCta href={MAILTO_CTA}>Start with a system review</PrimaryCta>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LyfionDigitalV1Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatWeBuildSection />
      <ServicesPreview />
      <WhoItIsForSection />
      <ProofSection />
      <WorkPreview />
      <ProcessPreview />
      <OfferSection />
      <TrustSection />
      <CtaSection />
    </>
  );
}
