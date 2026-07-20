import ScrollProgress from "./components/ScrollProgress";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AuthorityMarquee from "./components/AuthorityMarquee";
import Opportunity from "./components/Opportunity";
import HowItWorks from "./components/HowItWorks";
import Tools from "./components/Tools";
import Modules from "./components/Modules";
import Prospecting from "./components/Prospecting";
import RevenueCalculator from "./components/RevenueCalculator";
import WhatsIncluded from "./components/WhatsIncluded";
import Bonuses from "./components/Bonuses";
import VideoShowcase from "./components/VideoShowcase";
import WhoFor from "./components/WhoFor";
import WhoNotFor from "./components/WhoNotFor";
import Instructor from "./components/Instructor";
import Offer from "./components/Offer";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileStickyCTA from "./components/MobileStickyCTA";

function App() {
  return (
    <div className="pb-20 sm:pb-0">
      <ScrollProgress />
      <TopBar />
      <Header />

      <main>
        <Hero />
        <AuthorityMarquee />
        <Opportunity />
        <HowItWorks />
        <Tools />
        <Modules />
        <Prospecting />
        <RevenueCalculator />
        <WhatsIncluded />
        <Bonuses />
        <VideoShowcase />
        <WhoFor />
        <WhoNotFor />
        <Instructor />
        <Offer />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
