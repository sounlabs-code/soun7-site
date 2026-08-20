# SOUN7 — Site officiel

Site vitrine de **SOUN7**, la marque numérique de **SOUN SET SARL**.
« Là où l'innovation prend vie. »

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Polices auto-hébergées (Poppins, Playfair Display, Montserrat) — conformes à la charte graphique SOUN7
- Métadonnées SEO complètes (Open Graph, Twitter Card, JSON-LD, sitemap, robots.txt)

## Structure du projet

```
soun7-site/
├── app/
│   ├── layout.tsx        # Layout racine, polices, métadonnées SEO
│   ├── page.tsx           # Page d'accueil (assemble toutes les sections)
│   ├── globals.css        # Design tokens (couleurs/typo de la charte), styles globaux
│   ├── sitemap.ts         # /sitemap.xml généré dynamiquement
│   └── robots.ts          # /robots.txt généré dynamiquement
├── components/
│   ├── Header.tsx          # Navigation + menu mobile
│   ├── Hero.tsx             # Section d'accueil animée
│   ├── Solutions.tsx        # "Nos solutions" (cartes)
│   ├── Realisations.tsx     # "Nos réalisations" (Bénin Explore, DISPO, RACINES…)
│   ├── Pourquoi.tsx         # "Pourquoi SOUN7 ?"
│   ├── Approche.tsx         # "Notre approche" (4 étapes)
│   ├── About.tsx            # "À propos"
│   ├── Contact.tsx          # Formulaire de contact
│   └── Footer.tsx
├── lib/
│   └── nav.ts              # Liens de navigation / réseaux sociaux (placeholders)
├── fonts/                  # Fichiers de polices auto-hébergées (.ttf)
└── public/
    ├── logo/                # Assets de la charte graphique SOUN7
    ├── favicon.ico, favicon-32x32.png, favicon-64x64.png
    └── og-image.png         # Image de partage réseaux sociaux
```

## Charte graphique appliquée

| Couleur | Hex |
|---|---|
| Noir profond | `#000000` |
| Blanc | `#FFFFFF` |
| Anthracite | `#4C545C` |
| Argent métal | `#B0B7BD` |
| Argent clair | `#F2F3F4` |
| Bleu ciel | `#59D5FF` |
| Bleu électrique | `#1E78DC` |
| Bleu nuit | `#0B2F63` |

Typographies : **Poppins** (logotype / titres), **Playfair Display italique** (slogan), **Montserrat** (texte courant) — conformément au PDF de charte graphique fourni.

## À personnaliser avant mise en ligne

- `lib/nav.ts` : renseigner les vraies URL des réseaux sociaux (LinkedIn, Instagram, X) — actuellement en placeholder (`#`).
- `components/Contact.tsx` : adresse email de contact (`contact@soun7.com`, à confirmer) et éventuel branchement à un service d'envoi de formulaire (le formulaire ouvre actuellement le client mail via `mailto:`).
- `app/layout.tsx` et `app/sitemap.ts` / `app/robots.ts` : remplacer `https://www.soun7.com` par le nom de domaine définitif.
- `public/og-image.png` : image de partage simple générée à partir du logo — peut être remplacée par un visuel plus élaboré.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

Le build a été vérifié : compilation sans erreur, lint sans avertissement.

## Déploiement

### 1. Publier sur GitHub

```bash
cd soun7-site
git init
git add .
git commit -m "Site officiel SOUN7"
git branch -M main
git remote add origin https://github.com/<votre-compte>/soun7-site.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Importer le dépôt GitHub `soun7-site`
3. Vercel détecte automatiquement Next.js — aucune configuration additionnelle n'est requise
4. Cliquer sur **Deploy**
5. Une fois déployé, connecter le nom de domaine définitif (`soun7.com` ou autre) depuis l'onglet **Domains** du projet Vercel

Après déploiement, penser à mettre à jour les URL en dur (`https://www.soun7.com`) dans `app/layout.tsx`, `app/sitemap.ts` et `app/robots.ts` avec le domaine réellement utilisé.
