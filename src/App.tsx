import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollProgress from "./components/ScrollProgress";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VSL from "./components/VSL";
import AuthorityMarquee from "./components/AuthorityMarquee";
import Tools from "./components/Tools";
import Modules from "./components/Modules";
import Prospecting from "./components/Prospecting";
import RevenueCalculator from "./components/RevenueCalculator";
import WhatsIncluded from "./components/WhatsIncluded";
import Bonuses from "./components/Bonuses";
import WhoFor from "./components/WhoFor";
import WhoNotFor from "./components/WhoNotFor";
import Support from "./components/Support";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileStickyCTA from "./components/MobileStickyCTA";
import { WatchGateProvider, useWatchGate } from "./context/WatchGate";

// Nothing below the VSL exists in the page until the visitor has watched it
// through to the unlock mark — not just the buttons. Rendering nothing means
// there's literally nothing to scroll to, so the page can't be "skipped" by
// scrolling past the video either.
function GatedContent() {
  const { unlocked } = useWatchGate();

  // Unlocking mounts a huge amount of new content below the VSL in one go
  // (this whole subtree). That changes the page's total height right as the
  // Support carousel's GSAP pin is being set up, which was leaving it
  // measured against a stale layout and causing the mobile scroll jitter to
  // come back. Refresh once this content has actually painted.
  useEffect(() => {
    if (!unlocked) return;
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [unlocked]);

  if (!unlocked) return null;

  return (
    <>
      <Support />
      <AuthorityMarquee />
      <Tools />
      <Modules />
      <Prospecting />
      <RevenueCalculator />
      <WhatsIncluded />
      <Bonuses />
      <WhoFor />
      <WhoNotFor />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <WatchGateProvider>
      <div className="pb-20 sm:pb-0">
        <ScrollProgress />
        <TopBar />
        <Header />

        <main>
          <Hero />
          <VSL />
          <GatedContent />
        </main>

        <WhatsAppButton />
        <MobileStickyCTA />
      </div>
    </WatchGateProvider>
  );
}

export default App;
