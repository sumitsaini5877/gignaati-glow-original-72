
import { useState } from "react";

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
}

export default function usePostGigForm(): [GigFormData, PostGigFormHandlers] {
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
  
  const saveDraft = () => {
    console.log("Saving as draft:", formData);
  };

  const publishGig = () => {
    console.log("Submitting gig:", formData);
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
    publishGig
  };

  return [formData, handlers];
}
