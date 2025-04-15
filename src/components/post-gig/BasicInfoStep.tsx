
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, BookOpen, GitCompare, Coins, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BasicInfoStepProps {
  title: string;
  description: string;
  prerequisites: string;
  manualVsAi: string;
  tokenomics: string;
  benefits: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BasicInfoStep = ({ 
  title, 
  description, 
  prerequisites,
  manualVsAi,
  tokenomics,
  benefits,
  onInputChange 
}: BasicInfoStepProps) => {
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
        
        <div className="space-y-4">
          <Label>Description Sections</Label>
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">Fill out the sections below to create a comprehensive gig description</span>
          </div>
          
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4 w-full md:grid-cols-6">
              <TabsTrigger value="description" className="text-xs md:text-sm">Overview</TabsTrigger>
              <TabsTrigger value="prerequisites" className="text-xs md:text-sm">Prerequisites</TabsTrigger>
              <TabsTrigger value="manualVsAi" className="text-xs md:text-sm">Manual VS AI</TabsTrigger>
              <TabsTrigger value="tokenomics" className="text-xs md:text-sm">Tokenomics</TabsTrigger>
              <TabsTrigger value="benefits" className="text-xs md:text-sm">Benefits</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-0">
              <Label htmlFor="description">Overview</Label>
              <Textarea 
                id="description" 
                name="description"
                placeholder="Describe your AI gig in detail..." 
                className="min-h-[150px] mt-1"
                value={description}
                onChange={onInputChange}
              />
            </TabsContent>
            
            <TabsContent value="prerequisites" className="mt-0">
              <Label htmlFor="prerequisites">Prerequisites</Label>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">What does the client need to know or have before using your agent?</span>
              </div>
              <Textarea 
                id="prerequisites" 
                name="prerequisites"
                placeholder="E.g., Basic understanding of content strategy. No technical skills required..." 
                className="min-h-[150px] mt-1"
                value={prerequisites}
                onChange={onInputChange}
              />
            </TabsContent>
            
            <TabsContent value="manualVsAi" className="mt-0">
              <Label htmlFor="manualVsAi">Manual VS AI</Label>
              <div className="flex items-center gap-2 mb-2">
                <GitCompare className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Compare traditional methods versus your AI solution</span>
              </div>
              <Textarea 
                id="manualVsAi" 
                name="manualVsAi"
                placeholder="E.g., Traditional content creation requires hiring writers..." 
                className="min-h-[150px] mt-1"
                value={manualVsAi}
                onChange={onInputChange}
              />
            </TabsContent>
            
            <TabsContent value="tokenomics" className="mt-0">
              <Label htmlFor="tokenomics">Tokenomics</Label>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Explain your pricing model and token usage</span>
              </div>
              <Textarea 
                id="tokenomics" 
                name="tokenomics"
                placeholder="E.g., Simple, transparent pricing with no hidden fees..." 
                className="min-h-[150px] mt-1"
                value={tokenomics}
                onChange={onInputChange}
              />
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-0">
              <Label htmlFor="benefits">Benefits</Label>
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Highlight the key benefits of using your AI agent</span>
              </div>
              <Textarea 
                id="benefits" 
                name="benefits"
                placeholder="E.g., Increase your content production by 5x while maintaining quality..." 
                className="min-h-[150px] mt-1"
                value={benefits}
                onChange={onInputChange}
              />
            </TabsContent>
          </Tabs>
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
