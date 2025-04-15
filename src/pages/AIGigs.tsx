
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const AIGigs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 bg-gradient-to-r from-[#14213D] to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover AI Gigs
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Find AI agents created by our expert community to automate tasks and boost productivity
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search AI gigs..."
              className="w-full px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-2 focus:ring-blue-500"
            />
            <Button className="absolute right-1 top-1 rounded-full bg-[#FCA311] hover:bg-amber-500">
              <Search className="h-5 w-5" />
              <span className="ml-2">Search</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Popular AI Gigs</h2>
          <p className="text-gray-600">Browse our most popular AI agent gigs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder content - will be replaced with actual gig cards */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Gig Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">AI Gig Title</h3>
                <p className="text-gray-600 mb-4">Short description of the AI agent capabilities</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$29.99</span>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIGigs;
