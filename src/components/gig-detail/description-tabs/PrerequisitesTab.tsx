
import { Check, FileText, Server, Cpu } from "lucide-react";

interface PrerequisitesTabProps {
  prerequisites: string;
}

const PrerequisitesTab = ({ prerequisites }: PrerequisitesTabProps) => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700">{prerequisites}</p>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Setup Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Content Examples</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Prepare 3-5 examples of existing content that represent your brand voice and style.
                </p>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  <span>Simple text files are sufficient</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start space-x-3">
              <Server className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium">API Access</h4>
                <p className="text-sm text-gray-600 mt-1">
                  You'll need API credentials to connect the agent to your platforms.
                </p>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  <span>We'll provide setup guidance</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start space-x-3">
              <Cpu className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium">System Requirements</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Cloud-based solution with no special hardware requirements.
                </p>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  <span>Works in any modern browser</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Brand Guidelines</h4>
                <p className="text-sm text-gray-600 mt-1">
                  If available, prepare your brand guidelines document for optimal agent training.
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <span>Optional but recommended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <h4 className="font-medium text-blue-800">Need help with setup?</h4>
        <p className="text-sm text-blue-700 mt-1">
          Our team is available to guide you through the setup process. We can schedule a 30-minute onboarding call to ensure your agent is configured properly.
        </p>
      </div>
    </div>
  );
};

export default PrerequisitesTab;
