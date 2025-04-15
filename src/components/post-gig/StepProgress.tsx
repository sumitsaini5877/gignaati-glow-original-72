
import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number;
}

const StepProgress = ({ steps, currentStep }: StepProgressProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step.id < currentStep 
                ? 'bg-gignaati-coral text-white' 
                : step.id === currentStep 
                  ? 'bg-white border-2 border-gignaati-coral text-gignaati-coral' 
                  : 'bg-white border-2 border-gray-300 text-gray-400'
            }`}>
              {step.id < currentStep ? <Check className="h-5 w-5" /> : step.id}
            </div>
            <div className="text-xs mt-2 text-gray-600">{step.name}</div>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
        <div 
          className="bg-gignaati-coral h-full transition-all duration-300" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StepProgress;
