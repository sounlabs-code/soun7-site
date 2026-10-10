import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Bénin Explore a été renommée Balise : l'ancienne URL reste valide.
      {
        source: "/realisations/benin-explore",
        destination: "/realisations/balise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
