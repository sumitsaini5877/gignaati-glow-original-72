
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { 
  MediaUploader,
  MediaPreview,
  DemoLinkInput,
  TagsInput 
} from "./demo-tags";

interface DemoTagsStepProps {
  demoLink: string;
  tags: string[];
  images: string[];
  video: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTagInput: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  onImageUpload: (imageUrl: string) => void;
  onVideoUpload: (videoUrl: string) => void;
  onRemoveImage: (imageUrl: string) => void;
  onRemoveVideo: () => void;
}

const DemoTagsStep = ({ 
  demoLink, 
  tags,
  images = [],
  video = "",
  onInputChange, 
  onTagInput, 
  onRemoveTag,
  onImageUpload,
  onVideoUpload,
  onRemoveImage,
  onRemoveVideo
}: DemoTagsStepProps) => {
  // State for the component is now moved to individual components
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Demo Media & Tags</h2>
      
      <div>
        <Label>Demo Images & Video</Label>
        <div className="flex items-center gap-2 mb-2">
          <ImageIcon className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-500">Add up to 5 images and 1 video to showcase your AI agent</span>
        </div>
        
        {/* Media Preview Component */}
        <MediaPreview 
          images={images}
          video={video}
          onRemoveImage={onRemoveImage}
          onRemoveVideo={onRemoveVideo}
        />
        
        {/* Upload Buttons Component */}
        <MediaUploader 
          images={images}
          video={video}
          onImageUpload={onImageUpload}
          onVideoUpload={onVideoUpload}
          onRemoveImage={onRemoveImage}
          onRemoveVideo={onRemoveVideo}
        />
      </div>
      
      {/* Demo Link Component */}
      <DemoLinkInput 
        demoLink={demoLink}
        onInputChange={onInputChange}
      />
      
      {/* Tags Component */}
      <TagsInput 
        tags={tags}
        onTagInput={onTagInput}
        onRemoveTag={onRemoveTag}
      />
    </div>
  );
};

export default DemoTagsStep;
