
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
    manualVsAi: "",
    tokenomics: "",
    benefits: "",
    demoLink: "",
    demoImages: [] as string[],
    demoVideo: "",
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

  const handleImageUpload = (imageUrl: string) => {
    if (formData.demoImages.length < 5) {
      setFormData({
        ...formData,
        demoImages: [...formData.demoImages, imageUrl]
      });
    }
  };

  const handleVideoUpload = (videoUrl: string) => {
    setFormData({
      ...formData,
      demoVideo: videoUrl
    });
  };

  const handleRemoveImage = (imageUrl: string) => {
    setFormData({
      ...formData,
      demoImages: formData.demoImages.filter(img => img !== imageUrl)
    });
  };

  const handleRemoveVideo = () => {
    setFormData({
      ...formData,
      demoVideo: ""
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
    console.log("Saving as draft:", formData);
  };

  const publishGig = () => {
    console.log("Submitting gig:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16 mb-16">
        <h1 className="text-3xl font-bold mb-2 text-center">Post a New AI Gig</h1>
        <p className="text-gray-600 text-center mb-8">Create a compelling gig to showcase your AI talent</p>
        
        <StepProgress steps={steps} currentStep={currentStep} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                {currentStep === 1 && (
                  <BasicInfoStep 
                    title={formData.title} 
                    description={formData.description}
                    prerequisites={formData.prerequisites}
                    manualVsAi={formData.manualVsAi}
                    tokenomics={formData.tokenomics}
                    benefits={formData.benefits}
                    onInputChange={handleInputChange} 
                  />
                )}
                
                {currentStep === 2 && (
                  <DemoTagsStep 
                    demoLink={formData.demoLink}
                    tags={formData.tags}
                    images={formData.demoImages}
                    video={formData.demoVideo}
                    onInputChange={handleInputChange}
                    onTagInput={handleTagInput}
                    onRemoveTag={handleRemoveTag}
                    onImageUpload={handleImageUpload}
                    onVideoUpload={handleVideoUpload}
                    onRemoveImage={handleRemoveImage}
                    onRemoveVideo={handleRemoveVideo}
                  />
                )}
                
                {currentStep === 3 && (
                  <PackageBuilderStep 
                    packages={formData.packages}
                    onPackageChange={handlePackageChange}
                  />
                )}
                
                {currentStep === 4 && (
                  <PreviewStep formData={formData} />
                )}
                
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
