import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  GitCompare, 
  Coins, 
  Award,
  Check,
  FileText,
  Server,
  Cpu
} from "lucide-react";

interface FormData {
  title: string;
  description: string;
  prerequisites: string;
  manualVsAi: string;
  tokenomics: string;
  benefits: string;
  demoLink: string;
  tags: string[];
  packages: {
    setup: { title: string; description: string; price: string; deliveryTime: string; };
    training: { title: string; description: string; price: string; deliveryTime: string; };
    customization: { title: string; description: string; price: string; deliveryTime: string; };
  };
}

interface PreviewStepProps {
  formData: FormData;
}

const PreviewStep = ({ formData }: PreviewStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Preview Your Gig</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-500">Title</h3>
          <p className="text-lg font-semibold">{formData.title || "No title provided"}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Description</h3>
          <Card className="mt-2">
            <CardContent className="p-4">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-5 mb-4 w-full">
                  <TabsTrigger value="overview" className="text-xs md:text-sm flex items-center gap-1">
                    <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="prerequisites" className="text-xs md:text-sm flex items-center gap-1">
                    <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Prerequisites</span>
                  </TabsTrigger>
                  <TabsTrigger value="manualVsAi" className="text-xs md:text-sm flex items-center gap-1">
                    <GitCompare className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Manual VS AI</span>
                  </TabsTrigger>
                  <TabsTrigger value="tokenomics" className="text-xs md:text-sm flex items-center gap-1">
                    <Coins className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Tokenomics</span>
                  </TabsTrigger>
                  <TabsTrigger value="benefits" className="text-xs md:text-sm flex items-center gap-1">
                    <Award className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Benefits</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-0">
                  <div className="space-y-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.description || "No overview provided"}
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
                </TabsContent>
                
                <TabsContent value="prerequisites" className="mt-0">
                  <div className="space-y-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.prerequisites || "No prerequisites provided"}
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Setup Requirements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex items-start space-x-3">
                            <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium">Content Examples</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Prepare 3-5 examples of existing content that represent your brand voice and style.
                              </p>
                              <div className="mt-2 flex items-center text-sm text-green-600">
                                <Check className="h-4 w-4 mr-1" />
                                <span>Simple text files are sufficient</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex items-start space-x-3">
                            <Server className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium">API Access</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                You'll need API credentials to connect the agent to your platforms.
                              </p>
                              <div className="mt-2 flex items-center text-sm text-green-600">
                                <Check className="h-4 w-4 mr-1" />
                                <span>We'll provide setup guidance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="manualVsAi" className="mt-0">
                  <div className="space-y-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.manualVsAi || "No manual vs AI comparison provided"}
                    </p>
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
                </TabsContent>
                
                <TabsContent value="tokenomics" className="mt-0">
                  <div className="space-y-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.tokenomics || "No tokenomics information provided"}
                    </p>
          
                    <div className="mt-6 space-y-6">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-3 flex items-center">
                          <Coins className="h-5 w-5 mr-2 text-gignaati-coral" />
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
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="benefits" className="mt-0">
                  <div className="space-y-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.benefits || "No benefits information provided"}
                    </p>
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
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Demo Link</h3>
          {formData.demoLink ? (
            <a href={formData.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{formData.demoLink}</a>
          ) : (
            <p className="text-gray-600">No demo link provided</p>
          )}
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {formData.tags.length > 0 ? (
              formData.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))
            ) : (
              <p className="text-gray-600">No tags provided</p>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {Object.keys(formData.packages).map((packageType) => {
              const pkg = formData.packages[packageType as keyof typeof formData.packages];
              return (
                <Card key={packageType} className="overflow-hidden">
                  <div className={`p-2 text-white text-center ${
                    packageType === 'setup' 
                      ? 'bg-gray-600' 
                      : packageType === 'training' 
                        ? 'bg-gignaati-coral' 
                        : 'bg-blue-600'
                  }`}>
                    <h3 className="font-semibold">{pkg.title}</h3>
                  </div>
                  <CardContent className="p-3 text-sm">
                    <div className="flex justify-between py-1 border-b">
                      <span>Price:</span>
                      <span className="font-semibold">${pkg.price || "N/A"}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span>Delivery:</span>
                      <span>{pkg.deliveryTime || "N/A"} days</span>
                    </div>
                    <p className="mt-2 text-gray-700">{pkg.description || "No description provided"}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewStep;
