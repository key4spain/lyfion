import type { Metadata } from "next";
import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_CARD_TITLE,
  GRADIENT,
  RomanLabel,
  Check,
  Arrow,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  PageHeader,
  MAILTO_CTA,
  MAILTO_DIRECT,
  SUPPORT_EMAIL,
  DIRECT_EMAIL,
} from "../_shared";

// Contact — CTA page without a live form. Mailto only.

export const metadata: Metadata = {
  title: "Start with a system review",
  description:
    "Contact Lyfion Digital to request a practical system review for your website, tools, forms, workflow, or digital operating structure.",
};

const REVIEW_CHECKS = [
  "Current website or landing page (if any)",
  "Forms, intake, and how data is collected today",
  "CRM or lead flow and how follow-up happens",
  "Automations already in use",
  "Content and AI production workflow",
  "Source-of-truth and documentation",
  "Risks, data exposure, and access handling",
  "Goals and the outcome you actually want",
];

const PREPARE = [
  "Links to your current site, forms, or pages",
  "The main tools and platforms you use",
  "A short description of the project and its goal",
  "Any existing documents or notes you can share",
  "The single biggest problem you want solved first",
];

const NEXT_STEPS = [
  {
    title: "We review what exists",
    desc: "We look at your current tools, pages, forms, and source material before suggesting anything.",
  },
  {
    title: "We identify gaps and risks",
    desc: "We map where the execution system is scattered and where data or process risk sits.",
  },
  {
    title: "We map the first build step",
    desc: "You get a clear, practical first step. Not a vague pitch.",
  },
  {
    title: "We confirm scope before any work",
    desc: "Scope, data handling, and launch are confirmed before anything is built or published.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get started"
        title="Start with a system review"
        intro="Send your project, current tools, website, forms, or workflow. We review what exists, identify the gaps, and map the first practical build step."
      />

      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="green" />
        <SpotlightBackdrop position="top" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* What the review checks */}
            <div
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
                What the review checks
              </h2>
              <ul className="space-y-3">
                {REVIEW_CHECKS.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <Check />
                    <span className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to prepare */}
            <div
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
                What to prepare
              </h2>
              <ul className="space-y-3">
                {PREPARE.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#38bdf8" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What happens next */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
              What happens next
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {NEXT_STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-7"
                  style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                >
                  <RomanLabel n={i + 1} className="mb-4" />
                  <h3 className="text-sm font-semibold mb-2 mt-3" style={{ color: TEXT_CARD_TITLE }}>
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop />
        <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 lg:px-12">
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.2)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Start with a system review
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: TEXT_BODY }}>
              Send your current website, tools, forms, workflow, or project
              material. We will review what exists, identify the gaps, and map
              the first practical build step.
            </p>
            <div
              className="text-sm leading-relaxed mb-8 space-y-2"
              style={{ color: TEXT_BODY }}
            >
              <p>
                For system review requests:{" "}
                <a
                  href={MAILTO_CTA}
                  style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p>
                For direct business development:{" "}
                <a
                  href={MAILTO_DIRECT}
                  style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}
                >
                  {DIRECT_EMAIL}
                </a>
              </p>
            </div>
            <a
              href={MAILTO_CTA}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: GRADIENT,
                color: "#ffffff",
                boxShadow: "0 4px 24px rgba(14,165,233,0.28)",
              }}
            >
              Start with a system review
              <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
