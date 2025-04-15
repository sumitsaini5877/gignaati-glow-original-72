
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface DemoLinkPreviewProps {
  demoLink: string;
  images?: string[];
  video?: string;
}

const DemoLinkPreview = ({ 
  demoLink, 
  images = [],
  video
}: DemoLinkPreviewProps) => {
  const hasMedia = images.length > 0 || video;

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-500">Demo Media</h3>
      
      {hasMedia ? (
        <div className="mb-4">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={`preview-${index}`}>
                  <div className="h-48 w-full bg-gray-100">
                    <img 
                      src={img} 
                      alt={`Demo media ${index + 1}`} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
              
              {video && (
                <CarouselItem>
                  <div className="h-48 w-full bg-gray-100">
                    <video 
                      src={video} 
                      className="h-full w-full object-cover"
                      controls
                    />
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      ) : (
        <p className="text-gray-600">No demo images or video provided</p>
      )}
      
      {demoLink && (
        <div className="mt-2">
          <h3 className="font-medium text-gray-500">Demo Link</h3>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {demoLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default DemoLinkPreview;
