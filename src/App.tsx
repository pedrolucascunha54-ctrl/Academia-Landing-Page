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
import Guarantee from "./components/Guarantee";
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
      <Guarantee />
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
