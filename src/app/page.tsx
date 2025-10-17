// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import EventContent from "./event-content";
import Faq from "./faq";
import Localizacao from "./section-localizacao";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <EventContent />
      <Localizacao />
      <Faq />
      <Footer />
    </>
  );
}
