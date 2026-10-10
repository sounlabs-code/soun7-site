import type { Locale } from "./language-context";

export type SolutionKey = "apps" | "ai" | "digital" | "telecom" | "led" | "platforms";

export type ContentShape = {
  nav: {
    home: string;
    solutions: string;
    realisations: string;
    approche: string;
    apropos: string;
    contact: string;
    cta: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    tagline: string;
  };
  solutions: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    intro: string;
    contactCta: string;
    items: { key: SolutionKey; n: string; title: string; short: string; desc: string }[];
  };
  realisations: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    intro: string;
    view: string;
    watch: string;
    close: string;
    soon: string;
    projects: {
      slug?: string;
      name: string;
      category: string;
      desc: string;
      cover?: string;
      video?: { src: string; poster: string };
    }[];
    more: string;
  };
  approche: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    intro: string;
    steps: { n: string; title: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
    expertiseLabel: string;
    tagline: string;
  };
  contact: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    intro: string;
    location: string;
    email: string;
    socialsNote: string;
    projectTypes: string[];
    selectPlaceholder: string;
    fields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      projectType: string;
      message: string;
    };
    messagePlaceholder: string;
    submitLabel: string;
    sending: string;
    sentNote: string;
    errors: { required: string; email: string };
    subjectPrefix: string;
  };
  footer: {
    brandNote: string;
    rights: (year: number) => string;
    tagline: string;
    top: string;
  };
  appDetail: {
    back: string;
    problemLabel: string;
    solutionLabel: string;
    featuresLabel: string;
    screensLabel: string;
    videoLabel: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    videoSoon: string;
  };
  video: {
    play: string;
    pause: string;
    mute: string;
    unmute: string;
  };
};

export const content: Record<Locale, ContentShape> = {
  fr: {
    nav: {
      home: "Accueil",
      solutions: "Solutions",
      realisations: "Réalisations",
      approche: "Approche",
      apropos: "À propos",
      contact: "Contact",
      cta: "Démarrer un projet",
      menuLabel: "Ouvrir le menu",
    },
    hero: {
      badge: "SOUN7 · SOUN SET SARL",
      title1: "Là où l'innovation",
      title2: "prend vie.",
      paragraph:
        "Des applications aux infrastructures télécoms, SOUN7 transforme les idées en solutions numériques concrètes, pensées depuis l'Afrique pour le monde.",
      ctaPrimary: "Explorer nos solutions",
      ctaSecondary: "Démarrer un projet",
      scroll: "Découvrir",
      tagline: "Connecting Vision to Reality",
    },
    solutions: {
      eyebrow: "Nos solutions",
      title1: "Des solutions pour un monde",
      titleAccent: "connecté",
      intro:
        "De l'application mobile à l'infrastructure télécoms, SOUN7 couvre l'ensemble de la chaîne technologique nécessaire à la transformation digitale.",
      contactCta: "En parler avec SOUN7",
      items: [
        {
          key: "apps",
          n: "01",
          title: "Applications Web & Mobile",
          short: "Des applications performantes, du prototype à la production.",
          desc: "Conception et développement d'applications sur mesure, pensées pour la performance et l'expérience utilisateur, du prototype au déploiement en production.",
        },
        {
          key: "ai",
          n: "02",
          title: "Intelligence Artificielle",
          short: "L'IA au service de produits concrets.",
          desc: "Intégration de l'IA dans des produits concrets : automatisation, assistance, analyse de données et outils intelligents adaptés aux réalités locales.",
        },
        {
          key: "digital",
          n: "03",
          title: "Solutions Digitales",
          short: "Des outils pour gérer, payer et piloter l'activité.",
          desc: "Outils numériques pensés pour les entreprises et institutions : gestion, paiement, coordination des équipes et pilotage de l'activité au quotidien.",
        },
        {
          key: "telecom",
          n: "04",
          title: "Télécommunications & Fibre Optique",
          short: "Une expertise fibre construite sur le terrain.",
          desc: "Une expertise construite sur le terrain : direction technique de projets fibre optique chez INCOO TECHNOLOGY, au Gabon. Cette expérience nourrit aujourd'hui le déploiement et la supervision d'infrastructures télécoms pour nos clients.",
        },
        {
          key: "led",
          n: "05",
          title: "Communication & Écrans LED",
          short: "Des dispositifs visuels qui donnent de l'impact.",
          desc: "Exploitation d'écrans LED et solutions de communication digitale, en coopération avec des structures spécialisées dans la production audiovisuelle comme AFRICA SPARK, pour donner du rythme et de l'impact aux marques et aux institutions.",
        },
        {
          key: "platforms",
          n: "06",
          title: "Plateformes Numériques",
          short: "Des plateformes pensées pour durer et évoluer.",
          desc: "Création et déploiement de plateformes complètes, de la marketplace à l'outil métier, avec une architecture pensée pour durer et pour évoluer.",
        },
      ],
    },
    realisations: {
      eyebrow: "Nos réalisations",
      title1: "Des projets qui ont un",
      titleAccent: "impact réel",
      intro:
        "Des produits numériques conçus et développés par SOUN7, déjà entre les mains de leurs utilisateurs ou en cours de développement.",
      view: "Voir le projet",
      watch: "Voir la vidéo",
      close: "Fermer la vidéo",
      soon: "En développement",
      projects: [
        {
          slug: "dispo",
          name: "DISPO",
          category: "Marketplace · Services & annonces",
          desc: "Services, annonces et emplois réunis, avec la promotion sur Facebook et Instagram intégrée.",
          cover: "/realisations/covers/dispo-cover.jpg",
          video: { src: "/videos/dispo-pub.mp4", poster: "/videos/dispo-pub-poster.jpg" },
        },
        {
          slug: "kondo",
          name: "KONDO",
          category: "Streaming vidéo · Contenu africain",
          desc: "Le cinéma et les séries africaines, avec un soutien direct à la création.",
          cover: "/realisations/kondo/kondo-02-accueil-sombre.jpg",
        },
        {
          slug: "balise",
          name: "Balise",
          category: "Voyage · Découverte & réservation",
          desc: "Découvrir, réserver et préparer son séjour au Bénin, puis bientôt au-delà.",
          cover: "/realisations/covers/balise-cover.jpg",
          video: { src: "/videos/balise-pub.mp4", poster: "/videos/balise-pub-poster.jpg" },
        },
        {
          name: "RACINES",
          category: "Patrimoine & généalogie",
          desc: "La mémoire familiale et l'héritage culturel, pour la diaspora et le continent.",
        },
      ],
      more: "D'autres projets SOUN7 sont en cours de développement.",
    },
    approche: {
      eyebrow: "Notre approche",
      title1: "Un processus pensé",
      titleAccent: "pour votre réussite",
      intro:
        "De la première idée au déploiement, nous vous accompagnons à chaque étape avec une méthode claire et éprouvée.",
      steps: [
        {
          n: "01",
          title: "Comprendre",
          desc: "Nous écoutons le besoin réel, le contexte métier et les contraintes du terrain avant toute proposition technique.",
        },
        {
          n: "02",
          title: "Concevoir",
          desc: "Architecture, parcours utilisateur et périmètre fonctionnel, validés avant le développement.",
        },
        {
          n: "03",
          title: "Développer",
          desc: "Une construction exigeante sur la qualité et la sécurité, avec un client informé à chaque étape.",
        },
        {
          n: "04",
          title: "Déployer",
          desc: "Mise en production, formation des équipes et suivi pour que la solution vive dans la durée.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title1: "SOUN7, la marque technologique",
      title2: "de SOUN SET SARL",
      p1: "Basée à Cotonou, au Bénin, et active sur plusieurs marchés d'Afrique de l'Ouest et du Centre, SOUN7 conçoit, développe et déploie des produits numériques pensés pour durer : applications, plateformes, intelligence artificielle et infrastructures télécoms.",
      p2: "Chaque projet est abordé avec la même exigence : comprendre le besoin, concevoir une solution adaptée et accompagner sa mise en vie sur le long terme.",
      p3: "Cette exigence s'appuie sur le terrain : la direction technique de projets fibre optique chez INCOO TECHNOLOGY, au Gabon, et une coopération avec AFRICA SPARK pour les dispositifs écrans LED.",
      cta: "En savoir plus",
      expertiseLabel: "Nos expertises",
      tagline: "Connecting Vision to Reality",
    },
    contact: {
      eyebrow: "Contact",
      title1: "Parlons de votre",
      titleAccent: "prochain projet.",
      intro:
        "Vous avez une idée, un besoin ou un projet numérique ? Construisons ensemble une solution adaptée à vos objectifs.",
      location: "Cotonou, Bénin",
      email: "contact@soun7.com",
      socialsNote: "Réseaux sociaux bientôt disponibles.",
      projectTypes: [
        "Application mobile",
        "Application web / Plateforme",
        "Intelligence artificielle",
        "Fibre optique / Télécoms",
        "Communication & écrans LED",
        "Autre projet",
      ],
      selectPlaceholder: "Sélectionnez un type de projet",
      fields: {
        name: "Nom complet",
        company: "Entreprise",
        email: "Email",
        phone: "Téléphone",
        projectType: "Type de projet",
        message: "Message",
      },
      messagePlaceholder: "Décrivez votre projet en quelques lignes...",
      submitLabel: "Envoyer le message",
      sending: "Ouverture de votre messagerie…",
      sentNote:
        "Votre messagerie s'est ouverte avec le message pré-rempli : il ne reste qu'à l'envoyer. Rien ne s'ouvre ? Écrivez-nous à contact@soun7.com.",
      errors: {
        required: "Ce champ est requis.",
        email: "Adresse email invalide.",
      },
      subjectPrefix: "Nouveau projet",
    },
    footer: {
      brandNote: "Une marque de SOUN SET SARL",
      rights: (year) => `© ${year} SOUN SET SARL · Cotonou, Bénin. Tous droits réservés.`,
      tagline: "Connecting Vision to Reality",
      top: "Retour en haut",
    },
    appDetail: {
      back: "Retour aux réalisations",
      problemLabel: "Le constat",
      solutionLabel: "La réponse",
      featuresLabel: "Fonctionnalités clés",
      screensLabel: "Aperçu de l'application",
      videoLabel: "La vidéo",
      ctaTitle: "Un projet similaire en tête ?",
      ctaText: "Discutons de votre projet et de la meilleure façon de le concrétiser.",
      ctaButton: "Démarrer un projet",
      videoSoon: "Démonstration vidéo à venir",
    },
    video: {
      play: "Lire la vidéo",
      pause: "Mettre en pause",
      mute: "Couper le son",
      unmute: "Activer le son",
    },
  },

  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      realisations: "Work",
      approche: "Approach",
      apropos: "About",
      contact: "Contact",
      cta: "Start a project",
      menuLabel: "Open menu",
    },
    hero: {
      badge: "SOUN7 · SOUN SET SARL",
      title1: "Where innovation",
      title2: "comes to life.",
      paragraph:
        "From applications to telecom infrastructure, SOUN7 turns ideas into concrete digital solutions, built from Africa for the world.",
      ctaPrimary: "Explore our solutions",
      ctaSecondary: "Start a project",
      scroll: "Discover",
      tagline: "Connecting Vision to Reality",
    },
    solutions: {
      eyebrow: "Our solutions",
      title1: "Solutions for a",
      titleAccent: "connected world",
      intro:
        "From mobile applications to telecom infrastructure, SOUN7 covers the full technology chain a digital transformation requires.",
      contactCta: "Talk to SOUN7",
      items: [
        {
          key: "apps",
          n: "01",
          title: "Web & Mobile Applications",
          short: "High-performance apps, from prototype to production.",
          desc: "Custom application design and development, built for performance and user experience, from prototype to production deployment.",
        },
        {
          key: "ai",
          n: "02",
          title: "Artificial Intelligence",
          short: "AI woven into real products.",
          desc: "AI woven into real products: automation, assistance, data analysis and intelligent tools adapted to local realities.",
        },
        {
          key: "digital",
          n: "03",
          title: "Digital Solutions",
          short: "Tools to manage, pay and steer operations.",
          desc: "Digital tools built for businesses and institutions: management, payment, team coordination and day-to-day operational oversight.",
        },
        {
          key: "telecom",
          n: "04",
          title: "Telecom & Fiber Optics",
          short: "Fiber expertise built in the field.",
          desc: "An expertise built in the field: technical direction of fiber optic projects at INCOO TECHNOLOGY, in Gabon. That experience now drives the deployment and supervision of telecom infrastructure for our clients.",
        },
        {
          key: "led",
          n: "05",
          title: "Communication & LED Screens",
          short: "Visual setups that make an impact.",
          desc: "LED screen operation and digital communication solutions, in cooperation with audiovisual production partners such as AFRICA SPARK, to bring rhythm and impact to brands and institutions.",
        },
        {
          key: "platforms",
          n: "06",
          title: "Digital Platforms",
          short: "Platforms built to last and to grow.",
          desc: "Design and deployment of full-scale platforms, from marketplaces to business tools, built on an architecture made to last and to grow.",
        },
      ],
    },
    realisations: {
      eyebrow: "Our work",
      title1: "Projects with a",
      titleAccent: "real impact",
      intro:
        "Digital products designed and built by SOUN7, already in their users' hands or currently in development.",
      view: "View project",
      watch: "Watch the video",
      close: "Close video",
      soon: "In development",
      projects: [
        {
          slug: "dispo",
          name: "DISPO",
          category: "Marketplace · Services & listings",
          desc: "Services, listings and jobs in one place, with Facebook and Instagram promotion built in.",
          cover: "/realisations/covers/dispo-cover.jpg",
          video: { src: "/videos/dispo-pub.mp4", poster: "/videos/dispo-pub-poster.jpg" },
        },
        {
          slug: "kondo",
          name: "KONDO",
          category: "Video streaming · African content",
          desc: "African film and series, with direct support for creators.",
          cover: "/realisations/kondo/kondo-02-accueil-sombre.jpg",
        },
        {
          slug: "balise",
          name: "Balise",
          category: "Travel · Discovery & booking",
          desc: "Discover, book and plan a stay in Benin, and soon beyond.",
          cover: "/realisations/covers/balise-cover.jpg",
          video: { src: "/videos/balise-pub.mp4", poster: "/videos/balise-pub-poster.jpg" },
        },
        {
          name: "RACINES",
          category: "Heritage & genealogy",
          desc: "Family memory and cultural heritage, for the diaspora and the continent.",
        },
      ],
      more: "Other SOUN7 projects are currently in development.",
    },
    approche: {
      eyebrow: "Our approach",
      title1: "A process built",
      titleAccent: "for your success",
      intro:
        "From the first idea to deployment, we support you at every step with a clear, proven method.",
      steps: [
        {
          n: "01",
          title: "Understand",
          desc: "We listen to the real need, the business context and the constraints on the ground before any technical proposal.",
        },
        {
          n: "02",
          title: "Design",
          desc: "Architecture, user journey and functional scope, validated before development starts.",
        },
        {
          n: "03",
          title: "Build",
          desc: "A strict standard for quality and security, with the client informed at every step.",
        },
        {
          n: "04",
          title: "Deploy",
          desc: "Go-live, team training and follow-up so the solution lasts.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title1: "SOUN7, the technology brand",
      title2: "of SOUN SET SARL",
      p1: "Based in Cotonou, Benin, and active across several West and Central African markets, SOUN7 designs, builds and deploys digital products meant to last: applications, platforms, artificial intelligence and telecom infrastructure.",
      p2: "Every project is approached with the same discipline: understand the need, design a solution that fits, and support it well beyond launch.",
      p3: "That discipline comes from the field: technical direction of fiber optic projects at INCOO TECHNOLOGY, in Gabon, and cooperation with AFRICA SPARK on LED screen deployments.",
      cta: "Learn more",
      expertiseLabel: "Our expertise",
      tagline: "Connecting Vision to Reality",
    },
    contact: {
      eyebrow: "Contact",
      title1: "Let's talk about your",
      titleAccent: "next project.",
      intro:
        "Have an idea, a need or a digital project? Let's build a solution that fits your goals, together.",
      location: "Cotonou, Benin",
      email: "contact@soun7.com",
      socialsNote: "Social media coming soon.",
      projectTypes: [
        "Mobile application",
        "Web application / Platform",
        "Artificial intelligence",
        "Fiber optics / Telecom",
        "Communication & LED screens",
        "Other project",
      ],
      selectPlaceholder: "Select a project type",
      fields: {
        name: "Full name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        projectType: "Project type",
        message: "Message",
      },
      messagePlaceholder: "Describe your project in a few lines...",
      submitLabel: "Send message",
      sending: "Opening your mail app…",
      sentNote:
        "Your mail app opened with the message pre-filled: just hit send. Nothing opened? Write to us at contact@soun7.com.",
      errors: {
        required: "This field is required.",
        email: "Invalid email address.",
      },
      subjectPrefix: "New project",
    },
    footer: {
      brandNote: "A brand of SOUN SET SARL",
      rights: (year) => `© ${year} SOUN SET SARL · Cotonou, Benin. All rights reserved.`,
      tagline: "Connecting Vision to Reality",
      top: "Back to top",
    },
    appDetail: {
      back: "Back to our work",
      problemLabel: "The problem",
      solutionLabel: "The solution",
      featuresLabel: "Key features",
      screensLabel: "App preview",
      videoLabel: "The video",
      ctaTitle: "Have a similar project in mind?",
      ctaText: "Let's talk about your project and the best way to build it.",
      ctaButton: "Start a project",
      videoSoon: "Video demo coming soon",
    },
    video: {
      play: "Play video",
      pause: "Pause",
      mute: "Mute",
      unmute: "Unmute",
    },
  },
};
