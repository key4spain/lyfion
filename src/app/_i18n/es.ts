import type { Content } from "./dictionary";
import { PRICE } from "./prices";

// ─────────────────────────────────────────────────────────────────────────────
// Spanish content (es-ES). hrefs are NEUTRAL paths; views localize them.
// ─────────────────────────────────────────────────────────────────────────────

export const es: Content = {
  meta: {
    home: {
      title:
        "Lyfion.digital | Sistemas digitales, webs y flujos de automatización",
      description:
        "Sistemas digitales prácticos, webs, flujos de captación de clientes, flujos de contenido y estructuras listas para automatizar, para negocios que necesitan una capa digital más clara.",
    },
    services: {
      title: "Servicios",
      description:
        "Descubre los servicios de Lyfion Digital: Digital Refresh, Ready Business Kit, Digital System Build, AI Content Workflow, complementos y opciones de revisión de sistema.",
    },
    catalog: {
      title: "Ready Business Catalog",
      description:
        "Modelos de partida listos de web de negocio, landing, tienda y web app que se pueden adaptar, construir y lanzar con Lyfion Digital.",
    },
    process: {
      title: "Proceso",
      description:
        "Mira cómo Lyfion Digital avanza desde la revisión hasta la estructura, la construcción, el QA, la entrega y el siguiente paso práctico.",
    },
    work: {
      title: "Trabajo",
      description:
        "Direcciones de trabajo seleccionadas de Lyfion Digital, sistemas internos, modelos de catálogo, estructuras de digital refresh y bases de flujos de contenido con IA.",
    },
    contact: {
      title: "Cuéntanos qué quieres mejorar",
      description:
        "Cuéntale a Lyfion Digital qué quieres mejorar. Envía tu web actual, tu perfil, tu flujo de clientes o el problema de tu flujo de trabajo y obtén el siguiente paso más claro.",
    },
  },

  nav: {
    items: [
      { key: "home", label: "Inicio", href: "/" },
      { key: "services", label: "Servicios", href: "/services" },
      { key: "catalog", label: "Catálogo", href: "/catalog" },
      { key: "process", label: "Proceso", href: "/process" },
      { key: "work", label: "Trabajo", href: "/work" },
      { key: "contact", label: "Contacto", href: "/contact" },
    ],
    cta: "Empieza con Digital Refresh",
    languageLabel: "Idioma",
    switchToEs: "Español",
    switchToEn: "English",
  },

  common: {
    includes: "Incluye",
    notIncluded: "No incluido",
    bestFor: "Ideal para: ",
    mainFocus: "Enfoque principal",
    requiredFor: "Necesario para",
    tellUsImprove: "Cuéntanos qué quieres mejorar",
    tellUsBuild: "Cuéntanos qué quieres construir",
    tellUsNeed: "Cuéntanos qué necesitas",
    viewReadyCatalog: "Ver el catálogo listo",
    viewDigitalRefresh: "Ver Digital Refresh",
    viewOptions: "Ver opciones",
    seeAllServices: "Ver todos los servicios",
    bookSystemReview: "Reserva una revisión de sistema",
    offerDisclaimerRest:
      "El alcance final, los entregables, el calendario, los impuestos/IVA y las condiciones de pago se confirman antes de empezar el trabajo. No se da por supuesto ningún resultado de negocio, volumen de clientes, posicionamiento, resultado de automatización ni resultado de ingresos garantizado.",
    catalogStatus: {
      available: "Disponible para construir",
      demo: "Demo listo",
      production: "En producción",
    },
  },

  home: {
    eyebrow: "LYFION.DIGITAL · 2026",
    heroTitleLead: "Construye el sistema detrás de",
    heroTitleAccent: "tu negocio.",
    heroSubtitle:
      "Lyfion revisa la capa visible de tu negocio y luego traza el primer paso práctico de construcción. Webs, flujo de clientes, flujo de contenido y estructura de lanzamiento detrás del negocio.",
    heroOfferLabel: "Revisión Digital Refresh · ",
    problemLabel: "El problema",
    problemTitleLead:
      "La mayoría de los proyectos no fracasan porque la idea sea mala. Fracasan porque la",
    problemTitleAccent: "capa de ejecución está rota.",
    problemPoints: [
      "Las ideas están dispersas entre chats, documentos y herramientas, sin una fuente de verdad clara.",
      "La gente se mueve antes de que la prioridad esté clara, así que el trabajo empieza rápido pero pierde rumbo.",
      "Las webs salen en vivo sin formularios de captación, lógica de seguimiento ni estructura de CRM.",
      "Los formularios recogen datos, pero nadie se hace cargo del siguiente paso.",
      "Las herramientas de IA funcionan sin QA, sin controles de aprobación ni lógica de negocio definida.",
      "Los fundadores cambian de rumbo porque el proyecto no tiene un tablero operativo, una capa de pruebas ni un registro de decisiones.",
    ],
    buildLabel: "Lo que construimos",
    buildTitle:
      "Construimos los archivos, los flujos y las páginas que mantienen el trabajo unido.",
    buildIntro:
      "Cada servicio es un resultado concreto: un sistema que funciona, no un documento entregable ni una consultoría vaga.",
    buildCategories: [
      {
        title: "Sistemas operativos de negocio",
        desc: "Estructura de fuente de verdad, control de proyectos, permisos, SOP y lógica de delegación para que la ejecución se mantenga organizada a medida que el trabajo crece.",
      },
      {
        title: "Webs y landing pages",
        desc: "Páginas públicas claras con un camino de conversión real, lógica de CTA y una checklist de lanzamiento controlada. No una página que simplemente está ahí.",
      },
      {
        title: "Flujos de automatización",
        desc: "Enrutamiento controlado, notificaciones, captación y seguimiento para que los pasos correctos ocurran sin tener que perseguirlos a mano cada vez.",
      },
      {
        title: "Sistemas de CRM y captación de clientes",
        desc: "Formularios, lógica de enrutamiento, seguimiento de estado, estructura de seguimiento y pasos de verificación para que los clientes potenciales no desaparezcan.",
      },
      {
        title: "Flujos de producción de contenido con IA",
        desc: "Flujos repetibles de imagen, vídeo y contenido asistidos por IA, con controles de QA y pasos de aprobación incorporados.",
      },
      {
        title: "Sistemas de prueba y validación de mercado",
        desc: "Una forma estructurada de probar una idea y reunir evidencia real antes de comprometer tiempo o inversión en una construcción mayor.",
      },
    ],
    servicesLabel: "Servicios",
    servicesTitle: "Empieza con Digital Refresh",
    servicesIntro:
      "Digital Refresh es el primer paso más rápido. Si vas a lanzar algo nuevo o necesitas un sistema más profundo, elige uno de los otros caminos.",
    refreshTitle: "Digital Refresh",
    refreshSummary:
      "Para negocios que ya existen, pero necesitan que su presencia digital se limpie, se estructure y se prepare para la nueva era de la búsqueda y el descubrimiento con IA.",
    refreshIncludes: [
      "Renovación de la web o la landing page",
      "Limpieza del perfil de Instagram",
      "Estructura básica de SEO",
      "Configuración básica de AEO / GEO / LLMO",
      "Revisión del contacto y el flujo de clientes",
      "Mejoras básicas de confianza y credibilidad",
      "Checklist de preparación para el lanzamiento",
    ],
    secondaryCards: [
      {
        title: "Ready Business Kit",
        price: PRICE.readyBusinessKit,
        description:
          "Para negocios nuevos, ofertas o servicios locales que necesitan un paquete de lanzamiento rápido.",
        cta: "Ver Ready Business Kit",
        href: "/services#ready-business-kit",
      },
      {
        title: "Digital System Build",
        price: PRICE.digitalSystemBuild,
        description:
          "Para negocios que necesitan una web más profunda, captación de clientes, lógica de CRM, flujo de servicio, QA y preparación para el lanzamiento.",
        cta: "Ver System Build",
        href: "/services#digital-system-build",
      },
      {
        title: "AI Content & Production Workflow",
        price: PRICE.aiContentWorkflow,
        description:
          "Para marcas que necesitan un sistema repetible para planificar, producir, aprobar y publicar contenido.",
        cta: "Ver AI Workflow",
        href: "/services#ai-content-workflow",
      },
    ],
    whoLabel: "Para quién es",
    whoTitleLead: "Para equipos donde el trabajo existe, pero el",
    whoTitleAccent: "sistema no.",
    whoIntro:
      "No es para todos los proyectos. Está hecho para aquellos en los que el problema es la ejecución, no la idea.",
    whoItems: [
      {
        title: "Fundadores con la ejecución dispersa",
        desc: "Ideas, herramientas, documentos y tareas sin terminar repartidas entre chats y plataformas, sin una fuente de verdad clara.",
      },
      {
        title: "Negocios de servicios que necesitan estructura de captación",
        desc: "Una web más limpia, un flujo de captación de clientes, lógica de seguimiento y estructura de CRM para que los clientes potenciales no se escapen por las grietas.",
      },
      {
        title: "Equipos que usan herramientas de IA sin barreras",
        desc: "Flujos de IA funcionando sin una fuente de verdad clara, sin proceso de QA ni límites de aprobación antes de publicar.",
      },
      {
        title: "Proyectos que necesitan evidencia de mercado primero",
        desc: "Una capa de prueba estructurada antes de comprometer tiempo o dinero serios en una construcción mayor.",
      },
      {
        title: "Negocios que aún no están listos para plataformas complejas",
        desc: "Automatización práctica y estructura operativa sin la carga del software empresarial ni de largos contratos de agencia.",
      },
    ],
    proofLabel: "Sistemas internos",
    proofTitleLead: "Construido a partir de sistemas internos reales,",
    proofTitleAccent: "no de la teoría.",
    proofIntro:
      "Lyfion Digital se forma a través de construcciones internas reales: archivos operativos de negocio, estructuras de webs, lógica de CRM y captación, sistemas de producción de contenido, checklists de QA y documentación de proyectos controlada que se usa en el trabajo interno y con clientes.",
    proofCards: [
      {
        title: "Estructura de Business OS",
        desc: "Archivos de fuente de verdad, mapas de proyecto, reglas de permisos y tableros operativos creados para entornos de negocio con varios proyectos.",
      },
      {
        title: "Sistemas de web y landing",
        desc: "Páginas estructuradas, lógica de CTA, encuadre de servicios y checklists de preparación para el lanzamiento, construidos como infraestructura digital real.",
      },
      {
        title: "Flujos de CRM y captación",
        desc: "Formularios, lógica de enrutamiento, seguimiento de clientes y solicitudes, estructura de seguimiento y pasos prácticos de verificación.",
      },
      {
        title: "Flujo de producción con IA",
        desc: "Sistemas de prompts, estructuras de planificación de contenido, revisión de QA del resultado y controles de aprobación antes de cualquier paso de publicación.",
      },
    ],
    proofSeeWork: "Ver trabajo seleccionado",
    proofNote:
      "Solo referencias de alto nivel. Sin capturas, métricas ni datos privados.",
    workLabel: "Trabajo seleccionado",
    workTitle: "Sistemas internos reales e infraestructura de proyectos.",
    workViewAll: "Ver trabajo seleccionado",
    workCategories: [
      "Sistemas operativos internos",
      "Sistemas de web y landing",
      "Flujos de CRM / captación de clientes",
      "Flujos de producción con IA",
      "Lógica de dashboard interno",
    ],
    processLabel: "Proceso",
    processTitle: "Un camino claro de la revisión al sistema en funcionamiento.",
    processSeeFull: "Ver el proceso completo",
    processSteps: [
      {
        title: "Revisión",
        desc: "Entender el proyecto, el material de partida, las herramientas actuales, los riesgos y el resultado deseado.",
      },
      {
        title: "Estructura",
        desc: "Definir la fuente de verdad, la lógica de servicio, el flujo de usuario, el CTA, los formularios, el CRM y los límites de aprobación.",
      },
      {
        title: "Construcción",
        desc: "Crear la web, el flujo de trabajo, la estructura de CRM y captación, el sistema de contenido o la capa operativa.",
      },
      {
        title: "QA",
        desc: "Comprobar las afirmaciones, el enrutamiento, la vista móvil, la lógica de formularios, las pruebas, el riesgo de datos y la preparación para el lanzamiento.",
      },
      {
        title: "Lanzamiento / Entrega",
        desc: "Solo tras la aprobación. Sin publicaciones sin control.",
      },
      {
        title: "Iterar",
        desc: "Medir la respuesta, mejorar la oferta y construir la siguiente capa.",
      },
    ],
    trustLabel: "Confianza y seguridad",
    trustLead:
      "Trabajamos a partir de material de partida verificado, un alcance definido y controles de aprobación. Sin garantías falsas. Sin afirmaciones públicas sin pruebas.",
    trustSub:
      "Cada construcción empieza con una revisión, un flujo de trabajo claro y una decisión sobre qué se debe construir primero.",
    ctaLabel: "Empezar",
    ctaTitleLead: "Cuéntanos qué quieres",
    ctaTitleAccent: "mejorar.",
    ctaIntro:
      "Envía tu web, tu perfil, tu flujo de clientes o tu objetivo de lanzamiento. Revisamos lo que existe, identificamos las carencias y trazamos el primer paso práctico de construcción.",
  },

  services: {
    headerLabel: "Servicios",
    headerTitle: "Cuatro formas de construir la capa digital detrás de tu negocio.",
    headerIntro:
      "Elige el punto de entrada que encaja con tu etapa actual. Si no lo tienes claro, empieza con una revisión y trazaremos el primer paso más limpio.",
    areas: [
      {
        id: "digital-refresh",
        title: "Digital Refresh",
        price: PRICE.digitalRefresh,
        summary:
          "Para negocios que ya existen y necesitan que su capa digital visible se limpie, se estructure y se prepare para la búsqueda, las señales de confianza y el flujo de clientes.",
        includes: [
          "Renovación de la web o la landing page",
          "Limpieza del perfil de Instagram",
          "Estructura básica de SEO",
          "Configuración básica de AEO / GEO / LLMO",
          "Revisión del contacto y el flujo de clientes",
          "Mejoras básicas de confianza y credibilidad",
          "Checklist de preparación para el lanzamiento",
        ],
        packages: [
          {
            name: "Digital Refresh Basic",
            price: PRICE.drBasic,
            bestFor:
              "Pequeños negocios que ya tienen una web o landing page pero necesitan que se limpie, se corrija y se vuelva más creíble.",
            includes: [
              "Revisión de la web o landing page existente",
              "Limpieza básica de la estructura de la web",
              "Limpieza de la bio y la estructura del perfil de Instagram",
              "Revisión básica del título SEO y la meta descripción",
              "Estructura básica de encabezados y palabras clave",
              "Alineación básica de AEO / GEO / LLMO",
              "Revisión del botón de contacto y el flujo de clientes",
              "Checklist de confianza y credibilidad",
              "Informe breve de mejoras",
            ],
            notIncluded: [
              "Construcción de una web nueva",
              "Rediseño completo",
              "Configuración de CRM",
              "Producción de contenido",
              "Publicidad de pago",
              "Publicación diaria",
              "Automatización avanzada",
            ],
          },
          {
            name: "Digital Refresh Plus",
            price: PRICE.drPlus,
            bestFor:
              "Negocios que necesitan una renovación más fuerte, con un posicionamiento más claro, mejor estructura y un flujo de conversión mejorado.",
            includes: [
              "Todo lo de Digital Refresh Basic",
              "Estructura más fuerte de la home o la landing page",
              "Limpieza del posicionamiento de servicios",
              "Mejora de la estructura de CTA",
              "Estructura de destacados de Instagram",
              "Dirección básica de contenido para redes sociales",
              "Mejor mapa de palabras clave SEO",
              "Mejor estructura de contenido AEO / GEO / LLMO",
              "Recomendación de formulario de captación",
              "Hoja de ruta de mejoras a 7 días",
            ],
            notIncluded: [
              "Construcción de una web a medida completa",
              "Implementación completa de CRM",
              "Gestión activa de redes sociales",
              "Gestión de publicidad de pago",
            ],
          },
          {
            name: "Digital Refresh Custom",
            price: "Alcance personalizado tras la revisión",
            bestFor:
              "Negocios con una presencia digital existente que necesita una limpieza más profunda en web, redes sociales, SEO, flujo de clientes, contenido y estructura de confianza.",
            includes: [
              "Alcance definido tras la revisión en web, redes, SEO, flujo de clientes y estructura de confianza",
            ],
            cta: "Solicitar revisión personalizada",
            ctaHref: "INTAKE",
          },
        ],
        cta: "Ver opciones de Digital Refresh",
        ctaHref: "/services#digital-refresh",
      },
      {
        id: "ready-business-kit",
        title: "Ready Business Kit",
        price: PRICE.readyBusinessKit,
        summary:
          "Para negocios nuevos, ofertas o servicios locales que necesitan un paquete de lanzamiento rápido con una página limpia, formulario de captación, estructura básica de CRM y materiales de lanzamiento. No es una plataforma a medida completa ni una construcción de automatización compleja.",
        notes: [
          "Se pueden incluir 60 materiales listos para usar en redes sociales según el paquete y el alcance. Sin publicación activa ni gestión de cuentas.",
        ],
        notIncludedLine:
          "No incluido: plataforma a medida completa, automatización avanzada de CRM, publicación diaria, gestión de publicidad de pago ni ventas garantizadas.",
        packages: [
          {
            name: "Ready One-Page Site",
            price: PRICE.rbkOnePage,
            bestFor:
              "Negocios sencillos, servicios locales, ofertas únicas o ideas de prueba que necesitan una web de una sola página limpia y rápida.",
            includes: [
              "Landing page de una página en Next.js",
              "Estructura básica de la oferta",
              "Botones de contacto y configuración del CTA",
              "Formulario de captación",
              "Hoja básica de CRM",
              "Base básica de SEO",
              "Base básica de AEO / GEO / LLMO",
              "Checklist de lanzamiento",
            ],
          },
          {
            name: "Ready Multi-Section Website",
            price: PRICE.rbkMultiSection,
            bestFor:
              "Negocios que necesitan más estructura que una web sencilla de una sola página.",
            includes: [
              "Web de varias secciones en Next.js",
              "Estructura de la home",
              "Secciones de servicios",
              "Sección de preguntas frecuentes",
              "Sección de confianza y credibilidad",
              "Mejor formulario de cualificación de clientes",
              "Pipeline básico de CRM",
              "Estructura básica de SEO/AEO/GEO/LLMO",
              "Hoja de ruta de lanzamiento",
            ],
          },
          {
            name: "Ready Web App",
            price: PRICE.rbkWebApp,
            bestFor:
              "Proyectos que necesitan una experiencia más funcional tipo web app en lugar de una simple página de marketing.",
            includes: [
              "Estructura de web app en Next.js",
              "Flujo de landing",
              "Formulario de captación",
              "Lógica básica de CRM",
              "Secciones interactivas sencillas",
              "Checklist de lanzamiento",
              "Preparación del despliegue en Vercel",
            ],
          },
        ],
        cta: "Solicitar kit de lanzamiento",
        ctaHref: "INTAKE",
      },
      {
        id: "digital-system-build",
        title: "Digital System Build",
        price: PRICE.digitalSystemBuild,
        summary:
          "Para negocios que necesitan construir un sistema digital más profundo tras la revisión: web, captación de clientes, lógica de CRM, flujo de servicio, QA y preparación para el lanzamiento. No es un kit de lanzamiento rápido.",
        packages: [
          {
            name: "Digital System Build Core",
            price: PRICE.dsbCore,
            bestFor:
              "Negocios listos para construir una capa operativa digital práctica tras la revisión del alcance.",
            includes: [
              "Estructura de web o landing page",
              "Posicionamiento de servicios",
              "Formulario de captación / flujo de entrada",
              "Estructura básica de CRM",
              "Lógica de seguimiento",
              "Enrutamiento del contacto",
              "Base básica del flujo de contenido",
              "Checklist de QA",
              "Checklist de preparación para el lanzamiento",
              "Notas de entrega",
            ],
          },
          {
            name: "Digital System Build Pro",
            price: PRICE.dsbPro,
            bestFor:
              "Negocios que necesitan una estructura más profunda en páginas, CRM, flujo de trabajo y soporte de lanzamiento.",
            includes: [
              "Todo lo de Core",
              "Estructura de web de varias páginas o web app",
              "Lógica de CRM más profunda",
              "Mapeo del recorrido del cliente",
              "Documentación del flujo de servicio",
              "Controles de aprobación internos",
              "Estructura de entrega a equipo/cliente",
              "Base de contenido para producción futura",
              "Soporte de lanzamiento",
              "Plan de mejora posterior al lanzamiento",
            ],
          },
          {
            name: "Digital System Build Custom",
            price: "Alcance personalizado tras la revisión",
            bestFor:
              "Proyectos complejos que necesitan una arquitectura a medida más allá de los paquetes estándar.",
            includes: [
              "Arquitectura de CRM a medida",
              "Flujos de automatización",
              "Dashboard interno",
              "Portal de cliente",
              "Portal de socios",
              "Sistema multiidioma",
              "Enrutamiento avanzado de clientes",
              "Estructura de aprobación de equipo",
              "Estructura de informes",
              "Documentación y SOP",
            ],
            cta: "Reservar una revisión de sistema",
            ctaHref: "INTAKE",
          },
        ],
        cta: "Reservar una revisión de sistema",
        ctaHref: "INTAKE",
      },
      {
        id: "ai-content-workflow",
        title: "AI Content & Production Workflow",
        price: PRICE.aiContentWorkflow,
        summary:
          "Para marcas que necesitan un flujo de contenido repetible para planificar, producir, aprobar, hacer QA y publicar.",
        packages: [
          {
            name: "AI Content Workflow Core",
            price: PRICE.aicCore,
            bestFor:
              "Marcas que empiezan a estructurar contenido asistido por IA con una planificación y un QA claros.",
            includes: [
              "Estructura de planificación de contenido",
              "Dirección de la voz de marca",
              "Categorías de contenido semanales/mensuales",
              "Flujo de prompts de imagen",
              "Flujo de prompts de vídeo",
              "Checklist de aprobación",
              "Checklist de QA",
              "Flujo básico de publicación/preparación",
              "Recomendaciones de herramientas",
            ],
          },
          {
            name: "AI Production Workflow Pro",
            price: PRICE.aicPro,
            bestFor:
              "Equipos que necesitan un sistema de producción más completo con plantillas, controles y entrega.",
            includes: [
              "Todo lo de Core",
              "Flujo completo de producción de contenido",
              "Plantillas de campaña reutilizables",
              "Estructura de vídeo de formato corto",
              "Biblioteca de prompts de imagen/vídeo",
              "Sistema de entrega de equipo",
              "Controles de aprobación de cliente",
              "Proceso de QA de contenido",
              "Estructura de calendario de producción mensual",
              "Recomendación de herramientas y flujo de trabajo",
              "Estructura de preparación para la publicación",
            ],
          },
          {
            name: "AI Content Workflow Custom",
            price: "Alcance personalizado tras la revisión",
            bestFor:
              "Marcas que necesitan un motor de contenido a medida, un flujo de avatar o una estructura multiidioma.",
            includes: [
              "Sistema completo de contenido de marca",
              "Flujo de avatar con IA",
              "Flujo de contenido del fundador",
              "Biblioteca de guiones de vídeo",
              "Sistema de campañas",
              "Motor de contenido mensual",
              "Tablero de producción de equipo",
              "Flujo de aprobación de QA",
              "Flujo de aprobación de cliente",
              "Estructura de contenido multiidioma",
            ],
            cta: "Construir flujo de producción a medida",
            ctaHref: "INTAKE",
          },
        ],
        cta: "Ver opciones de flujo de trabajo",
        ctaHref: "/services#ai-content-workflow",
      },
    ],
    addOnsTitle: "Complementos opcionales",
    addOns: [
      { name: "Sección extra de landing page", price: PRICE.addExtraLandingSection },
      { name: "Página extra de la web", price: PRICE.addExtraWebsitePage },
      { name: "Versión en otro idioma", price: PRICE.addLanguageVersion },
      { name: "30 materiales adicionales para redes sociales", price: PRICE.add30Social },
      { name: "Pack de plantillas de Canva", price: PRICE.addCanvaPack },
      { name: "Mejora básica de CRM", price: PRICE.addCrmUpgrade },
      { name: "Formulario de captación avanzado", price: PRICE.addAdvancedLeadForm },
      { name: "Secuencia de seguimiento por email", price: PRICE.addEmailSequence },
      { name: "Configuración del flujo de reservas", price: PRICE.addBookingFlow },
      { name: "Configuración de Google Business Profile", price: PRICE.addGbpSetup },
      { name: "Configuración de Analytics / Metricool", price: PRICE.addAnalyticsSetup },
      { name: "Estructura básica de landing para publicidad de pago", price: PRICE.addAdsLanding },
      { name: "Soporte mensual", price: PRICE.addMonthlySupport },
      { name: "Soporte mensual del flujo de contenido", price: PRICE.addMonthlyContentSupport },
      { name: "Soporte mensual de operaciones digitales", price: PRICE.addMonthlyOpsSupport },
    ],
    addOnsNote:
      "Los complementos se presupuestan por separado. Sin pago ni compra automática en este sitio.",
    systemReviewTitle: "Revisión de sistema",
    systemReviewSummary:
      "Antes de construcciones mayores, revisamos tu web actual, tu presencia en redes, tu flujo de clientes, tu estructura de servicio, tu contenido y tus objetivos de negocio. Tras la revisión, confirmamos el mejor paquete, el alcance exacto, el calendario y el precio final.",
    systemReviewRequiredFor: [
      "Digital System Build",
      "AI Production Workflow Pro",
      "Paquetes personalizados",
      "Proyectos complejos o poco claros",
    ],
    systemReviewNote:
      "Digital Refresh y Ready One-Page Site pueden empezar sin una revisión por separado si el alcance está claro.",
    comparisonTitle: "Compara los puntos de entrada",
    comparisonHeaders: ["Paquete", "Ideal para", "Precio de partida", "Resultado principal"],
    comparisonRows: [
      {
        package: "Digital Refresh",
        bestFor: "Negocios existentes que necesitan una limpieza",
        startingPrice: PRICE.digitalRefreshFlat,
        outcome:
          "Web, Instagram, SEO y base de señales de confianza más limpios",
      },
      {
        package: "Ready Business Kit",
        bestFor: "Negocios nuevos que necesitan un lanzamiento rápido",
        startingPrice: PRICE.readyBusinessKitFlat,
        outcome: "Landing page, formulario de captación, CRM, checklist de lanzamiento",
      },
      {
        package: "Digital System Build",
        bestFor: "Negocios que necesitan un sistema digital real",
        startingPrice: PRICE.digitalSystemBuild,
        outcome: "Web, captación de clientes, lógica de CRM, flujo de servicio, QA",
      },
      {
        package: "AI Content Workflow",
        bestFor: "Marcas que necesitan una producción repetible",
        startingPrice: PRICE.aiContentWorkflow,
        outcome:
          "Planificación de contenido, prompts de IA, QA, controles de aprobación, flujo de producción",
      },
    ],
    notSureTitle: "¿No tienes claro qué elegir?",
    notSureGuide: [
      {
        choose: "Digital Refresh",
        when: "ya tienes un negocio online y necesitas limpiarlo.",
      },
      {
        choose: "Ready Business Kit",
        when: "necesitas lanzar rápido un nuevo negocio, oferta o servicio.",
      },
      {
        choose: "Digital System Build",
        when: "necesitas una web más profunda y un sistema de clientes, CRM y servicio.",
      },
      {
        choose: "AI Content & Production Workflow",
        when: "tu producción de contenido es caótica y necesita un proceso repetible.",
      },
    ],
    notSureCta: "Cuéntanos qué quieres construir",
  },

  catalog: {
    headerLabel: "Catálogo",
    headerTitle: "Webs de negocio y kits de lanzamiento listos.",
    headerIntro:
      "Elige un modelo de partida. Cada elemento se puede adaptar con tu nombre, tu oferta, tus colores, tus datos de contacto, tu formulario de captación y tus materiales de lanzamiento.",
    categoriesLabel: "Categorías: ",
    categories: [
      "Webs de servicio local",
      "Tiendas online",
      "Páginas de alquiler / reservas",
      "Páginas inmobiliarias / de propiedades",
      "Páginas de mensajería / reparto",
      "Páginas de consultoría / agencia",
      "Marcas de creadores / contenido",
      "Mini web apps",
    ],
    items: [
      {
        id: "local-service-one-page",
        name: "Local Service One-Page",
        category: "Web de servicio local",
        bestFor:
          "Empresas de limpieza, equipos de reparaciones, salones, contratistas, pequeños servicios locales",
        includes: [
          "Maquetación de una página en Next.js",
          "Estructura de oferta y CTA",
          "Formulario de captación",
          "Hoja básica de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catLocalServiceOnePage,
        status: "available",
      },
      {
        id: "boutique-shop-starter",
        name: "Boutique Online Shop Starter",
        category: "Tienda online",
        bestFor:
          "Pequeñas marcas de producto, tiendas boutique, productos artesanales, catálogos sencillos",
        includes: [
          "Estructura tipo tienda en Next.js",
          "Secciones de producto",
          "Flujo de captación o consulta",
          "Hoja básica de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catBoutiqueShop,
        status: "available",
      },
      {
        id: "rental-booking-page",
        name: "Rental / Booking Landing Page",
        category: "Página de alquiler / reservas",
        bestFor:
          "Alquiler de coches, apartamentos, alquiler de equipos, servicios de reserva locales",
        includes: [
          "Landing page enfocada a reservas",
          "Secciones de oferta",
          "Formulario de captación",
          "Pipeline básico de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catRentalBooking,
        status: "available",
      },
      {
        id: "real-estate-lead-page",
        name: "Real Estate Lead Page",
        category: "Página inmobiliaria / de propiedades",
        bestFor:
          "Agentes, campañas de propiedades, ofertas de inversión, páginas de captación de compradores locales",
        includes: [
          "Estructura de página de captación inmobiliaria",
          "Secciones de confianza",
          "Formulario de cualificación de clientes",
          "Hoja básica de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catRealEstateLead,
        status: "available",
      },
      {
        id: "courier-recruitment-page",
        name: "Courier Recruitment Page",
        category: "Página de mensajería / reparto",
        bestFor: "Reclutamiento, socios de flota, captación de repartidores",
        includes: [
          "Flujo de landing de reclutamiento",
          "Secciones de roles",
          "Formulario de solicitud",
          "Captación básica de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catCourierRecruitment,
        status: "available",
      },
      {
        id: "consulting-offer-page",
        name: "Consulting Offer Page",
        category: "Página de consultoría / agencia",
        bestFor:
          "Consultores, pequeñas agencias, expertos en servicios, asesores de negocio",
        includes: [
          "Estructura de página de oferta",
          "Encuadre de servicios",
          "Formulario de captación",
          "Hoja básica de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catConsultingOffer,
        status: "available",
      },
      {
        id: "creator-brand-launch",
        name: "Creator Brand Launch Page",
        category: "Marca de creador / contenido",
        bestFor:
          "Creadores, canales faceless, marcas personales, proyectos de contenido",
        includes: [
          "Página de lanzamiento de marca",
          "Encuadre de oferta o canal",
          "Formulario de captación o contacto",
          "Hoja básica de CRM",
          "Checklist de lanzamiento",
        ],
        startingPrice: PRICE.catCreatorBrand,
        status: "available",
      },
      {
        id: "mini-web-app-starter",
        name: "Mini Web App Starter",
        category: "Mini web app",
        bestFor:
          "Calculadoras, herramientas internas, apps de cualificación de clientes, pequeños portales de cliente",
        includes: [
          "Estructura base de web app en Next.js",
          "Secciones interactivas",
          "Lógica de formulario de captación",
          "Estructura básica de CRM",
          "Preparación del despliegue en Vercel",
        ],
        startingPrice: PRICE.catMiniWebApp,
        status: "available",
      },
    ],
    requestModel: "Solicitar este modelo",
    footnote:
      "Los modelos del catálogo son puntos de partida. El contenido, el alcance, el calendario y el precio finales se confirman antes de empezar el trabajo.",
    requestCta: "Solicitar un modelo del catálogo",
  },

  process: {
    headerLabel: "Proceso",
    headerTitle: "Un camino claro de la primera revisión al sistema en funcionamiento.",
    headerIntro:
      "Lyfion no empieza adivinando lo que necesitas. Primero entendemos lo que existe y luego elegimos el camino adecuado: limpieza, lanzamiento rápido, construcción de un sistema más profundo o flujo de producción de contenido.",
    steps: [
      {
        title: "Entender lo que existe",
        body: "Revisar la web actual, la oferta, la presencia en redes, el flujo de clientes, las herramientas, el contenido y el objetivo de negocio.",
      },
      {
        title: "Elegir el camino adecuado",
        body: "Decidir si el proyecto necesita Digital Refresh, Ready Business Kit, Digital System Build, AI Content Workflow o un alcance personalizado.",
      },
      {
        title: "Estructurar la capa digital",
        body: "Mapear la estructura de páginas, la lógica de servicio, la captación de clientes, el flujo de contenido, la lógica de CRM/seguimiento y los requisitos de lanzamiento.",
      },
      {
        title: "Construir o preparar el sistema",
        body: "Crear la web, la landing page, la base de web app, el flujo de captación, los documentos de flujo de trabajo, el sistema de contenido o la estructura de producción.",
      },
      {
        title: "QA antes del lanzamiento",
        body: "Comprobar los textos, los enlaces, los formularios, la maquetación móvil, las señales de confianza, los precios, las afirmaciones, la privacidad y la preparación para el lanzamiento antes de que nada salga al público.",
      },
      {
        title: "Entrega y siguiente paso",
        body: "Entregar los activos en funcionamiento, las notas, la hoja de ruta o la recomendación de la siguiente construcción para que el negocio sepa qué hacer a continuación.",
      },
    ],
    whichTitle: "¿Qué camino encaja?",
    paths: [
      {
        title: "Digital Refresh",
        description: "Para negocios existentes que necesitan una limpieza.",
        href: "/services#digital-refresh",
      },
      {
        title: "Ready Business Kit",
        description: "Para negocios u ofertas nuevas que necesitan un lanzamiento rápido.",
        href: "/services#ready-business-kit",
      },
      {
        title: "Digital System Build",
        description: "Para webs más profundas y sistemas de clientes, CRM y servicio.",
        href: "/services#digital-system-build",
      },
      {
        title: "AI Content Workflow",
        description: "Para contenido repetible y producción asistida por IA.",
        href: "/services#ai-content-workflow",
      },
    ],
    closingNote:
      "¿No tienes claro qué camino encaja? Envía lo que tienes ahora y trazaremos el primer paso práctico.",
  },

  work: {
    headerLabel: "Trabajo",
    headerTitle: "Trabajo que muestra cómo Lyfion construye sistemas.",
    headerIntro:
      "Esta página muestra los tipos de sistemas que Lyfion construye y prepara: estructuras de digital refresh, modelos de lanzamiento listos, sistemas de servicio, flujos de contenido y capas operativas internas. Los casos de estudio públicos se añaden solo cuando las pruebas y el permiso están claros.",
    internalTitle: "Sistemas internos",
    internalBody:
      "Lyfion construye a partir de estructuras operativas internas reales: archivos de fuente de verdad, mapas de servicio, lógica de oferta, flujos de captación, checklists de QA y sistemas de lanzamiento.",
    internalExamples: [
      "Estructura de Business OS",
      "Arquitectura de servicio",
      "Lógica de captación y CRM",
      "Comprobaciones de preparación para el lanzamiento",
    ],
    catalogTitle: "Ready Business Catalog",
    catalogBody:
      "Los modelos de negocio listos se preparan como puntos de partida para webs de una página, webs de varias secciones y bases de web app.",
    viewCatalog: "Ver catálogo",
    refreshTitle: "Dirección de trabajo de Digital Refresh",
    refreshBody:
      "El trabajo de Digital Refresh se centra en limpiar la capa visible del negocio: web, landing page, estructura del perfil, señales de confianza, estructura de búsqueda y flujo de clientes.",
    aiTitle: "AI Content & Production Workflow",
    aiBody:
      "El trabajo de producción con IA se centra en la planificación repetible, los flujos de prompts, los controles de aprobación, el QA, la entrega y la preparación para la publicación.",
    proofTitle: "Política de pruebas",
    proofBody:
      "No publicamos sistemas privados de clientes, dashboards ni resultados sin permiso. Las pruebas públicas se añadirán solo cuando la fuente, los derechos y la redacción estén aprobados.",
    closingNote:
      "Cuéntanos qué quieres construir y trazaremos el camino de partida adecuado.",
  },

  contact: {
    headerLabel: "Contacto",
    headerTitle: "Cuéntanos qué quieres mejorar",
    headerIntro:
      "No necesitas saber la solución técnica. Envía lo que existe, lo que sientes poco claro, lento, anticuado o desconectado, y lo que quieres lograr. Lo revisaremos y te señalaremos el siguiente paso más claro.",
    lookAtTitle: "Qué miramos primero",
    lookAtFirst: [
      "La web o landing page actual, si la hay",
      "Los perfiles sociales o la presencia pública del negocio",
      "Los formularios de contacto, el flujo de clientes o el proceso de reservas",
      "Las herramientas, el CRM o el proceso de seguimiento si existen",
      "El flujo de contenido y la estructura de aprobación",
      "Las señales de confianza y la capa visible del negocio",
      "El resultado que realmente quieres",
    ],
    prepareTitle: "Qué preparar",
    prepare: [
      "Enlaces de la web, las redes o públicos",
      "Una breve descripción de lo que quieres mejorar",
      "Documentos, capturas o notas existentes si son útiles",
      "El problema principal que quieres resolver primero",
      "Cualquier fecha límite u objetivo de lanzamiento",
    ],
    nextTitle: "Qué pasa después",
    nextSteps: [
      {
        title: "Revisamos lo que existe",
        desc: "Comprobamos tus páginas actuales, tu perfil, tu flujo de clientes y el material de partida antes de sugerir nada.",
      },
      {
        title: "Identificamos el camino adecuado",
        desc: "Digital Refresh, Ready Business Kit, System Build, AI Workflow o un alcance personalizado.",
      },
      {
        title: "Recibes el siguiente paso más claro",
        desc: "Una recomendación práctica, no un discurso vago.",
      },
      {
        title: "El alcance se confirma antes de empezar el trabajo",
        desc: "Los entregables, el calendario, el precio, el tratamiento de datos y los requisitos de lanzamiento se confirman primero.",
      },
    ],
    readyTitle: "¿Listo para enviar tu solicitud?",
    readyBody:
      "Digital Refresh suele ser el primer paso para negocios existentes. Si vas a lanzar algo nuevo o necesitas una construcción más profunda, te señalaremos el camino adecuado.",
    directEmailLabel: "Email directo si lo prefieres:",
    supportLabel: "Soporte: ",
    businessLabel: "Desarrollo de negocio: ",
  },

  footer: {
    llcName: "LYFION LLC",
    llcRole: "Sistemas digitales y operaciones de automatización",
    llcOfficeLabel: "Oficina principal:",
    slName: "LYFION S.L.",
    slRole: "Desarrollo de negocio y ejecución europea",
    slAddressLabel: "Dirección social:",
    supportLabel: "Soporte:",
    contactLabel: "Contacto:",
    nifLabel: "NIF/CIF:",
    signalReview: "Revisión",
    signalBuild: "Construcción",
    signalProduction: "Producción",
    tagline:
      "Sistemas prácticos para webs, captación, flujos de trabajo y producción asistida por IA.",
    rights: "© 2026 Lyfion.digital. Todos los derechos reservados.",
  },

  assistant: {
    button: "¿Necesitas ayuda para elegir?",
    eyebrow: "¿Necesitas ayuda para elegir?",
    body: "¿No tienes claro qué necesitas? Cuéntanos qué sientes poco claro, anticuado, lento o desconectado. Empieza con el camino más cercano de abajo.",
    close: "Cerrar",
    links: [
      { label: "Digital Refresh", href: "/services#digital-refresh" },
      { label: "Ready Business Kit", href: "/services#ready-business-kit" },
      { label: "Todos los servicios", href: "/services" },
      { label: "Enviar solicitud", href: "INTAKE", external: true },
    ],
  },

  cookie: {
    intro:
      "Usamos cookies necesarias para que el sitio funcione. Las cookies opcionales pueden ayudarnos a entender las visitas o a mejorar las funciones interactivas. Puedes aceptar, rechazar o gestionar tus preferencias.",
    necessary: "Necesarias",
    necessaryDesc: "Siempre activas. Necesarias para el funcionamiento básico del sitio.",
    on: "Activadas",
    analytics: "Analítica",
    analyticsDesc:
      "Nos ayuda a entender las visitas y a mejorar el sitio. Desactivada por defecto.",
    interactive: "Funciones interactivas",
    interactiveDesc: "Desactivadas por defecto. Aún no se cargan en este sitio.",
    save: "Guardar preferencias",
    acceptOptional: "Aceptar opcionales",
    rejectOptional: "Rechazar opcionales",
    manage: "Gestionar",
    dialogLabel: "Preferencias de cookies",
  },
};
