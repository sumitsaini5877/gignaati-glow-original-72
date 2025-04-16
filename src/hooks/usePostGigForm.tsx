
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export interface GigFormData {
  title: string;
  description: string;
  prerequisites: string;
  manualVsAi: string;
  tokenomics: string;
  demoLink: string;
  demoImages: string[];
  demoVideo: string;
  tags: string[];
  packages: {
    setup: { title: string; description: string; price: string; deliveryTime: string; };
    training: { title: string; description: string; price: string; deliveryTime: string; };
    customization: { title: string; description: string; price: string; deliveryTime: string; };
  };
}

export interface PostGigFormHandlers {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlePackageChange: (packageType: string, field: string, value: string) => void;
  handleTagInput: (tag: string) => void;
  handleRemoveTag: (tagToRemove: string) => void;
  handleImageUpload: (imageUrl: string) => void;
  handleVideoUpload: (videoUrl: string) => void;
  handleRemoveImage: (imageUrl: string) => void;
  handleRemoveVideo: () => void;
  saveDraft: () => void;
  publishGig: () => void;
  loadSavedFormData: (data: GigFormData) => void;
}

export default function usePostGigForm(): [GigFormData, PostGigFormHandlers] {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<GigFormData>({
    title: "",
    description: "",
    prerequisites: "",
    manualVsAi: "",
    tokenomics: "",
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
  
  const loadSavedFormData = (data: GigFormData) => {
    setFormData(data);
  };
  
  const saveDraft = () => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      // Save form data to localStorage for retrieval after auth
      localStorage.setItem("savedPostGigForm", JSON.stringify(formData));
      
      // Redirect to auth page
      toast({
        title: "Authentication required",
        description: "Please log in to save your gig draft."
      });
      
      navigate('/auth');
      return;
    }
    
    // If authenticated, proceed with saving the draft
    console.log("Saving as draft:", formData);
    toast({
      title: "Draft saved",
      description: "Your gig draft has been saved successfully."
    });
  };

  const publishGig = () => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      // Save form data to localStorage for retrieval after auth
      localStorage.setItem("savedPostGigForm", JSON.stringify(formData));
      // Set flag to submit after auth
      localStorage.setItem("submitPostGigAfterAuth", "true");
      
      // Redirect to auth page
      toast({
        title: "Authentication required",
        description: "Please log in to publish your gig."
      });
      
      navigate('/auth');
      return;
    }
    
    // If authenticated, proceed with publishing
    console.log("Submitting gig:", formData);
    toast({
      title: "Gig published!",
      description: "Your gig has been successfully published."
    });
    
    // Redirect to the freelancer dashboard or another appropriate page
    setTimeout(() => {
      navigate('/freelancer-dashboard');
    }, 1500);
  };

  const handlers: PostGigFormHandlers = {
    handleInputChange,
    handlePackageChange,
    handleTagInput,
    handleRemoveTag,
    handleImageUpload,
    handleVideoUpload,
    handleRemoveImage,
    handleRemoveVideo,
    saveDraft,
    publishGig,
    loadSavedFormData
  };

  return [formData, handlers];
}
