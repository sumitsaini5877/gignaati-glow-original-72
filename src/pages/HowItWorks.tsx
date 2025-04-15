
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, CreditCard } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 bg-gradient-to-r from-[#14213D] to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Gignaati Works
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your simple guide to finding, testing and deploying AI agents
          </p>
        </div>
      </div>
      
      <div className="flex-grow container mx-auto px-6 py-12">
        {/* For Clients */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">For Clients</h2>
            <p className="text-gray-600">How to find and use AI agents on Gignaati</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">1. Browse & Test</h3>
              <p className="text-gray-600">Explore our marketplace of AI agents and test their capabilities before you buy</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">2. Select & Purchase</h3>
              <p className="text-gray-600">Choose the right agent for your needs and complete your purchase securely</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">3. Deploy & Use</h3>
              <p className="text-gray-600">Easily deploy your new AI agent to your workflows and start saving time</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-[#FCA311] hover:bg-amber-500 text-white px-8 py-2">
              Browse AI Agents
            </Button>
          </div>
        </div>
        
        {/* For Freelancers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">For AI Creators</h2>
            <p className="text-gray-600">How to sell your AI agents on Gignaati</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-amber-600">1</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Create Your Gig</h3>
              <p className="text-gray-600">Build an AI agent and create a compelling gig listing with demonstration</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-amber-600">2</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Set Your Pricing</h3>
              <p className="text-gray-600">Define your service packages and set competitive pricing tiers</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-amber-600">3</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Get Paid</h3>
              <p className="text-gray-600">Receive secure payments when clients purchase your AI agent services</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-[#14213D] hover:bg-blue-900 text-white px-8 py-2">
              Create a Gig
            </Button>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">How do I know if an AI agent is right for me?</h3>
              <p className="text-gray-600">All agents on Gignaati offer a demo functionality so you can test their capabilities before purchasing. Additionally, detailed descriptions and user reviews help guide your decision.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">What kind of support will I receive?</h3>
              <p className="text-gray-600">Each gig includes specific support terms. Most creators offer deployment assistance and a certain period of ongoing support for your purchased agent.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">How do I get paid as a creator?</h3>
              <p className="text-gray-600">Creators receive payment 7 days after service delivery, minus our platform fee. Payments are processed securely to your connected bank account or digital wallet.</p>
            </div>
          </div>
        </div>
      </div>
      
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HowItWorks;
