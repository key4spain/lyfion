import { BRAND_ICON_512, DIRECT_EMAIL, SUPPORT_EMAIL } from "./_shared";
import { CATALOG_ITEMS, SERVICE_AREAS } from "./_services-data";

export const SITE_URL = "https://lyfion.digital";

const ORG_NAME = "Lyfion Digital";
const WEBSITE_NAME = "Lyfion.digital";

export const PAGE_SEO = {
  home: {
    title: "Lyfion.digital | Digital Systems, Websites and Automation Workflows",
    description:
      "Practical digital systems, websites, lead intake flows, content workflows, and automation-ready structures for businesses that need a clearer digital layer.",
    path: "/",
  },
  services: {
    title: "Services",
    description:
      "Explore Lyfion Digital services: Digital Refresh, Ready Business Kit, Digital System Build, AI Content Workflow, add-ons, and system review options.",
    path: "/services",
  },
  catalog: {
    title: "Ready Business Catalog",
    description:
      "Ready-made business website, landing page, shop, and web app starting models that can be adapted, built, and launched with Lyfion Digital.",
    path: "/catalog",
  },
  process: {
    title: "Process",
    description:
      "See how Lyfion Digital moves from review to structure, build, QA, handoff, and the next practical step.",
    path: "/process",
  },
  work: {
    title: "Work",
    description:
      "Selected Lyfion Digital work directions, internal systems, catalog models, digital refresh structures, and AI content workflow foundations.",
    path: "/work",
  },
  contact: {
    title: "Tell us what you want to improve",
    description:
      "Tell Lyfion Digital what you want to improve. Send your current website, profile, lead flow, or workflow problem and get the clearest next step.",
    path: "/contact",
  },
} as const;

export type StructuredPage = keyof typeof PAGE_SEO;

function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function pageCanonical(path: string) {
  return absoluteUrl(path);
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
    brand: {
      "@type": "Brand",
      name: ORG_NAME,
    },
    logo: absoluteUrl(BRAND_ICON_512),
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
          streetAddress: "Rbla Catalunya, 38",
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
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
    },
  };
}

export function breadcrumbJsonLd(
  crumbs: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

const SERVICE_AREA_SERVED = [
  "International",
  "Europe",
  "United States",
  "Spain",
];

export function servicesItemListJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Lyfion Digital Services",
    itemListElement: SERVICE_AREAS.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: area.title,
        description: area.summary,
        provider: {
          "@type": "Organization",
          name: ORG_NAME,
        },
        serviceType: area.title,
        areaServed: SERVICE_AREA_SERVED,
        url: `${SITE_URL}/services#${area.id}`,
      },
    })),
  };
}

export function catalogItemListJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ready Business Catalog",
    itemListElement: CATALOG_ITEMS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.name,
        description: `${item.bestFor}. Starting models adapted with your name, offer, colors, contact details, and lead form.`,
        url: `${SITE_URL}/catalog#${item.id}`,
      },
    })),
  };
}

export function webPageJsonLd(
  page: StructuredPage,
  pageType: "WebPage" | "ContactPage" = "WebPage"
): Record<string, unknown> {
  const seo = PAGE_SEO[page];
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    name: seo.title,
    description: seo.description,
    url: absoluteUrl(seo.path),
    isPartOf: {
      "@type": "WebSite",
      name: WEBSITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: ORG_NAME,
    },
  };
}

export function pageStructuredData(page: StructuredPage) {
  const seo = PAGE_SEO[page];
  const crumbs = [{ name: "Home", path: "/" }];
  if (page !== "home") {
    crumbs.push({ name: seo.title, path: seo.path });
  }

  const blocks: Record<string, unknown>[] = [
    breadcrumbJsonLd(crumbs),
    webPageJsonLd(page, page === "contact" ? "ContactPage" : "WebPage"),
  ];

  if (page === "services") {
    blocks.push(servicesItemListJsonLd());
  }

  if (page === "catalog") {
    blocks.push(catalogItemListJsonLd());
  }

  return blocks;
}

export function PageStructuredData({ page }: { page: StructuredPage }) {
  return (
    <>
      {pageStructuredData(page).map((block, index) => (
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
