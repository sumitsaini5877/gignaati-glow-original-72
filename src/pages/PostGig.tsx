
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronRight, 
  ChevronLeft, 
  Tag, 
  Link as LinkIcon, 
  DollarSign, 
  Package, 
  Clock, 
  Check, 
  HelpCircle,
  Calendar
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    demoLink: "",
    tags: [],
    packages: {
      base: { title: "Base", description: "", price: "", deliveryTime: "" },
      standard: { title: "Standard", description: "", price: "", deliveryTime: "" },
      premium: { title: "Premium", description: "", price: "", deliveryTime: "" }
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
  
  const submitGig = () => {
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
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.id < currentStep 
                    ? 'bg-gignaati-coral text-white' 
                    : step.id === currentStep 
                      ? 'bg-white border-2 border-gignaati-coral text-gignaati-coral' 
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}>
                  {step.id < currentStep ? <Check className="h-5 w-5" /> : step.id}
                </div>
                <div className="text-xs mt-2 text-gray-600">{step.name}</div>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
            <div 
              className="bg-gignaati-coral h-full transition-all duration-300" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Gig Title</Label>
                        <Input 
                          id="title" 
                          name="title"
                          placeholder="E.g., Advanced AI Assistant for Content Creation" 
                          value={formData.title}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <div className="flex items-center gap-2 mb-2">
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Describe what your AI agent does, its features, and benefits</span>
                        </div>
                        <Textarea 
                          id="description" 
                          name="description"
                          placeholder="Describe your AI gig in detail..." 
                          className="min-h-[200px] mt-1"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold mb-2">AI Writing Assistant</h3>
                        <Card className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-600 mb-2">Let Smartians AI help you craft a compelling description</p>
                            <Button variant="outline" size="sm" className="w-full">
                              Generate Description with AI
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Demo & Tags */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Demo Link & Tags</h2>
                    
                    <div>
                      <Label htmlFor="demoLink">Demo URL</Label>
                      <div className="flex items-center gap-2 mb-2">
                        <LinkIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">Add a link to a working demo of your AI agent</span>
                      </div>
                      <Input 
                        id="demoLink" 
                        name="demoLink"
                        placeholder="https://your-demo-link.com" 
                        value={formData.demoLink}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="tags">Tags</Label>
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">Add relevant tags to help buyers find your gig</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {formData.tags.map((tag, index) => (
                          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                            <span className="text-sm">{tag}</span>
                            <button 
                              onClick={() => handleRemoveTag(tag)} 
                              className="text-gray-500 hover:text-gray-700"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Input 
                          id="tagInput" 
                          placeholder="AI Assistant, GPT, Automation..." 
                          className="mt-1"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleTagInput((e.target as HTMLInputElement).value);
                              (e.target as HTMLInputElement).value = '';
                            }
                          }}
                        />
                        <Button 
                          variant="outline" 
                          onClick={(e) => {
                            const input = document.getElementById('tagInput') as HTMLInputElement;
                            handleTagInput(input.value);
                            input.value = '';
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Packages */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Package Builder</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.keys(formData.packages).map((packageType) => {
                        const pkg = formData.packages[packageType as keyof typeof formData.packages];
                        return (
                          <Card key={packageType} className="overflow-hidden">
                            <div className={`p-4 text-white text-center ${
                              packageType === 'base' 
                                ? 'bg-gray-600' 
                                : packageType === 'standard' 
                                  ? 'bg-gignaati-coral' 
                                  : 'bg-blue-600'
                            }`}>
                              <h3 className="font-semibold text-lg">{pkg.title}</h3>
                            </div>
                            <CardContent className="p-4 space-y-4">
                              <div>
                                <Label htmlFor={`${packageType}-description`}>Description</Label>
                                <Textarea 
                                  id={`${packageType}-description`}
                                  placeholder="What's included in this package..."
                                  value={pkg.description}
                                  onChange={(e) => handlePackageChange(packageType, 'description', e.target.value)}
                                  className="mt-1 min-h-[100px]"
                                />
                              </div>
                              
                              <div>
                                <Label htmlFor={`${packageType}-price`}>Price ($)</Label>
                                <div className="relative mt-1">
                                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    id={`${packageType}-price`}
                                    placeholder="99"
                                    value={pkg.price}
                                    onChange={(e) => handlePackageChange(packageType, 'price', e.target.value)}
                                    className="pl-10"
                                    type="number"
                                  />
                                </div>
                              </div>
                              
                              <div>
                                <Label htmlFor={`${packageType}-delivery`}>Delivery Time (Days)</Label>
                                <div className="relative mt-1">
                                  <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    id={`${packageType}-delivery`}
                                    placeholder="3"
                                    value={pkg.deliveryTime}
                                    onChange={(e) => handlePackageChange(packageType, 'deliveryTime', e.target.value)}
                                    className="pl-10"
                                    type="number"
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* Step 4: Preview */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Preview Your Gig</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-500">Title</h3>
                        <p className="text-lg font-semibold">{formData.title || "No title provided"}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-500">Description</h3>
                        <p className="text-gray-800 whitespace-pre-line">{formData.description || "No description provided"}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-500">Demo Link</h3>
                        {formData.demoLink ? (
                          <a href={formData.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{formData.demoLink}</a>
                        ) : (
                          <p className="text-gray-600">No demo link provided</p>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-500">Tags</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {formData.tags.length > 0 ? (
                            formData.tags.map((tag, index) => (
                              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {tag}
                              </span>
                            ))
                          ) : (
                            <p className="text-gray-600">No tags provided</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-500">Packages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                          {Object.keys(formData.packages).map((packageType) => {
                            const pkg = formData.packages[packageType as keyof typeof formData.packages];
                            return (
                              <Card key={packageType} className="overflow-hidden">
                                <div className={`p-2 text-white text-center ${
                                  packageType === 'base' 
                                    ? 'bg-gray-600' 
                                    : packageType === 'standard' 
                                      ? 'bg-gignaati-coral' 
                                      : 'bg-blue-600'
                                }`}>
                                  <h3 className="font-semibold">{pkg.title}</h3>
                                </div>
                                <CardContent className="p-3 text-sm">
                                  <div className="flex justify-between py-1 border-b">
                                    <span>Price:</span>
                                    <span className="font-semibold">${pkg.price || "N/A"}</span>
                                  </div>
                                  <div className="flex justify-between py-1 border-b">
                                    <span>Delivery:</span>
                                    <span>{pkg.deliveryTime || "N/A"} days</span>
                                  </div>
                                  <p className="mt-2 text-gray-700">{pkg.description || "No description provided"}</p>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <Button 
                      variant="outline" 
                      onClick={prevStep}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < steps.length ? (
                    <Button 
                      onClick={nextStep}
                    >
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        onClick={() => {
                          // Logic for saving as draft
                          console.log("Saving as draft:", formData);
                        }}
                      >
                        Save as Draft
                      </Button>
                      <Button 
                        className="bg-gignaati-coral hover:bg-red-500"
                        onClick={submitGig}
                      >
                        Publish Gig
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar with Tips */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">AI Assistant Tips</h3>
                
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">A great title clearly explains what your AI agent can do for clients. Be specific about capabilities.</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">In your description, highlight unique features, use cases, and the problems your AI solves.</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">A working demo dramatically increases your chances of getting clients. Even a simple example helps!</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">Use industry-specific tags that your target clients might search for.</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">Offer clear distinctions between your packages to help clients choose the right option.</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">The Standard package is selected most often - make it attractive with good value.</p>
                    </div>
                  </div>
                )}
                
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">Review everything carefully before publishing. First impressions matter!</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">Your gig will be reviewed by our team before going live. This usually takes 24-48 hours.</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Get More Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostGig;
