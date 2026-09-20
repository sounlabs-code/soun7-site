import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VisiteViewer from "@/components/VisiteViewer";
import { recupererVisite } from "@/lib/visites-360";

// Destination des liens publics générés par l'application DISPO
// (https://soun7.com/visite/<slug>). Le slug est la seule donnée stockée
// côté base : l'URL est recomposée ici, ce qui permet de changer de domaine
// sans invalider les liens déjà partagés.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pieces = await recupererVisite(slug);
  if (!pieces.length) return { title: "Visite indisponible — DISPO" };

  const titre = "Visite virtuelle — DISPO";
  const description =
    pieces.length > 1
      ? `Découvre ce bien en visite virtuelle 360° — ${pieces.length} pièces.`
      : "Découvre ce bien en visite virtuelle 360°.";
  const apercu = pieces.find((p) => p.photo_couverture_url)?.photo_couverture_url;

  // L'aperçu compte plus qu'on ne croit : ces liens circulent surtout par
  // WhatsApp, où une vignette décide si le message est ouvert ou ignoré.
  return {
    title: titre,
    description,
    openGraph: {
      title: titre,
      description,
      type: "website",
      images: apercu ? [{ url: apercu }] : undefined,
    },
    twitter: {
      card: apercu ? "summary_large_image" : "summary",
      title: titre,
      description,
      images: apercu ? [apercu] : undefined,
    },
  };
}

export default async function VisitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pieces = await recupererVisite(slug);

  // Visite inexistante, non publiée, ou dont l'hébergement a expiré : la vue
  // publique ne la renvoie plus, et le lien devient une 404 propre.
  if (!pieces.length) notFound();

  return <VisiteViewer pieces={pieces} />;
}
