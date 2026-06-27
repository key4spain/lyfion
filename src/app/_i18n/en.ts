import type { Content } from "./dictionary";
import { PRICE } from "./prices";

// ─────────────────────────────────────────────────────────────────────────────
// English content (default locale). hrefs are NEUTRAL paths; views localize them.
// ─────────────────────────────────────────────────────────────────────────────

export const en: Content = {
  meta: {
    home: {
      title:
        "Lyfion.digital | Digital Systems, Websites and Automation Workflows",
      description:
        "Practical digital systems, websites, lead intake flows, content workflows, and automation-ready structures for businesses that need a clearer digital layer.",
    },
    services: {
      title: "Services",
      description:
        "Explore Lyfion Digital services: Digital Refresh, Ready Business Kit, Digital System Build, AI Content Workflow, add-ons, and system review options.",
    },
    catalog: {
      title: "Ready Business Catalog",
      description:
        "Ready-made business website, landing page, shop, and web app starting models that can be adapted, built, and launched with Lyfion Digital.",
    },
    process: {
      title: "Process",
      description:
        "See how Lyfion Digital moves from review to structure, build, QA, handoff, and the next practical step.",
    },
    work: {
      title: "Work",
      description:
        "Selected Lyfion Digital work directions, internal systems, catalog models, digital refresh structures, and AI content workflow foundations.",
    },
    contact: {
      title: "Tell us what you want to improve",
      description:
        "Tell Lyfion Digital what you want to improve. Send your current website, profile, lead flow, or workflow problem and get the clearest next step.",
    },
  },

  nav: {
    items: [
      { key: "home", label: "Home", href: "/" },
      { key: "services", label: "Services", href: "/services" },
      { key: "catalog", label: "Catalog", href: "/catalog" },
      { key: "process", label: "Process", href: "/process" },
      { key: "work", label: "Work", href: "/work" },
      { key: "contact", label: "Contact", href: "/contact" },
    ],
    cta: "Start with Digital Refresh",
    languageLabel: "Language",
    switchToEs: "Español",
    switchToEn: "English",
  },

  common: {
    includes: "Includes",
    notIncluded: "Not included",
    bestFor: "Best for: ",
    mainFocus: "Main focus",
    requiredFor: "Required for",
    tellUsImprove: "Tell us what you want to improve",
    tellUsBuild: "Tell us what you want to build",
    tellUsNeed: "Tell us what you need",
    viewReadyCatalog: "View ready catalog",
    viewDigitalRefresh: "View Digital Refresh",
    viewOptions: "View options",
    seeAllServices: "See all services",
    bookSystemReview: "Book a system review",
    offerDisclaimerRest:
      "Final scope, deliverables, timeline, taxes/VAT and payment terms are confirmed before work begins. No guaranteed business outcome, lead volume, ranking, automation result, or revenue result is implied.",
    catalogStatus: {
      available: "Available for build",
      demo: "Demo ready",
      production: "In production",
    },
  },

  home: {
    eyebrow: "LYFION.DIGITAL · 2026",
    heroTitleLead: "Build the system behind",
    heroTitleAccent: "your business.",
    heroSubtitle:
      "Lyfion reviews your visible business layer, then maps the first practical build step. Websites, lead flow, content workflow, and launch structure behind the business.",
    heroOfferLabel: "Digital Refresh Review · ",
    problemLabel: "The problem",
    problemTitleLead:
      "Most projects do not fail because the idea is bad. They fail because the",
    problemTitleAccent: "execution layer is broken.",
    problemPoints: [
      "Ideas are scattered across chats, docs, and tools with no clear source of truth.",
      "People move before the priority is clear, so work starts fast but loses direction.",
      "Websites go live without intake forms, follow-up logic, or CRM structure.",
      "Forms collect data, but nobody owns the next step.",
      "AI tools run without QA, approval gates, or defined business logic.",
      "Founders change direction because the project has no operating board, proof layer, or decision log.",
    ],
    buildLabel: "What we build",
    buildTitle:
      "We build the files, flows, and pages that hold the work together.",
    buildIntro:
      "Each service is a concrete output: a working system, not a deliverable document or vague consultation.",
    buildCategories: [
      {
        title: "Business operating systems",
        desc: "Source-of-truth structure, project control, permissions, SOPs, and delegation logic so execution stays organised as the work scales.",
      },
      {
        title: "Websites and landing pages",
        desc: "Clear public pages with a real conversion path, CTA logic, and a controlled launch checklist. Not a page that just sits there.",
      },
      {
        title: "Automation workflows",
        desc: "Controlled routing, notifications, intake, and follow-up so the right steps happen without manual chasing every time.",
      },
      {
        title: "CRM and lead intake systems",
        desc: "Forms, routing logic, status tracking, follow-up structure, and verification steps so leads do not disappear.",
      },
      {
        title: "AI content production workflows",
        desc: "Repeatable AI-assisted image, video, and content workflows with QA gates and approval steps built in.",
      },
      {
        title: "Proof and market-test systems",
        desc: "A structured way to test an idea and gather real evidence before committing time or investment to a larger build.",
      },
    ],
    servicesLabel: "Services",
    servicesTitle: "Start with Digital Refresh",
    servicesIntro:
      "Digital Refresh is the fastest first step. If you are launching something new or need a deeper system, choose one of the other paths.",
    refreshTitle: "Digital Refresh",
    refreshSummary:
      "For businesses that already exist, but need their digital presence cleaned, structured, and prepared for the new search and AI discovery era.",
    refreshIncludes: [
      "Website or landing page refresh",
      "Instagram profile cleanup",
      "Basic SEO structure",
      "Basic AEO / GEO / LLMO setup",
      "Contact and lead flow check",
      "Basic trust and credibility improvements",
      "Launch-readiness checklist",
    ],
    secondaryCards: [
      {
        title: "Ready Business Kit",
        price: PRICE.readyBusinessKit,
        description:
          "For new businesses, offers, or local services that need a fast launch package.",
        cta: "View Ready Business Kit",
        href: "/services#ready-business-kit",
      },
      {
        title: "Digital System Build",
        price: PRICE.digitalSystemBuild,
        description:
          "For businesses that need a deeper website, lead intake, CRM logic, service flow, QA, and launch readiness.",
        cta: "View System Build",
        href: "/services#digital-system-build",
      },
      {
        title: "AI Content & Production Workflow",
        price: PRICE.aiContentWorkflow,
        description:
          "For brands that need a repeatable system for content planning, production, approval, and publishing.",
        cta: "View AI Workflow",
        href: "/services#ai-content-workflow",
      },
    ],
    whoLabel: "Who it is for",
    whoTitleLead: "For teams where the work exists, but the",
    whoTitleAccent: "system does not.",
    whoIntro:
      "Not for every project. Built for the ones where execution is the problem, not the idea.",
    whoItems: [
      {
        title: "Founders with scattered execution",
        desc: "Ideas, tools, documents, and unfinished tasks spread across chats and platforms with no clear source of truth.",
      },
      {
        title: "Service businesses that need intake structure",
        desc: "A cleaner website, lead intake flow, follow-up logic, and CRM structure so potential clients do not fall through the gaps.",
      },
      {
        title: "Teams running AI tools without guardrails",
        desc: "AI workflows running without a clear source-of-truth, QA process, or approval boundaries before publishing.",
      },
      {
        title: "Projects that need market evidence first",
        desc: "A structured test layer before committing serious time or money to a larger build.",
      },
      {
        title: "Businesses not ready for complex platforms",
        desc: "Practical automation and operating structure without the overhead of enterprise software or long agency retainers.",
      },
    ],
    proofLabel: "Internal systems",
    proofTitleLead: "Built from real internal systems,",
    proofTitleAccent: "not theory.",
    proofIntro:
      "Lyfion Digital is shaped through real internal builds: business operating files, website structures, CRM and intake logic, content production systems, QA checklists, and controlled project documentation used across internal and client-facing work.",
    proofCards: [
      {
        title: "Business OS structure",
        desc: "Source-of-truth files, project maps, permission rules, and operating boards built for multi-project business environments.",
      },
      {
        title: "Website and landing systems",
        desc: "Structured pages, CTA logic, service framing, and launch-readiness checklists built as real digital infrastructure.",
      },
      {
        title: "CRM and intake workflows",
        desc: "Forms, routing logic, lead and application tracking, follow-up structure, and practical verification steps.",
      },
      {
        title: "AI production workflow",
        desc: "Prompt systems, content planning structures, output QA review, and approval gates before any publishing step.",
      },
    ],
    proofSeeWork: "See selected work",
    proofNote:
      "High-level references only. No screenshots, metrics, or private data.",
    workLabel: "Selected work",
    workTitle: "Real internal systems and project infrastructure.",
    workViewAll: "View selected work",
    workCategories: [
      "Internal operating systems",
      "Websites and landing systems",
      "CRM / lead intake workflows",
      "AI production workflows",
      "Internal dashboard logic",
    ],
    processLabel: "Process",
    processTitle: "A clear path from review to working system.",
    processSeeFull: "See the full process",
    processSteps: [
      {
        title: "Review",
        desc: "Understand the project, source material, current tools, risks, and desired outcome.",
      },
      {
        title: "Structure",
        desc: "Define source of truth, service logic, user flow, CTA, forms, CRM, and approval boundaries.",
      },
      {
        title: "Build",
        desc: "Create the website, workflow, CRM and intake structure, content system, or operating layer.",
      },
      {
        title: "QA",
        desc: "Check claims, routing, mobile view, form logic, proof, data risk, and launch readiness.",
      },
      {
        title: "Launch / Handoff",
        desc: "Only after approval. No uncontrolled publishing.",
      },
      {
        title: "Iterate",
        desc: "Measure response, improve the offer, and build the next layer.",
      },
    ],
    trustLabel: "Trust & safety",
    trustLead:
      "We work from verified source material, defined scope, and approval gates. No fake guarantees. No public claims without proof.",
    trustSub:
      "Every build starts with a review, a clear workflow, and a decision on what should be built first.",
    ctaLabel: "Get started",
    ctaTitleLead: "Tell us what you want to",
    ctaTitleAccent: "improve.",
    ctaIntro:
      "Send your website, profile, lead flow, or launch goal. We review what exists, identify gaps, and map the first practical build step.",
  },

  services: {
    headerLabel: "Services",
    headerTitle: "Four ways to build the digital layer behind your business.",
    headerIntro:
      "Choose the entry point that fits your current stage. If you are unsure, start with a review and we will map the cleanest first step.",
    areas: [
      {
        id: "digital-refresh",
        title: "Digital Refresh",
        price: PRICE.digitalRefresh,
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
            price: PRICE.drBasic,
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
            price: PRICE.drPlus,
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
            ctaHref: "INTAKE",
          },
        ],
        cta: "View Digital Refresh options",
        ctaHref: "/services#digital-refresh",
      },
      {
        id: "ready-business-kit",
        title: "Ready Business Kit",
        price: PRICE.readyBusinessKit,
        summary:
          "For new businesses, offers, or local services that need a fast launch package with a clean page, lead form, basic CRM structure, and launch materials. Not a full custom platform or complex automation build.",
        notes: [
          "60 ready-to-use social media materials can be included depending on package and scope. No active posting or account management.",
        ],
        notIncludedLine:
          "Not included: full custom platform, advanced CRM automation, daily posting, paid ads management, or guaranteed sales.",
        packages: [
          {
            name: "Ready One-Page Site",
            price: PRICE.rbkOnePage,
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
            price: PRICE.rbkMultiSection,
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
            price: PRICE.rbkWebApp,
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
        ctaHref: "INTAKE",
      },
      {
        id: "digital-system-build",
        title: "Digital System Build",
        price: PRICE.digitalSystemBuild,
        summary:
          "For businesses that need a deeper digital system built after review: website, lead intake, CRM logic, service flow, QA, and launch readiness. Not a fast launch kit.",
        packages: [
          {
            name: "Digital System Build Core",
            price: PRICE.dsbCore,
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
            price: PRICE.dsbPro,
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
            ctaHref: "INTAKE",
          },
        ],
        cta: "Book a system review",
        ctaHref: "INTAKE",
      },
      {
        id: "ai-content-workflow",
        title: "AI Content & Production Workflow",
        price: PRICE.aiContentWorkflow,
        summary:
          "For brands that need a repeatable content workflow for planning, production, approval, QA, and publishing.",
        packages: [
          {
            name: "AI Content Workflow Core",
            price: PRICE.aicCore,
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
            price: PRICE.aicPro,
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
            ctaHref: "INTAKE",
          },
        ],
        cta: "View workflow options",
        ctaHref: "/services#ai-content-workflow",
      },
    ],
    addOnsTitle: "Optional Add-ons",
    addOns: [
      { name: "Extra landing page section", price: PRICE.addExtraLandingSection },
      { name: "Extra website page", price: PRICE.addExtraWebsitePage },
      { name: "Additional language version", price: PRICE.addLanguageVersion },
      { name: "Additional 30 social media materials", price: PRICE.add30Social },
      { name: "Canva template pack", price: PRICE.addCanvaPack },
      { name: "Basic CRM upgrade", price: PRICE.addCrmUpgrade },
      { name: "Advanced lead form", price: PRICE.addAdvancedLeadForm },
      { name: "Email follow-up sequence", price: PRICE.addEmailSequence },
      { name: "Booking flow setup", price: PRICE.addBookingFlow },
      { name: "Google Business Profile setup", price: PRICE.addGbpSetup },
      { name: "Analytics / Metricool setup", price: PRICE.addAnalyticsSetup },
      { name: "Basic paid ads landing structure", price: PRICE.addAdsLanding },
      { name: "Monthly support", price: PRICE.addMonthlySupport },
      { name: "Monthly content workflow support", price: PRICE.addMonthlyContentSupport },
      { name: "Monthly digital operations support", price: PRICE.addMonthlyOpsSupport },
    ],
    addOnsNote:
      "Add-ons are scoped separately. No checkout or automatic purchase on this site.",
    systemReviewTitle: "System Review",
    systemReviewSummary:
      "Before larger builds, we review your current website, social presence, lead flow, service structure, content, and business goals. After the review, we confirm the best package, exact scope, timeline, and final price.",
    systemReviewRequiredFor: [
      "Digital System Build",
      "AI Production Workflow Pro",
      "Custom packages",
      "Complex or unclear projects",
    ],
    systemReviewNote:
      "Digital Refresh and Ready One-Page Site can start without a separate review if the scope is clear.",
    comparisonTitle: "Compare entry points",
    comparisonHeaders: ["Package", "Best for", "Starting price", "Main outcome"],
    comparisonRows: [
      {
        package: "Digital Refresh",
        bestFor: "Existing businesses that need cleanup",
        startingPrice: PRICE.digitalRefreshFlat,
        outcome:
          "Cleaner website, Instagram, SEO, and trust signal foundation",
      },
      {
        package: "Ready Business Kit",
        bestFor: "New businesses that need fast launch",
        startingPrice: PRICE.readyBusinessKitFlat,
        outcome: "Landing page, lead form, CRM, launch checklist",
      },
      {
        package: "Digital System Build",
        bestFor: "Businesses that need a real digital system",
        startingPrice: PRICE.digitalSystemBuild,
        outcome: "Website, lead intake, CRM logic, service flow, QA",
      },
      {
        package: "AI Content Workflow",
        bestFor: "Brands that need repeatable production",
        startingPrice: PRICE.aiContentWorkflow,
        outcome:
          "Content planning, AI prompts, QA, approval gates, production workflow",
      },
    ],
    notSureTitle: "Not sure what to choose?",
    notSureGuide: [
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
    ],
    notSureCta: "Tell us what you want to build",
  },

  catalog: {
    headerLabel: "Catalog",
    headerTitle: "Ready-made business websites and launch kits.",
    headerIntro:
      "Choose a starting model. Each item can be adapted with your name, offer, colors, contact details, lead form, and launch materials.",
    categoriesLabel: "Categories: ",
    categories: [
      "Local service websites",
      "Online shops",
      "Rental / booking pages",
      "Real estate / property pages",
      "Courier / delivery pages",
      "Consulting / agency pages",
      "Creator / content brands",
      "Mini web apps",
    ],
    items: [
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
        startingPrice: PRICE.catLocalServiceOnePage,
        status: "available",
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
        startingPrice: PRICE.catBoutiqueShop,
        status: "available",
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
        startingPrice: PRICE.catRentalBooking,
        status: "available",
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
        startingPrice: PRICE.catRealEstateLead,
        status: "available",
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
        startingPrice: PRICE.catCourierRecruitment,
        status: "available",
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
        startingPrice: PRICE.catConsultingOffer,
        status: "available",
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
        startingPrice: PRICE.catCreatorBrand,
        status: "available",
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
        startingPrice: PRICE.catMiniWebApp,
        status: "available",
      },
    ],
    requestModel: "Request this model",
    footnote:
      "Catalog models are starting points. Final content, scope, timeline, and price are confirmed before work begins.",
    requestCta: "Request a catalog model",
  },

  process: {
    headerLabel: "Process",
    headerTitle: "A clear path from first review to working system.",
    headerIntro:
      "Lyfion does not start by guessing what you need. We first understand what exists, then choose the right path: cleanup, fast launch, deeper system build, or content production workflow.",
    steps: [
      {
        title: "Understand what exists",
        body: "Review the current website, offer, social presence, lead flow, tools, content, and business goal.",
      },
      {
        title: "Choose the right path",
        body: "Decide whether the project needs Digital Refresh, Ready Business Kit, Digital System Build, AI Content Workflow, or a custom scope.",
      },
      {
        title: "Structure the digital layer",
        body: "Map the page structure, service logic, lead intake, content flow, CRM/follow-up logic, and launch requirements.",
      },
      {
        title: "Build or prepare the system",
        body: "Create the website, landing page, web app starter, intake flow, workflow documents, content system, or production structure.",
      },
      {
        title: "QA before launch",
        body: "Check copy, links, forms, mobile layout, trust signals, pricing, claims, privacy, and launch readiness before anything goes public.",
      },
      {
        title: "Handoff and next step",
        body: "Deliver the working assets, notes, roadmap, or next build recommendation so the business knows what to do next.",
      },
    ],
    whichTitle: "Which path fits?",
    paths: [
      {
        title: "Digital Refresh",
        description: "For existing businesses that need cleanup.",
        href: "/services#digital-refresh",
      },
      {
        title: "Ready Business Kit",
        description: "For new businesses or offers that need fast launch.",
        href: "/services#ready-business-kit",
      },
      {
        title: "Digital System Build",
        description: "For deeper website, lead, CRM, and service systems.",
        href: "/services#digital-system-build",
      },
      {
        title: "AI Content Workflow",
        description: "For repeatable content and AI-assisted production.",
        href: "/services#ai-content-workflow",
      },
    ],
    closingNote:
      "Not sure which path fits? Send what you have now and we will map the first practical step.",
  },

  work: {
    headerLabel: "Work",
    headerTitle: "Work that shows how Lyfion builds systems.",
    headerIntro:
      "This page shows the kinds of systems Lyfion builds and prepares: digital refresh structures, ready launch models, service systems, content workflows, and internal operating layers. Public case studies are added only when proof and permission are clear.",
    internalTitle: "Internal systems",
    internalBody:
      "Lyfion builds from real internal operating structures: source-of-truth files, service maps, offer logic, intake flows, QA checklists, and launch systems.",
    internalExamples: [
      "Business OS structure",
      "Service architecture",
      "Intake and CRM logic",
      "Launch-readiness checks",
    ],
    catalogTitle: "Ready Business Catalog",
    catalogBody:
      "Ready business models are prepared as starting points for one-page sites, multi-section websites, and web app starters.",
    viewCatalog: "View catalog",
    refreshTitle: "Digital Refresh work direction",
    refreshBody:
      "Digital Refresh work focuses on cleaning the visible business layer: website, landing page, profile structure, trust signals, search structure, and lead flow.",
    aiTitle: "AI Content & Production Workflow",
    aiBody:
      "AI production work focuses on repeatable planning, prompt workflows, approval gates, QA, handoff, and publishing preparation.",
    proofTitle: "Proof policy",
    proofBody:
      "We do not publish private client systems, dashboards, or results without permission. Public proof will be added only when the source, rights, and wording are approved.",
    closingNote:
      "Tell us what you want to build and we will map the right starting path.",
  },

  contact: {
    headerLabel: "Contact",
    headerTitle: "Tell us what you want to improve",
    headerIntro:
      "You do not need to know the technical solution. Send what exists, what feels unclear, slow, outdated, or disconnected, and what you want to achieve. We will review it and point you to the clearest next step.",
    lookAtTitle: "What we look at first",
    lookAtFirst: [
      "Current website or landing page, if any",
      "Social profiles or public business presence",
      "Contact forms, lead flow, or booking process",
      "Tools, CRM, or follow-up process if they exist",
      "Content workflow and approval structure",
      "Trust signals and visible business layer",
      "The outcome you actually want",
    ],
    prepareTitle: "What to prepare",
    prepare: [
      "Website, social, or public links",
      "A short description of what you want improved",
      "Existing documents, screenshots, or notes if useful",
      "The main problem you want solved first",
      "Any deadline or launch goal",
    ],
    nextTitle: "What happens next",
    nextSteps: [
      {
        title: "We review what exists",
        desc: "We check your current pages, profile, lead flow, and source material before suggesting anything.",
      },
      {
        title: "We identify the right path",
        desc: "Digital Refresh, Ready Business Kit, System Build, AI Workflow, or custom scope.",
      },
      {
        title: "You get the clearest next step",
        desc: "A practical recommendation, not a vague pitch.",
      },
      {
        title: "Scope is confirmed before work starts",
        desc: "Deliverables, timeline, pricing, data handling, and launch requirements are confirmed first.",
      },
    ],
    readyTitle: "Ready to send your request?",
    readyBody:
      "Digital Refresh is the usual first step for existing businesses. If you are launching something new or need a deeper build, we will point you to the right path.",
    directEmailLabel: "Direct email if you prefer:",
    supportLabel: "Support: ",
    businessLabel: "Business development: ",
  },

  footer: {
    llcName: "LYFION LLC",
    llcRole: "Digital systems and automation operations",
    llcOfficeLabel: "Principal Office:",
    slName: "LYFION S.L.",
    slRole: "Business development and European execution",
    slAddressLabel: "Dirección social:",
    supportLabel: "Support:",
    contactLabel: "Contact:",
    nifLabel: "NIF/CIF:",
    signalReview: "Review",
    signalBuild: "Build",
    signalProduction: "Production",
    tagline:
      "Practical systems for websites, intake, workflows, and AI-assisted production.",
    rights: "© 2026 Lyfion.digital. All rights reserved.",
  },

  assistant: {
    button: "Need help choosing?",
    eyebrow: "Need help choosing?",
    body: "Not sure what you need? Tell us what feels unclear, outdated, slow, or disconnected. Start with the closest path below.",
    close: "Close",
    links: [
      { label: "Digital Refresh", href: "/services#digital-refresh" },
      { label: "Ready Business Kit", href: "/services#ready-business-kit" },
      { label: "Full services", href: "/services" },
      { label: "Send request", href: "INTAKE", external: true },
    ],
  },

  cookie: {
    intro:
      "We use necessary cookies to keep the site working. Optional cookies may help us understand visits or improve interactive features. You can accept, reject, or manage preferences.",
    necessary: "Necessary",
    necessaryDesc: "Always on. Required for basic site function.",
    on: "On",
    analytics: "Analytics",
    analyticsDesc:
      "Helps us understand visits and improve the site. Disabled by default.",
    interactive: "Interactive features",
    interactiveDesc: "Off by default. Not loaded on this site yet.",
    save: "Save preferences",
    acceptOptional: "Accept optional",
    rejectOptional: "Reject optional",
    manage: "Manage",
    dialogLabel: "Cookie preferences",
  },
};
