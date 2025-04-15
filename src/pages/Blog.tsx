
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, User } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 bg-gradient-to-r from-[#14213D] to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gignaati Blog
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Insights, tutorials, and news about AI and the freelance economy
          </p>
        </div>
      </div>
      
      <div className="flex-grow container mx-auto px-6 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gray-200">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-gray-500">Featured Post Image</span>
                </div>
              </div>
              <div className="p-8">
                <CardHeader className="p-0 pb-4">
                  <Badge className="mb-2 bg-blue-600">Featured</Badge>
                  <h2 className="text-2xl font-bold mb-2">The Future of Work: How AI is Transforming Freelancing</h2>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" /> 
                      <span>Sophia Chen</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> 
                      <span>April 10, 2025</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 py-4">
                  <p className="text-gray-600">
                    The landscape of freelance work is rapidly evolving with the integration of artificial intelligence. 
                    From automating repetitive tasks to creating entirely new service categories...
                  </p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button>Read Article</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Blog Categories */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-8">
          <Button variant="outline" className="whitespace-nowrap">All Posts</Button>
          <Button variant="outline" className="whitespace-nowrap">AI Trends</Button>
          <Button variant="outline" className="whitespace-nowrap">Tutorials</Button>
          <Button variant="outline" className="whitespace-nowrap">Freelancer Tips</Button>
          <Button variant="outline" className="whitespace-nowrap">Case Studies</Button>
          <Button variant="outline" className="whitespace-nowrap">Company News</Button>
        </div>
        
        {/* Recent Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Post Image</span>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="bg-gray-100">
                      <Tag className="h-3 w-3 mr-1" />
                      AI Trends
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl">How to Build an AI Agent in 10 Minutes</h3>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <span>April {8 + i}, 2025</span>
                    <span>5 min read</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">
                    Learn how to quickly build and deploy an AI agent using our platform. 
                    This step-by-step tutorial will guide you through the process...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="bg-gray-100 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">Get the latest AI trends and freelancing tips delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow rounded-md border border-input px-4 py-2"
            />
            <Button className="bg-[#FCA311] hover:bg-amber-500">Subscribe</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
