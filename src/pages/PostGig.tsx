
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepManager from "@/components/post-gig/StepManager";
import { BasicInfoStep, DemoTagsStep, PackageBuilderStep, PreviewStep } from "@/components/post-gig";
import usePostGigForm from "@/hooks/usePostGigForm";
import AuthGuard from "@/components/auth/AuthGuard";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, name: "Basic Info", component: BasicInfoStep },
  { id: 2, name: "Demo & Tags", component: DemoTagsStep },
  { id: 3, name: "Packages", component: PackageBuilderStep },
  { id: 4, name: "Preview", component: PreviewStep }
];

const PostGig = () => {
  const [formData, handlers] = usePostGigForm();
  const { toast } = useToast();
  
  // Check if there's saved form data after authentication
  useEffect(() => {
    const savedFormData = localStorage.getItem("savedPostGigForm");
    const shouldSubmit = localStorage.getItem("submitPostGigAfterAuth") === "true";
    
    if (savedFormData) {
      try {
        // Parse and load the saved form data
        const parsedData = JSON.parse(savedFormData);
        handlers.loadSavedFormData(parsedData);
        
        // Show toast notification
        toast({
          title: "Form data restored",
          description: "Your previous form data has been loaded."
        });
        
        // If we should submit after auth, do it
        if (shouldSubmit) {
          setTimeout(() => {
            handlers.publishGig();
            // Clean up storage
            localStorage.removeItem("submitPostGigAfterAuth");
          }, 500);
        }
      } catch (error) {
        console.error("Error loading saved form data:", error);
      } finally {
        // Clean up storage
        localStorage.removeItem("savedPostGigForm");
      }
    }
  }, [handlers, toast]);
  
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 mt-16 mb-16">
          <h1 className="text-3xl font-bold mb-2 text-center">Post a New AI Gig</h1>
          <p className="text-gray-600 text-center mb-8">Create a compelling gig to showcase your AI talent</p>
          
          <StepManager 
            steps={steps} 
            formData={formData} 
            handlers={handlers} 
          />
        </div>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default PostGig;
