// Accès aux visites virtuelles 360° publiées depuis l'application DISPO.
//
// La lecture passe par la vue `visites_360_publiques` (migration 102), qui
// n'expose que les visites prêtes et non archivées, et uniquement ce qui est
// nécessaire à l'affichage : jamais l'identité du propriétaire, jamais les
// montants, jamais les références de paiement.
//
// La clé "anon" est publique par conception — elle est déjà embarquée dans
// l'application mobile, et tout ce qu'elle permet d'atteindre ici est
// délibérément public. Les valeurs par défaut évitent qu'un oubli de
// variable d'environnement au déploiement ne casse silencieusement les
// visites déjà partagées.

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://oqvgdaqhjvesutvhzvwn.supabase.co";
const SUPABASE_ANON =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "sb_publishable_xHxk5o-BfQi1uYSDHy3ixQ_mbXLiPd_";

export type PieceVisite = {
  slug: string;
  piece_id: string;
  piece_nom: string | null;
  piece_ordre: number;
  panorama_url: string;
  photo_couverture_url: string | null;
};

export async function recupererVisite(slug: string): Promise<PieceVisite[]> {
  const url =
    `${SUPABASE_URL}/rest/v1/visites_360_publiques` +
    `?slug=eq.${encodeURIComponent(slug)}&order=piece_ordre.asc`;

  try {
    const reponse = await fetch(url, {
      headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}` },
      // Une visite change rarement, mais elle peut être archivée : on
      // rafraîchit toutes les 5 minutes plutôt que de figer la page.
      next: { revalidate: 300 },
    });
    if (!reponse.ok) return [];
    return (await reponse.json()) as PieceVisite[];
  } catch {
    return [];
  }
}
