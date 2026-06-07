import type { Metadata } from "next";
import Link from "next/link";
import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_CARD_TITLE,
  TEXT_MUTED,
  RomanLabel,
  Check,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  PageHeader,
  PrimaryCta,
  SecondaryCta,
  INTAKE_FORM_URL,
  MAILTO_SUPPORT,
  MAILTO_DIRECT,
  SUPPORT_EMAIL,
  DIRECT_EMAIL,
  BASE,
} from "../_shared";

export const metadata: Metadata = {
  title: "Tell us what you want to improve",
  description:
    "Send what exists today and what you want to improve. Lyfion reviews your visible business layer and points you to the clearest next step.",
};

const LOOK_AT_FIRST = [
  "Current website or landing page, if any",
  "Social profiles or public business presence",
  "Contact forms, lead flow, or booking process",
  "Tools, CRM, or follow-up process if they exist",
  "Content workflow and approval structure",
  "Trust signals and visible business layer",
  "The outcome you actually want",
];

const PREPARE = [
  "Website, social, or public links",
  "A short description of what you want improved",
  "Existing documents, screenshots, or notes if useful",
  "The main problem you want solved first",
  "Any deadline or launch goal",
];

const NEXT_STEPS = [
  {
    title: "We review what exists",
    desc: "We check your current pages, profile, lead flow, and source material before suggesting anything.",
  },
  {
    title: "We identify the right path",
    desc: "Digital Refresh, Ready Business Kit, System Build, AI Workflow, or custom scope.",
  },
  {
    title: "You get the clearest next step",
    desc: "A practical recommendation, not a vague pitch.",
  },
  {
    title: "Scope is confirmed before work starts",
    desc: "Deliverables, timeline, pricing, data handling, and launch requirements are confirmed first.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Tell us what you want to improve"
        intro="You do not need to know the technical solution. Send what exists, what feels unclear, slow, outdated, or disconnected, and what you want to achieve. We will review it and point you to the clearest next step."
      />

      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="green" />
        <SpotlightBackdrop position="top" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-7"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
                What we look at first
              </h2>
              <ul className="space-y-3">
                {LOOK_AT_FIRST.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <Check />
                    <span className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

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
        className="relative overflow-hidden py-16 md:py-20 pb-28 md:pb-32"
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
              Ready to send your request?
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: TEXT_BODY }}>
              Digital Refresh is the usual first step for existing businesses. If you are
              launching something new or need a deeper build, we will point you to the right path.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <PrimaryCta href={INTAKE_FORM_URL}>
                Tell us what you want to improve
              </PrimaryCta>
              <SecondaryCta href={`${BASE}/services#digital-refresh`}>
                View Digital Refresh
              </SecondaryCta>
            </div>
            <p className="mb-8">
              <Link
                href={`${BASE}/services`}
                className="text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(56,189,248,0.85)" }}
              >
                See all services
              </Link>
            </p>
            <div
              className="text-sm leading-relaxed space-y-2 pt-6"
              style={{
                color: TEXT_BODY,
                borderTop: `1px solid ${CARD_BORDER}`,
              }}
            >
              <p className="text-xs mb-2" style={{ color: TEXT_MUTED }}>
                Direct email if you prefer:
              </p>
              <p>
                Support:{" "}
                <a
                  href={MAILTO_SUPPORT}
                  style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p>
                Business development:{" "}
                <a
                  href={MAILTO_DIRECT}
                  style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}
                >
                  {DIRECT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
