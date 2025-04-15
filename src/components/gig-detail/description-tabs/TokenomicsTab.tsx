
import { DollarSign, CreditCard, Gauge } from "lucide-react";

interface TokenomicsTabProps {
  tokenomics: string;
}

const TokenomicsTab = ({ tokenomics }: TokenomicsTabProps) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">{tokenomics}</p>
      
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
            
            <div className="border-t pt-3">
              <p className="text-sm mb-1">Example: 1,000 word blog post</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Input: ~500 tokens ≈ $0.005</li>
                <li>• Output: ~1,500 tokens ≈ $0.045</li>
                <li className="font-medium">• Total cost: $0.05 per post</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-gignaati-coral" />
            Pricing Plans
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b py-2">
              <span>Basic Plan</span>
              <span className="font-medium">$29/mo (10K tokens)</span>
            </div>
            <div className="flex items-center justify-between border-b py-2">
              <span>Pro Plan</span>
              <span className="font-medium">$99/mo (100K tokens)</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Enterprise</span>
              <span className="font-medium">Custom pricing</span>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <Gauge className="h-5 w-5 mr-2 text-gignaati-coral" />
            Performance Metrics
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Average response time:</span>
              <span className="font-medium">0.8 seconds</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Throughput:</span>
              <span className="font-medium">100 requests/minute</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>SLA uptime:</span>
              <span className="font-medium">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsTab;
