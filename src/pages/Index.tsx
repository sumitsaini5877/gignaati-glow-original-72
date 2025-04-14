
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGigs from "@/components/FeaturedGigs";
import CategoryGrid from "@/components/CategoryGrid";
import HowItWorks from "@/components/HowItWorks";
import TrustIndicators from "@/components/TrustIndicators";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedGigs />
      <CategoryGrid />
      <HowItWorks />
      <TrustIndicators />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
