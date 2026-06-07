import { BASE, INTAKE_FORM_URL } from "./_shared";

export interface HomepageServiceCard {
  id: string;
  title: string;
  price: string;
  description: string;
  cta: string;
  href: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  notIncluded?: string[];
  cta?: string;
  ctaHref?: string;
}

export interface ServiceArea {
  id: string;
  title: string;
  price: string;
  summary: string;
  includes?: string[];
  packages: ServicePackage[];
  notes?: string[];
  cta: string;
  ctaHref: string;
}

export interface AddOn {
  name: string;
  price: string;
}

export interface ComparisonRow {
  package: string;
  bestFor: string;
  startingPrice: string;
  outcome: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  bestFor: string;
  includes: string[];
  startingPrice: string;
  status: "Available for build" | "Demo ready" | "In production";
}

export const HOMEPAGE_SERVICE_AREAS: HomepageServiceCard[] = [
  {
    id: "digital-refresh",
    title: "Digital Refresh",
    price: "From €429 / $499",
    description:
      "For businesses that already exist and need their visible digital layer cleaned, structured, and ready for search and lead flow.",
    cta: "View Digital Refresh options",
    href: `${BASE}/services#digital-refresh`,
  },
  {
    id: "ready-business-kit",
    title: "Ready Business Kit",
    price: "From €699 / $800",
    description:
      "For new businesses, offers, or local services that need a fast launch package.",
    cta: "View ready launch kits",
    href: `${BASE}/services#ready-business-kit`,
  },
  {
    id: "digital-system-build",
    title: "Digital System Build",
    price: "From €2,500 / $2,850",
    description:
      "For businesses that need a deeper website, lead intake, CRM logic, service flow, QA, and launch readiness.",
    cta: "View build options",
    href: `${BASE}/services#digital-system-build`,
  },
  {
    id: "ai-content-workflow",
    title: "AI Content & Production Workflow",
    price: "From €1,750 / $1,999",
    description:
      "For brands that need a repeatable system for content planning, production, approval, and publishing.",
    cta: "View workflow options",
    href: `${BASE}/services#ai-content-workflow`,
  },
];

export const HOMEPAGE_SECONDARY_PATHS: HomepageServiceCard[] =
  HOMEPAGE_SERVICE_AREAS.filter((s) => s.id !== "digital-refresh");

export const DIGITAL_REFRESH: ServiceArea = {
  id: "digital-refresh",
  title: "Digital Refresh",
  price: "From €429 / $499",
  summary:
    "For businesses that already exist and need their visible digital layer cleaned, structured, and ready for search, trust signals, and lead flow.",
  includes: [
    "Website or landing page refresh",
    "Instagram profile cleanup",
    "Basic SEO structure",
    "Basic AEO / GEO / LLMO setup",
    "Contact and lead flow check",
    "Basic trust and credibility improvements",
    "Launch-readiness checklist",
  ],
  packages: [
    {
      name: "Digital Refresh Basic",
      price: "€429 / $499",
      bestFor:
        "Small businesses that already have a website or landing page but need it cleaned, corrected, and made more credible.",
      includes: [
        "Existing website or landing page review",
        "Basic website structure cleanup",
        "Instagram bio and profile structure cleanup",
        "Basic SEO title and meta description review",
        "Basic heading and keyword structure",
        "Basic AEO / GEO / LLMO alignment",
        "Contact button and lead flow check",
        "Trust and credibility checklist",
        "Short improvement report",
      ],
      notIncluded: [
        "New website build",
        "Full redesign",
        "CRM setup",
        "Content production",
        "Paid ads",
        "Daily posting",
        "Advanced automation",
      ],
    },
    {
      name: "Digital Refresh Plus",
      price: "From €790 / $899",
      bestFor:
        "Businesses that need a stronger refresh with clearer positioning, better structure, and improved conversion flow.",
      includes: [
        "Everything in Digital Refresh Basic",
        "Stronger homepage or landing page structure",
        "Service positioning cleanup",
        "CTA structure improvement",
        "Instagram highlights structure",
        "Basic content direction for social media",
        "Better SEO keyword map",
        "Better AEO / GEO / LLMO content structure",
        "Lead form recommendation",
        "7-day improvement roadmap",
      ],
      notIncluded: [
        "Full custom website build",
        "Full CRM implementation",
        "Active social media management",
        "Paid ads management",
      ],
    },
    {
      name: "Digital Refresh Custom",
      price: "Custom scope after review",
      bestFor:
        "Businesses with an existing digital presence that needs deeper cleanup across website, social media, SEO, lead flow, content, and trust structure.",
      includes: [
        "Scope defined after review across website, social, SEO, lead flow, and trust structure",
      ],
      cta: "Request custom review",
      ctaHref: INTAKE_FORM_URL,
    },
  ],
  cta: "View Digital Refresh options",
  ctaHref: `${BASE}/services#digital-refresh`,
};

export const READY_BUSINESS_KIT: ServiceArea = {
  id: "ready-business-kit",
  title: "Ready Business Kit",
  price: "From €699 / $800",
  summary:
    "For new businesses, offers, or local services that need a fast launch package with a clean page, lead form, basic CRM structure, and launch materials. Not a full custom platform or complex automation build.",
  notes: [
    "60 ready-to-use social media materials can be included depending on package and scope. No active posting or account management.",
  ],
  packages: [
    {
      name: "Ready One-Page Site",
      price: "€699 / $800",
      bestFor:
        "Simple businesses, local services, single offers, or test ideas that need a clean one-page website quickly.",
      includes: [
        "One-page Next.js landing page",
        "Basic offer structure",
        "Contact buttons and CTA setup",
        "Lead form",
        "Basic CRM sheet",
        "Basic SEO foundation",
        "Basic AEO / GEO / LLMO foundation",
        "Launch checklist",
      ],
    },
    {
      name: "Ready Multi-Section Website",
      price: "€899 / $1,049",
      bestFor:
        "Businesses that need more structure than a simple one-page site.",
      includes: [
        "Multi-section Next.js website",
        "Homepage structure",
        "Service sections",
        "FAQ section",
        "Trust and credibility section",
        "Better lead qualification form",
        "Basic CRM pipeline",
        "Basic SEO/AEO/GEO/LLMO structure",
        "Launch roadmap",
      ],
    },
    {
      name: "Ready Web App",
      price: "€1,399 / $1,599",
      bestFor:
        "Projects that need a more functional web app style experience instead of a simple marketing page.",
      includes: [
        "Next.js web app structure",
        "Landing flow",
        "Lead form",
        "Basic CRM logic",
        "Simple interactive sections",
        "Launch checklist",
        "Vercel deployment preparation",
      ],
    },
  ],
  cta: "Request launch kit",
  ctaHref: INTAKE_FORM_URL,
};

export const DIGITAL_SYSTEM_BUILD: ServiceArea = {
  id: "digital-system-build",
  title: "Digital System Build",
  price: "From €2,500 / $2,850",
  summary:
    "For businesses that need a deeper digital system built after review: website, lead intake, CRM logic, service flow, QA, and launch readiness. Not a fast launch kit.",
  packages: [
    {
      name: "Digital System Build Core",
      price: "From €2,500 / $2,850",
      bestFor:
        "Businesses ready to build a practical digital operating layer after scope review.",
      includes: [
        "Website or landing page structure",
        "Service positioning",
        "Lead form / intake flow",
        "Basic CRM structure",
        "Follow-up logic",
        "Contact routing",
        "Basic content workflow base",
        "QA checklist",
        "Launch-readiness checklist",
        "Handoff notes",
      ],
    },
    {
      name: "Digital System Build Pro",
      price: "From €5,000 / $5,600",
      bestFor:
        "Businesses that need deeper structure across pages, CRM, workflow, and launch support.",
      includes: [
        "Everything in Core",
        "Multi-page website or web app structure",
        "Deeper CRM logic",
        "Client journey mapping",
        "Service workflow documentation",
        "Internal approval gates",
        "Team/client handoff structure",
        "Content base for future production",
        "Launch support",
        "Post-launch improvement plan",
      ],
    },
    {
      name: "Digital System Build Custom",
      price: "Custom scope after review",
      bestFor:
        "Complex projects that need custom architecture beyond standard packages.",
      includes: [
        "Custom CRM architecture",
        "Automation workflows",
        "Internal dashboard",
        "Client portal",
        "Partner portal",
        "Multi-language system",
        "Advanced lead routing",
        "Team approval structure",
        "Reporting structure",
        "Documentation and SOPs",
      ],
      cta: "Book a system review",
      ctaHref: INTAKE_FORM_URL,
    },
  ],
  cta: "Book a system review",
  ctaHref: INTAKE_FORM_URL,
};

export const AI_CONTENT_WORKFLOW: ServiceArea = {
  id: "ai-content-workflow",
  title: "AI Content & Production Workflow",
  price: "From €1,750 / $1,999",
  summary:
    "For brands that need a repeatable content workflow for planning, production, approval, QA, and publishing.",
  packages: [
    {
      name: "AI Content Workflow Core",
      price: "From €1,750 / $1,999",
      bestFor:
        "Brands starting to structure AI-assisted content with clear planning and QA.",
      includes: [
        "Content planning structure",
        "Brand voice direction",
        "Weekly/monthly content categories",
        "Image prompt workflow",
        "Video prompt workflow",
        "Approval checklist",
        "QA checklist",
        "Basic posting/preparation workflow",
        "Tool recommendations",
      ],
    },
    {
      name: "AI Production Workflow Pro",
      price: "From €3,500 / $3,999",
      bestFor:
        "Teams that need a fuller production system with templates, gates, and handoff.",
      includes: [
        "Everything in Core",
        "Full content production workflow",
        "Reusable campaign templates",
        "Short-form video structure",
        "Image/video prompt library",
        "Team handoff system",
        "Client approval gates",
        "Content QA process",
        "Monthly production calendar structure",
        "Tool and workflow recommendation",
        "Publishing preparation structure",
      ],
    },
    {
      name: "AI Content Workflow Custom",
      price: "Custom scope after review",
      bestFor:
        "Brands that need a custom content engine, avatar workflow, or multi-language structure.",
      includes: [
        "Full brand content system",
        "AI avatar workflow",
        "Founder content workflow",
        "Video script library",
        "Campaign system",
        "Monthly content engine",
        "Team production board",
        "QA approval workflow",
        "Client approval workflow",
        "Multi-language content structure",
      ],
      cta: "Build custom production workflow",
      ctaHref: INTAKE_FORM_URL,
    },
  ],
  cta: "View workflow options",
  ctaHref: `${BASE}/services#ai-content-workflow`,
};

export const SERVICE_AREAS: ServiceArea[] = [
  DIGITAL_REFRESH,
  READY_BUSINESS_KIT,
  DIGITAL_SYSTEM_BUILD,
  AI_CONTENT_WORKFLOW,
];

export const ADD_ONS: AddOn[] = [
  { name: "Extra landing page section", price: "From €150 / $170" },
  { name: "Extra website page", price: "From €250 / $290" },
  { name: "Additional language version", price: "From €350 / $399" },
  { name: "Additional 30 social media materials", price: "From €300 / $349" },
  { name: "Canva template pack", price: "From €350 / $399" },
  { name: "Basic CRM upgrade", price: "From €450 / $499" },
  { name: "Advanced lead form", price: "From €300 / $349" },
  { name: "Email follow-up sequence", price: "From €450 / $499" },
  { name: "Booking flow setup", price: "From €500 / $599" },
  { name: "Google Business Profile setup", price: "From €300 / $349" },
  { name: "Analytics / Metricool setup", price: "From €350 / $399" },
  { name: "Basic paid ads landing structure", price: "From €600 / $699" },
  { name: "Monthly support", price: "From €350 / $399 / month" },
  { name: "Monthly content workflow support", price: "From €750 / $849 / month" },
  { name: "Monthly digital operations support", price: "From €1,100 / $1,249 / month" },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    package: "Digital Refresh",
    bestFor: "Existing businesses that need cleanup",
    startingPrice: "€429 / $499",
    outcome:
      "Cleaner website, Instagram, SEO, and trust signal foundation",
  },
  {
    package: "Ready Business Kit",
    bestFor: "New businesses that need fast launch",
    startingPrice: "€699 / $800",
    outcome: "Landing page, lead form, CRM, launch checklist",
  },
  {
    package: "Digital System Build",
    bestFor: "Businesses that need a real digital system",
    startingPrice: "From €2,500 / $2,850",
    outcome: "Website, lead intake, CRM logic, service flow, QA",
  },
  {
    package: "AI Content Workflow",
    bestFor: "Brands that need repeatable production",
    startingPrice: "From €1,750 / $1,999",
    outcome:
      "Content planning, AI prompts, QA, approval gates, production workflow",
  },
];

export const SYSTEM_REVIEW = {
  price: "From €250",
  summary:
    "Before larger builds, we review your current website, social presence, lead flow, service structure, content, and business goals. After the review, we confirm the best package, exact scope, timeline, and final price.",
  requiredFor: [
    "Digital System Build",
    "AI Production Workflow Pro",
    "Custom packages",
    "Complex or unclear projects",
  ],
  note:
    "Digital Refresh and Ready One-Page Site can start without a separate review if the scope is clear.",
};

export const NOT_SURE_GUIDE = [
  {
    choose: "Digital Refresh",
    when: "you already have a business online and need it cleaned up.",
  },
  {
    choose: "Ready Business Kit",
    when: "you need to launch a new business, offer, or service fast.",
  },
  {
    choose: "Digital System Build",
    when: "you need a deeper website, lead, CRM, and service system.",
  },
  {
    choose: "AI Content & Production Workflow",
    when: "your content production is chaotic and needs a repeatable process.",
  },
];

export const CATALOG_CATEGORIES = [
  "Local service websites",
  "Online shops",
  "Rental / booking pages",
  "Real estate / property pages",
  "Courier / delivery pages",
  "Consulting / agency pages",
  "Creator / content brands",
  "Mini web apps",
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "local-service-one-page",
    name: "Local Service One-Page",
    category: "Local service website",
    bestFor:
      "Cleaners, repair teams, salons, contractors, small local services",
    includes: [
      "One-page Next.js layout",
      "Offer and CTA structure",
      "Lead form",
      "Basic CRM sheet",
      "Launch checklist",
    ],
    startingPrice: "€699 / $800",
    status: "Available for build",
  },
  {
    id: "boutique-shop-starter",
    name: "Boutique Online Shop Starter",
    category: "Online shop",
    bestFor:
      "Small product brands, boutique stores, handmade products, simple catalogs",
    includes: [
      "Shop-style Next.js structure",
      "Product sections",
      "Lead or inquiry flow",
      "Basic CRM sheet",
      "Launch checklist",
    ],
    startingPrice: "€899 / $1,049",
    status: "Available for build",
  },
  {
    id: "rental-booking-page",
    name: "Rental / Booking Landing Page",
    category: "Rental / booking page",
    bestFor:
      "Car rental, apartments, equipment rental, local booking services",
    includes: [
      "Booking-focused landing page",
      "Offer sections",
      "Lead form",
      "Basic CRM pipeline",
      "Launch checklist",
    ],
    startingPrice: "€899 / $1,049",
    status: "Available for build",
  },
  {
    id: "real-estate-lead-page",
    name: "Real Estate Lead Page",
    category: "Real estate / property page",
    bestFor:
      "Agents, property campaigns, investment offers, local buyer lead pages",
    includes: [
      "Property lead page structure",
      "Trust sections",
      "Lead qualification form",
      "Basic CRM sheet",
      "Launch checklist",
    ],
    startingPrice: "€899 / $1,049",
    status: "Available for build",
  },
  {
    id: "courier-recruitment-page",
    name: "Courier Recruitment Page",
    category: "Courier / delivery page",
    bestFor: "Recruitment, fleet partners, delivery worker intake",
    includes: [
      "Recruitment landing flow",
      "Role sections",
      "Application form",
      "Basic CRM intake",
      "Launch checklist",
    ],
    startingPrice: "€699 / $800",
    status: "Available for build",
  },
  {
    id: "consulting-offer-page",
    name: "Consulting Offer Page",
    category: "Consulting / agency page",
    bestFor:
      "Consultants, small agencies, service experts, business advisors",
    includes: [
      "Offer page structure",
      "Service framing",
      "Lead form",
      "Basic CRM sheet",
      "Launch checklist",
    ],
    startingPrice: "€699 / $800",
    status: "Available for build",
  },
  {
    id: "creator-brand-launch",
    name: "Creator Brand Launch Page",
    category: "Creator / content brand",
    bestFor:
      "Creators, faceless channels, personal brands, content projects",
    includes: [
      "Brand launch page",
      "Offer or channel framing",
      "Lead or contact form",
      "Basic CRM sheet",
      "Launch checklist",
    ],
    startingPrice: "€699 / $800",
    status: "Available for build",
  },
  {
    id: "mini-web-app-starter",
    name: "Mini Web App Starter",
    category: "Mini web app",
    bestFor:
      "Calculators, internal tools, lead qualification apps, small client portals",
    includes: [
      "Next.js web app shell",
      "Interactive sections",
      "Lead form logic",
      "Basic CRM structure",
      "Vercel deployment preparation",
    ],
    startingPrice: "€1,399 / $1,599",
    status: "Available for build",
  },
];

export const CATALOG_REQUEST_URL = INTAKE_FORM_URL;
