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
} from "../_shared";
import { PageStructuredData } from "../_structured-data";
import { type Locale, getContent, resolveHref } from "../_i18n";

export default function ProcessView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = c.process;

  return (
    <>
      <PageStructuredData page="process" locale={locale} />
      <PageHeader label={p.headerLabel} title={p.headerTitle} intro={p.headerIntro} />

      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <SpotlightBackdrop position="top" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
          <ol className="relative">
            {p.steps.map((step, i) => (
              <li key={step.title} className="relative pl-16 pb-12 last:pb-0">
                {i < p.steps.length - 1 && (
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
                      i === p.steps.length - 1
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
            {p.whichTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.paths.map((path) => (
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
                <SecondaryCta href={resolveHref(path.href, locale)}>
                  {c.common.viewOptions}
                </SecondaryCta>
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
            {p.closingNote}
          </p>
          <div className="flex justify-center">
            <PrimaryCta href={INTAKE_FORM_URL}>{c.common.tellUsImprove}</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
