import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Realisations from "@/components/Realisations";
import Perspectives from "@/components/Perspectives";
import Pourquoi from "@/components/Pourquoi";
import Approche from "@/components/Approche";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOUN7",
  legalName: "SOUN SET SARL",
  alternateName: "SOUN7",
  url: "https://www.soun7.com",
  logo: "https://www.soun7.com/logo/soun7_logo_transparent.png",
  slogan: "Là où l'innovation prend vie",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  description:
    "SOUN7 (SOUN SET SARL) conçoit et déploie des solutions numériques, applications, plateformes et technologies innovantes pour les entreprises, institutions et particuliers en Afrique.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Realisations />
        <Perspectives />
        <Pourquoi />
        <Approche />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
