
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

interface BasicInfoStepProps {
  title: string;
  description: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BasicInfoStep = ({ title, description, onInputChange }: BasicInfoStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Gig Title</Label>
          <Input 
            id="title" 
            name="title"
            placeholder="E.g., Advanced AI Assistant for Content Creation" 
            value={title}
            onChange={onInputChange}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="description">Description</Label>
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">Describe what your AI agent does, its features, and benefits</span>
          </div>
          <Textarea 
            id="description" 
            name="description"
            placeholder="Describe your AI gig in detail..." 
            className="min-h-[200px] mt-1"
            value={description}
            onChange={onInputChange}
          />
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-2">AI Writing Assistant</h3>
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-2">Let Smartians AI help you craft a compelling description</p>
              <Button variant="outline" size="sm" className="w-full">
                Generate Description with AI
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
