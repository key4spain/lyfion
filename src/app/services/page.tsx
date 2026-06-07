import type { Metadata } from "next";
import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_MUTED,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  GradientText,
  RomanLabel,
  Check,
  PrimaryCta,
  PageHeader,
  SERVICES,
  MAILTO_CTA,
} from "../_shared";

// Services — overview without pricing. CTAs use mailto.

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
        intro="Six practical service areas. Each one starts with a system review, has a clear scope, and is built with approval gates before anything goes live. No public prices or fixed packages."
      />

      <div style={{ background: sectionBg("a") }}>
        {SERVICES.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="relative overflow-hidden scroll-mt-24 py-20 md:py-24"
            style={{ background: i % 2 === 0 ? sectionBg("a") : sectionBg("b") }}
          >
            <FogBackdrop variant={i % 2 === 0 ? "blue" : "green"} />
            <SpotlightBackdrop position="top" />
            <div className={`relative z-10 ${CONTAINER}`}>
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
                    style={{ color: TEXT_BODY }}
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
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
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
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
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
                      style={{ color: TEXT_MUTED }}
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
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop />
        <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: TEXT_BODY }}>
            Not sure which fits? <GradientText>Start with a system review</GradientText>{" "}
            and we map the first practical step together.
          </p>
          <p className="text-xs mt-4" style={{ color: TEXT_MUTED }}>
            Scope is defined per project after the review. It is not a fixed public package.
          </p>
        </div>
      </section>
    </>
  );
}
