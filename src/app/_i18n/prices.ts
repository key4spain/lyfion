// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — single source of truth for prices + locale-aware formatting.
// Numbers live ONCE here. EN renders USD only ($). ES renders EUR only (€).
// Never render both currencies at once.
// ─────────────────────────────────────────────────────────────────────────────

import type { Locale } from "./config";

export type Money = {
  eur: number;
  usd: number;
  from?: boolean; // prefix "From " / "Desde "
  per?: "month"; // suffix " / month" / " / mes"
};

// A price is either a structured Money value or a pre-localized custom string
// (e.g. "Custom scope after review" / "Alcance personalizado tras la revisión").
export type Price = Money | string;

const WORDS = {
  en: { from: "From ", perMonth: " / month", starting: "Starting " },
  es: { from: "Desde ", perMonth: " / mes", starting: "Desde " },
} as const;

// Deterministic thousands grouping (independent of Node's ICU locale data).
function group(value: number, separator: string): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

function amountFor(money: Money, locale: Locale): string {
  // ES → EUR with "." thousands; EN → USD with "," thousands.
  return locale === "es"
    ? `€${group(money.eur, ".")}`
    : `$${group(money.usd, ",")}`;
}

/** Format a structured Money value in the locale's single currency. */
export function formatMoney(money: Money, locale: Locale): string {
  const w = WORDS[locale];
  const prefix = money.from ? w.from : "";
  const suffix = money.per === "month" ? w.perMonth : "";
  return `${prefix}${amountFor(money, locale)}${suffix}`;
}

/** Format any Price (Money or custom string) for the locale. */
export function formatPrice(price: Price, locale: Locale): string {
  return typeof price === "string" ? price : formatMoney(price, locale);
}

/** "Starting €699" / "Desde €699" — catalog cards. */
export function formatStartingPrice(price: Price, locale: Locale): string {
  if (typeof price === "string") return price;
  return `${WORDS[locale].starting}${amountFor(price, locale)}`;
}

// ─── Named price values (reused across pages, defined once) ───────────────────

export const PRICE = {
  digitalRefresh: { from: true, eur: 429, usd: 499 } as Money,
  readyBusinessKit: { from: true, eur: 699, usd: 800 } as Money,
  digitalSystemBuild: { from: true, eur: 2500, usd: 2850 } as Money,
  aiContentWorkflow: { from: true, eur: 1750, usd: 1999 } as Money,

  // Exact (no "From") variants used on cards/tables.
  digitalRefreshFlat: { eur: 429, usd: 499 } as Money,
  readyBusinessKitFlat: { eur: 699, usd: 800 } as Money,

  // Digital Refresh packages
  drBasic: { eur: 429, usd: 499 } as Money,
  drPlus: { from: true, eur: 790, usd: 899 } as Money,

  // Ready Business Kit packages
  rbkOnePage: { eur: 699, usd: 800 } as Money,
  rbkMultiSection: { eur: 899, usd: 1049 } as Money,
  rbkWebApp: { eur: 1399, usd: 1599 } as Money,

  // Digital System Build packages
  dsbCore: { from: true, eur: 2500, usd: 2850 } as Money,
  dsbPro: { from: true, eur: 5000, usd: 5600 } as Money,

  // AI Content Workflow packages
  aicCore: { from: true, eur: 1750, usd: 1999 } as Money,
  aicPro: { from: true, eur: 3500, usd: 3999 } as Money,

  // System Review — USD added (was EUR-only): ~1.16 ratio.
  systemReview: { from: true, eur: 250, usd: 290 } as Money,

  // Add-ons (all "From")
  addExtraLandingSection: { from: true, eur: 150, usd: 170 } as Money,
  addExtraWebsitePage: { from: true, eur: 250, usd: 290 } as Money,
  addLanguageVersion: { from: true, eur: 350, usd: 399 } as Money,
  add30Social: { from: true, eur: 300, usd: 349 } as Money,
  addCanvaPack: { from: true, eur: 350, usd: 399 } as Money,
  addCrmUpgrade: { from: true, eur: 450, usd: 499 } as Money,
  addAdvancedLeadForm: { from: true, eur: 300, usd: 349 } as Money,
  addEmailSequence: { from: true, eur: 450, usd: 499 } as Money,
  addBookingFlow: { from: true, eur: 500, usd: 599 } as Money,
  addGbpSetup: { from: true, eur: 300, usd: 349 } as Money,
  addAnalyticsSetup: { from: true, eur: 350, usd: 399 } as Money,
  addAdsLanding: { from: true, eur: 600, usd: 699 } as Money,
  addMonthlySupport: { from: true, eur: 350, usd: 399, per: "month" } as Money,
  addMonthlyContentSupport: { from: true, eur: 750, usd: 849, per: "month" } as Money,
  addMonthlyOpsSupport: { from: true, eur: 1100, usd: 1249, per: "month" } as Money,

  // Catalog starting prices
  catLocalServiceOnePage: { eur: 699, usd: 800 } as Money,
  catBoutiqueShop: { eur: 899, usd: 1049 } as Money,
  catRentalBooking: { eur: 899, usd: 1049 } as Money,
  catRealEstateLead: { eur: 899, usd: 1049 } as Money,
  catCourierRecruitment: { eur: 699, usd: 800 } as Money,
  catConsultingOffer: { eur: 699, usd: 800 } as Money,
  catCreatorBrand: { eur: 699, usd: 800 } as Money,
  catMiniWebApp: { eur: 1399, usd: 1599 } as Money,
} as const;
