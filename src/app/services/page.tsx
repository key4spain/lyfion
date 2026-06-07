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
  GradientText,
  RomanLabel,
  Check,
  PrimaryCta,
  SecondaryCta,
  PageHeader,
  INTAKE_FORM_URL,
  BASE,
} from "../_shared";
import {
  SERVICE_AREAS,
  ADD_ONS,
  COMPARISON_ROWS,
  SYSTEM_REVIEW,
  NOT_SURE_GUIDE,
  type ServiceArea,
  type ServicePackage,
} from "../_services-data";
import { PAGE_SEO, PageStructuredData } from "../_structured-data";

export const metadata: Metadata = {
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  alternates: {
    canonical: PAGE_SEO.services.path,
  },
};

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";
const SECTION_PAD = "py-16 md:py-20";

function PackageCard({ pkg }: { pkg: ServicePackage }) {
  return (
    <div
      className="rounded-2xl p-6 md:p-7 h-full flex flex-col"
      style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <h4 className="text-lg font-semibold" style={{ color: TEXT_CARD_TITLE }}>
          {pkg.name}
        </h4>
        <span
          className="text-sm font-mono whitespace-nowrap"
          style={{ color: "rgba(56,189,248,0.85)" }}
        >
          {pkg.price}
        </span>
      </div>
      <p className="text-sm leading-relaxed mb-5" style={{ color: TEXT_BODY }}>
        <span className="font-semibold" style={{ color: "rgba(56,189,248,0.75)" }}>
          Best for:{" "}
        </span>
        {pkg.bestFor}
      </p>
      <div
        className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
        style={{ color: TEXT_MUTED }}
      >
        Includes
      </div>
      <ul className="space-y-2.5 mb-5 flex-1">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check />
            <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
      {pkg.notIncluded && pkg.notIncluded.length > 0 && (
        <>
          <div
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
            style={{ color: TEXT_MUTED }}
          >
            Not included
          </div>
          <ul className="space-y-2 mb-5">
            {pkg.notIncluded.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed pl-5 relative"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span className="absolute left-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
      {pkg.cta && pkg.ctaHref && (
        <PrimaryCta href={pkg.ctaHref}>{pkg.cta}</PrimaryCta>
      )}
    </div>
  );
}

function ServiceAreaSection({
  area,
  index,
}: {
  area: ServiceArea;
  index: number;
}) {
  return (
    <section
      id={area.id}
      className={`relative overflow-hidden scroll-mt-24 ${SECTION_PAD}`}
      style={{ background: index % 2 === 0 ? sectionBg("a") : sectionBg("b") }}
    >
      <FogBackdrop variant={index % 2 === 0 ? "blue" : "green"} />
      <SpotlightBackdrop position="top" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <RomanLabel n={index + 1} total={SERVICE_AREAS.length} className="mb-5" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-10">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3" style={{ color: "#ffffff" }}>
              {area.title}
            </h2>
            <p
              className="text-sm font-mono mb-4"
              style={{ color: "rgba(56,189,248,0.85)" }}
            >
              {area.price}
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: TEXT_BODY }}>
              {area.summary}
            </p>
            {area.includes && (
              <>
                <div
                  className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
                  style={{ color: TEXT_MUTED }}
                >
                  Main focus
                </div>
                <ul className="space-y-2.5 mb-6">
                  {area.includes.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check />
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {area.notes?.map((note) => (
              <p key={note} className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                {note}
              </p>
            ))}
            {area.id === "ready-business-kit" && (
              <p className="text-xs leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                Not included: full custom platform, advanced CRM automation, daily posting, paid ads management, or guaranteed sales.
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <PrimaryCta href={area.ctaHref}>{area.cta}</PrimaryCta>
              {area.id === "ready-business-kit" && (
                <SecondaryCta href={`${BASE}/catalog`}>View ready catalog</SecondaryCta>
              )}
            </div>
          </div>
          <div className="lg:col-span-7 grid gap-5">
            {area.packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageStructuredData page="services" />
      <PageHeader
        label="Services"
        title="Four ways to build the digital layer behind your business."
        intro="Choose the entry point that fits your current stage. If you are unsure, start with a review and we will map the cleanest first step."
      />

      {SERVICE_AREAS.map((area, i) => (
        <ServiceAreaSection key={area.id} area={area} index={i} />
      ))}

      {/* Add-ons */}
      <section
        id="add-ons"
        className={`relative overflow-hidden scroll-mt-24 ${SECTION_PAD}`}
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <SectionHeading title="Optional Add-ons" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map((item) => (
              <div
                key={item.name}
                className="rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                  {item.name}
                </span>
                <span className="text-xs font-mono whitespace-nowrap" style={{ color: "rgba(56,189,248,0.8)" }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color: TEXT_MUTED }}>
            Add-ons are scoped separately. No checkout or automatic purchase on this site.
          </p>
        </div>
      </section>

      {/* System Review */}
      <section
        id="system-review"
        className={`relative overflow-hidden scroll-mt-24 ${SECTION_PAD}`}
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <SpotlightBackdrop position="top" />
        <div className={`relative z-10 ${CONTAINER} max-w-4xl`}>
          <SectionHeading title="System Review" />
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
          >
            <p className="text-sm font-mono mb-4" style={{ color: "rgba(56,189,248,0.85)" }}>
              {SYSTEM_REVIEW.price}
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: TEXT_BODY }}>
              {SYSTEM_REVIEW.summary}
            </p>
            <div
              className="text-xs font-semibold tracking-[0.16em] uppercase mb-3"
              style={{ color: TEXT_MUTED }}
            >
              Required for
            </div>
            <ul className="space-y-2 mb-6">
              {SYSTEM_REVIEW.requiredFor.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
              {SYSTEM_REVIEW.note}
            </p>
            <PrimaryCta href={INTAKE_FORM_URL}>Book a system review</PrimaryCta>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        className={`relative overflow-hidden scroll-mt-24 ${SECTION_PAD}`}
        style={{ background: sectionBg("b") }}
      >
        <FogBackdrop variant="green" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <SectionHeading title="Compare entry points" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr>
                  {["Package", "Best for", "Starting price", "Main outcome"].map((h) => (
                    <th
                      key={h}
                      className="text-xs font-semibold tracking-[0.14em] uppercase pb-4 pr-4"
                      style={{ color: TEXT_MUTED }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.package}
                    style={{ borderTop: `1px solid ${CARD_BORDER}` }}
                  >
                    <td className="py-4 pr-4 text-sm font-semibold" style={{ color: TEXT_CARD_TITLE }}>
                      {row.package}
                    </td>
                    <td className="py-4 pr-4 text-sm" style={{ color: TEXT_BODY }}>
                      {row.bestFor}
                    </td>
                    <td className="py-4 pr-4 text-sm font-mono whitespace-nowrap" style={{ color: "rgba(56,189,248,0.85)" }}>
                      {row.startingPrice}
                    </td>
                    <td className="py-4 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Not sure */}
      <section
        className={`relative overflow-hidden ${SECTION_PAD}`}
        style={{ background: sectionBg("deep") }}
      >
        <FogBackdrop variant="deep" />
        <SpotlightBackdrop />
        <div className={`relative z-10 ${CONTAINER} max-w-3xl`}>
          <SectionHeading title="Not sure what to choose?" />
          <div className="space-y-4 mb-8">
            {NOT_SURE_GUIDE.map((item) => (
              <p key={item.choose} className="text-base leading-relaxed" style={{ color: TEXT_BODY }}>
                Choose <GradientText>{item.choose}</GradientText> if {item.when}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <PrimaryCta href={INTAKE_FORM_URL}>Tell us what you want to build</PrimaryCta>
            <SecondaryCta href={`${BASE}/catalog`}>View ready catalog</SecondaryCta>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-bold leading-tight mb-8"
      style={{ color: "#ffffff" }}
    >
      {title}
    </h2>
  );
}
