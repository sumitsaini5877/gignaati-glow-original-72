
import {
  TitlePreview,
  DescriptionPreview,
  DemoLinkPreview,
  TagsPreview,
  PackagesPreview
} from "./preview-step";

import { GigFormData } from "@/hooks/usePostGigForm";

interface PreviewStepProps {
  formData: GigFormData;
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
