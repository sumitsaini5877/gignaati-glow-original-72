
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  BookOpen, 
  User, 
  Coins, 
  GitCompare
} from "lucide-react";
import {
  OverviewTab,
  PrerequisitesTab,
  ManualVsAiTab,
  TokenomicsTab
} from "./description-tabs";

interface GigDescriptionProps {
  description: string;
  prerequisites?: string;
  agentDetail?: string;
  manualVsAi?: string;
  tokenomics?: string;
}

const GigDescription = ({ 
  description, 
  prerequisites = "Familiarity with prompting, basic understanding of GPT models, and willingness to learn.",
  agentDetail = "The AI agent is trained on your specific content and can produce high-quality tailored content for your needs.",
  manualVsAi = "Manual content creation takes 3-5 hours per piece, while our AI solution delivers comparable quality in minutes. Traditional methods involve hiring writers, extensive editing, and long turnaround times.",
  tokenomics = "Pay-per-use pricing structure with volume discounts. No hidden fees or subscriptions required."
}: GigDescriptionProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6 w-full">
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
          </TabsList>
          
          <TabsContent value="overview">
            <OverviewTab description={description} />
          </TabsContent>
          
          <TabsContent value="prerequisites">
            <PrerequisitesTab prerequisites={prerequisites} />
          </TabsContent>
          
          <TabsContent value="manualVsAi">
            <ManualVsAiTab manualVsAi={manualVsAi} />
          </TabsContent>
          
          <TabsContent value="tokenomics">
            <TokenomicsTab tokenomics={tokenomics} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GigDescription;
