
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  BookOpen, 
  User, 
  Coins, 
  GitCompare, 
  Award 
} from "lucide-react";

interface GigDescriptionProps {
  description: string;
  prerequisites?: string;
  agentDetail?: string;
  manualVsAi?: string;
  tokenomics?: string;
  benefits?: string;
}

const GigDescription = ({ 
  description, 
  prerequisites = "Familiarity with prompting, basic understanding of GPT models, and willingness to learn.",
  agentDetail = "The AI agent is trained on your specific content and can produce high-quality tailored content for your needs.",
  manualVsAi = "Manual content creation takes 3-5 hours per piece, while our AI solution delivers comparable quality in minutes. Traditional methods involve hiring writers, extensive editing, and long turnaround times.",
  tokenomics = "Pay-per-use pricing structure with volume discounts. No hidden fees or subscriptions required.",
  benefits = "Time savings, consistent quality, SEO optimization, and 24/7 availability. Scale your content production without scaling your team."
}: GigDescriptionProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 mb-6 w-full">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="prerequisites" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Prerequisites</span>
            </TabsTrigger>
            <TabsTrigger value="manualVsAi" className="flex items-center gap-2">
              <GitCompare className="h-4 w-4" />
              <span className="hidden sm:inline">Manual VS AI</span>
            </TabsTrigger>
            <TabsTrigger value="tokenomics" className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              <span className="hidden sm:inline">Tokenomics</span>
            </TabsTrigger>
            <TabsTrigger value="benefits" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Benefits</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <p className="text-gray-700">{description}</p>
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What you'll get:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Custom trained GPT model based on your content</li>
                  <li>Integration instructions and documentation</li>
                  <li>Dedicated support during setup</li>
                  <li>Performance optimization recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Use cases:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Content generation for blogs and articles</li>
                  <li>Social media post creation</li>
                  <li>Product descriptions</li>
                  <li>Email marketing copy</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="prerequisites" className="space-y-4">
            <p className="text-gray-700">{prerequisites}</p>
          </TabsContent>
          
          <TabsContent value="manualVsAi" className="space-y-4">
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
          </TabsContent>
          
          <TabsContent value="tokenomics" className="space-y-4">
            <p className="text-gray-700">{tokenomics}</p>
            <div className="mt-4">
              <div className="flex items-center justify-between border-b py-2">
                <span>Setup Package</span>
                <span className="font-medium">$199</span>
              </div>
              <div className="flex items-center justify-between border-b py-2">
                <span>Training Package</span>
                <span className="font-medium">$349</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Customization Package</span>
                <span className="font-medium">$599</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="space-y-4">
            <p className="text-gray-700">{benefits}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border rounded-md p-4 flex items-start">
                <Award className="h-5 w-5 text-gignaati-coral mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Time Efficiency</h4>
                  <p className="text-sm text-gray-600">Reduce content creation time by up to 80%</p>
                </div>
              </div>
              <div className="border rounded-md p-4 flex items-start">
                <Award className="h-5 w-5 text-gignaati-coral mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Cost Savings</h4>
                  <p className="text-sm text-gray-600">Lower content production costs by 60%</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GigDescription;
