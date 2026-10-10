import type { MetadataRoute } from "next";
import { appsContent } from "@/lib/apps-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.soun7.com";
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...Object.keys(appsContent).map((slug) => ({
      url: `${siteUrl}/realisations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
