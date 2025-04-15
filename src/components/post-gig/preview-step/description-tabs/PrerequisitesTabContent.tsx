
import { FileText, Server, Check } from "lucide-react";

interface PrerequisitesTabContentProps {
  prerequisites: string;
}

const PrerequisitesTabContent = ({ prerequisites }: PrerequisitesTabContentProps) => (
  <div className="space-y-6">
    <p className="text-gray-700 whitespace-pre-line">
      {prerequisites || "No prerequisites provided"}
    </p>
    
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Setup Requirements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SetupRequirementCard 
          icon={<FileText className="h-5 w-5 text-blue-500 mt-0.5" />}
          title="Content Examples"
          description="Prepare 3-5 examples of existing content that represent your brand voice and style."
          note="Simple text files are sufficient"
        />
        
        <SetupRequirementCard 
          icon={<Server className="h-5 w-5 text-blue-500 mt-0.5" />}
          title="API Access"
          description="You'll need API credentials to connect the agent to your platforms."
          note="We'll provide setup guidance"
        />
      </div>
    </div>
  </div>
);

interface SetupRequirementCardProps { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  note: string; 
}

const SetupRequirementCard = ({ 
  icon, 
  title, 
  description, 
  note 
}: SetupRequirementCardProps) => (
  <div className="border rounded-lg p-4 bg-gray-50">
    <div className="flex items-start space-x-3">
      {icon}
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-2 flex items-center text-sm text-green-600">
          <Check className="h-4 w-4 mr-1" />
          <span>{note}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PrerequisitesTabContent;
