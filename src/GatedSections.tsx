import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pain from "./components/Pain";
import Opportunity from "./components/Opportunity";
import Pillars from "./components/Pillars";
import Modules from "./components/Modules";
import Scripts from "./components/Scripts";
import Transformation from "./components/Transformation";
import Support from "./components/Support";
import Portfolio from "./components/Portfolio";
import Expansion from "./components/Expansion";
import Included from "./components/Included";
import Pricing from "./components/Pricing";
import Audience from "./components/Audience";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function GatedSections() {
  // Mounting this whole subtree changes the page height right as the Support
  // carousel's GSAP pin is set up; re-measure once it has painted, or the pin
  // is computed against a stale layout and mobile scroll jitters.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <Pain />
      <Opportunity />
      <Pillars />
      <Modules />
      <Scripts />
      <Transformation />
      <Support />
      <Portfolio />
      <Expansion />
      <Included />
      <Pricing />
      <Audience />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
