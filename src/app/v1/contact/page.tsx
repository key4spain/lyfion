import type { Metadata } from "next";
import {
  DARK_BG,
  DARK_BG_ALT,
  CARD_BG,
  CARD_BORDER,
  GRADIENT,
  RomanLabel,
  Check,
  Arrow,
  PageHeader,
  MAILTO_CTA,
} from "../_shared";

// /v1/contact — CTA page WITHOUT a live form. No email/form/CRM/Jotform connected.

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
    desc: "You get a clear, practical first step — not a vague pitch.",
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

      <section className="py-24 md:py-28" style={{ background: DARK_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
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
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
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
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
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
                  <h3 className="text-sm font-semibold mb-2 mt-3" style={{ color: "rgba(255,255,255,0.92)" }}>
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-28"
        style={{ background: `radial-gradient(ellipse at 50% 0%, #082840 0%, ${DARK_BG_ALT} 60%)` }}
      >
        <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-12">
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.2)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Start with a system review
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
              Send your current website, tools, forms, workflow, or project
              material. We will review what exists, identify the gaps, and map
              the first practical build step.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              Email:{" "}
              <a
                href={MAILTO_CTA}
                style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}
              >
                filip@lyfion.digital
              </a>
            </p>
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
