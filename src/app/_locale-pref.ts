// Client-side persistence of the manual language choice (static export: no server cookies).
import { LOCALE_STORAGE_KEY, LOCALE_COOKIE, type Locale } from "./_i18n";

export function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    // 1-year cookie too, in case the hosting ever serves dynamically.
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    // Ignore storage failures (private mode, etc.).
  }
}
