import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Realisations from "@/components/Realisations";
import Pourquoi from "@/components/Pourquoi";
import Approche from "@/components/Approche";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Realisations />
        <Pourquoi />
        <Approche />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
