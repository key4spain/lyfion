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
} from "../_shared";
import { PageStructuredData } from "../_structured-data";
import { type Locale, getContent, resolveHref } from "../_i18n";

export default function WorkView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const w = c.work;

  return (
    <>
      <PageStructuredData page="work" locale={locale} />
      <PageHeader label={w.headerLabel} title={w.headerTitle} intro={w.headerIntro} />

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
              {w.internalTitle}
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: TEXT_BODY }}>
              {w.internalBody}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {w.internalExamples.map((item) => (
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
                {w.catalogTitle}
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                {w.catalogBody}
              </p>
            </div>
            <SecondaryCta href={resolveHref("/catalog", locale)}>{w.viewCatalog}</SecondaryCta>
          </article>

          {/* C. Digital Refresh */}
          <article
            className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.18)" }}
          >
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
                {w.refreshTitle}
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                {w.refreshBody}
              </p>
            </div>
            <SecondaryCta href={resolveHref("/services#digital-refresh", locale)}>
              {c.common.viewDigitalRefresh}
            </SecondaryCta>
          </article>

          {/* D. AI Content Workflow */}
          <article
            className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
                {w.aiTitle}
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                {w.aiBody}
              </p>
            </div>
            <SecondaryCta href={resolveHref("/services#ai-content-workflow", locale)}>
              {c.home.secondaryCards[2].cta}
            </SecondaryCta>
          </article>

          {/* E. Proof policy */}
          <article
            className="rounded-2xl p-7 md:p-8"
            style={{ background: CARD_BG, border: "1px solid rgba(16,185,129,0.18)" }}
          >
            <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT_CARD_TITLE }}>
              {w.proofTitle}
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              {w.proofBody}
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
            {w.closingNote}
          </p>
          <div className="flex justify-center">
            <PrimaryCta href={INTAKE_FORM_URL}>{c.common.tellUsBuild}</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
