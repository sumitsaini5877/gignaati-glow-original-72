
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { FilterState } from './GigFilters';

// Define the gig data structure
export type Gig = {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  freelancer: string;
  xp: string;
  image: string;
  categories?: string[];
  functions?: string[];
  platforms?: string[];
  industries?: string[];
};

interface GigGridProps {
  searchQuery: string;
  sortBy: string;
  filters: FilterState;
}

const GigGrid = ({ searchQuery, sortBy, filters }: GigGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gigsPerPage = 9;
  
  // Mock data for gigs with added category, function, etc. properties for filtering
  const allGigs: Gig[] = [
    {
      id: "1",
      title: "AI Content Writer & Blogger",
      price: 199,
      rating: 4.9,
      reviews: 124,
      freelancer: "James Wilson",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      categories: ["content"],
      functions: ["generator", "assistant"],
      platforms: ["openai", "anthropic"],
      industries: ["marketing", "education"]
    },
    {
      id: "2",
      title: "Chatbot Development & Integration",
      price: 349,
      rating: 4.8,
      reviews: 87,
      freelancer: "Sophia Chen",
      xp: "Advanced",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      categories: ["development", "automation"],
      functions: ["assistant"],
      platforms: ["langchain", "openai"],
      industries: ["sales", "marketing"]
    },
    {
      id: "3",
      title: "AI Research Assistant",
      price: 249,
      rating: 4.7,
      reviews: 56,
      freelancer: "Alex Johnson",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      categories: ["research"],
      functions: ["analyzer", "assistant"],
      platforms: ["anthropic"],
      industries: ["healthcare", "education"]
    },
    {
      id: "4",
      title: "Custom GPT Model Training",
      price: 499,
      rating: 5.0,
      reviews: 42,
      freelancer: "Elena Rivera",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      categories: ["development"],
      functions: ["customization"],
      platforms: ["openai"],
      industries: ["finance", "healthcare"]
    },
    {
      id: "5",
      title: "AI Email Marketing Assistant",
      price: 179,
      rating: 4.6,
      reviews: 31,
      freelancer: "Michael Brown",
      xp: "Intermediate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      categories: ["content", "automation"],
      functions: ["generator", "assistant"],
      platforms: ["openai"],
      industries: ["marketing", "sales"]
    },
    {
      id: "6",
      title: "Social Media Content Generator",
      price: 229,
      rating: 4.8,
      reviews: 67,
      freelancer: "David Kim",
      xp: "Advanced",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      categories: ["content"],
      functions: ["generator"],
      platforms: ["anthropic", "openai"],
      industries: ["marketing"]
    },
    {
      id: "7",
      title: "Custom Language Model Training",
      price: 599,
      rating: 4.9,
      reviews: 28,
      freelancer: "Sarah Johnson",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      categories: ["development"],
      functions: ["customization"],
      platforms: ["huggingface", "anthropic"],
      industries: ["finance", "hr"]
    },
    {
      id: "8",
      title: "AI Data Analysis & Visualization",
      price: 329,
      rating: 4.7,
      reviews: 45,
      freelancer: "Jason Park",
      xp: "Advanced",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      categories: ["data"],
      functions: ["analyzer"],
      platforms: ["openai", "vertexai"],
      industries: ["finance", "healthcare"]
    },
    {
      id: "9",
      title: "Sentiment Analysis Agent",
      price: 269,
      rating: 4.6,
      reviews: 39,
      freelancer: "Emma Wilson",
      xp: "Intermediate",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      categories: ["data", "research"],
      functions: ["analyzer"],
      platforms: ["openai", "huggingface"],
      industries: ["marketing", "sales"]
    },
    {
      id: "10",
      title: "AI Sales Assistant",
      price: 289,
      rating: 4.3,
      reviews: 24,
      freelancer: "Robert Taylor",
      xp: "Intermediate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      categories: ["automation"],
      functions: ["assistant"],
      platforms: ["openai"],
      industries: ["sales"]
    },
    {
      id: "11",
      title: "HR Automation Bot",
      price: 349,
      rating: 4.5,
      reviews: 19,
      freelancer: "Amanda Chen",
      xp: "Advanced",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      categories: ["automation"],
      functions: ["assistant"],
      platforms: ["anthropic"],
      industries: ["hr"]
    },
    {
      id: "12",
      title: "Prompt Engineering Specialist",
      price: 399,
      rating: 4.9,
      reviews: 51,
      freelancer: "Daniel Lee",
      xp: "Expert",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      categories: ["prompt"],
      functions: ["customization"],
      platforms: ["openai", "anthropic", "vertexai"],
      industries: ["marketing", "education", "healthcare"]
    }
  ];

  // Filter gigs based on search query and selected filters
  const filteredGigs = allGigs.filter(gig => {
    // Filter by search query
    const matchesSearch = gig.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         gig.freelancer.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    
    // Filter by price range
    if (gig.price < filters.priceRange[0] || gig.price > filters.priceRange[1]) return false;
    
    // Filter by categories (if any selected)
    if (filters.categories.length > 0 && 
        !gig.categories?.some(cat => filters.categories.includes(cat))) return false;
    
    // Filter by functions (if any selected)
    if (filters.functions.length > 0 && 
        !gig.functions?.some(func => filters.functions.includes(func))) return false;
    
    // Filter by platforms (if any selected)
    if (filters.platforms.length > 0 && 
        !gig.platforms?.some(platform => filters.platforms.includes(platform))) return false;
    
    // Filter by industries (if any selected)
    if (filters.industries.length > 0 && 
        !gig.industries?.some(industry => filters.industries.includes(industry))) return false;
    
    // Filter by rating (if any selected)
    if (filters.ratings.length > 0) {
      const minRating = Math.min(...filters.ratings.map(r => parseInt(r)));
      if (gig.rating < minRating) return false;
    }
    
    return true;
  });
  
  // Sort the filtered gigs
  const sortedGigs = [...filteredGigs].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return parseInt(b.id) - parseInt(a.id); // Using ID as a proxy for date
      case 'topRated':
        return b.rating - a.rating;
      case 'priceLow':
        return a.price - b.price;
      case 'priceHigh':
        return b.price - a.price;
      case 'popular':
      default:
        return b.reviews - a.reviews; // Sort by most reviews
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedGigs.length / gigsPerPage);
  const indexOfLastGig = currentPage * gigsPerPage;
  const indexOfFirstGig = indexOfLastGig - gigsPerPage;
  const currentGigs = sortedGigs.slice(indexOfFirstGig, indexOfLastGig);

  return (
    <div>
      {sortedGigs.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No gigs found</h3>
          <p className="text-gray-500">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentGigs.map((gig) => (
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
          
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index + 1}>
                      <PaginationLink 
                        href="#" 
                        isActive={currentPage === index + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(index + 1);
                        }}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GigGrid;
