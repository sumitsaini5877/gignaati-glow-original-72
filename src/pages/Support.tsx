
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle, 
  HelpCircle, 
  MessagesSquare, 
  Bot
} from "lucide-react";
import SupportChatInterface from "@/components/support/SupportChatInterface";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  const [ticketType, setTicketType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Ticket Submitted",
        description: "We've received your support request and will respond shortly.",
      });
      
      setTicketType("");
      setUrgency("");
      setDescription("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "There was an error submitting your ticket. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Support Center</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get help with your Gignaati experience. Browse our FAQ, chat with our AI assistant, or submit a support ticket.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I book an AI agent?</AccordionTrigger>
                    <AccordionContent>
                      You can book an AI agent by browsing our marketplace and selecting the agent that fits your needs. Click on the agent to view details, then click "Book Now" to proceed with the booking process.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards, PayPal, and crypto payments. Your payment information is securely processed through our payment providers and is never stored on our servers.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do refunds work?</AccordionTrigger>
                    <AccordionContent>
                      If you're not satisfied with the service provided, you can request a refund within 7 days of purchase. Refund requests are reviewed on a case-by-case basis. To request a refund, please submit a support ticket with details about your purchase and why you're requesting a refund.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I post a gig as a freelancer?</AccordionTrigger>
                    <AccordionContent>
                      To post a gig, first create a freelancer account and complete your profile. Then, click on "Post a Gig" from your dashboard. Fill out the required information including title, description, pricing, and delivery time. Once submitted, our team will review your gig before it goes live.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What are the commission fees?</AccordionTrigger>
                    <AccordionContent>
                      Gignaati charges a 15% commission fee on all completed transactions. This fee helps us maintain the platform, provide customer support, and develop new features to improve your experience.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger>How are payments protected?</AccordionTrigger>
                    <AccordionContent>
                      All payments on Gignaati are secured through our escrow system. When you book a gig, your payment is held securely until you confirm that the work has been completed to your satisfaction. This ensures that both buyers and sellers are protected.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              {/* AI Support Chat */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Bot className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 className="text-xl font-semibold">AI Support Assistant</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Get instant answers from our AI support assistant. Our AI can help with common questions and guide you through basic troubleshooting.
                </p>
                <SupportChatInterface />
              </div>
            </div>
            
            {/* Submit Ticket Form */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">
              <div className="flex items-center mb-4">
                <MessagesSquare className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">Submit a Support Ticket</h2>
              </div>
              
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div>
                  <Label htmlFor="ticket-type">Ticket Category</Label>
                  <Select 
                    value={ticketType} 
                    onValueChange={setTicketType}
                    required
                  >
                    <SelectTrigger id="ticket-type">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="technical">Technical Problems</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select 
                    value={urgency} 
                    onValueChange={setUrgency}
                    required
                  >
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General Question</SelectItem>
                      <SelectItem value="medium">Medium - Needs Attention</SelectItem>
                      <SelectItem value="high">High - Urgent Issue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe your issue in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="attachment">Attachment (optional)</Label>
                  <Input 
                    id="attachment" 
                    type="file" 
                  />
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded p-3 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    Our team typically responds within 24 hours for standard tickets and 4 hours for urgent issues.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Ticket"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
