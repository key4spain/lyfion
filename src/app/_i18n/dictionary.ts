// ─────────────────────────────────────────────────────────────────────────────
// Lyfion.digital — the Content contract. en.ts and es.ts must both satisfy this.
// Prices come from ./prices (single source). hrefs are NEUTRAL paths
// ("/services#digital-refresh") or external URLs; views localize internal ones.
// ─────────────────────────────────────────────────────────────────────────────

import type { Price } from "./prices";

export type CatalogStatus = "available" | "demo" | "production";

export interface Card {
  title: string;
  desc: string;
}

export interface ServicePackage {
  name: string;
  price: Price;
  bestFor: string;
  includes: string[];
  notIncluded?: string[];
  cta?: string;
  ctaHref?: string;
}

export interface ServiceArea {
  id: string;
  title: string;
  price: Price;
  summary: string;
  includes?: string[];
  notes?: string[];
  /** Inline "Not included: …" line (ready-business-kit only). */
  notIncludedLine?: string;
  packages: ServicePackage[];
  cta: string;
  ctaHref: string;
}

export interface AddOn {
  name: string;
  price: Price;
}

export interface ComparisonRow {
  package: string;
  bestFor: string;
  startingPrice: Price;
  outcome: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  bestFor: string;
  includes: string[];
  startingPrice: Price;
  status: CatalogStatus;
}

export interface NotSureGuideItem {
  choose: string;
  when: string;
}

export interface ServiceCard {
  title: string;
  price: Price;
  description: string;
  cta: string;
  href: string;
}

export interface ProcessStepLong {
  title: string;
  body: string;
}

export interface SeoEntry {
  title: string;
  description: string;
}

export interface Content {
  // ── SEO per page ──
  meta: {
    home: SeoEntry;
    services: SeoEntry;
    catalog: SeoEntry;
    process: SeoEntry;
    work: SeoEntry;
    contact: SeoEntry;
  };

  // ── Navigation + global UI ──
  nav: {
    items: { key: string; label: string; href: string }[];
    cta: string;
    languageLabel: string; // aria for switch
    switchToEs: string;
    switchToEn: string;
  };

  common: {
    includes: string;
    notIncluded: string;
    bestFor: string;
    mainFocus: string;
    requiredFor: string;
    tellUsImprove: string;
    tellUsBuild: string;
    tellUsNeed: string;
    viewReadyCatalog: string;
    viewDigitalRefresh: string;
    viewOptions: string;
    seeAllServices: string;
    bookSystemReview: string;
    /** Sentence after the price in the offer disclaimer. */
    offerDisclaimerRest: string;
    catalogStatus: Record<CatalogStatus, string>;
  };

  home: {
    eyebrow: string;
    heroTitleLead: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    heroOfferLabel: string;
    problemLabel: string;
    problemTitleLead: string;
    problemTitleAccent: string;
    problemPoints: string[];
    buildLabel: string;
    buildTitle: string;
    buildIntro: string;
    buildCategories: Card[];
    servicesLabel: string;
    servicesTitle: string;
    servicesIntro: string;
    refreshTitle: string;
    refreshSummary: string;
    refreshIncludes: string[];
    secondaryCards: ServiceCard[];
    whoLabel: string;
    whoTitleLead: string;
    whoTitleAccent: string;
    whoIntro: string;
    whoItems: Card[];
    proofLabel: string;
    proofTitleLead: string;
    proofTitleAccent: string;
    proofIntro: string;
    proofCards: Card[];
    proofSeeWork: string;
    proofNote: string;
    workLabel: string;
    workTitle: string;
    workViewAll: string;
    workCategories: string[];
    processLabel: string;
    processTitle: string;
    processSeeFull: string;
    processSteps: Card[]; // title + summary
    trustLabel: string;
    trustLead: string;
    trustSub: string;
    ctaLabel: string;
    ctaTitleLead: string;
    ctaTitleAccent: string;
    ctaIntro: string;
  };

  services: {
    headerLabel: string;
    headerTitle: string;
    headerIntro: string;
    areas: ServiceArea[];
    addOnsTitle: string;
    addOns: AddOn[];
    addOnsNote: string;
    systemReviewTitle: string;
    systemReviewSummary: string;
    systemReviewRequiredFor: string[];
    systemReviewNote: string;
    comparisonTitle: string;
    comparisonHeaders: string[]; // Package, Best for, Starting price, Main outcome
    comparisonRows: ComparisonRow[];
    notSureTitle: string;
    notSureGuide: NotSureGuideItem[];
    notSureCta: string;
  };

  catalog: {
    headerLabel: string;
    headerTitle: string;
    headerIntro: string;
    categoriesLabel: string;
    categories: string[];
    items: CatalogItem[];
    requestModel: string;
    footnote: string;
    requestCta: string;
  };

  process: {
    headerLabel: string;
    headerTitle: string;
    headerIntro: string;
    steps: ProcessStepLong[];
    whichTitle: string;
    paths: { title: string; description: string; href: string }[];
    closingNote: string;
  };

  work: {
    headerLabel: string;
    headerTitle: string;
    headerIntro: string;
    internalTitle: string;
    internalBody: string;
    internalExamples: string[];
    catalogTitle: string;
    catalogBody: string;
    viewCatalog: string;
    refreshTitle: string;
    refreshBody: string;
    aiTitle: string;
    aiBody: string;
    proofTitle: string;
    proofBody: string;
    closingNote: string;
  };

  contact: {
    headerLabel: string;
    headerTitle: string;
    headerIntro: string;
    lookAtTitle: string;
    lookAtFirst: string[];
    prepareTitle: string;
    prepare: string[];
    nextTitle: string;
    nextSteps: Card[];
    readyTitle: string;
    readyBody: string;
    directEmailLabel: string;
    supportLabel: string;
    businessLabel: string;
  };

  footer: {
    llcName: string;
    llcRole: string;
    llcOfficeLabel: string;
    slName: string;
    slRole: string;
    slAddressLabel: string;
    supportLabel: string;
    contactLabel: string;
    nifLabel: string;
    signalReview: string;
    signalBuild: string;
    signalProduction: string;
    tagline: string;
    rights: string;
  };

  assistant: {
    button: string;
    eyebrow: string;
    body: string;
    close: string;
    links: { label: string; href: string; external?: boolean }[];
  };

  cookie: {
    intro: string;
    necessary: string;
    necessaryDesc: string;
    on: string;
    analytics: string;
    analyticsDesc: string;
    interactive: string;
    interactiveDesc: string;
    save: string;
    acceptOptional: string;
    rejectOptional: string;
    manage: string;
    dialogLabel: string;
  };
}
