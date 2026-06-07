import type { Metadata } from "next";
import {
  DARK_BG,
  DARK_BG_ALT,
  CARD_BG,
  CARD_BORDER,
  GradientText,
  RomanLabel,
  Check,
  PrimaryCta,
  PageHeader,
  SERVICES,
  MAILTO_CTA,
} from "../_shared";

// /v1/services — service overview without pricing. CTAs link to /v1/contact.

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services built for structured digital execution: Business OS setup, websites and landing systems, CRM and lead intake systems, automation workflow plans, AI content production, and digital market testing.",
};

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Services built for structured digital execution"
        intro="Six practical service families. Each one starts with a system review, has a clear scope, and is built with approval gates before anything goes live. No prices, no timelines, and no guaranteed results — just structured work."
      />

      <div style={{ background: DARK_BG }}>
        {SERVICES.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-24 py-24 md:py-28"
            style={{ background: i % 2 === 0 ? DARK_BG : DARK_BG_ALT }}
          >
            <div className={CONTAINER}>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Left: title + framing */}
                <div className="lg:col-span-5">
                  <RomanLabel n={i + 1} total={SERVICES.length} className="mb-5" />
                  <h2
                    className="text-2xl md:text-3xl font-bold leading-tight mt-4 mb-4"
                    style={{ color: "#ffffff" }}
                  >
                    {s.title}
                  </h2>
                  {/* Lead summary — makes the card read like a real offer */}
                  <p
                    className="text-base leading-relaxed mb-7"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {s.short}
                  </p>

                  <div className="space-y-5">
                    <div>
                      <div
                        className="text-xs font-semibold tracking-[0.18em] uppercase mb-1.5"
                        style={{ color: "rgba(56,189,248,0.75)" }}
                      >
                        Who it&apos;s for
                      </div>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {s.whoFor}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold tracking-[0.18em] uppercase mb-1.5"
                        style={{ color: "rgba(56,189,248,0.75)" }}
                      >
                        The problem it solves
                      </div>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {s.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: what gets built + outcome + CTA */}
                <div className="lg:col-span-7">
                  <div
                    className="rounded-2xl p-7 md:p-9 h-full flex flex-col"
                    style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                  >
                    <div
                      className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      What gets built
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-7">
                      {s.builds.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <Check />
                          <span className="text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="rounded-xl px-5 py-4 mb-7"
                      style={{
                        background: "rgba(16,185,129,0.06)",
                        border: "1px solid rgba(16,185,129,0.18)",
                      }}
                    >
                      <div
                        className="text-xs font-semibold tracking-[0.18em] uppercase mb-1.5"
                        style={{ color: "rgba(52,211,153,0.85)" }}
                      >
                        Outcome
                      </div>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                        {s.outcome}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <PrimaryCta href={MAILTO_CTA}>Start with a system review</PrimaryCta>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Closing note */}
      <section className="py-20" style={{ background: DARK_BG_ALT }}>
        <div className={`${CONTAINER} max-w-3xl text-center`}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Not sure which fits? <GradientText>Start with a system review</GradientText>{" "}
            and we map the first practical step together.
          </p>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            V1 does not list prices, delivery timelines, or guaranteed packages.
            Scope is defined per project after the review.
          </p>
        </div>
      </section>
    </>
  );
}
