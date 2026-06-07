import type { Metadata } from "next";
import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_CARD_TITLE,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  Check,
  PrimaryCta,
  SecondaryCta,
  PageHeader,
  INTAKE_FORM_URL,
  BASE,
} from "../_shared";
import { PAGE_SEO, PageStructuredData } from "../_structured-data";

export const metadata: Metadata = {
  title: PAGE_SEO.work.title,
  description: PAGE_SEO.work.description,
  alternates: {
    canonical: PAGE_SEO.work.path,
  },
};

const INTERNAL_EXAMPLES = [
  "Business OS structure",
  "Service architecture",
  "Intake and CRM logic",
  "Launch-readiness checks",
];

export default function WorkPage() {
  return (
    <>
      <PageStructuredData page="work" />
      <PageHeader
        label="Work"
        title="Work that shows how Lyfion builds systems."
        intro="This page shows the kinds of systems Lyfion builds and prepares: digital refresh structures, ready launch models, service systems, content workflows, and internal operating layers. Public case studies are added only when proof and permission are clear."
      />

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <SpotlightBackdrop position="top" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-6">
          {/* A. Internal systems */}
          <article
            className="rounded-2xl p-7 md:p-8"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
              Internal systems
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: TEXT_BODY }}>
              Lyfion builds from real internal operating structures: source-of-truth files,
              service maps, offer logic, intake flows, QA checklists, and launch systems.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {INTERNAL_EXAMPLES.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* B. Ready Business Catalog */}
          <article
            className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
                Ready Business Catalog
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                Ready business models are prepared as starting points for one-page sites,
                multi-section websites, and web app starters.
              </p>
            </div>
            <SecondaryCta href={`${BASE}/catalog`}>View catalog</SecondaryCta>
          </article>

          {/* C. Digital Refresh */}
          <article
            className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.18)" }}
          >
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
                Digital Refresh work direction
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                Digital Refresh work focuses on cleaning the visible business layer: website,
                landing page, profile structure, trust signals, search structure, and lead flow.
              </p>
            </div>
            <SecondaryCta href={`${BASE}/services#digital-refresh`}>
              View Digital Refresh
            </SecondaryCta>
          </article>

          {/* D. AI Content Workflow */}
          <article
            className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
                AI Content &amp; Production Workflow
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                AI production work focuses on repeatable planning, prompt workflows, approval gates,
                QA, handoff, and publishing preparation.
              </p>
            </div>
            <SecondaryCta href={`${BASE}/services#ai-content-workflow`}>
              View AI Workflow
            </SecondaryCta>
          </article>

          {/* E. Proof policy */}
          <article
            className="rounded-2xl p-7 md:p-8"
            style={{ background: CARD_BG, border: "1px solid rgba(16,185,129,0.18)" }}
          >
            <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
              Proof policy
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              We do not publish private client systems, dashboards, or results without permission.
              Public proof will be added only when the source, rights, and wording are approved.
            </p>
          </article>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <p className="text-base leading-relaxed mb-8" style={{ color: TEXT_BODY }}>
            Tell us what you want to build and we will map the right starting path.
          </p>
          <div className="flex justify-center">
            <PrimaryCta href={INTAKE_FORM_URL}>Tell us what you want to build</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
