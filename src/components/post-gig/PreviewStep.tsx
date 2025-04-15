
import {
  TitlePreview,
  DescriptionPreview,
  DemoLinkPreview,
  TagsPreview,
  PackagesPreview
} from "./preview-step";

interface FormData {
  title: string;
  description: string;
  prerequisites: string;
  manualVsAi: string;
  tokenomics: string;
  demoLink: string;
  demoImages?: string[];
  demoVideo?: string;
  tags: string[];
  packages: {
    setup: { title: string; description: string; price: string; deliveryTime: string; };
    training: { title: string; description: string; price: string; deliveryTime: string; };
    customization: { title: string; description: string; price: string; deliveryTime: string; };
  };
}

interface PreviewStepProps {
  formData: FormData;
}

const PreviewStep = ({ formData }: PreviewStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Preview Your Gig</h2>
      
      <div className="space-y-6">
        <TitlePreview title={formData.title} />
        <DescriptionPreview formData={formData} />
        <DemoLinkPreview 
          demoLink={formData.demoLink} 
          images={formData.demoImages} 
          video={formData.demoVideo}
        />
        <TagsPreview tags={formData.tags} />
        <PackagesPreview packages={formData.packages} />
      </div>
    </div>
  );
};

export default PreviewStep;
