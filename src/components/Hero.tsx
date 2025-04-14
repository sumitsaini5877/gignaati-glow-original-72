
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-6 z-10 py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Gignaati - AI Agents Marketplace
          </h1>
          <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with top AI innovators and discover ready-to-deploy AI solutions
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-gignaati-coral hover:bg-red-500 text-white px-8 py-6 rounded-full text-lg">
              Explore AI Agents
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
