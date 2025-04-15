
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  BookOpen, 
  User, 
  Coins, 
  GitCompare, 
  Award,
  DollarSign,
  CreditCard,
  Gauge
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
            
            <div className="mt-6 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-gignaati-coral" />
                  Cost Breakdown
                </h3>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border rounded p-3 bg-gray-50">
                      <p className="text-sm text-gray-500">Input Tokens</p>
                      <p className="font-medium">$0.01 / 1K tokens</p>
                    </div>
                    <div className="border rounded p-3 bg-gray-50">
                      <p className="text-sm text-gray-500">Output Tokens</p>
                      <p className="font-medium">$0.03 / 1K tokens</p>
                    </div>
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
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-gignaati-coral" />
                  Pricing Plans
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b py-2">
                    <span>Basic Plan</span>
                    <span className="font-medium">$29/mo (10K tokens)</span>
                  </div>
                  <div className="flex items-center justify-between border-b py-2">
                    <span>Pro Plan</span>
                    <span className="font-medium">$99/mo (100K tokens)</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span>Enterprise</span>
                    <span className="font-medium">Custom pricing</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Gauge className="h-5 w-5 mr-2 text-gignaati-coral" />
                  Performance Metrics
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average response time:</span>
                    <span className="font-medium">0.8 seconds</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Throughput:</span>
                    <span className="font-medium">100 requests/minute</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>SLA uptime:</span>
                    <span className="font-medium">99.9%</span>
                  </div>
                </div>
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
