export const STORAGE_KEY = "lyfion-cookie-consent";
export const COOKIE_CONSENT_UPDATED_EVENT = "lyfion-cookie-consent-updated";

export type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  interactive: boolean;
  decided: true;
};

export function readPrefs(): CookiePrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePrefs;
  } catch {
    return null;
  }
}

export function savePrefs(prefs: CookiePrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: prefs })
  );
}

export function analyticsAllowed(): boolean {
  return readPrefs()?.analytics === true;
}
