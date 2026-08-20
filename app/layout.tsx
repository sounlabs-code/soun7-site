import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Polices auto-hébergées (dossier /fonts) — recommandées par la charte graphique
// SOUN7 : Poppins (logotype), Playfair Display (slogan), Montserrat (texte courant).
const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/Poppins-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/Poppins-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
});

const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  src: [
    { path: "../fonts/PlayfairDisplay-Var.ttf", weight: "400 700", style: "normal" },
    { path: "../fonts/PlayfairDisplay-ItalicVar.ttf", weight: "400 700", style: "italic" },
  ],
});

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [{ path: "../fonts/Montserrat-Var.ttf", weight: "100 900", style: "normal" }],
});

const siteUrl = "https://www.soun7.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SOUN7 — Là où l'innovation prend vie",
    template: "%s | SOUN7",
  },
  description:
    "SOUN7 (SOUN SET SARL) conçoit des solutions numériques, applications, plateformes et technologies innovantes pour accompagner la transformation digitale des entreprises en Afrique.",
  keywords: [
    "SOUN7",
    "SOUN SET SARL",
    "développement application Bénin",
    "développement web Cotonou",
    "intelligence artificielle Afrique",
    "fibre optique",
    "transformation digitale Afrique",
    "écrans LED",
  ],
  authors: [{ name: "SOUN SET SARL" }],
  creator: "SOUN SET SARL",
  publisher: "SOUN SET SARL",
  applicationName: "SOUN7",
  alternates: {
    canonical: "/",
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOUN7 — Là où l'innovation prend vie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOUN7 — Là où l'innovation prend vie",
    description:
      "Nous concevons des solutions numériques qui transforment les idées en expériences, services et entreprises digitales.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-64x64.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${playfair.variable} ${montserrat.variable} antialiased bg-black text-silver-light`}
      >
        {children}
      </body>
    </html>
  );
}
