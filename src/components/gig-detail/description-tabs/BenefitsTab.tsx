
import { Award } from "lucide-react";

interface BenefitsTabProps {
  benefits: string;
}

const BenefitsTab = ({ benefits }: BenefitsTabProps) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">{benefits}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border rounded-md p-4 flex items-start">
          <Award className="h-5 w-5 text-gignaati-coral mr-2 mt-0.5" />
          <div>
            <h4 className="font-semibold">Time Efficiency</h4>
            <p className="text-sm text-gray-600">Reduce content creation time by up to 80%</p>
          </div>
        </div>
        <div className="border rounded-md p-4 flex items-start">
          <Award className="h-5 w-5 text-gignaati-coral mr-2 mt-0.5" />
          <div>
            <h4 className="font-semibold">Cost Savings</h4>
            <p className="text-sm text-gray-600">Lower content production costs by 60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsTab;
