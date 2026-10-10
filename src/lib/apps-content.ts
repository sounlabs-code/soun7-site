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
  video?: { src: string; poster: string };
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
          fr: "Écran d'accueil de KONDO en mode sombre, avec un autre titre à la une",
          en: "KONDO home screen in dark mode, with a different featured title",
        },
      },
    ],
  },

  "balise": {
    slug: "balise",
    name: "Balise",
    status: { fr: "Disponible au Bénin", en: "Live in Benin" },
    category: {
      fr: "Voyage · Découverte & réservation",
      en: "Travel · Discovery & booking",
    },
    tagline: {
      fr: "Visitez, réservez, explorez : le Bénin dans une seule application.",
      en: "Visit, book, explore: Benin in a single app.",
    },
    problem: {
      fr: "Préparer un séjour au Bénin reste difficile pour qui ne connaît pas déjà le pays : lieux, prestataires, transports et réservations sont dispersés.",
      en: "Planning a stay in Benin remains hard for anyone unfamiliar with the country: places, providers, transport and bookings are scattered.",
    },
    solution: {
      fr: "Balise réunit la découverte, la réservation et l'organisation du séjour dans une seule application, payable par Mobile Money. Elle ouvre au Bénin et s'étendra au Gabon, à la Côte d'Ivoire et au Togo.",
      en: "Balise brings discovery, booking and trip planning together in one app, payable by Mobile Money. It opens in Benin and will expand to Gabon, Côte d'Ivoire and Togo.",
    },
    features: {
      fr: [
        "Sites à visiter, restaurants, hébergements et location de véhicules, avec photos, horaires et avis",
        "Réservation en quelques gestes et paiement par Mobile Money, billet disponible même sans réseau",
        "Programme de voyage jour par jour, avec les temps de trajet entre chaque visite",
        "Balise Airport : transfert depuis ou vers l'aéroport de Cotonou",
        "Proximité : pharmacies, boutiques et adresses utiles autour de soi, sur une carte",
        "Disponible en français, anglais, espagnol, allemand et portugais",
      ],
      en: [
        "Places to visit, restaurants, accommodation and vehicle rental, with photos, hours and reviews",
        "Book in a few taps and pay by Mobile Money, with tickets available offline",
        "Day-by-day trip planner, with travel times between each visit",
        "Balise Airport: transfers to and from Cotonou airport",
        "Nearby: pharmacies, shops and useful places around you, on a map",
        "Available in French, English, Spanish, German and Portuguese",
      ],
    },
    video: { src: "/videos/balise-pub.mp4", poster: "/videos/balise-pub-poster.jpg" },
    screens: [
      {
        src: "/realisations/balise/balise-1_accueil.jpg",
        alt: {
          fr: "Écran d'accueil de Balise : recherche, catégories d'exploration et meilleures destinations",
          en: "Balise home screen: search, browsing categories and top destinations",
        },
      },
      {
        src: "/realisations/balise/balise-2_lieux.jpg",
        alt: { fr: "Liste des lieux à visiter", en: "List of places to visit" },
      },
      {
        src: "/realisations/balise/balise-3_restaurants.jpg",
        alt: { fr: "Restaurants et réservation de table", en: "Restaurants and table booking" },
      },
      {
        src: "/realisations/balise/balise-5_preparer.jpg",
        alt: { fr: "Guide pour préparer son voyage", en: "Guide to prepare the trip" },
      },
    ],
  },

  "dispo": {
    slug: "dispo",
    name: "DISPO",
    status: { fr: "Disponible sur le Play Store", en: "Available on the Play Store" },
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
    video: { src: "/videos/dispo-pub.mp4", poster: "/videos/dispo-pub-poster.jpg" },
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
    video: app.video,
    screens: app.screens.map((s) => ({ src: s.src, alt: s.alt[locale] })),
  };
}
