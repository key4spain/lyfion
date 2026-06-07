import type { Metadata } from "next";
import Link from "next/link";
import HeroOrbitPanel from "./_hero-orbit-panel";
import {
  GRADIENT,
  HERO_BG,
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_MUTED,
  TEXT_CARD_TITLE,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  GradientText,
  SectionLabel,
  RomanLabel,
  Arrow,
  Check,
  PrimaryCta,
  SecondaryCta,
  PROCESS_STEPS,
  WORK_CATEGORIES,
  BASE,
  INTAKE_FORM_URL,
  OFFER_DISCLAIMER,
  OFFER_PRICE,
} from "./_shared";

// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — Homepage · route: /
// Nav + Footer provided by ./layout.tsx. Primary homepage CTA → Digital Refresh.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute:
      "Lyfion.digital | Digital Systems, Websites and Automation Workflows",
  },
  description:
    "Lyfion Digital builds the structure behind modern business execution: websites, lead intake, content workflows, approval gates, and launch-ready operating systems.",
};

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";
const PAD_PROBLEM = "py-16 md:py-24";
const PAD_BUILD = "py-16 md:py-24";
const PAD_SERVICE_PATHS = "py-12 md:py-16";
const PAD_WHO = "py-14 md:py-20";
const PAD_PROOF = "py-14 md:py-20";
const PAD_WORK = "py-14 md:py-20";
const PAD_PROCESS = "py-14 md:py-[5.5rem]";
const PAD_TRUST = "py-12 md:py-16";
const PAD_CTA = "py-16 md:py-[5.5rem]";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-x-clip"
      style={{
        background: HERO_BG,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      {/* Bottom-left ambient green */}
      <FogBackdrop variant="deep" />
      <SpotlightBackdrop position="top" />

      <div className={`relative z-10 ${CONTAINER} w-full`}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left — text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#10b981",
                  flexShrink: 0,
                  animation: "dotPulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-[11px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "rgba(56,189,248,0.72)" }}
              >
                LYFION.DIGITAL · 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6 animate-fade-in-up"
              style={{ color: "#ffffff" }}
            >
              Build the system behind{" "}
              <GradientText>your business.</GradientText>
            </h1>

            {/* Subheadline */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up-delay-1"
              style={{ color: TEXT_BODY }}
            >
              Lyfion reviews your visible business layer, then maps the first
              practical build step. Websites, lead flow, content workflow, and
              launch structure behind the business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
              <PrimaryCta href={`${BASE}/services#digital-refresh`}>
                Start with Digital Refresh
              </PrimaryCta>
              <SecondaryCta href={INTAKE_FORM_URL}>
                Tell us what you need
              </SecondaryCta>
            </div>

            {/* Offer hint */}
            <p
              className="mt-8 text-xs animate-fade-in-up-delay-3"
              style={{ color: TEXT_MUTED }}
            >
              Digital Refresh Review ·{" "}
              <span style={{ color: "rgba(56,189,248,0.75)" }}>{OFFER_PRICE}</span>
            </p>
          </div>

          {/* Right — orbit map */}
          <div className="flex items-center justify-center mt-4 md:mt-0 w-full min-h-[314px] md:min-h-[392px] overflow-hidden isolate">
            <HeroOrbitPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

const PROBLEM_POINTS = [
  "Ideas are scattered across chats, docs, and tools with no clear source of truth.",
  "People move before the priority is clear, so work starts fast but loses direction.",
  "Websites go live without intake forms, follow-up logic, or CRM structure.",
  "Forms collect data, but nobody owns the next step.",
  "AI tools run without QA, approval gates, or defined business logic.",
  "Founders change direction because the project has no operating board, proof layer, or decision log.",
];

function ProblemSection() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_PROBLEM}`}
      style={{ background: sectionBg("a") }}
    >
      <FogBackdrop variant="blue" />
      <SpotlightBackdrop position="top" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="max-w-3xl mb-10">
          <SectionLabel>The problem</SectionLabel>
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Most projects do not fail because the idea is bad. They fail
            because the{" "}
            <GradientText>execution layer is broken.</GradientText>
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
                style={{ color: TEXT_BODY }}
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
    desc: "Source-of-truth structure, project control, permissions, SOPs, and delegation logic so execution stays organised as the work scales.",
  },
  {
    title: "Websites and landing pages",
    desc: "Clear public pages with a real conversion path, CTA logic, and a controlled launch checklist. Not a page that just sits there.",
  },
  {
    title: "Automation workflows",
    desc: "Controlled routing, notifications, intake, and follow-up so the right steps happen without manual chasing every time.",
  },
  {
    title: "CRM and lead intake systems",
    desc: "Forms, routing logic, status tracking, follow-up structure, and verification steps so leads do not disappear.",
  },
  {
    title: "AI content production workflows",
    desc: "Repeatable AI-assisted image, video, and content workflows with QA gates and approval steps built in.",
  },
  {
    title: "Proof and market-test systems",
    desc: "A structured way to test an idea and gather real evidence before committing time or investment to a larger build.",
  },
];

function WhatWeBuildSection() {
  return (
    <section
      id="what-we-build"
      className={`relative overflow-hidden ${PAD_BUILD}`}
      style={{ background: sectionBg("b") }}
    >
      <FogBackdrop variant="green" />
      <SpotlightBackdrop position="top" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="max-w-2xl mb-12">
          <SectionLabel>What we build</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: "#ffffff" }}
          >
            We build the files, flows, and pages that hold the work together.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
            Each service is a concrete output: a working system, not a
            deliverable document or vague consultation.
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
              <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_CARD_TITLE }}>
                {c.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service paths: Digital Refresh primary + 3 secondary ─────────────────────

const REFRESH_INCLUDES = [
  "Website or landing page refresh",
  "Instagram profile cleanup",
  "Basic SEO structure",
  "Basic AEO / GEO / LLMO setup",
  "Contact and lead flow check",
  "Basic trust and credibility improvements",
  "Launch-readiness checklist",
];

const SECONDARY_SERVICE_CARDS = [
  {
    title: "Ready Business Kit",
    price: "From €699 / $800",
    description:
      "For new businesses, offers, or local services that need a fast launch package.",
    cta: "View Ready Business Kit",
    href: `${BASE}/services#ready-business-kit`,
  },
  {
    title: "Digital System Build",
    price: "From €2,500 / $2,850",
    description:
      "For businesses that need a deeper website, lead intake, CRM logic, service flow, QA, and launch readiness.",
    cta: "View System Build",
    href: `${BASE}/services#digital-system-build`,
  },
  {
    title: "AI Content & Production Workflow",
    price: "From €1,750 / $1,999",
    description:
      "For brands that need a repeatable system for content planning, production, approval, and publishing.",
    cta: "View AI Workflow",
    href: `${BASE}/services#ai-content-workflow`,
  },
];

function ServicePathsSection() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_SERVICE_PATHS}`}
      style={{ background: sectionBg("deep") }}
    >
      <FogBackdrop variant="deep" />
      <SpotlightBackdrop position="top" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="max-w-2xl mb-8">
          <SectionLabel>Services</SectionLabel>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight mb-3"
            style={{ color: "#ffffff" }}
          >
            Start with Digital Refresh
          </h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
            Digital Refresh is the fastest first step. If you are launching something
            new or need a deeper system, choose one of the other paths.
          </p>
        </div>

        <div
          className="rounded-2xl p-7 md:p-9 mb-5"
          style={{
            background: CARD_BG,
            border: "1px solid rgba(14,165,233,0.22)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1" style={{ color: TEXT_CARD_TITLE }}>
                Digital Refresh
              </h3>
              <p className="text-sm font-mono" style={{ color: "rgba(56,189,248,0.85)" }}>
                €429 / $499
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed mb-6 max-w-3xl" style={{ color: TEXT_BODY }}>
            For businesses that already exist, but need their digital presence cleaned,
            structured, and prepared for the new search and AI discovery era.
          </p>

          <div
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
            style={{ color: TEXT_MUTED }}
          >
            Includes
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {REFRESH_INCLUDES.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check />
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mb-4">
            <PrimaryCta href={`${BASE}/services#digital-refresh`}>
              View Digital Refresh options
            </PrimaryCta>
            <SecondaryCta href={INTAKE_FORM_URL}>Tell us what you need</SecondaryCta>
          </div>

          <p className="text-xs leading-relaxed max-w-2xl" style={{ color: TEXT_MUTED }}>
            {OFFER_DISCLAIMER}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {SECONDARY_SERVICE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-5 flex flex-col h-full"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <h3 className="text-base font-semibold mb-1" style={{ color: TEXT_CARD_TITLE }}>
                {card.title}
              </h3>
              <p
                className="text-[11px] font-mono mb-2.5"
                style={{ color: "rgba(56,189,248,0.75)" }}
              >
                {card.price}
              </p>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: TEXT_BODY }}>
                {card.description}
              </p>
              <SecondaryCta href={card.href}>{card.cta}</SecondaryCta>
            </div>
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
    desc: "A cleaner website, lead intake flow, follow-up logic, and CRM structure so potential clients do not fall through the gaps.",
  },
  {
    title: "Teams running AI tools without guardrails",
    desc: "AI workflows running without a clear source-of-truth, QA process, or approval boundaries before publishing.",
  },
  {
    title: "Projects that need market evidence first",
    desc: "A structured test layer before committing serious time or money to a larger build.",
  },
  {
    title: "Businesses not ready for complex platforms",
    desc: "Practical automation and operating structure without the overhead of enterprise software or long agency retainers.",
  },
];

function WhoItIsForSection() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_WHO}`}
      style={{ background: sectionBg("a") }}
    >
      <FogBackdrop variant="blue" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="max-w-2xl mb-10">
          <SectionLabel>Who it is for</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: "#ffffff" }}
          >
            For teams where the work exists, but the{" "}
            <GradientText>system does not.</GradientText>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
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
                style={{ color: TEXT_CARD_TITLE }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm md:text-[15px] leading-relaxed"
                style={{ color: TEXT_BODY }}
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
    title: "CRM and intake workflows",
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
      className={`relative overflow-hidden ${PAD_PROOF}`}
      style={{ background: sectionBg("b") }}
    >
      <FogBackdrop variant="deep" />
      <SpotlightBackdrop position="top" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="max-w-2xl mb-10">
          <SectionLabel>Internal systems</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: "#ffffff" }}>
            Built from real internal systems,{" "}
            <GradientText>not theory.</GradientText>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
            Lyfion Digital is shaped through real internal builds: business
            operating files, website structures, CRM and intake logic, content
            production systems, QA checklists, and controlled project
            documentation used across internal and client-facing work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {PROOF_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.12)" }}
            >
              <RomanLabel n={i + 1} className="mb-4" />
              <h3
                className="text-sm font-semibold mb-2 mt-3"
                style={{ color: TEXT_CARD_TITLE }}
              >
                {card.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Link
            href={`${BASE}/work`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#38bdf8" }}
          >
            See selected work <Arrow />
          </Link>
          <p className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
            High-level references only. No screenshots, metrics, or private data.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Work preview ─────────────────────────────────────────────────────────────

function WorkPreview() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_WORK}`}
      style={{ background: sectionBg("b") }}
    >
      <FogBackdrop variant="green" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              Real internal systems and project infrastructure.
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

// ─── Process preview ──────────────────────────────────────────────────────────

function ProcessPreview() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_PROCESS}`}
      style={{ background: sectionBg("a") }}
    >
      <FogBackdrop variant="blue" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              A clear path from review to working system.
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
              <h3 className="text-base font-semibold mb-2 mt-3" style={{ color: TEXT_CARD_TITLE }}>
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
                {step.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Safety ───────────────────────────────────────────────────────────

function TrustSection() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_TRUST}`}
      style={{ background: sectionBg("b") }}
    >
      <FogBackdrop variant="green" />
      <SpotlightBackdrop />
      <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
        <SectionLabel>Trust &amp; safety</SectionLabel>
        <p
          className="text-lg md:text-xl font-normal leading-relaxed mb-5"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          We work from verified source material, defined scope, and approval
          gates. No fake guarantees. No public claims without proof.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
          Every build starts with a review, a clear workflow, and a decision on
          what should be built first.
        </p>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      className={`relative overflow-hidden ${PAD_CTA}`}
      style={{ background: sectionBg("deep") }}
    >
      <FogBackdrop variant="deep" />
      <SpotlightBackdrop position="top" />
      <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
        <SectionLabel>Get started</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#ffffff" }}>
          Tell us what you want to <GradientText>improve.</GradientText>
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: TEXT_BODY }}
        >
          Send your website, profile, lead flow, or launch goal. We review what
          exists, identify gaps, and map the first practical build step.
        </p>
        <div className="flex justify-center">
          <PrimaryCta href={INTAKE_FORM_URL}>
            Tell us what you want to improve
          </PrimaryCta>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LyfionDigitalHome() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatWeBuildSection />
      <ServicePathsSection />
      <WhoItIsForSection />
      <ProofSection />
      <WorkPreview />
      <ProcessPreview />
      <TrustSection />
      <CtaSection />
    </>
  );
}
