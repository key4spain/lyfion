import type { Metadata } from "next";
import { BRAND_ICON_512, DIRECT_EMAIL, SOCIAL_SAME_AS, SUPPORT_EMAIL } from "./_shared";
import { PRICE, type Money } from "./_i18n/prices";
import {
  type Locale,
  getContent,
  localizePath,
  LOCALES,
} from "./_i18n";

export const SITE_URL = "https://lyfion.digital";

const ORG_NAME = "Lyfion Digital";
const WEBSITE_NAME = "Lyfion.digital";

export type StructuredPage =
  | "home"
  | "services"
  | "catalog"
  | "process"
  | "work"
  | "contact";

// Neutral (EN) path per page.
export const PAGE_PATH: Record<StructuredPage, string> = {
  home: "/",
  services: "/services",
  catalog: "/catalog",
  process: "/process",
  work: "/work",
  contact: "/contact",
};

function absUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function localeUrl(neutralPath: string, locale: Locale): string {
  return absUrl(localizePath(neutralPath, locale));
}

/** Per-page metadata: localized title/description, canonical + hreflang alternates. */
export function buildMetadata(page: StructuredPage, locale: Locale): Metadata {
  const meta = getContent(locale).meta[page];
  const neutral = PAGE_PATH[page];
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = localeUrl(neutral, l);
  languages["x-default"] = localeUrl(neutral, "en");

  return {
    title: page === "home" ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: localeUrl(neutral, locale),
      languages,
    },
  };
}

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    email: SUPPORT_EMAIL,
    description:
      "Lyfion Digital builds practical digital systems, websites, lead intake flows, content workflows, automation-ready structures, and AI-assisted production workflows.",
    brand: { "@type": "Brand", name: ORG_NAME },
    logo: absUrl(BRAND_ICON_512),
    sameAs: [...SOCIAL_SAME_AS],
    subOrganization: [
      {
        "@type": "Organization",
        name: "LYFION LLC",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould St Ste R",
          addressLocality: "Sheridan",
          addressRegion: "WY",
          postalCode: "82801",
          addressCountry: "US",
        },
        email: SUPPORT_EMAIL,
      },
      {
        "@type": "Organization",
        name: "LYFION S.L.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rambla Catalunya, 38",
          addressLocality: "Barcelona",
          postalCode: "08007",
          addressCountry: "ES",
        },
        taxID: "B24818064",
        email: DIRECT_EMAIL,
      },
    ],
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WEBSITE_NAME,
    url: SITE_URL,
    description:
      "Practical digital systems, websites, workflows, and AI-assisted production structures for modern business execution.",
    publisher: { "@type": "Organization", name: ORG_NAME },
  };
}

function breadcrumbJsonLd(
  crumbs: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

const SERVICE_AREA_SERVED = ["International", "Europe", "United States", "Spain"];

function servicesItemListJsonLd(locale: Locale): Record<string, unknown> {
  const areas = getContent(locale).services.areas;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Lyfion Digital Services",
    itemListElement: areas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: area.title,
        description: area.summary,
        provider: { "@type": "Organization", name: ORG_NAME },
        serviceType: area.title,
        areaServed: SERVICE_AREA_SERVED,
        url: `${localeUrl("/services", locale)}#${area.id}`,
      },
    })),
  };
}

function catalogItemListJsonLd(locale: Locale): Record<string, unknown> {
  const items = getContent(locale).catalog.items;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ready Business Catalog",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.name,
        description: item.bestFor,
        url: `${localeUrl("/catalog", locale)}#${item.id}`,
      },
    })),
  };
}

function webPageJsonLd(
  page: StructuredPage,
  locale: Locale,
  pageType: "WebPage" | "ContactPage"
): Record<string, unknown> {
  const meta = getContent(locale).meta[page];
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    name: meta.title,
    description: meta.description,
    url: localeUrl(PAGE_PATH[page], locale),
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", name: WEBSITE_NAME, url: SITE_URL },
    about: { "@type": "Organization", name: ORG_NAME },
  };
}

const MAIN_OFFERS: Array<{ name: string; money: Money }> = [
  { name: "Digital Refresh", money: PRICE.digitalRefresh },
  { name: "Ready Business Kit", money: PRICE.readyBusinessKit },
  { name: "AI Content Workflow", money: PRICE.aiContentWorkflow },
  { name: "Digital System Build", money: PRICE.digitalSystemBuild },
];

function offerCatalogJsonLd(locale: Locale): Record<string, unknown> {
  const currency = locale === "es" ? "EUR" : "USD";
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Lyfion Digital Packages",
    provider: { "@type": "Organization", name: ORG_NAME },
    itemListElement: MAIN_OFFERS.map((o) => ({
      "@type": "Offer",
      name: o.name,
      priceCurrency: currency,
      price: locale === "es" ? o.money.eur : o.money.usd,
      description: o.money.from
        ? "Starting price; final price depends on scope"
        : undefined,
      itemOffered: {
        "@type": "Service",
        name: o.name,
        provider: { "@type": "Organization", name: ORG_NAME },
        areaServed: SERVICE_AREA_SERVED,
      },
    })),
  };
}

type Faq = { q: string; a: string };

const FAQ_EN: Faq[] = [
  { q: "What does Lyfion Digital do?", a: "Lyfion Digital builds practical digital systems for businesses: websites, lead-intake flows, CRM and form setup, content and AI-assisted production workflows, and AI-visibility (AEO/GEO/LLMO) structure." },
  { q: "How much does a project cost?", a: "Packages start at $499 for a Digital Refresh, $800 for a Ready Business Kit, $1,999 for an AI Content Workflow, and $2,850 for a Digital System Build. The final price depends on scope." },
  { q: "How long does a project take?", a: "Most Digital Refresh and Ready Business Kit projects deliver in a few days to a couple of weeks. Larger system builds take longer depending on scope." },
  { q: "What languages do you work in?", a: "English and Spanish, with additional website language versions available as an add-on." },
  { q: "How do we start?", a: "Send a short brief through the contact form or book a call. You get a clear scope and a fixed starting price before any work begins." },
  { q: "Where is Lyfion based?", a: "Lyfion operates internationally through LYFION LLC in the US and LYFION S.L. in Barcelona, Spain, serving clients across Europe, the US, and Spain." },
];

const FAQ_ES: Faq[] = [
  { q: "¿Qué hace Lyfion Digital?", a: "Lyfion Digital crea sistemas digitales prácticos para negocios: webs, flujos de captación de leads, configuración de CRM y formularios, flujos de contenido y producción asistida por IA, y estructura de visibilidad en IA (AEO/GEO/LLMO)." },
  { q: "¿Cuánto cuesta un proyecto?", a: "Los paquetes empiezan en 429 € (Digital Refresh), 699 € (Ready Business Kit), 1.750 € (AI Content Workflow) y 2.500 € (Digital System Build). El precio final depende del alcance." },
  { q: "¿Cuánto tarda un proyecto?", a: "La mayoría de los proyectos Digital Refresh y Ready Business Kit se entregan en unos días o un par de semanas. Los sistemas más grandes tardan más según el alcance." },
  { q: "¿En qué idiomas trabajáis?", a: "Inglés y español, con versiones adicionales de la web en otros idiomas como complemento." },
  { q: "¿Cómo empezamos?", a: "Envía un brief breve por el formulario de contacto o reserva una llamada. Recibes un alcance claro y un precio inicial fijo antes de empezar." },
  { q: "¿Dónde está Lyfion?", a: "Lyfion opera internacionalmente a través de LYFION LLC en EE. UU. y LYFION S.L. en Barcelona, España, atendiendo a clientes en Europa, EE. UU. y España." },
];

function faqJsonLd(locale: Locale): Record<string, unknown> {
  const faqs = locale === "es" ? FAQ_ES : FAQ_EN;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function pageStructuredData(
  page: StructuredPage,
  locale: Locale
): Record<string, unknown>[] {
  const c = getContent(locale);
  const crumbs = [{ name: c.nav.items[0].label, url: localeUrl("/", locale) }];
  if (page !== "home") {
    crumbs.push({
      name: c.meta[page].title,
      url: localeUrl(PAGE_PATH[page], locale),
    });
  }

  const blocks: Record<string, unknown>[] = [
    breadcrumbJsonLd(crumbs),
    webPageJsonLd(page, locale, page === "contact" ? "ContactPage" : "WebPage"),
  ];

  if (page === "services") {
    blocks.push(servicesItemListJsonLd(locale));
    blocks.push(offerCatalogJsonLd(locale));
    blocks.push(faqJsonLd(locale));
  }
  if (page === "catalog") blocks.push(catalogItemListJsonLd(locale));
  if (page === "home") blocks.push(faqJsonLd(locale));

  return blocks;
}

export function PageStructuredData({
  page,
  locale,
}: {
  page: StructuredPage;
  locale: Locale;
}) {
  return (
    <>
      {pageStructuredData(page, locale).map((block, index) => (
        <JsonLd key={`${String(block["@type"])}-${index}`} data={block} />
      ))}
    </>
  );
}

export function SiteStructuredData() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
