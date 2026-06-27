// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — locale config + path mirroring.
// Static export: no middleware/redirects/cookies on the server. Locale is decided
// by route ( "/" = EN, "/es/*" = ES ) and a tiny client script (see _locale-boot).
// ─────────────────────────────────────────────────────────────────────────────

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

// Persisted manual choice (client only).
export const LOCALE_STORAGE_KEY = "lyfion_locale";
export const LOCALE_COOKIE = "lyfion_locale";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Currency shown for a locale: ES → EUR, everything else → USD. */
export function currencyForLocale(locale: Locale): "EUR" | "USD" {
  return locale === "es" ? "EUR" : "USD";
}

/** Locale implied by a pathname. "/es" or "/es/..." → es, otherwise en. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/** Strip the locale prefix → canonical (EN) path. "/es/services" → "/services". */
export function toNeutralPath(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

/** Build the path for a neutral (EN) path in the target locale. */
export function localizePath(neutralPath: string, locale: Locale): string {
  const clean = neutralPath || "/";
  if (locale === "en") return clean;
  return clean === "/" ? "/es" : `/es${clean}`;
}

/** Mirror the current pathname to the target locale. */
export function mirrorPath(pathname: string, target: Locale): string {
  return localizePath(toNeutralPath(pathname), target);
}
