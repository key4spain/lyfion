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
} from "../_shared";
import { PageStructuredData } from "../_structured-data";
import { type Locale, getContent, resolveHref } from "../_i18n";

export default function ContactView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const ct = c.contact;

  return (
    <>
      <PageStructuredData page="contact" locale={locale} />
      <PageHeader label={ct.headerLabel} title={ct.headerTitle} intro={ct.headerIntro} />

      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="green" />
        <SpotlightBackdrop position="top" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-7" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}>
              <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
                {ct.lookAtTitle}
              </h2>
              <ul className="space-y-3">
                {ct.lookAtFirst.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <Check />
                    <span className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-7" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}>
              <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
                {ct.prepareTitle}
              </h2>
              <ul className="space-y-3">
                {ct.prepare.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#38bdf8" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-5" style={{ color: "#ffffff" }}>
              {ct.nextTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ct.nextSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl p-7"
                  style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                >
                  <RomanLabel n={i + 1} className="mb-4" />
                  <h3 className="text-sm font-semibold mb-2 mt-3" style={{ color: TEXT_CARD_TITLE }}>
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                    {step.desc}
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
              {ct.readyTitle}
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: TEXT_BODY }}>
              {ct.readyBody}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <PrimaryCta href={INTAKE_FORM_URL}>{c.common.tellUsImprove}</PrimaryCta>
              <SecondaryCta href={resolveHref("/services#digital-refresh", locale)}>
                {c.common.viewDigitalRefresh}
              </SecondaryCta>
            </div>
            <p className="mb-8">
              <Link
                href={resolveHref("/services", locale)}
                className="text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(56,189,248,0.85)" }}
              >
                {c.common.seeAllServices}
              </Link>
            </p>
            <div
              className="text-sm leading-relaxed space-y-2 pt-6"
              style={{ color: TEXT_BODY, borderTop: `1px solid ${CARD_BORDER}` }}
            >
              <p className="text-xs mb-2" style={{ color: TEXT_MUTED }}>
                {ct.directEmailLabel}
              </p>
              <p>
                {ct.supportLabel}
                <a href={MAILTO_SUPPORT} style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p>
                {ct.businessLabel}
                <a href={MAILTO_DIRECT} style={{ color: "rgba(45,212,191,0.85)", textDecoration: "none" }}>
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
