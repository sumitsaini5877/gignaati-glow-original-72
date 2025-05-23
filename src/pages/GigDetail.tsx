
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageSelector from "@/components/gig-detail/PackageSelector";
import FreelancerInfo from "@/components/gig-detail/FreelancerInfo";
import DemoPreview from "@/components/gig-detail/DemoPreview";
import GigDescription from "@/components/gig-detail/GigDescription";
import ReviewsSection from "@/components/gig-detail/ReviewsSection";
import { useEffect, useState } from "react";

const GigDetail = () => {
  const { id } = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check if user is authenticated on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  // Mock data - replace with actual API call later
  const gig = {
    id,
    title: "Advanced GPT Assistant for Content Creation",
    description: "Get a professionally trained GPT model that produces high-quality content for your blog, social media, or website. Customized for your brand voice and content needs.",
    prerequisites: "Basic understanding of content strategy. No technical skills required. Just provide examples of your brand's content and voice.",
    agentDetail: "This AI agent is trained on over 10,000 high-quality content pieces and can adapt to your specific brand voice. It excels at creating blog posts, social media content, and marketing materials.",
    tokenomics: "Simple, transparent pricing with no hidden fees. Pay only for what you use, with bulk discounts available for larger content needs.",
    manualVsAi: "Traditional content creation requires hiring writers, extensive editing, and days of turnaround time. Our AI solution delivers comparable quality in minutes at a fraction of the cost.",
    benefits: "Increase your content production by 5x while maintaining quality. Free up your creative team for strategic work while the AI handles the routine content creation.",
    demoImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=80"
    ],
    demoVideo: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    tags: ["GPT", "Content Creation", "AI Assistant", "Marketing", "SEO", "Automation"],
    freelancer: {
      name: "Alex Johnson",
      rating: 4.9,
      xpLevel: "Expert",
      reviews: 143,
      avatar: "/placeholder.svg"
    },
    packages: {
      setup: {
        name: "Setup",
        price: 199,
        description: "Initial setup of your AI assistant with basic configuration and 1 week of support",
        deliveryTime: "3 days",
        revisions: 1
      },
      training: {
        name: "Training",
        price: 349,
        description: "Enhanced AI model with training on your specific content, customized for your brand, and 2 weeks of support",
        deliveryTime: "5 days",
        revisions: 3
      },
      customization: {
        name: "Customization",
        price: 599,
        description: "Fully customized enterprise AI solution with advanced integration options, fine-tuned algorithms, and 1 month of support",
        deliveryTime: "7 days",
        revisions: "Unlimited"
      }
    },
    reviews: [
      {
        user: "Sarah M.",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "2023-11-15",
        text: "Exceptional work! The GPT model Alex created for me perfectly captured my brand voice and has saved me countless hours of content creation.",
        replies: []
      },
      {
        user: "Michael T.",
        avatar: "/placeholder.svg",
        rating: 4,
        date: "2023-10-22",
        text: "Great experience overall. The AI assistant works really well for most of my content needs, though it needed some fine-tuning for technical topics.",
        replies: [
          {
            user: "Alex Johnson",
            avatar: "/placeholder.svg",
            text: "Thanks for the feedback, Michael! I've made some adjustments to improve handling of technical topics.",
            date: "2023-10-23"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{gig.title}</h1>
            
            {/* Demo Preview Section with Images and Video */}
            <DemoPreview images={gig.demoImages} video={gig.demoVideo} />
            
            {/* Description */}
            <GigDescription 
              description={gig.description} 
              prerequisites={gig.prerequisites}
              agentDetail={gig.agentDetail}
              tokenomics={gig.tokenomics}
              manualVsAi={gig.manualVsAi}
            />
            
            {/* Reviews Section */}
            <ReviewsSection 
              rating={gig.freelancer.rating} 
              reviewCount={gig.freelancer.reviews} 
              reviews={gig.reviews} 
              gigId={id || ""}
              isAuthenticated={isAuthenticated}
              tags={gig.tags}
            />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-6">
              {/* Both packages and freelancer info will be in a sticky container */}
              <div className="sticky top-24">
                <PackageSelector 
                  packages={gig.packages} 
                  defaultPackage="training" 
                  gigId={gig.id}
                />
                <FreelancerInfo 
                  freelancer={gig.freelancer}
                  gigId={gig.id}
                  tags={gig.tags}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GigDetail;
