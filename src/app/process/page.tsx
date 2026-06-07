import type { Metadata } from "next";
import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_MUTED,
  TEXT_CARD_TITLE,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  GRADIENT_TEXT,
  PrimaryCta,
  SecondaryCta,
  PageHeader,
  toRoman,
  INTAKE_FORM_URL,
  BASE,
} from "../_shared";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Lyfion works: understand what exists, choose the right service path, structure the digital layer, build, QA, and handoff.",
};

const PROCESS_STEPS = [
  {
    title: "Understand what exists",
    body:
      "Review the current website, offer, social presence, lead flow, tools, content, and business goal.",
  },
  {
    title: "Choose the right path",
    body:
      "Decide whether the project needs Digital Refresh, Ready Business Kit, Digital System Build, AI Content Workflow, or a custom scope.",
  },
  {
    title: "Structure the digital layer",
    body:
      "Map the page structure, service logic, lead intake, content flow, CRM/follow-up logic, and launch requirements.",
  },
  {
    title: "Build or prepare the system",
    body:
      "Create the website, landing page, web app starter, intake flow, workflow documents, content system, or production structure.",
  },
  {
    title: "QA before launch",
    body:
      "Check copy, links, forms, mobile layout, trust signals, pricing, claims, privacy, and launch readiness before anything goes public.",
  },
  {
    title: "Handoff and next step",
    body:
      "Deliver the working assets, notes, roadmap, or next build recommendation so the business knows what to do next.",
  },
];

const SERVICE_PATHS = [
  {
    title: "Digital Refresh",
    description: "For existing businesses that need cleanup.",
    href: `${BASE}/services#digital-refresh`,
  },
  {
    title: "Ready Business Kit",
    description: "For new businesses or offers that need fast launch.",
    href: `${BASE}/services#ready-business-kit`,
  },
  {
    title: "Digital System Build",
    description: "For deeper website, lead, CRM, and service systems.",
    href: `${BASE}/services#digital-system-build`,
  },
  {
    title: "AI Content Workflow",
    description: "For repeatable content and AI-assisted production.",
    href: `${BASE}/services#ai-content-workflow`,
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        title="A clear path from first review to working system."
        intro="Lyfion does not start by guessing what you need. We first understand what exists, then choose the right path: cleanup, fast launch, deeper system build, or content production workflow."
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
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[23px] top-12 bottom-0 w-px"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                )}
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
                      i === PROCESS_STEPS.length - 1
                        ? "1px solid rgba(16,185,129,0.28)"
                        : `1px solid ${CARD_BORDER}`,
                  }}
                >
                  <h2 className="text-lg md:text-xl font-semibold mb-2" style={{ color: "#ffffff" }}>
                    {step.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("b") }}
      >
        <FogBackdrop variant="green" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#ffffff" }}>
            Which path fits?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICE_PATHS.map((path) => (
              <div
                key={path.title}
                className="rounded-2xl p-6 flex flex-col h-full"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_CARD_TITLE }}>
                  {path.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: TEXT_BODY }}>
                  {path.description}
                </p>
                <SecondaryCta href={path.href}>View options</SecondaryCta>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: TEXT_MUTED }}>
            Not sure which path fits? Send what you have now and we will map the first practical step.
          </p>
          <div className="flex justify-center">
            <PrimaryCta href={INTAKE_FORM_URL}>Tell us what you want to improve</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
