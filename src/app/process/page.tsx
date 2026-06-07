import type { Metadata } from "next";
import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_MUTED,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  GRADIENT_TEXT,
  GradientText,
  PrimaryCta,
  PageHeader,
  PROCESS_STEPS,
  toRoman,
  MAILTO_CTA,
} from "../_shared";

// Process — how Lyfion.digital works. Operational tone, approval-gated launch.

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Lyfion.digital works: Review, Structure, Build, QA, Launch/Handoff, and Iterate. Launch only happens after approval. Nothing goes public without sign-off.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        title="A clear path from review to working system."
        intro="A repeatable operational process. Every project moves through the same controlled steps. Nothing goes public until it is explicitly approved."
      />

      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <SpotlightBackdrop position="top" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
          <ol className="relative">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title} className="relative pl-16 pb-12 last:pb-0">
                {/* connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[23px] top-12 bottom-0 w-px"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                )}
                {/* node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    border: "1px solid rgba(14,165,233,0.3)",
                    ...GRADIENT_TEXT,
                  }}
                >
                  {toRoman(i + 1)}
                </span>

                <div
                  className="rounded-2xl p-7 md:p-8"
                  style={{
                    background: CARD_BG,
                    border:
                      step.title === "Launch / Handoff"
                        ? "1px solid rgba(16,185,129,0.28)"
                        : `1px solid ${CARD_BORDER}`,
                  }}
                >
                  <h2 className="text-lg md:text-xl font-semibold mb-2" style={{ color: "#ffffff" }}>
                    {step.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                    {step.summary}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approval emphasis */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div
            className="rounded-2xl p-8"
            style={{ background: CARD_BG, border: "1px solid rgba(16,185,129,0.22)" }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
              Launch only happens after <GradientText>approval.</GradientText>
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              No site, form, automation, or integration goes live without an
              explicit sign-off on scope, data handling, and risk. Approval gates
              are part of the process, not an afterthought.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <PrimaryCta href={MAILTO_CTA}>Start with a system review</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
