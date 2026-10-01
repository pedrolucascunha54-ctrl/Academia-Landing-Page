import AuthorityMarquee from "./components/AuthorityMarquee";
import Tools from "./components/Tools";
import WhatsIncluded from "./components/WhatsIncluded";
import Bonuses from "./components/Bonuses";
import WhoFor from "./components/WhoFor";
import WhoNotFor from "./components/WhoNotFor";
import Support from "./components/Support";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

export default function GatedSections() {
  return (
    <>
      <Support />
      <Portfolio />
      <AuthorityMarquee />
      <Tools />
      <WhatsIncluded />
      <Bonuses />
      <WhoFor />
      <WhoNotFor />
      <Offer />
      <FAQ />
      <FinalCTA />
    </>
  );
}
