
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/auth/AuthGuard";
import WelcomeTour from "@/components/onboarding/WelcomeTour";
import RoleSelection from "@/components/onboarding/RoleSelection";
import { Button } from "@/components/ui/button";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"welcome" | "tour" | "role">("welcome");
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    // Get user name from localStorage
    const storedUserName = localStorage.getItem("userName") || "User";
    setUserName(storedUserName);
    
    // Check if user is a returning user who completed onboarding
    const isNewUser = localStorage.getItem("isNewUser") === "true";
    const userRole = localStorage.getItem("userRole");
    
    if (!isNewUser && userRole && userRole !== "Explorer") {
      // If user is returning and has already chosen a role, redirect to appropriate dashboard
      if (userRole === "Creator") {
        navigate("/creator-dashboard");
      } else if (userRole === "Buyer") {
        navigate("/buyer-dashboard");
      }
    }
  }, [navigate]);

  const handleTourComplete = () => {
    setStep("role");
  };

  const handleRoleSelect = (role: "Creator" | "Buyer") => {
    // Update user role in localStorage
    localStorage.setItem("userRole", role);
    localStorage.setItem("isNewUser", "false");
    
    // Redirect to appropriate dashboard
    if (role === "Creator") {
      navigate("/creator-dashboard");
    } else {
      navigate("/buyer-dashboard");
    }
  };

  const handleSkipTour = () => {
    setStep("role");
  };

  const startTour = () => {
    setStep("tour");
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <div className="flex-grow container mx-auto px-4 py-16 mt-8">
          {step === "welcome" && (
            <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <h1 className="text-3xl font-bold mb-4">Welcome to Gignaati, {userName}!</h1>
              <p className="text-gray-600 mb-6">
                We're excited to have you join our platform. Let's get you started with a quick tour 
                to help you make the most of your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={startTour} className="bg-gignaati-coral hover:bg-red-500">
                  Start Tour
                </Button>
                <Button onClick={handleSkipTour} variant="outline">
                  Skip Tour
                </Button>
              </div>
            </div>
          )}

          {step === "tour" && (
            <WelcomeTour onComplete={handleTourComplete} onSkip={handleSkipTour} />
          )}
          
          {step === "role" && (
            <RoleSelection onRoleSelect={handleRoleSelect} />
          )}
        </div>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default Onboarding;
