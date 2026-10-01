import { Suspense, lazy } from "react";
import ScrollProgress from "./components/ScrollProgress";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VSL from "./components/VSL";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import { WatchGateProvider, useWatchGate } from "./context/WatchGate";

// Loaded only after unlock, so first visit downloads just the hero + VSL.
const GatedSections = lazy(() => import("./GatedSections"));

// Nothing below the VSL exists in the page until the visitor has watched it
// through to the unlock mark — not just the buttons. Rendering nothing means
// there's literally nothing to scroll to, so the page can't be "skipped" by
// scrolling past the video either.
function GatedContent() {
  const { unlocked } = useWatchGate();
  if (!unlocked) return null;
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <GatedSections />
    </Suspense>
  );
}

function GatedFooter() {
  const { unlocked } = useWatchGate();
  return unlocked ? <Footer /> : null;
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

        <GatedFooter />
        <MobileStickyCTA />
      </div>
    </WatchGateProvider>
  );
}

export default App;
