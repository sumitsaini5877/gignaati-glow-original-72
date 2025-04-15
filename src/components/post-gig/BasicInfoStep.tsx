
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BasicInfoStepProps {
  title: string;
  description: string;
  prerequisites: string;
  manualVsAi: string;
  tokenomics: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BasicInfoStep = ({ 
  title, 
  description, 
  prerequisites, 
  manualVsAi, 
  tokenomics, 
  onInputChange 
}: BasicInfoStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Gig Title
          </label>
          <Input
            id="title"
            name="title"
            value={title}
            onChange={onInputChange}
            placeholder="E.g., AI Content Writer for Marketing Copy"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description (Overview)
          </label>
          <Textarea
            id="description"
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="Describe your AI service, its main features, and benefits..."
            className="min-h-32"
          />
        </div>
        
        <div>
          <label htmlFor="prerequisites" className="block text-sm font-medium mb-1">
            Prerequisites
          </label>
          <Textarea
            id="prerequisites"
            name="prerequisites"
            value={prerequisites}
            onChange={onInputChange}
            placeholder="What should your clients know or have ready before using your service?"
            className="min-h-24"
          />
        </div>
        
        <div>
          <label htmlFor="manualVsAi" className="block text-sm font-medium mb-1">
            Manual vs AI Comparison
          </label>
          <Textarea
            id="manualVsAi"
            name="manualVsAi"
            value={manualVsAi}
            onChange={onInputChange}
            placeholder="Compare your AI solution to traditional manual methods..."
            className="min-h-24"
          />
        </div>
        
        <div>
          <label htmlFor="tokenomics" className="block text-sm font-medium mb-1">
            Tokenomics
          </label>
          <Textarea
            id="tokenomics"
            name="tokenomics"
            value={tokenomics}
            onChange={onInputChange}
            placeholder="Explain your pricing structure, token usage, discounts, etc."
            className="min-h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
