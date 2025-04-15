
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, FileVideoIcon, X } from "lucide-react";

interface MediaUploaderProps {
  images: string[];
  video: string;
  onImageUpload: (imageUrl: string) => void;
  onVideoUpload: (videoUrl: string) => void;
  onRemoveImage: (imageUrl: string) => void;
  onRemoveVideo: () => void;
}

const MediaUploader = ({
  images = [],
  video = "",
  onImageUpload,
  onVideoUpload,
  onRemoveImage,
  onRemoveVideo
}: MediaUploaderProps) => {
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
  );
};

export default MediaUploader;
