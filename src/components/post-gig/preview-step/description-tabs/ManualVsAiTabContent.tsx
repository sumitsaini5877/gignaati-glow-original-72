
interface ManualVsAiTabContentProps {
  manualVsAi: string;
}

const ManualVsAiTabContent = ({ manualVsAi }: ManualVsAiTabContentProps) => (
  <div className="space-y-4">
    <p className="text-gray-700 whitespace-pre-line">
      {manualVsAi || "No manual vs AI comparison provided"}
    </p>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <ComparisonCard title="Manual Process" points={[
        "3-5 hours per content piece",
        "Requires specialized skills",
        "Limited scalability",
        "Inconsistent quality"
      ]} />
      
      <ComparisonCard title="AI Solution" points={[
        "Minutes per content piece",
        "No specialized skills needed",
        "Infinitely scalable",
        "Consistent quality"
      ]} isHighlighted />
    </div>
  </div>
);

interface ComparisonCardProps { 
  title: string; 
  points: string[];
  isHighlighted?: boolean;
}

const ComparisonCard = ({ title, points, isHighlighted = false }: ComparisonCardProps) => (
  <div className={`border rounded-md p-4 ${isHighlighted ? 'bg-gray-50' : ''}`}>
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default ManualVsAiTabContent;
