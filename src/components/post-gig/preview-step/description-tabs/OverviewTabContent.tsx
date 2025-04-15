
interface OverviewTabContentProps {
  description: string;
}

const OverviewTabContent = ({ description }: OverviewTabContentProps) => (
  <div className="space-y-4">
    <p className="text-gray-700 whitespace-pre-line">
      {description || "No overview provided"}
    </p>
    <div className="mt-4">
      <h4 className="font-semibold mb-2">What you'll get:</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Custom trained GPT model based on your content</li>
        <li>Integration instructions and documentation</li>
        <li>Dedicated support during setup</li>
        <li>Performance optimization recommendations</li>
      </ul>
    </div>
  </div>
);

export default OverviewTabContent;
