
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

interface DemoPreviewProps {
  images?: string[];
  video?: string;
}

const DemoPreview = ({ 
  images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=80"
  ], 
  video = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
}: DemoPreviewProps) => {
  return (
    <div className="mb-8 bg-white rounded-xl overflow-hidden shadow-sm">
      <Carousel className="w-full">
        <CarouselContent>
          {/* Images */}
          {images.map((image, index) => (
            <CarouselItem key={`image-${index}`}>
              <div className="bg-gray-100 h-80 w-full">
                <img 
                  src={image} 
                  alt={`Demo preview ${index + 1}`} 
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
          
          {/* Video */}
          {video && (
            <CarouselItem>
              <div className="bg-gray-100 h-80 w-full relative">
                <video 
                  src={video} 
                  className="h-full w-full object-cover"
                  controls
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/20 p-4 rounded-full">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                </div>
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

export default DemoPreview;
