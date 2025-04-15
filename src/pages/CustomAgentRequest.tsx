
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomAgentRequest = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16 flex-1">
        <h1 className="text-3xl font-bold mb-6">Request Custom Agent</h1>
        <Card>
          <CardHeader>
            <CardTitle>Custom Agent Request for Gig #{id}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">This is a placeholder for the custom agent request form.</p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default CustomAgentRequest;
