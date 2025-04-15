
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, UserCircle } from "lucide-react";

interface FreelancerInfoProps {
  freelancer: {
    name: string;
    rating: number;
    xpLevel: string;
    reviews: number;
    avatar: string;
  };
}

const FreelancerInfo = ({ freelancer }: FreelancerInfoProps) => {
  return (
    <Card>
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
          <Button variant="outline" className="w-full">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat with Freelancer
          </Button>
          <Button variant="outline" className="w-full">
            <UserCircle className="mr-2 h-4 w-4" />
            Request Custom Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreelancerInfo;
