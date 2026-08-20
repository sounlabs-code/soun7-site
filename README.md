# SOUN7 — Site officiel

Site vitrine officiel de **SOUN7**, marque technologique de **SOUN SET SARL**
(Cotonou, Bénin).

Slogan de marque : *Connecting Vision to Reality*
Accroche du site : *Là où l'innovation prend vie*

## Stack technique

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Polices auto-hébergées via [Fontsource](https://fontsource.org/) (Poppins,
  Montserrat, Orbitron, EB Garamond) — pas de dépendance à Google Fonts au
  moment du build
- Assets de marque officiels (logo, icône S7, favicon) dans `public/brand`

## Démarrage local

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Structure du projet

```
src/
  app/
    layout.tsx      → polices, métadonnées SEO / Open Graph
    page.tsx         → assemble les sections de la page
    globals.css       → jetons de couleurs de la charte SOUN7, animations
    sitemap.ts        → génère /sitemap.xml
    robots.ts         → génère /robots.txt
  components/
    Header.tsx        → navigation + logo
    Hero.tsx           → section d'accueil
    Solutions.tsx       → les 6 pôles d'expertise
    Realisations.tsx     → Bénin Explore, DISPO, RACINES...
    Pourquoi.tsx          → pourquoi SOUN7
    Approche.tsx           → processus en 4 étapes
    About.tsx               → à propos
    Contact.tsx              → formulaire de contact
    Footer.tsx
public/
  brand/               → logo SOUN7 (SVG + PNG), icône S7
  favicon.ico, favicon-32x32.png, favicon-64x64.png
```

## Charte graphique appliquée

| Couleur          | Hex       |
|-------------------|-----------|
| Noir Profond       | `#000000` |
| Blanc               | `#FFFFFF` |
| Anthracite           | `#4C545C` |
| Argent Clair          | `#F2F3F4` |
| Argent Métal            | `#B0B7BD` |
| Bleu Ciel                 | `#59D5FF` |
| Bleu Électrique             | `#1E78DC` |
| Bleu Nuit                    | `#0B2F63` |

Typographies : Poppins ExtraBold Italic (logotype / titres), EB Garamond
Italic (slogan), Montserrat (texte courant), Orbitron (accents techniques —
numéros d'étape, éléments discrets).

## Formulaire de contact

Le formulaire de la section Contact ouvre le client mail de l'utilisateur
avec les champs pré-remplis, à l'adresse `contact@soun7.com`. Pour une
soumission directe en base de données ou un envoi automatique, il faudra
brancher un service (Resend, Formspree, une API route Next.js, etc.) — le
lien `mailto:` actuel n'a pas besoin de backend et fonctionne immédiatement.

## À personnaliser avant mise en ligne

- Adresse e-mail de contact (`contact@soun7.com`)
- Liens réseaux sociaux (actuellement des `#` placeholders dans `Contact.tsx`)
- Nom de domaine réel dans `src/app/layout.tsx` (`siteUrl`), `sitemap.ts` et
  `robots.ts` (actuellement `https://www.soun7.com`)
- Textes de la section "Réalisations" si de nouveaux projets doivent être
  ajoutés (tableau `PROJECTS` dans `src/components/Realisations.tsx`)

## Déploiement

Voir les instructions détaillées fournies séparément pour la mise en ligne
sur GitHub puis Vercel.
