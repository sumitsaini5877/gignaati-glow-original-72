import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  GitCompare, 
  Coins, 
  Award 
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
                <TabsList className="grid grid-cols-3 mb-4 w-full md:grid-cols-5">
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
                  <p className="text-gray-700 whitespace-pre-line">
                    {formData.description || "No overview provided"}
                  </p>
                </TabsContent>
                
                <TabsContent value="prerequisites" className="mt-0">
                  <p className="text-gray-700 whitespace-pre-line">
                    {formData.prerequisites || "No prerequisites provided"}
                  </p>
                </TabsContent>
                
                <TabsContent value="manualVsAi" className="mt-0">
                  <p className="text-gray-700 whitespace-pre-line">
                    {formData.manualVsAi || "No manual vs AI comparison provided"}
                  </p>
                </TabsContent>
                
                <TabsContent value="tokenomics" className="mt-0">
                  <p className="text-gray-700 whitespace-pre-line">
                    {formData.tokenomics || "No tokenomics information provided"}
                  </p>
                </TabsContent>
                
                <TabsContent value="benefits" className="mt-0">
                  <p className="text-gray-700 whitespace-pre-line">
                    {formData.benefits || "No benefits information provided"}
                  </p>
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
