
interface ManualVsAiTabProps {
  manualVsAi: string;
}

const ManualVsAiTab = ({ manualVsAi }: ManualVsAiTabProps) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">{manualVsAi}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border rounded-md p-4">
          <h4 className="font-semibold mb-2">Manual Process</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>3-5 hours per content piece</li>
            <li>Requires specialized skills</li>
            <li>Limited scalability</li>
            <li>Inconsistent quality</li>
          </ul>
        </div>
        <div className="border rounded-md p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">AI Solution</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Minutes per content piece</li>
            <li>No specialized skills needed</li>
            <li>Infinitely scalable</li>
            <li>Consistent quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManualVsAiTab;
