import type { Locale } from "./language-context";

export type ContentShape = {
  nav: {
    solutions: string;
    realisations: string;
    pourquoi: string;
    approche: string;
    apropos: string;
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
    tagline: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { n: string; title: string; desc: string }[];
  };
  realisations: {
    eyebrow: string;
    title: string;
    intro: string;
    projects: {
      slug?: string;
      name: string;
      category: string;
      desc: string;
    }[];
    more: string;
  };
  pourquoi: {
    eyebrow: string;
    title: string;
    points: { title: string; desc: string }[];
  };
  approche: {
    eyebrow: string;
    title: string;
    steps: { n: string; title: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    tagline: string;
  };
  contact: {
    eyebrow: string;
    title: string;
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
    sentNote: string;
    subjectPrefix: string;
  };
  footer: {
    brandNote: string;
    rights: (year: number) => string;
    tagline: string;
  };
  appDetail: {
    back: string;
    problemLabel: string;
    solutionLabel: string;
    featuresLabel: string;
    screensLabel: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    videoSoon: string;
  };
};

export const content: Record<Locale, ContentShape> = {
  fr: {
    nav: {
      solutions: "Solutions",
      realisations: "Réalisations",
      pourquoi: "Pourquoi SOUN7",
      approche: "Approche",
      apropos: "À propos",
      cta: "Démarrer un projet",
      menuLabel: "Ouvrir le menu",
    },
    hero: {
      badge: "SOUN SET SARL · Cotonou, Bénin",
      title1: "Là où l'innovation",
      title2: "prend vie.",
      paragraph:
        "Nous concevons des solutions numériques qui transforment les idées en expériences, services et entreprises digitales : applications, plateformes, intelligence artificielle et infrastructures télécoms, pensées depuis l'Afrique pour le monde.",
      ctaPrimary: "Découvrir SOUN7",
      ctaSecondary: "Démarrer un projet",
      tagline: "Connecting Vision to Reality",
    },
    solutions: {
      eyebrow: "Nos solutions",
      title: "Une expertise technologique complète",
      intro:
        "De l'application mobile à l'infrastructure télécoms, SOUN7 couvre l'ensemble de la chaîne technologique nécessaire à la transformation digitale.",
      items: [
        {
          n: "01",
          title: "Applications Web & Mobile",
          desc: "Conception et développement d'applications sur mesure, pensées pour la performance et l'expérience utilisateur, du prototype au déploiement en production.",
        },
        {
          n: "02",
          title: "Intelligence Artificielle",
          desc: "Intégration de l'IA dans des produits concrets : automatisation, assistance, analyse de données et outils intelligents adaptés aux réalités locales.",
        },
        {
          n: "03",
          title: "Solutions Digitales",
          desc: "Outils numériques pensés pour les entreprises et institutions : gestion, paiement, coordination des équipes et pilotage de l'activité au quotidien.",
        },
        {
          n: "04",
          title: "Télécommunications & Fibre Optique",
          desc: "Une expertise construite sur le terrain : direction technique de projets fibre optique chez INCOO TECHNOLOGY, au Gabon. Cette expérience nourrit aujourd'hui le déploiement et la supervision d'infrastructures télécoms pour nos clients.",
        },
        {
          n: "05",
          title: "Communication & Écrans LED",
          desc: "Exploitation d'écrans LED et solutions de communication digitale, en coopération avec des structures spécialisées dans la production audiovisuelle comme AFRICA SPARK, pour donner du rythme et de l'impact aux marques et aux institutions.",
        },
        {
          n: "06",
          title: "Plateformes Numériques",
          desc: "Création et déploiement de plateformes complètes, de la marketplace à l'outil métier, avec une architecture pensée pour durer et pour évoluer.",
        },
      ],
    },
    realisations: {
      eyebrow: "Nos réalisations",
      title: "Des idées devenues produits",
      intro:
        "Une sélection de projets numériques conçus et développés par SOUN7, en constante évolution.",
      projects: [
        {
          slug: "benin-explore",
          name: "Bénin Explore",
          category: "Application mobile · Tourisme",
          desc: "Guide touristique du Bénin avec itinéraires GPS, suggestions de proximité et back-office professionnel pour restaurants et agences.",
        },
        {
          slug: "dispo",
          name: "DISPO",
          category: "Marketplace · Afrique de l'Ouest et du Centre",
          desc: "Plateforme de mise en relation multi-pays, avec module de promotion d'annonces et paiement mobile intégré.",
        },
        {
          slug: "kondo",
          name: "KONDO",
          category: "Streaming vidéo · Contenu africain",
          desc: "Plateforme de streaming dédiée au cinéma et aux séries africaines, avec un mécanisme de soutien à la création intégré.",
        },
        {
          name: "RACINES",
          category: "Application mobile · Patrimoine et généalogie",
          desc: "Application dédiée à la mémoire familiale et à l'héritage culturel, pensée pour la diaspora et le continent.",
        },
      ],
      more: "D'autres projets numériques SOUN7 sont en cours de développement et viendront enrichir cette sélection.",
    },
    pourquoi: {
      eyebrow: "Pourquoi SOUN7 ?",
      title: "Un partenaire technologique, pas un simple prestataire",
      points: [
        {
          title: "Innovation",
          desc: "Une veille technologique constante pour intégrer les bonnes idées au bon moment, sans effet de mode.",
        },
        {
          title: "Expertise technologique",
          desc: "Une maîtrise de bout en bout, du développement mobile à l'infrastructure télécoms, portée par une expérience de direction technique acquise sur le terrain, notamment en fibre optique.",
        },
        {
          title: "Solutions sur mesure",
          desc: "Chaque projet part d'un besoin réel, pas d'un modèle générique appliqué par défaut.",
        },
        {
          title: "Vision africaine et internationale",
          desc: "Des solutions conçues depuis le Bénin et le Gabon, avec des standards internationaux.",
        },
        {
          title: "Accompagnement de bout en bout",
          desc: "De l'idée au déploiement, puis dans la durée : maintenance, évolution et support.",
        },
      ],
    },
    approche: {
      eyebrow: "Notre approche",
      title: "Un processus en quatre étapes",
      steps: [
        {
          n: "01",
          title: "Comprendre",
          desc: "Nous prenons le temps d'écouter le besoin réel, le contexte métier et les contraintes du terrain avant toute proposition technique.",
        },
        {
          n: "02",
          title: "Concevoir",
          desc: "Nous structurons une solution claire : architecture, parcours utilisateur et périmètre fonctionnel, validés avant le développement.",
        },
        {
          n: "03",
          title: "Développer",
          desc: "Nous construisons la solution avec une exigence de qualité et de sécurité, en gardant le client informé à chaque étape.",
        },
        {
          n: "04",
          title: "Déployer",
          desc: "Nous mettons en production, formons les équipes et assurons le suivi nécessaire pour que la solution vive dans la durée.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "SOUN7, la marque technologique de SOUN SET SARL",
      p1: "SOUN7 est tournée vers l'innovation numérique et la création de solutions technologiques pour les entreprises, les institutions et les particuliers. Basée à Cotonou, au Bénin, et active sur plusieurs marchés d'Afrique de l'Ouest et du Centre, SOUN7 conçoit, développe et déploie des produits numériques pensés pour durer : applications, plateformes, intelligence artificielle et infrastructures télécoms.",
      p2: "Chaque projet est abordé avec la même exigence : comprendre le besoin, concevoir une solution adaptée et accompagner sa mise en vie sur le long terme.",
      p3: "Cette exigence s'appuie sur une expérience de terrain. D'un côté, la direction technique de projets fibre optique chez INCOO TECHNOLOGY, au Gabon. De l'autre, une coopération avec des structures de production audiovisuelle comme AFRICA SPARK pour la conception de dispositifs écrans LED. Deux terrains différents, une même rigueur technique.",
      tagline: "Connecting Vision to Reality",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre projet",
      intro:
        "Décrivez-nous votre projet : notre équipe reviendra vers vous pour échanger sur les objectifs, le périmètre et les prochaines étapes.",
      location: "Cotonou, Bénin",
      email: "contact@soun7.com",
      socialsNote: "Liens réseaux sociaux à venir.",
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
        name: "Nom",
        company: "Entreprise",
        email: "Email",
        phone: "Téléphone",
        projectType: "Type de projet",
        message: "Message",
      },
      messagePlaceholder: "Décrivez votre projet en quelques lignes...",
      submitLabel: "Parlons de votre projet",
      sentNote: "Votre client mail va s'ouvrir pour finaliser l'envoi.",
      subjectPrefix: "Nouveau projet",
    },
    footer: {
      brandNote: "Une marque de SOUN SET SARL",
      rights: (year) =>
        `© ${year} SOUN SET SARL · Cotonou, Bénin. Tous droits réservés.`,
      tagline: "Connecting Vision to Reality",
    },
    appDetail: {
      back: "Retour aux réalisations",
      problemLabel: "Le constat",
      solutionLabel: "La réponse",
      featuresLabel: "Fonctionnalités clés",
      screensLabel: "Aperçu de l'application",
      ctaTitle: "Un projet similaire en tête ?",
      ctaText:
        "Discutons de votre projet et de la meilleure façon de le concrétiser.",
      ctaButton: "Démarrer un projet",
      videoSoon: "Démonstration vidéo à venir",
    },
  },

  en: {
    nav: {
      solutions: "Solutions",
      realisations: "Work",
      pourquoi: "Why SOUN7",
      approche: "Approach",
      apropos: "About",
      cta: "Start a project",
      menuLabel: "Open menu",
    },
    hero: {
      badge: "SOUN SET SARL · Cotonou, Benin",
      title1: "Where innovation",
      title2: "comes to life.",
      paragraph:
        "We design digital solutions that turn ideas into experiences, services and digital businesses: applications, platforms, artificial intelligence and telecom infrastructure, built from Africa for the world.",
      ctaPrimary: "Discover SOUN7",
      ctaSecondary: "Start a project",
      tagline: "Connecting Vision to Reality",
    },
    solutions: {
      eyebrow: "Our solutions",
      title: "A complete technology expertise",
      intro:
        "From mobile applications to telecom infrastructure, SOUN7 covers the full technology chain a digital transformation requires.",
      items: [
        {
          n: "01",
          title: "Web & Mobile Applications",
          desc: "Custom application design and development, built for performance and user experience, from prototype to production deployment.",
        },
        {
          n: "02",
          title: "Artificial Intelligence",
          desc: "AI woven into real products: automation, assistance, data analysis and intelligent tools adapted to local realities.",
        },
        {
          n: "03",
          title: "Digital Solutions",
          desc: "Digital tools built for businesses and institutions: management, payment, team coordination and day-to-day operational oversight.",
        },
        {
          n: "04",
          title: "Telecom & Fiber Optics",
          desc: "An expertise built in the field: technical direction of fiber optic projects at INCOO TECHNOLOGY, in Gabon. That experience now drives the deployment and supervision of telecom infrastructure for our clients.",
        },
        {
          n: "05",
          title: "Communication & LED Screens",
          desc: "LED screen operation and digital communication solutions, in cooperation with audiovisual production partners such as AFRICA SPARK, to bring rhythm and impact to brands and institutions.",
        },
        {
          n: "06",
          title: "Digital Platforms",
          desc: "Design and deployment of full-scale platforms, from marketplaces to business tools, built on an architecture made to last and to grow.",
        },
      ],
    },
    realisations: {
      eyebrow: "Our work",
      title: "Ideas turned into products",
      intro:
        "A selection of digital projects designed and built by SOUN7, constantly evolving.",
      projects: [
        {
          slug: "benin-explore",
          name: "Bénin Explore",
          category: "Mobile application · Tourism",
          desc: "A tourism guide to Benin with GPS itineraries, proximity suggestions and a professional back office for restaurants and agencies.",
        },
        {
          slug: "dispo",
          name: "DISPO",
          category: "Marketplace · West & Central Africa",
          desc: "A multi-country marketplace platform, with an ad-boosting module and integrated mobile payment.",
        },
        {
          slug: "kondo",
          name: "KONDO",
          category: "Video streaming · African content",
          desc: "A streaming platform dedicated to African film and series, with a built-in mechanism to support creators.",
        },
        {
          name: "RACINES",
          category: "Mobile application · Heritage & genealogy",
          desc: "An application dedicated to family memory and cultural heritage, built for the diaspora and the continent alike.",
        },
      ],
      more: "Other SOUN7 digital projects are currently in development and will expand this selection over time.",
    },
    pourquoi: {
      eyebrow: "Why SOUN7?",
      title: "A technology partner, not just a service provider",
      points: [
        {
          title: "Innovation",
          desc: "Constant technology watch to bring in the right ideas at the right time, without chasing trends.",
        },
        {
          title: "Technology expertise",
          desc: "End-to-end mastery, from mobile development to telecom infrastructure, backed by hands-on technical leadership experience, fiber optics included.",
        },
        {
          title: "Tailored solutions",
          desc: "Every project starts from a real need, not a generic template applied by default.",
        },
        {
          title: "African and international vision",
          desc: "Solutions designed from Benin and Gabon, held to international standards.",
        },
        {
          title: "End-to-end support",
          desc: "From idea to deployment, and beyond: maintenance, evolution and support over time.",
        },
      ],
    },
    approche: {
      eyebrow: "Our approach",
      title: "A four-step process",
      steps: [
        {
          n: "01",
          title: "Understand",
          desc: "We take the time to listen: the real need, the business context, the constraints on the ground, before any technical proposal.",
        },
        {
          n: "02",
          title: "Design",
          desc: "We structure a clear solution: architecture, user journey and functional scope, validated before development starts.",
        },
        {
          n: "03",
          title: "Build",
          desc: "We build with a strict standard for quality and security, keeping the client informed at every step.",
        },
        {
          n: "04",
          title: "Deploy",
          desc: "We go live, train the teams, and provide the follow-up needed for the solution to last.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "SOUN7, the technology brand of SOUN SET SARL",
      p1: "SOUN7 is built around digital innovation and the creation of technology solutions for businesses, institutions and individuals. Based in Cotonou, Benin, and active across several West and Central African markets, SOUN7 designs, builds and deploys digital products meant to last: applications, platforms, artificial intelligence and telecom infrastructure.",
      p2: "Every project is approached with the same discipline: understand the need, design a solution that fits, and support it well beyond launch.",
      p3: "That discipline comes from experience in the field. On one side, technical direction of fiber optic projects at INCOO TECHNOLOGY, in Gabon. On the other, cooperation with audiovisual production partners such as AFRICA SPARK on LED screen deployments. Two different terrains, the same technical rigor.",
      tagline: "Connecting Vision to Reality",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      intro:
        "Tell us about your project: our team will get back to you to discuss goals, scope and next steps.",
      location: "Cotonou, Benin",
      email: "contact@soun7.com",
      socialsNote: "Social media links coming soon.",
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
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        projectType: "Project type",
        message: "Message",
      },
      messagePlaceholder: "Describe your project in a few lines...",
      submitLabel: "Let's talk about your project",
      sentNote: "Your mail client will open to finish sending.",
      subjectPrefix: "New project",
    },
    footer: {
      brandNote: "A brand of SOUN SET SARL",
      rights: (year) =>
        `© ${year} SOUN SET SARL · Cotonou, Benin. All rights reserved.`,
      tagline: "Connecting Vision to Reality",
    },
    appDetail: {
      back: "Back to our work",
      problemLabel: "The problem",
      solutionLabel: "The solution",
      featuresLabel: "Key features",
      screensLabel: "App preview",
      ctaTitle: "Have a similar project in mind?",
      ctaText: "Let's talk about your project and the best way to build it.",
      ctaButton: "Start a project",
      videoSoon: "Video demo coming soon",
    },
  },
};
