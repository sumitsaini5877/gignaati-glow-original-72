
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
          >
            Save as Draft
          </Button>
          <Button 
            className="bg-gignaati-coral hover:bg-red-500"
            onClick={onPublish}
          >
            Publish Gig
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;
