
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StepProgress } from "@/components/post-gig";
import { NavigationButtons } from "@/components/post-gig";
import { TipsSidebar } from "@/components/post-gig";
import { GigFormData, PostGigFormHandlers } from "@/hooks/usePostGigForm";

interface Step {
  id: number;
  name: string;
  component: React.ComponentType<any>;
}

interface StepManagerProps {
  steps: Step[];
  formData: GigFormData;
  handlers: PostGigFormHandlers;
}

const StepManager = ({ steps, formData, handlers }: StepManagerProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <StepProgress steps={steps} currentStep={currentStep} />
        <Card>
          <CardContent className="p-6">
            <CurrentStepComponent 
              formData={formData} 
              {...handlers} 
            />
            
            <NavigationButtons 
              currentStep={currentStep} 
              totalSteps={steps.length}
              onPrevStep={prevStep}
              onNextStep={nextStep}
              onSaveDraft={handlers.saveDraft}
              onPublish={handlers.publishGig}
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-1">
        <TipsSidebar currentStep={currentStep} />
      </div>
    </div>
  );
};

export default StepManager;
