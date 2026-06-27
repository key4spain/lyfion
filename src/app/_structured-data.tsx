import type { Metadata } from "next";
import { BRAND_ICON_512, DIRECT_EMAIL, SOCIAL_SAME_AS, SUPPORT_EMAIL } from "./_shared";
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

  if (page === "services") blocks.push(servicesItemListJsonLd(locale));
  if (page === "catalog") blocks.push(catalogItemListJsonLd(locale));

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
