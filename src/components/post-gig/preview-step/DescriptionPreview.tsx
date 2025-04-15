
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  GitCompare, 
  Coins, 
  Award 
} from "lucide-react";
import {
  OverviewTabContent,
  PrerequisitesTabContent,
  ManualVsAiTabContent,
  TokenomicsTabContent,
  BenefitsTabContent
} from "./description-tabs";

interface FormData {
  description: string;
  prerequisites: string;
  manualVsAi: string;
  tokenomics: string;
  benefits: string;
}

interface DescriptionPreviewProps {
  formData: FormData;
}

const DescriptionPreview = ({ formData }: DescriptionPreviewProps) => (
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
            <OverviewTabContent description={formData.description} />
          </TabsContent>
          
          <TabsContent value="prerequisites" className="mt-0">
            <PrerequisitesTabContent prerequisites={formData.prerequisites} />
          </TabsContent>
          
          <TabsContent value="manualVsAi" className="mt-0">
            <ManualVsAiTabContent manualVsAi={formData.manualVsAi} />
          </TabsContent>
          
          <TabsContent value="tokenomics" className="mt-0">
            <TokenomicsTabContent tokenomics={formData.tokenomics} />
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-0">
            <BenefitsTabContent benefits={formData.benefits} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  </div>
);

export default DescriptionPreview;
