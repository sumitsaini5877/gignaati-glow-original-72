
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  StepProgress,
  BasicInfoStep,
  DemoTagsStep,
  PackageBuilderStep,
  PreviewStep,
  NavigationButtons,
  TipsSidebar
} from "@/components/post-gig";

const steps = [
  { id: 1, name: "Basic Info" },
  { id: 2, name: "Demo & Tags" },
  { id: 3, name: "Packages" },
  { id: 4, name: "Preview" }
];

const PostGig = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prerequisites: "",
    agentDetail: "",
    tokenomics: "",
    manualVsAi: "",
    benefits: "",
    demoLink: "",
    tags: [] as string[],
    packages: {
      setup: { title: "Setup", description: "", price: "", deliveryTime: "" },
      training: { title: "Training", description: "", price: "", deliveryTime: "" },
      customization: { title: "Customization", description: "", price: "", deliveryTime: "" }
    }
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handlePackageChange = (packageType: string, field: string, value: string) => {
    setFormData({
      ...formData,
      packages: {
        ...formData.packages,
        [packageType]: {
          ...formData.packages[packageType as keyof typeof formData.packages],
          [field]: value
        }
      }
    });
  };
  
  const handleTagInput = (tag: string) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag]
      });
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };
  
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const saveDraft = () => {
    // Submit form data to backend as draft
    console.log("Saving as draft:", formData);
    // Redirect or show success message
  };

  const publishGig = () => {
    // Submit form data to backend
    console.log("Submitting gig:", formData);
    // Redirect or show success message
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16 mb-16">
        <h1 className="text-3xl font-bold mb-2 text-center">Post a New AI Gig</h1>
        <p className="text-gray-600 text-center mb-8">Create a compelling gig to showcase your AI talent</p>
        
        {/* Progress Bar */}
        <StepProgress steps={steps} currentStep={currentStep} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <BasicInfoStep 
                    title={formData.title} 
                    description={formData.description}
                    prerequisites={formData.prerequisites}
                    agentDetail={formData.agentDetail}
                    tokenomics={formData.tokenomics}
                    manualVsAi={formData.manualVsAi}
                    benefits={formData.benefits}
                    onInputChange={handleInputChange} 
                  />
                )}
                
                {/* Step 2: Demo & Tags */}
                {currentStep === 2 && (
                  <DemoTagsStep 
                    demoLink={formData.demoLink}
                    tags={formData.tags}
                    onInputChange={handleInputChange}
                    onTagInput={handleTagInput}
                    onRemoveTag={handleRemoveTag}
                  />
                )}
                
                {/* Step 3: Packages */}
                {currentStep === 3 && (
                  <PackageBuilderStep 
                    packages={formData.packages}
                    onPackageChange={handlePackageChange}
                  />
                )}
                
                {/* Step 4: Preview */}
                {currentStep === 4 && (
                  <PreviewStep formData={formData} />
                )}
                
                {/* Navigation Buttons */}
                <NavigationButtons 
                  currentStep={currentStep} 
                  totalSteps={steps.length}
                  onPrevStep={prevStep}
                  onNextStep={nextStep}
                  onSaveDraft={saveDraft}
                  onPublish={publishGig}
                />
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar with Tips */}
          <div className="lg:col-span-1">
            <TipsSidebar currentStep={currentStep} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostGig;
