
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

interface TipsSidebarProps {
  currentStep: number;
}

const TipsSidebar = ({ currentStep }: TipsSidebarProps) => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">AI Assistant Tips</h3>
        
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">A great title clearly explains what your AI agent can do for clients. Be specific about capabilities.</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">In your description, highlight unique features, use cases, and the problems your AI solves.</p>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">A working demo dramatically increases your chances of getting clients. Even a simple example helps!</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">Use industry-specific tags that your target clients might search for.</p>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">Offer clear distinctions between your packages to help clients choose the right option.</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">The Standard package is selected most often - make it attractive with good value.</p>
            </div>
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">Review everything carefully before publishing. First impressions matter!</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">Your gig will be reviewed by our team before going live. This usually takes 24-48 hours.</p>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <Button variant="outline" className="w-full">
            <HelpCircle className="mr-2 h-4 w-4" />
            Get More Help
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsSidebar;
