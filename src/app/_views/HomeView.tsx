import Link from "next/link";
import HeroOrbitPanel from "../_hero-orbit-panel";
import { PageStructuredData } from "../_structured-data";
import {
  GRADIENT,
  HERO_BG,
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_MUTED,
  TEXT_CARD_TITLE,
  FogBackdrop,
  SpotlightBackdrop,
  sectionBg,
  GradientText,
  SectionLabel,
  RomanLabel,
  Arrow,
  Check,
  PrimaryCta,
  SecondaryCta,
  INTAKE_FORM_URL,
} from "../_shared";
import { type Locale, getContent, resolveHref, formatPrice, PRICE } from "../_i18n";

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";

export default function HomeView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const h = c.home;
  const refreshHref = resolveHref("/services#digital-refresh", locale);
  const intake = INTAKE_FORM_URL;
  const offerDisclaimer = `${formatPrice(PRICE.digitalRefresh, locale)}. ${c.common.offerDisclaimerRest}`;

  return (
    <>
      <PageStructuredData page="home" locale={locale} />

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-x-clip"
        style={{
          background: HERO_BG,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER} w-full`}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8 animate-fade-in">
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10b981",
                    flexShrink: 0,
                    animation: "dotPulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-[11px] font-mono tracking-[0.25em] uppercase"
                  style={{ color: "rgba(56,189,248,0.72)" }}
                >
                  {h.eyebrow}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6 animate-fade-in-up"
                style={{ color: "#ffffff" }}
              >
                {h.heroTitleLead}{" "}
                <GradientText>{h.heroTitleAccent}</GradientText>
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up-delay-1"
                style={{ color: TEXT_BODY }}
              >
                {h.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
                <PrimaryCta href={refreshHref}>{c.nav.cta}</PrimaryCta>
                <SecondaryCta href={intake}>{c.common.tellUsNeed}</SecondaryCta>
              </div>

              <p
                className="mt-8 text-xs animate-fade-in-up-delay-3"
                style={{ color: TEXT_MUTED }}
              >
                {h.heroOfferLabel}
                <span style={{ color: "rgba(56,189,248,0.75)" }}>
                  {formatPrice(PRICE.digitalRefresh, locale)}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center mt-4 md:mt-0 w-full min-h-[314px] md:min-h-[392px] overflow-hidden isolate">
              <HeroOrbitPanel />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        className={`relative overflow-hidden py-16 md:py-24`}
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-3xl mb-10">
            <SectionLabel>{h.problemLabel}</SectionLabel>
            <h2
              className="text-2xl md:text-4xl font-bold leading-tight"
              style={{ color: "#ffffff" }}
            >
              {h.problemTitleLead}{" "}
              <GradientText>{h.problemTitleAccent}</GradientText>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.problemPoints.map((point, i) => (
              <div
                key={point}
                className="rounded-2xl p-7"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <RomanLabel n={i + 1} className="mb-4" />
                <p
                  className="text-sm md:text-[15px] leading-relaxed mt-3"
                  style={{ color: TEXT_BODY }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section
        id="what-we-build"
        className={`relative overflow-hidden py-16 md:py-24`}
        style={{ background: sectionBg("b") }}
      >
        <FogBackdrop variant="green" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-2xl mb-12">
            <SectionLabel>{h.buildLabel}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              style={{ color: "#ffffff" }}
            >
              {h.buildTitle}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              {h.buildIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.buildCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <RomanLabel n={i + 1} className="mb-4" />
                <div className="w-8 h-1 rounded-full mb-4 mt-3" style={{ background: GRADIENT }} />
                <h3 className="text-base font-semibold mb-2" style={{ color: TEXT_CARD_TITLE }}>
                  {cat.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service paths */}
      <section
        className={`relative overflow-hidden py-12 md:py-16`}
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-2xl mb-8">
            <SectionLabel>{h.servicesLabel}</SectionLabel>
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight mb-3"
              style={{ color: "#ffffff" }}
            >
              {h.servicesTitle}
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              {h.servicesIntro}
            </p>
          </div>

          <div
            className="rounded-2xl p-7 md:p-9 mb-5"
            style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.22)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-1" style={{ color: TEXT_CARD_TITLE }}>
                  {h.refreshTitle}
                </h3>
                <p className="text-sm font-mono" style={{ color: "rgba(56,189,248,0.85)" }}>
                  {formatPrice(PRICE.digitalRefreshFlat, locale)}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-6 max-w-3xl" style={{ color: TEXT_BODY }}>
              {h.refreshSummary}
            </p>

            <div
              className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
              style={{ color: TEXT_MUTED }}
            >
              {c.common.includes}
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {h.refreshIncludes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-4">
              <PrimaryCta href={refreshHref}>{c.services.areas[0].cta}</PrimaryCta>
              <SecondaryCta href={intake}>{c.common.tellUsNeed}</SecondaryCta>
            </div>

            <p className="text-xs leading-relaxed max-w-2xl" style={{ color: TEXT_MUTED }}>
              {offerDisclaimer}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {h.secondaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-5 flex flex-col h-full"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <h3 className="text-base font-semibold mb-1" style={{ color: TEXT_CARD_TITLE }}>
                  {card.title}
                </h3>
                <p className="text-[11px] font-mono mb-2.5" style={{ color: "rgba(56,189,248,0.75)" }}>
                  {formatPrice(card.price, locale)}
                </p>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: TEXT_BODY }}>
                  {card.description}
                </p>
                <SecondaryCta href={resolveHref(card.href, locale)}>{card.cta}</SecondaryCta>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section
        className={`relative overflow-hidden py-14 md:py-20`}
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-2xl mb-10">
            <SectionLabel>{h.whoLabel}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              style={{ color: "#ffffff" }}
            >
              {h.whoTitleLead}{" "}
              <GradientText>{h.whoTitleAccent}</GradientText>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              {h.whoIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {h.whoItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-7"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <RomanLabel n={i + 1} className="mb-4" />
                <h3 className="text-base font-semibold mb-2 mt-3" style={{ color: TEXT_CARD_TITLE }}>
                  {item.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / internal systems */}
      <section
        className={`relative overflow-hidden py-14 md:py-20`}
        style={{ background: sectionBg("b") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-2xl mb-10">
            <SectionLabel>{h.proofLabel}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: "#ffffff" }}>
              {h.proofTitleLead}{" "}
              <GradientText>{h.proofTitleAccent}</GradientText>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
              {h.proofIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {h.proofCards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl p-7"
                style={{ background: CARD_BG, border: "1px solid rgba(14,165,233,0.12)" }}
              >
                <RomanLabel n={i + 1} className="mb-4" />
                <h3 className="text-sm font-semibold mb-2 mt-3" style={{ color: TEXT_CARD_TITLE }}>
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link
              href={resolveHref("/work", locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#38bdf8" }}
            >
              {h.proofSeeWork} <Arrow />
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
              {h.proofNote}
            </p>
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section
        className={`relative overflow-hidden py-14 md:py-20`}
        style={{ background: sectionBg("b") }}
      >
        <FogBackdrop variant="green" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <SectionLabel>{h.workLabel}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
                {h.workTitle}
              </h2>
            </div>
            <Link
              href={resolveHref("/work", locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 self-start md:self-auto"
              style={{ color: "#38bdf8" }}
            >
              {h.workViewAll} <Arrow />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {h.workCategories.map((title) => (
              <span
                key={title}
                className="px-4 py-2.5 rounded-full text-sm"
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section
        className={`relative overflow-hidden py-14 md:py-[5.5rem]`}
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <SectionLabel>{h.processLabel}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
                {h.processTitle}
              </h2>
            </div>
            <Link
              href={resolveHref("/process", locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 self-start md:self-auto"
              style={{ color: "#38bdf8" }}
            >
              {h.processSeeFull} <Arrow />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.processSteps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl p-7"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <RomanLabel n={i + 1} className="mb-4" />
                <h3 className="text-base font-semibold mb-2 mt-3" style={{ color: TEXT_CARD_TITLE }}>
                  {step.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        className={`relative overflow-hidden py-12 md:py-16`}
        style={{ background: sectionBg("b") }}
      >
        <FogBackdrop variant="green" />
        <SpotlightBackdrop />
        <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
          <SectionLabel>{h.trustLabel}</SectionLabel>
          <p
            className="text-lg md:text-xl font-normal leading-relaxed mb-5"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {h.trustLead}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
            {h.trustSub}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`relative overflow-hidden py-16 md:py-[5.5rem]`}
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
          <SectionLabel>{h.ctaLabel}</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#ffffff" }}>
            {h.ctaTitleLead} <GradientText>{h.ctaTitleAccent}</GradientText>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: TEXT_BODY }}
          >
            {h.ctaIntro}
          </p>
          <div className="flex justify-center">
            <PrimaryCta href={intake}>{c.common.tellUsImprove}</PrimaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
