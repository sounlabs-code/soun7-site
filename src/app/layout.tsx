import type { Metadata } from "next";

// Self-hosted via @fontsource (Google Fonts CDN is not reachable from every
// build environment). Ships the same typefaces defined in the brand charter.
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/orbitron/600.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/800.css";
import "@fontsource/eb-garamond/500-italic.css";
import "@fontsource/eb-garamond/600-italic.css";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import MotionProvider from "@/components/MotionProvider";

const siteUrl = "https://www.soun7.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SOUN7 — Là où l'innovation prend vie",
    template: "%s | SOUN7",
  },
  description:
    "SOUN7 conçoit des solutions numériques, applications, plateformes et technologies innovantes pour accompagner la transformation digitale des entreprises. SOUN7 est une marque de SOUN SET SARL.",
  keywords: [
    "SOUN7",
    "SOUN SET SARL",
    "développement application Bénin",
    "développement mobile Afrique",
    "intelligence artificielle Afrique",
    "fibre optique",
    "solutions digitales entreprises",
    "transformation digitale Bénin Gabon",
    "DISPO",
    "Balise",
  ],
  authors: [{ name: "SOUN SET SARL" }],
  applicationName: "SOUN7",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "SOUN7",
    title: "SOUN7 — Là où l'innovation prend vie",
    description:
      "Nous concevons des solutions numériques qui transforment les idées en expériences, services et entreprises digitales.",
    images: [
      {
        url: "/brand/soun7_horizontal_couleur.png",
        width: 1531,
        height: 400,
        alt: "SOUN7 — Connecting Vision to Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOUN7 — Là où l'innovation prend vie",
    description:
      "Solutions numériques, applications, plateformes et technologies innovantes pour l'Afrique et au-delà.",
    images: ["/brand/soun7_horizontal_couleur.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Arms the motion start-states before first paint (no flash of
            content that is about to animate). If the animation code never
            boots, the class is removed again and everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('s7-motion');setTimeout(function(){if(!window.__s7motion)d.classList.remove('s7-motion')},3500)}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-s7-abyss text-s7-white font-body">
        <LanguageProvider>
          <MotionProvider />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
