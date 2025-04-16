
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Briefcase, Search, BookOpen, MessageSquare } from "lucide-react";

interface WelcomeTourProps {
  onComplete: () => void;
  onSkip: () => void;
}

interface TourStep {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  color: string;
}

const WelcomeTour = ({ onComplete, onSkip }: WelcomeTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const tourSteps: TourStep[] = [
    {
      title: "Post AI Gigs",
      description: "Create compelling gig listings to showcase your AI skills and talents to potential buyers. Set your own prices and delivery timelines.",
      image: "/placeholder.svg",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Find the Perfect AI Solution",
      description: "Browse through our marketplace of AI services and find the perfect solution for your needs. Filter by category, price, and reviews.",
      image: "/placeholder.svg",
      icon: Search,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Learn How It Works",
      description: "Understand the process of buying and selling AI services on our platform, from browsing to delivery and reviews.",
      image: "/placeholder.svg",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Connect with AI Experts",
      description: "Communicate directly with skilled AI developers and specialists to get the perfect custom solution for your needs.",
      image: "/placeholder.svg",
      icon: MessageSquare,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTourStep = tourSteps[currentStep];
  const IconComponent = currentTourStep.icon;
  
  return (
    <div className="max-w-4xl mx-auto text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-2">Welcome Tour</h2>
      <p className="text-gray-600 mb-8">Let's explore what Gignaati has to offer</p>
      
      <div className="relative mb-8">
        <div className="flex justify-center mb-6">
          {tourSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-12 mx-1 rounded-full ${
                index === currentStep ? "bg-gignaati-coral" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
      
      <Card className="p-8 mb-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
            <div className={`p-6 rounded-full ${currentTourStep.color}`}>
              <IconComponent size={120} />
            </div>
          </div>
          
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">{currentTourStep.title}</h3>
            <p className="text-gray-600 mb-4">{currentTourStep.description}</p>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-between mt-8">
        <div>
          {currentStep > 0 && (
            <Button
              onClick={handlePrevious}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft size={16} /> Previous
            </Button>
          )}
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={onSkip}
            variant="ghost"
          >
            Skip Tour
          </Button>
          
          <Button
            onClick={handleNext}
            className="bg-gignaati-coral hover:bg-red-500 gap-2"
          >
            {currentStep === tourSteps.length - 1 ? "Complete" : "Next"}
            {currentStep < tourSteps.length - 1 && <ArrowRight size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTour;
