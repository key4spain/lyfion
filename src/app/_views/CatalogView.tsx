import {
  CARD_BG,
  CARD_BORDER,
  TEXT_BODY,
  TEXT_MUTED,
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
import {
  type Locale,
  type CatalogStatus,
  getContent,
  resolveHref,
  formatStartingPrice,
} from "../_i18n";

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";

function statusStyle(status: CatalogStatus) {
  if (status === "demo") return "rgba(16,185,129,0.85)";
  return "rgba(56,189,248,0.85)";
}

export default function CatalogView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const cat = c.catalog;
  const requestUrl = INTAKE_FORM_URL;

  return (
    <>
      <PageStructuredData page="catalog" locale={locale} />
      <PageHeader label={cat.headerLabel} title={cat.headerTitle} intro={cat.headerIntro} />

      <section
        className="relative overflow-hidden py-12 md:py-16"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <p className="text-sm leading-relaxed max-w-3xl mb-8" style={{ color: TEXT_MUTED }}>
            {cat.categoriesLabel}
            {cat.categories.join(" · ")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {cat.items.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="rounded-2xl p-7 flex flex-col h-full scroll-mt-24"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p
                      className="text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
                      style={{ color: "rgba(56,189,248,0.72)" }}
                    >
                      {item.category}
                    </p>
                    <h2 className="text-xl font-semibold" style={{ color: TEXT_CARD_TITLE }}>
                      {item.name}
                    </h2>
                  </div>
                  <span
                    className="text-[10px] font-mono uppercase tracking-[0.12em] whitespace-nowrap px-2.5 py-1 rounded-full"
                    style={{
                      color: statusStyle(item.status),
                      border: `1px solid ${CARD_BORDER}`,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {c.common.catalogStatus[item.status]}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_BODY }}>
                  <span className="font-semibold" style={{ color: "rgba(56,189,248,0.75)" }}>
                    {c.common.bestFor}
                  </span>
                  {item.bestFor}
                </p>
                <ul className="space-y-2 mb-5 flex-1">
                  {item.includes.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <Check />
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-4 pt-4" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
                  <span className="text-sm font-mono" style={{ color: "rgba(56,189,248,0.85)" }}>
                    {formatStartingPrice(item.startingPrice, locale)}
                  </span>
                  <a
                    href={requestUrl}
                    rel="noopener noreferrer"
                    className="text-xs font-semibold transition-opacity hover:opacity-80 cursor-pointer"
                    style={{ color: "#38bdf8" }}
                  >
                    {cat.requestModel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-14 md:py-18"
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop />
        <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
          <p className="text-base leading-relaxed mb-6" style={{ color: TEXT_BODY }}>
            {cat.footnote}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryCta href={requestUrl}>{cat.requestCta}</PrimaryCta>
            <SecondaryCta href={resolveHref("/services#ready-business-kit", locale)}>
              {c.home.secondaryCards[0].cta}
            </SecondaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
