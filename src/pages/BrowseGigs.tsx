
import { useState } from "react";
import Navbar from "@/components/Navbar";
import GigFilters from "@/components/GigFilters";
import GigGrid from "@/components/GigGrid";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const BrowseGigs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 mt-16">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
          <div className="relative w-full md:w-3/4">
            <Input
              type="text"
              placeholder="Search for AI gigs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <select 
              className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="topRated">Top Rated</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
            
            <Button 
              variant="outline" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters for Desktop */}
          <div className={`hidden md:block w-full md:w-1/4 lg:w-1/5 bg-white p-6 rounded-lg shadow-sm sticky top-24 h-fit transition-all duration-300 ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <GigFilters />
          </div>
          
          {/* Mobile Filters */}
          {isFilterOpen && (
            <div className="md:hidden w-full bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Filters</h3>
                <Button variant="ghost" onClick={() => setIsFilterOpen(false)}>✕</Button>
              </div>
              <GigFilters />
            </div>
          )}
          
          {/* Main Content */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <GigGrid />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BrowseGigs;
