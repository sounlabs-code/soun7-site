import type { Locale } from "./language-context";

export type AppScreen = {
  src: string;
  alt: { fr: string; en: string };
};

export type AppDetailShape = {
  slug: string;
  name: string;
  status: { fr: string; en: string };
  category: { fr: string; en: string };
  tagline: { fr: string; en: string };
  problem: { fr: string; en: string };
  solution: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  screens: AppScreen[];
};

export const appsContent: Record<string, AppDetailShape> = {
  "kondo": {
    slug: "kondo",
    name: "KONDO",
    status: { fr: "En développement", en: "In development" },
    category: {
      fr: "Streaming vidéo · Contenu africain",
      en: "Video streaming · African content",
    },
    tagline: {
      fr: "Le cinéma et les séries africaines, dans une seule appli.",
      en: "African film and series, in a single app.",
    },
    problem: {
      fr: "Le contenu audiovisuel africain manque de plateformes de diffusion qui lui sont propres, pensées pour son public et pour ses créateurs.",
      en: "African audiovisual content lacks distribution platforms built specifically for its audience and its creators.",
    },
    solution: {
      fr: "KONDO propose un espace de streaming dédié à la création africaine, avec un système de soutien intégré directement dans l'expérience de visionnage.",
      en: "KONDO offers a streaming space dedicated to African creation, with a support mechanism built directly into the viewing experience.",
    },
    features: {
      fr: [
        "Bibliothèque organisée par genre, avec mise en avant éditoriale en page d'accueil",
        "Mode clair et mode sombre",
        "Liste personnelle pour sauvegarder les contenus à voir plus tard",
        "Accès à l'unité avec prix affiché par titre",
        "Mécanisme de soutien à la création africaine intégré à l'application",
      ],
      en: [
        "Genre-organized library, with editorial highlights on the home screen",
        "Light mode and dark mode",
        "A personal watchlist to save content for later",
        "Pay-per-title access with the price shown upfront",
        "A built-in mechanism to support African creators",
      ],
    },
    screens: [
      {
        src: "/realisations/kondo/kondo-01-accueil-clair.jpg",
        alt: {
          fr: "Écran d'accueil de KONDO en mode clair, avec un film à la une et le bandeau de soutien à la création africaine",
          en: "KONDO home screen in light mode, with a featured film and the support-African-creation banner",
        },
      },
      {
        src: "/realisations/kondo/kondo-02-accueil-sombre.jpg",
        alt: {
          fr: "Le même écran d'accueil en mode sombre",
          en: "The same home screen in dark mode",
        },
      },
    ],
  },

  "benin-explore": {
    slug: "benin-explore",
    name: "Bénin Explore",
    status: { fr: "En développement", en: "In development" },
    category: {
      fr: "Tourisme · Guide numérique",
      en: "Tourism · Digital guide",
    },
    tagline: {
      fr: "Le Bénin à explorer, du lieu à la réservation.",
      en: "Benin to explore, from the place to the booking.",
    },
    problem: {
      fr: "Le tourisme au Bénin reste difficile d'accès pour qui ne connaît pas déjà le pays : peu d'outils centralisent lieux, prestataires et réservations en un seul endroit.",
      en: "Tourism in Benin remains hard to access for anyone unfamiliar with the country: few tools bring places, providers and bookings together in one spot.",
    },
    solution: {
      fr: "Bénin Explore réunit dans une seule application la découverte, la réservation et l'organisation d'un séjour au Bénin, du lieu culturel à l'expérience bien-être.",
      en: "Bénin Explore brings discovery, booking and trip planning together in a single app, from cultural sites to wellness experiences.",
    },
    features: {
      fr: [
        "Recherche guidée par question, pour orienter la découverte selon l'envie du moment",
        "Accès rapide par type de service : lieux, location de véhicule, restaurants, hébergements",
        "Exploration par thématique : culture et histoire, nature et aventure, plages et détente, artisanat et marchés",
        "Fiches d'activités détaillées avec note, localisation, description et horaires",
        "Ajout direct d'une activité à un parcours personnalisé",
      ],
      en: [
        "Guided search that adapts to what the traveler feels like doing",
        "Quick access by service type: places, vehicle rental, restaurants, accommodation",
        "Browsing by theme: culture and history, nature and adventure, beaches and relaxation, crafts and markets",
        "Detailed activity pages with rating, location, description and schedule",
        "One-tap add to a personal itinerary",
      ],
    },
    screens: [
      {
        src: "/realisations/benin-explore/benin-explore-01-marque.jpg",
        alt: {
          fr: "Écran de marque de Bénin Explore avec la baseline \"Votre guide numérique pour découvrir le Bénin autrement\"",
          en: "Bénin Explore brand screen with the tagline \"Your digital guide to discover Benin differently\"",
        },
      },
      {
        src: "/realisations/benin-explore/benin-explore-02-accueil.jpg",
        alt: {
          fr: "Écran d'accueil avec la recherche guidée et les catégories d'exploration",
          en: "Home screen with guided search and browsing categories",
        },
      },
      {
        src: "/realisations/benin-explore/benin-explore-03-detail.jpg",
        alt: {
          fr: "Fiche détaillée d'une activité, avec description et bouton d'ajout au parcours",
          en: "Detailed activity page, with description and add-to-itinerary button",
        },
      },
    ],
  },

  "dispo": {
    slug: "dispo",
    name: "DISPO",
    status: { fr: "En développement", en: "In development" },
    category: {
      fr: "Marketplace · Services & annonces",
      en: "Marketplace · Services & listings",
    },
    tagline: {
      fr: "Un service, un artisan, une offre d'emploi : à portée de main.",
      en: "A service, an artisan, a job offer: right at hand.",
    },
    problem: {
      fr: "Trouver un artisan, un service ou une offre d'emploi fiable, rapidement et localement, reste compliqué dans plusieurs villes d'Afrique de l'Ouest et du Centre.",
      en: "Finding a reliable artisan, service or job offer quickly and locally remains difficult in several West and Central African cities.",
    },
    solution: {
      fr: "DISPO centralise services, annonces et opportunités d'emploi dans une seule application, avec un outil de promotion intégré pour les professionnels.",
      en: "DISPO centralizes services, listings and job opportunities in a single app, with a built-in promotion tool for professionals.",
    },
    features: {
      fr: [
        "Recherche localisée par ville",
        "Mise en avant de bons plans et promotions marchandes",
        "Accès direct à des services : dépannage, emploi",
        "Module DISPO ANNONCE pour diffuser une annonce sur Facebook et Instagram depuis l'application",
      ],
      en: [
        "Location-based search by city",
        "Highlighted deals and merchant promotions",
        "Direct access to services: emergency help, jobs",
        "DISPO ANNONCE module to publish a listing on Facebook and Instagram from within the app",
      ],
    },
    screens: [
      {
        src: "/realisations/dispo/dispo-01-accueil.jpg",
        alt: {
          fr: "Écran d'accueil de DISPO à Libreville, avec les services Dépannage, Emploi et le module DISPO ANNONCE",
          en: "DISPO home screen in Libreville, showing the Emergency Help and Jobs services along with the DISPO ANNONCE module",
        },
      },
    ],
  },
};

export function localizedApp(app: AppDetailShape, locale: Locale) {
  return {
    slug: app.slug,
    name: app.name,
    status: app.status[locale],
    category: app.category[locale],
    tagline: app.tagline[locale],
    problem: app.problem[locale],
    solution: app.solution[locale],
    features: app.features[locale],
    screens: app.screens.map((s) => ({ src: s.src, alt: s.alt[locale] })),
  };
}
