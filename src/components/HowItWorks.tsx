
import { Search, Check, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover AI Talent",
      description: "Browse through a curated marketplace of AI agents, tools, and specialists to find the perfect match for your needs."
    },
    {
      icon: Check,
      title: "Book & Customize",
      description: "Choose a package, customize your requirements, and connect with the freelancer to discuss your specific needs."
    },
    {
      icon: Sparkles,
      title: "Get Results",
      description: "Receive your custom AI solution, ready to deploy with ongoing support from your chosen AI specialist."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your custom AI solution is simple with our streamlined process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gignaati-coral text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10">
                    <div className="absolute right-0 -top-1.5 h-4 w-4 bg-gray-200 transform rotate-45"></div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
