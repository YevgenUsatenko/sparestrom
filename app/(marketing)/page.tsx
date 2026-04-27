import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import TrustStrip from "@/components/marketing/TrustStrip";
import Calculator from "@/components/marketing/Calculator";
import HowItWorks from "@/components/marketing/HowItWorks";
import Myths from "@/components/marketing/Myths";
import Testimonials from "@/components/marketing/Testimonials";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/marketing/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
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
