
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedGigs = () => {
  // Mock data for featured gigs
  const featuredGigs = [
    {
      id: "1",
      title: "AI Content Writer & Blogger",
      price: 199,
      rating: 4.9,
      reviews: 124,
      freelancer: "James Wilson",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: "2",
      title: "Chatbot Development & Integration",
      price: 349,
      rating: 4.8,
      reviews: 87,
      freelancer: "Sophia Chen",
      xp: "Advanced",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: "3",
      title: "AI Research Assistant",
      price: 249,
      rating: 4.7,
      reviews: 56,
      freelancer: "Alex Johnson",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: "4",
      title: "Custom GPT Model Training",
      price: 499,
      rating: 5.0,
      reviews: 42,
      freelancer: "Elena Rivera",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "5",
      title: "AI Email Marketing Assistant",
      price: 179,
      rating: 4.6,
      reviews: 31,
      freelancer: "Michael Brown",
      xp: "Intermediate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "6",
      title: "Social Media Content Generator",
      price: 229,
      rating: 4.8,
      reviews: 67,
      freelancer: "David Kim",
      xp: "Advanced",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured AI Gigs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover top-rated AI agents and services from our verified freelancers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGigs.map((gig) => (
            <Card key={gig.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={gig.image} 
                  alt={gig.title} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  size="sm" 
                  className="absolute top-3 right-3 bg-white text-black hover:bg-gray-100"
                >
                  <Play className="h-4 w-4 mr-1 text-gignaati-coral" />
                  Demo
                </Button>
              </div>
              
              <CardContent className="p-5">
                <Link to={`/gig/${gig.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-gignaati-coral transition-colors">
                    {gig.title}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-3 text-sm">
                  <span className="bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded-full mr-2">
                    {gig.xp}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{gig.rating}</span>
                    <span className="text-gray-500 ml-1">({gig.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <img 
                    src="/placeholder.svg" 
                    alt={gig.freelancer} 
                    className="w-6 h-6 rounded-full mr-2" 
                  />
                  <span>{gig.freelancer}</span>
                </div>
              </CardContent>
              
              <CardFooter className="px-5 py-3 border-t flex justify-between items-center">
                <div className="font-bold text-lg">${gig.price}</div>
                <Button asChild className="bg-gignaati-coral hover:bg-red-500 text-white">
                  <Link to={`/gig/${gig.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-black hover:bg-gray-800 text-white px-6">
            <Link to="/browse-gigs">
              View All Gigs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGigs;
