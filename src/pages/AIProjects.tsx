
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Bot } from "lucide-react";

const AIProjects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 bg-gradient-to-r from-blue-900 to-[#14213D]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Projects Marketplace
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom AI solutions built by expert developers for your specific business needs
          </p>
          
          <Button className="bg-[#FCA311] hover:bg-amber-500 text-white px-8 py-6 rounded-full text-lg">
            Post Your AI Project
          </Button>
        </div>
      </div>
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured AI Projects</h2>
          <p className="text-gray-600">Discover comprehensive AI solutions for businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <Code className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">Custom AI Development</h3>
            <p className="text-gray-600 mb-4">Tailored AI solutions integrated with your existing systems and workflows</p>
            <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800">
              Learn More <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <Database className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">Data Science Projects</h3>
            <p className="text-gray-600 mb-4">Turn your data into actionable insights with custom ML models</p>
            <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800">
              Learn More <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <Bot className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">AI Agent Fleets</h3>
            <p className="text-gray-600 mb-4">Deploy teams of specialized AI agents that work together</p>
            <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800">
              Learn More <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-[#14213D] hover:bg-blue-900 text-white px-8 py-2">
            Browse All Projects
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIProjects;
