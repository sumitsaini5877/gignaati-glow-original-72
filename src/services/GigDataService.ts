
import { FilterState } from "@/components/GigFilters";

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

// Mock data for gigs
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

export const getFilteredAndSortedGigs = (
  searchQuery: string, 
  sortBy: string, 
  filters: FilterState
): Gig[] => {
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
  return [...filteredGigs].sort((a, b) => {
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
};
