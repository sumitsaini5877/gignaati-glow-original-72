
import { DollarSign } from "lucide-react";

interface TokenomicsTabContentProps {
  tokenomics: string;
}

const TokenomicsTabContent = ({ tokenomics }: TokenomicsTabContentProps) => (
  <div className="space-y-4">
    <p className="text-gray-700 whitespace-pre-line">
      {tokenomics || "No tokenomics information provided"}
    </p>
    
    <div className="mt-6 space-y-6">
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-3 flex items-center">
          <DollarSign className="h-5 w-5 mr-2 text-gignaati-coral" />
          Cost Breakdown
        </h3>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="border rounded p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Input Tokens</p>
              <p className="font-medium">$0.01 / 1K tokens</p>
            </div>
            <div className="border rounded p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Output Tokens</p>
              <p className="font-medium">$0.03 / 1K tokens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TokenomicsTabContent;
