import type { Metadata } from "next";
import {
  DARK_BG,
  DARK_BG_ALT,
  CARD_BG,
  CARD_BORDER,
  GRADIENT,
  GradientText,
  RomanLabel,
  PrimaryCta,
  PageHeader,
  WORK_CATEGORIES,
  MAILTO_CTA,
} from "../_shared";

// /v1/work — proof-safe selected work. No screenshots, metrics, client names,
// or private data. No app.dostavapro.com reference.

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Selected work and internal systems: internal operating systems, websites and landing systems, CRM and lead intake workflows, AI production workflows, and internal dashboard logic. Built from real internal systems, not theory.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Selected work"
        title="Selected work and internal systems"
        intro="Real systems, staged concepts, and project infrastructure built to turn ideas into structured digital execution."
      />

      <section className="py-24 md:py-28" style={{ background: DARK_BG }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Proof statement */}
          <div
            className="rounded-2xl p-8 md:p-10 mb-14 text-center"
            style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.18)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#ffffff" }}>
              Built from real internal systems, <GradientText>not theory.</GradientText>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK_CATEGORIES.map((c, i) => (
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

          <p className="text-xs mt-8 max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
            High-level references only. No screenshots, metrics, dashboard access,
            private data, or client names are shown in V1. Specific examples are
            shared privately, where appropriate, after a system review.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: DARK_BG_ALT }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Want to see how this applies to your project?
          </p>
          <div className="flex justify-center">
            <PrimaryCta href={MAILTO_CTA}>Start with a system review</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
