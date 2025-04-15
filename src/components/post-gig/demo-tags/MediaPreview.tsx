
import { X } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

interface MediaPreviewProps {
  images: string[];
  video: string;
  onRemoveImage: (imageUrl: string) => void;
  onRemoveVideo: () => void;
}

const MediaPreview = ({
  images = [],
  video = "",
  onRemoveImage,
  onRemoveVideo
}: MediaPreviewProps) => {
  if (images.length === 0 && !video) return null;

  return (
    <div className="mb-4">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={`preview-${index}`}>
              <div className="relative h-48 w-full bg-gray-100">
                <img 
                  src={img} 
                  alt={`Preview ${index + 1}`} 
                  className="h-full w-full object-cover"
                />
                <button 
                  onClick={() => onRemoveImage(img)}
                  className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </CarouselItem>
          ))}
          
          {video && (
            <CarouselItem>
              <div className="relative h-48 w-full bg-gray-100">
                <video 
                  src={video} 
                  className="h-full w-full object-cover"
                  controls
                />
                <button 
                  onClick={() => onRemoveVideo()}
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
  );
};

export default MediaPreview;
