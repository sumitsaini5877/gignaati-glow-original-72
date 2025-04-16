
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AuthGuard from "@/components/auth/AuthGuard";
import { Search, Heart, Clock, Filter, Star } from "lucide-react";

const categories = [
  "AI Chatbots",
  "Machine Learning",
  "Language Models",
  "Computer Vision",
  "AI Content Creation",
  "Voice Assistants"
];

const recommendedGigs = [
  {
    id: 1,
    title: "Custom AI Chatbot Development",
    rating: 4.9,
    reviews: 124,
    price: 120,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "ML Model Training & Deployment",
    rating: 4.7,
    reviews: 86,
    price: 150,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "GPT Integration for Your Website",
    rating: 4.8,
    reviews: 93,
    price: 80,
    image: "/placeholder.svg"
  }
];

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Buyer";
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    // Verify user role
    if (userRole !== "Buyer") {
      localStorage.setItem("userRole", "Buyer");
    }
  }, [userRole]);

  const handleBrowseGigs = () => {
    navigate("/browse-gigs");
  };

  const handleViewGig = (id: number) => {
    navigate(`/gig/${id}`);
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 mt-16 mb-16 flex-grow">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome, {userName}!</h1>
                <p className="text-gray-600 mb-4">Find the perfect AI solutions for your needs</p>
              </div>
              
              <Button onClick={handleBrowseGigs} className="bg-gignaati-coral hover:bg-red-500 flex items-center gap-2">
                <Search size={16} />
                Browse All Gigs
              </Button>
            </div>
          </div>
          
          {/* Search and Categories */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="What AI service are you looking for today?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gignaati-coral hover:bg-red-500">
                  Search
                </Button>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Button key={index} variant="outline" size="sm" className="text-sm">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recommended Gigs */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Recommended for You</h2>
              <Button variant="ghost" className="text-blue-600" onClick={handleBrowseGigs}>
                See all
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedGigs.map((gig) => (
                <Card key={gig.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleViewGig(gig.id)}>
                  <div className="aspect-video relative">
                    <img src={gig.image} alt={gig.title} className="h-full w-full object-cover" />
                    <Button variant="ghost" className="absolute top-2 right-2 bg-white/80 rounded-full h-8 w-8 p-1.5">
                      <Heart size={18} className="text-gray-600" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{gig.title}</h3>
                    <div className="flex items-center text-sm mb-2">
                      <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                      <span className="font-medium">{gig.rating}</span>
                      <span className="text-gray-500 ml-1">({gig.reviews} reviews)</span>
                    </div>
                    <div className="font-semibold">Starting at ${gig.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Recently Viewed and Saved */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  Recently Viewed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-6">
                  You haven't viewed any gigs yet. Start exploring!
                </p>
                <Button variant="outline" className="w-full" onClick={handleBrowseGigs}>
                  Browse Gigs
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart size={18} className="mr-2" />
                  Saved Gigs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-6">
                  No saved gigs yet. Click the heart icon to save gigs you like.
                </p>
                <Button variant="outline" className="w-full" onClick={handleBrowseGigs}>
                  Find Gigs to Save
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* AI Gigs Showcase */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100">
              <CardTitle>Discover Our AI Gigs Collection</CardTitle>
              <CardDescription>
                Specialized AI services created by experts in the field
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-lg mb-3">Cutting-edge AI Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Explore our curated collection of AI services, from chatbots and GPT integrations to 
                    custom machine learning models and computer vision solutions.
                  </p>
                  <Button className="bg-gignaati-coral hover:bg-red-500" onClick={() => navigate("/ai-gigs")}>
                    Explore AI Gigs
                  </Button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img src="/placeholder.svg" alt="AI Gigs" className="max-h-48" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default BuyerDashboard;
