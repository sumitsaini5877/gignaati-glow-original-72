
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, BookOpen, GitCompare, Coins, Award, Check, FileText, Server, Cpu } from "lucide-react";
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
            <TabsList className="grid grid-cols-5 mb-4 w-full">
              <TabsTrigger value="description" className="text-xs md:text-sm">
                <BookOpen className="h-4 w-4 mr-2 hidden md:inline" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="prerequisites" className="text-xs md:text-sm">
                <BookOpen className="h-4 w-4 mr-2 hidden md:inline" />
                Prerequisites
              </TabsTrigger>
              <TabsTrigger value="manualVsAi" className="text-xs md:text-sm">
                <GitCompare className="h-4 w-4 mr-2 hidden md:inline" />
                Manual VS AI
              </TabsTrigger>
              <TabsTrigger value="tokenomics" className="text-xs md:text-sm">
                <Coins className="h-4 w-4 mr-2 hidden md:inline" />
                Tokenomics
              </TabsTrigger>
              <TabsTrigger value="benefits" className="text-xs md:text-sm">
                <Award className="h-4 w-4 mr-2 hidden md:inline" />
                Benefits
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-0">
              <Label htmlFor="description">Overview</Label>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Describe your AI gig and what buyers will get</span>
              </div>
              <Textarea 
                id="description" 
                name="description"
                placeholder="Describe your AI gig in detail..." 
                className="min-h-[150px] mt-1"
                value={description}
                onChange={onInputChange}
              />
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">What you'll provide:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Custom trained GPT model</li>
                  <li>Integration documentation</li>
                  <li>Dedicated support</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
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
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Setup Requirements Preview:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-3 bg-gray-50">
                    <div className="flex items-start space-x-2">
                      <FileText className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-medium">Content Examples</h5>
                        <p className="text-xs text-gray-600">Examples of brand voice and style</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 bg-gray-50">
                    <div className="flex items-start space-x-2">
                      <Server className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-medium">API Access</h5>
                        <p className="text-xs text-gray-600">API credentials needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Comparison Preview:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-3">
                    <h5 className="text-xs font-semibold mb-1">Manual Process</h5>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                      <li>3-5 hours per piece</li>
                      <li>Specialized skills</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-3 bg-gray-50">
                    <h5 className="text-xs font-semibold mb-1">AI Solution</h5>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                      <li>Minutes per piece</li>
                      <li>No specialized skills</li>
                    </ul>
                  </div>
                </div>
              </div>
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
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Pricing Preview:</h4>
                <div className="border rounded-md p-3 bg-gray-50">
                  <div className="flex items-center justify-between text-xs">
                    <span>Input Tokens</span>
                    <span className="font-medium">$0.01 / 1K tokens</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span>Output Tokens</span>
                    <span className="font-medium">$0.03 / 1K tokens</span>
                  </div>
                </div>
              </div>
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
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Key Benefits Preview:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-3 flex items-start">
                    <Award className="h-4 w-4 text-gignaati-coral mr-1 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-medium">Time Efficiency</h5>
                      <p className="text-xs text-gray-600">Reduce time by up to 80%</p>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 flex items-start">
                    <Award className="h-4 w-4 text-gignaati-coral mr-1 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-medium">Cost Savings</h5>
                      <p className="text-xs text-gray-600">Lower costs by 60%</p>
                    </div>
                  </div>
                </div>
              </div>
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
