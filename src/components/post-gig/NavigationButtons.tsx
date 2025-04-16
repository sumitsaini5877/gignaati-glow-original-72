
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Save, Send } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSaveDraft: () => void;
  onPublish: () => void;
}

const NavigationButtons = ({ 
  currentStep, 
  totalSteps,
  onPrevStep,
  onNextStep,
  onSaveDraft,
  onPublish
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 ? (
        <Button 
          variant="outline" 
          onClick={onPrevStep}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      ) : (
        <div></div>
      )}
      
      {currentStep < totalSteps ? (
        <Button 
          onClick={onNextStep}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={onSaveDraft}
            className="flex items-center gap-2"
          >
            <Save size={16} />
            Save as Draft
          </Button>
          <Button 
            className="bg-gignaati-coral hover:bg-red-500 flex items-center gap-2"
            onClick={onPublish}
          >
            <Send size={16} />
            Publish Gig
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;
