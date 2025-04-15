
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import TagCloud from "./TagCloud";

interface FreelancerInfoProps {
  freelancer: {
    name: string;
    rating: number;
    xpLevel: string;
    reviews: number;
    avatar: string;
  };
  gigId: string | number;
  tags?: string[]; // Add tags prop
}

const FreelancerInfo = ({ freelancer, gigId, tags = [] }: FreelancerInfoProps) => {
  const navigate = useNavigate();
  
  // Get user authentication status (in a real app, this would check your auth state)
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleChatWithFreelancer = () => {
    if (isAuthenticated) {
      // User is authenticated, proceed to messaging
      navigate(`/messaging?freelancer=${freelancer.name}`);
    } else {
      // User is not authenticated, redirect to auth with return URL
      const returnUrl = `/messaging?freelancer=${freelancer.name}`;
      localStorage.setItem("authRedirectUrl", returnUrl);
      navigate(`/auth?returnUrl=${encodeURIComponent(returnUrl)}`);
    }
  };

  const handleRequestCustomAgent = () => {
    if (isAuthenticated) {
      // User is authenticated, proceed to custom agent request
      toast({
        title: "Custom Agent Request",
        description: "Your custom agent request has been initiated."
      });
      navigate(`/custom-agent-request/${gigId}`);
    } else {
      // User is not authenticated, redirect to auth with return URL
      const returnUrl = `/custom-agent-request/${gigId}`;
      localStorage.setItem("authRedirectUrl", returnUrl);
      navigate(`/auth?returnUrl=${encodeURIComponent(returnUrl)}`);
    }
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>About the freelancer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={freelancer.avatar} 
              alt={freelancer.name} 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <div className="font-bold text-lg">{freelancer.name}</div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {freelancer.xpLevel}
                </span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{freelancer.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full" onClick={handleChatWithFreelancer}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat with Freelancer
            </Button>
            <Button variant="outline" className="w-full" onClick={handleRequestCustomAgent}>
              <UserCircle className="mr-2 h-4 w-4" />
              Request Custom Agent
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Add Tag Cloud Component */}
      {tags && tags.length > 0 && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <TagCloud tags={tags} />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FreelancerInfo;
