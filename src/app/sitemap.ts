import type { MetadataRoute } from "next";
import { SITE_URL, PAGE_PATH, type StructuredPage } from "./_structured-data";
import { localizePath, LOCALES } from "./_i18n";

export const dynamic = "force-static";

function abs(neutral: string, locale: (typeof LOCALES)[number]): string {
  const path = localizePath(neutral, locale);
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(PAGE_PATH) as StructuredPage[];
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const neutral = PAGE_PATH[page];
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[l] = abs(neutral, l);

    for (const l of LOCALES) {
      entries.push({
        url: abs(neutral, l),
        changeFrequency: "monthly",
        priority: page === "home" ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
