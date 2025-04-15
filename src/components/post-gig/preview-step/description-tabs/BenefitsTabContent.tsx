
import { Award } from "lucide-react";

interface BenefitsTabContentProps {
  benefits: string;
}

const BenefitsTabContent = ({ benefits }: BenefitsTabContentProps) => (
  <div className="space-y-4">
    <p className="text-gray-700 whitespace-pre-line">
      {benefits || "No benefits information provided"}
    </p>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <BenefitCard 
        icon={<Award className="h-5 w-5 text-gignaati-coral mr-2 mt-0.5" />}
        title="Time Efficiency"
        description="Reduce content creation time by up to 80%"
      />
      <BenefitCard 
        icon={<Award className="h-5 w-5 text-gignaati-coral mr-2 mt-0.5" />}
        title="Cost Savings"
        description="Lower content production costs by 60%"
      />
    </div>
  </div>
);

interface BenefitCardProps { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="border rounded-md p-4 flex items-start">
    {icon}
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default BenefitsTabContent;
