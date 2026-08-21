import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppDetailClient from "@/components/AppDetailClient";
import { appsContent } from "@/lib/apps-content";

export async function generateStaticParams() {
  return Object.keys(appsContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = appsContent[slug];
  if (!app) return {};

  return {
    title: `${app.name} — SOUN7`,
    description: app.tagline.fr,
    openGraph: {
      title: `${app.name} — SOUN7`,
      description: app.tagline.fr,
    },
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!appsContent[slug]) notFound();

  return <AppDetailClient slug={slug} />;
}
