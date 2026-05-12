import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import TrustStrip from "@/components/marketing/TrustStrip";
import Benefits from "@/components/marketing/Benefits";
import Calculator from "@/components/marketing/Calculator";
import HowItWorks from "@/components/marketing/HowItWorks";
import Myths from "@/components/marketing/Myths";
import Testimonials from "@/components/marketing/Testimonials";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/marketing/ScrollReveal";
import JsonLd from "@/components/marketing/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Benefits />
        <Calculator />
        <HowItWorks />
        <Myths />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
