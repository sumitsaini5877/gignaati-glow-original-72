
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
  types?: string[];
  llmModels?: string[];
  hostingProviders?: string[];
  industries?: string[];
  integrations?: string[];
  businessFunctions?: string[];
  professions?: string[];
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
    types: ["paid"],
    llmModels: ["gpt4", "claude3"],
    hostingProviders: ["aws"],
    industries: ["marketing", "education"],
    integrations: ["google", "notion"],
    businessFunctions: ["marketing"],
    professions: ["writer", "marketer"]
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
    types: ["paid"],
    llmModels: ["gpt4", "mistral"],
    hostingProviders: ["vercel", "aws"],
    industries: ["sales", "technology"],
    integrations: ["slack", "microsoft"],
    businessFunctions: ["sales", "customerservice"],
    professions: ["developer"]
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
    types: ["freemium"],
    llmModels: ["claude3", "llama3"],
    hostingProviders: ["azure"],
    industries: ["healthcare", "education"],
    integrations: ["google"],
    businessFunctions: ["research"],
    professions: ["researcher"]
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
    types: ["paid"],
    llmModels: ["gpt4", "gpt3"],
    hostingProviders: ["aws", "azure"],
    industries: ["finance", "healthcare"],
    integrations: ["github"],
    businessFunctions: ["development"],
    professions: ["datascientist", "developer"]
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
    types: ["paid"],
    llmModels: ["gpt4"],
    hostingProviders: ["aws"],
    industries: ["marketing", "sales"],
    integrations: ["salesforce", "google"],
    businessFunctions: ["marketing", "sales"],
    professions: ["marketer"]
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
    types: ["freemium"],
    llmModels: ["claude3", "gpt4"],
    hostingProviders: ["vercel"],
    industries: ["marketing", "media"],
    integrations: ["figma", "adobe"],
    businessFunctions: ["marketing"],
    professions: ["marketer", "designer"]
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
    types: ["paid"],
    llmModels: ["llama3", "falcon"],
    hostingProviders: ["aws", "googlecloud"],
    industries: ["finance", "technology"],
    integrations: ["github"],
    businessFunctions: ["development"],
    professions: ["datascientist", "developer"]
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
    types: ["paid"],
    llmModels: ["gpt4", "cohere"],
    hostingProviders: ["aws", "azure"],
    industries: ["finance", "healthcare"],
    integrations: ["tableau", "google"],
    businessFunctions: ["finance", "strategy"],
    professions: ["datascientist", "analyst"]
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
    types: ["paid"],
    llmModels: ["gpt4", "cohere"],
    hostingProviders: ["aws"],
    industries: ["marketing", "sales"],
    integrations: ["salesforce"],
    businessFunctions: ["marketing", "sales"],
    professions: ["marketer", "datascientist"]
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
    types: ["freemium"],
    llmModels: ["gpt4"],
    hostingProviders: ["vercel"],
    industries: ["sales", "retail"],
    integrations: ["salesforce", "slack"],
    businessFunctions: ["sales"],
    professions: ["salesrep"]
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
    types: ["paid"],
    llmModels: ["claude3"],
    hostingProviders: ["azure"],
    industries: ["hr"],
    integrations: ["microsoft"],
    businessFunctions: ["humanresources"],
    professions: ["hr"]
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
    types: ["paid"],
    llmModels: ["gpt4", "claude3", "gemini"],
    hostingProviders: ["aws", "googlecloud"],
    industries: ["marketing", "education", "healthcare"],
    integrations: ["notion", "slack"],
    businessFunctions: ["development", "product"],
    professions: ["writer", "developer"]
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
    
    // Filter by types (if any selected)
    if (filters.types.length > 0 && 
        !gig.types?.some(type => filters.types.includes(type))) return false;
    
    // Filter by LLM models (if any selected)
    if (filters.llmModels.length > 0 && 
        !gig.llmModels?.some(model => filters.llmModels.includes(model))) return false;
    
    // Filter by hosting providers (if any selected)
    if (filters.hostingProviders.length > 0 && 
        !gig.hostingProviders?.some(provider => filters.hostingProviders.includes(provider))) return false;
    
    // Filter by industries (if any selected)
    if (filters.industries.length > 0 && 
        !gig.industries?.some(industry => filters.industries.includes(industry))) return false;
    
    // Filter by integrations (if any selected)
    if (filters.integrations.length > 0 && 
        !gig.integrations?.some(integration => filters.integrations.includes(integration))) return false;
    
    // Filter by business functions (if any selected)
    if (filters.businessFunctions.length > 0 && 
        !gig.businessFunctions?.some(func => filters.businessFunctions.includes(func))) return false;
    
    // Filter by professions (if any selected)
    if (filters.professions.length > 0 && 
        !gig.professions?.some(profession => filters.professions.includes(profession))) return false;
    
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
