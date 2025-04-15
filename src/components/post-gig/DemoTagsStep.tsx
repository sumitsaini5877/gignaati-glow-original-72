
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tag, LinkIcon, Upload, ImageIcon, FileVideoIcon, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  const [previewImages, setPreviewImages] = useState<string[]>(images);
  const [previewVideo, setPreviewVideo] = useState<string>(video);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      
      // In a real app, you would upload this to your server/storage
      // and get back a permanent URL. For now, we'll use the local URL.
      onImageUpload(imageUrl);
      
      // Add to preview
      setPreviewImages([...previewImages, imageUrl]);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const videoUrl = URL.createObjectURL(file);
      
      // In a real app, you would upload this to your server/storage
      onVideoUpload(videoUrl);
      
      // Set preview
      setPreviewVideo(videoUrl);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Demo Media & Tags</h2>
      
      <div>
        <Label>Demo Images & Video</Label>
        <div className="flex items-center gap-2 mb-2">
          <ImageIcon className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-500">Add up to 5 images and 1 video to showcase your AI agent</span>
        </div>
        
        {/* Media Preview */}
        {(previewImages.length > 0 || previewVideo) && (
          <div className="mb-4">
            <Carousel className="w-full">
              <CarouselContent>
                {previewImages.map((img, index) => (
                  <CarouselItem key={`preview-${index}`}>
                    <div className="relative h-48 w-full bg-gray-100">
                      <img 
                        src={img} 
                        alt={`Preview ${index + 1}`} 
                        className="h-full w-full object-cover"
                      />
                      <button 
                        onClick={() => {
                          onRemoveImage(img);
                          setPreviewImages(previewImages.filter(i => i !== img));
                        }}
                        className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </CarouselItem>
                ))}
                
                {previewVideo && (
                  <CarouselItem>
                    <div className="relative h-48 w-full bg-gray-100">
                      <video 
                        src={previewVideo} 
                        className="h-full w-full object-cover"
                        controls
                      />
                      <button 
                        onClick={() => {
                          onRemoveVideo();
                          setPreviewVideo("");
                        }}
                        className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        )}
        
        {/* Upload Buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
          <Card className={`${previewImages.length >= 5 ? 'opacity-50' : ''}`}>
            <CardContent className="p-4 flex items-center">
              <div>
                <Label 
                  htmlFor="image-upload" 
                  className={`flex flex-col items-center cursor-pointer ${previewImages.length >= 5 ? 'cursor-not-allowed' : ''}`}
                >
                  <ImageIcon className="h-5 w-5 mb-1" />
                  <span className="text-xs">Add Image</span>
                  <span className="text-xs text-gray-400">({previewImages.length}/5)</span>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    disabled={previewImages.length >= 5}
                  />
                </Label>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`${previewVideo ? 'opacity-50' : ''}`}>
            <CardContent className="p-4 flex items-center">
              <div>
                <Label 
                  htmlFor="video-upload" 
                  className={`flex flex-col items-center cursor-pointer ${previewVideo ? 'cursor-not-allowed' : ''}`}
                >
                  <FileVideoIcon className="h-5 w-5 mb-1" />
                  <span className="text-xs">Add Video</span>
                  <span className="text-xs text-gray-400">({previewVideo ? '1' : '0'}/1)</span>
                  <Input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoChange}
                    disabled={!!previewVideo}
                  />
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <Label htmlFor="demoLink">Demo URL (Optional)</Label>
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-500">Add a link to a working demo of your AI agent</span>
        </div>
        <Input 
          id="demoLink" 
          name="demoLink"
          placeholder="https://your-demo-link.com" 
          value={demoLink}
          onChange={onInputChange}
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
          {tags.map((tag, index) => (
            <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span className="text-sm">{tag}</span>
              <button 
                onClick={() => onRemoveTag(tag)} 
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
                onTagInput((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
          <Button 
            variant="outline" 
            onClick={(e) => {
              const input = document.getElementById('tagInput') as HTMLInputElement;
              onTagInput(input.value);
              input.value = '';
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoTagsStep;
