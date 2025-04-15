
import { DollarSign, Gauge } from "lucide-react";

interface TokenomicsTabProps {
  tokenomics: string;
}

const TokenomicsTab = ({ tokenomics }: TokenomicsTabProps) => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700">{tokenomics}</p>
      
      <CostBreakdownSection />
      <PerformanceMetricsSection />
    </div>
  );
};

const CostBreakdownSection = () => (
  <div className="border rounded-lg p-4">
    <h3 className="font-semibold text-lg mb-3 flex items-center">
      <DollarSign className="h-5 w-5 mr-2 text-gignaati-coral" />
      Cost Breakdown
    </h3>
    
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <TokenCostCard type="Input Tokens" cost="$0.01 / 1K tokens" />
        <TokenCostCard type="Output Tokens" cost="$0.03 / 1K tokens" />
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
);

const TokenCostCard = ({ type, cost }: { type: string; cost: string }) => (
  <div className="border rounded p-3 bg-gray-50">
    <p className="text-sm text-gray-500">{type}</p>
    <p className="font-medium">{cost}</p>
  </div>
);

const PerformanceMetricsSection = () => (
  <div className="border rounded-lg p-4">
    <h3 className="font-semibold text-lg mb-3 flex items-center">
      <Gauge className="h-5 w-5 mr-2 text-gignaati-coral" />
      Performance Metrics
    </h3>
    
    <div className="space-y-2">
      <MetricItem label="Average response time:" value="0.8 seconds" />
      <MetricItem label="Throughput:" value="100 requests/minute" />
      <MetricItem label="SLA uptime:" value="99.9%" />
    </div>
  </div>
);

const MetricItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between text-sm">
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default TokenomicsTab;
