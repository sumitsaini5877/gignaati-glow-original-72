
import { Button } from "@/components/ui/button";

const DemoPreview = () => {
  return (
    <div className="mb-8 bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="bg-gray-100 h-80 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-medium mb-2">Interactive Demo</h3>
          <p className="text-gray-500 mb-4">See this AI agent in action</p>
          <Button className="bg-gignaati-coral hover:bg-red-500">Try Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;
