import { en } from "./en";
import { es } from "./es";
import type { Content } from "./dictionary";
import { type Locale, localizePath } from "./config";
import { INTAKE_FORM_URL } from "../_constants";

const DICTS: Record<Locale, Content> = { en, es };

export function getContent(locale: Locale): Content {
  return DICTS[locale];
}

/**
 * Resolve a dictionary href for the active locale.
 * - "INTAKE" sentinel → the Jotform intake URL
 * - external (http / mailto) → unchanged
 * - internal path (optionally with #hash) → locale-prefixed
 */
export function resolveHref(href: string, locale: Locale): string {
  if (href === "INTAKE") return INTAKE_FORM_URL;
  if (href.startsWith("http") || href.startsWith("mailto:")) return href;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return localizePath(href, locale);
  const path = href.slice(0, hashIndex);
  const hash = href.slice(hashIndex);
  return `${localizePath(path, locale)}${hash}`;
}

export * from "./config";
export * from "./prices";
export type { Content } from "./dictionary";
export type {
  ServiceArea,
  ServicePackage,
  CatalogItem,
  AddOn,
  ComparisonRow,
  Card,
  CatalogStatus,
} from "./dictionary";
