
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MessageSquare, UserCircle } from "lucide-react";

const GigDetail = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState("training");

  // Mock data - replace with actual API call later
  const gig = {
    id,
    title: "Advanced GPT Assistant for Content Creation",
    description: "Get a professionally trained GPT model that produces high-quality content for your blog, social media, or website. Customized for your brand voice and content needs.",
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
        text: "Exceptional work! The GPT model Alex created for me perfectly captured my brand voice and has saved me countless hours of content creation."
      },
      {
        user: "Michael T.",
        avatar: "/placeholder.svg",
        rating: 4,
        date: "2023-10-22",
        text: "Great experience overall. The AI assistant works really well for most of my content needs, though it needed some fine-tuning for technical topics."
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
            
            {/* Demo Preview Section */}
            <div className="mb-8 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-100 h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-medium mb-2">Interactive Demo</h3>
                  <p className="text-gray-500 mb-4">See this AI agent in action</p>
                  <Button className="bg-gignaati-coral hover:bg-red-500">Try Demo</Button>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{gig.description}</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What you'll get:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Custom trained GPT model based on your content</li>
                      <li>Integration instructions and documentation</li>
                      <li>Dedicated support during setup</li>
                      <li>Performance optimization recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Use cases:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Content generation for blogs and articles</li>
                      <li>Social media post creation</li>
                      <li>Product descriptions</li>
                      <li>Email marketing copy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(gig.freelancer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium">{gig.freelancer.rating}</span>
                  <span className="text-gray-500">({gig.freelancer.reviews} reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {gig.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <img 
                          src={review.avatar} 
                          alt={review.user} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-medium">{review.user}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing Tiers */}
            <Card className="mb-6 sticky top-24">
              <CardHeader>
                <CardTitle>Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="training" value={selectedPackage} onValueChange={setSelectedPackage}>
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="setup">Setup</TabsTrigger>
                    <TabsTrigger value="training">Training</TabsTrigger>
                    <TabsTrigger value="customization">Customization</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(gig.packages).map(([key, pkg]) => (
                    <TabsContent key={key} value={key} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{pkg.name}</h3>
                        <div className="text-2xl font-bold">${pkg.price}</div>
                      </div>
                      <p className="text-gray-700">{pkg.description}</p>
                      <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery time:</span>
                          <span className="font-medium">{pkg.deliveryTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Revisions:</span>
                          <span className="font-medium">{pkg.revisions}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gignaati-coral hover:bg-red-500 mt-4">Select & Continue</Button>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Freelancer Info */}
            <Card>
              <CardHeader>
                <CardTitle>About the freelancer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={gig.freelancer.avatar} 
                    alt={gig.freelancer.name} 
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-lg">{gig.freelancer.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {gig.freelancer.xpLevel}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{gig.freelancer.rating}</span>
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GigDetail;
