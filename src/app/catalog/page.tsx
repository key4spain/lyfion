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
  Check,
  PrimaryCta,
  SecondaryCta,
  PageHeader,
  BASE,
} from "../_shared";
import {
  CATALOG_ITEMS,
  CATALOG_CATEGORIES,
  CATALOG_REQUEST_URL,
} from "../_services-data";

export const metadata: Metadata = {
  title: "Ready Business Catalog",
  description:
    "Ready-made business websites, shops, landing pages, and web app starting models that can be adapted, built, and deployed on Vercel.",
};

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-10 lg:px-12";

function statusStyle(status: string) {
  if (status === "Available for build") return "rgba(56,189,248,0.85)";
  if (status === "Demo ready") return "rgba(16,185,129,0.85)";
  if (status === "In production") return "rgba(56,189,248,0.85)";
  return "rgba(148,163,184,0.85)";
}

export default function CatalogPage() {
  return (
    <>
      <PageHeader
        label="Catalog"
        title="Ready-made business websites and launch kits."
        intro="Choose a starting model. Each item can be adapted with your name, offer, colors, contact details, lead form, and launch materials."
      />

      <section
        className="relative overflow-hidden py-12 md:py-16"
        style={{ background: sectionBg("a") }}
      >
        <FogBackdrop variant="blue" />
        <div className={`relative z-10 ${CONTAINER}`}>
          <p className="text-sm leading-relaxed max-w-3xl mb-8" style={{ color: TEXT_MUTED }}>
            Categories: {CATALOG_CATEGORIES.join(" · ")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {CATALOG_ITEMS.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl p-7 flex flex-col h-full"
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
                    {item.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_BODY }}>
                  <span className="font-semibold" style={{ color: "rgba(56,189,248,0.75)" }}>
                    Best for:{" "}
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
                    Starting {item.startingPrice}
                  </span>
                  <a
                    href={CATALOG_REQUEST_URL}
                    className="text-xs font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "#38bdf8" }}
                  >
                    Request this model
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
            Catalog models are starting points. Final content, scope, timeline, and price are confirmed before work begins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryCta href={CATALOG_REQUEST_URL}>Request a catalog model</PrimaryCta>
            <SecondaryCta href={`${BASE}/services#ready-business-kit`}>
              View Ready Business Kit
            </SecondaryCta>
          </div>
        </div>
      </section>
    </>
  );
}
