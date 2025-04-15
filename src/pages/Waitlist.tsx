
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Check } from "lucide-react";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [useCase, setUseCase] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Implement actual waitlist signup API
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#14213D] to-[#1e3a6a] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">You're on the list!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Gignaati. We'll notify you when we're ready to welcome you onboard.
          </p>
          <Link to="/">
            <Button className="w-full bg-[#14213D] hover:bg-[#0d1529]">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#14213D] to-[#1e3a6a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Join Our Waitlist</h2>
            <p className="mt-2 text-gray-600">
              Be among the first to access Gignaati's AI Agents Marketplace
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Why are you interested in Gignaati?</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tell us why you're interested in our AI Agents marketplace"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="useCase">How do you plan to use our platform?</Label>
              <Textarea
                id="useCase"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="Describe your potential use cases"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-500 cursor-pointer"
              >
                I agree to receive updates about Gignaati
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gignaati-coral hover:bg-red-500 flex items-center justify-center gap-2"
              disabled={loading || !acceptTerms}
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <Mail size={16} />
                  Join Waitlist
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already verified?{" "}
              <Link 
                to="/auth" 
                className="text-blue-600 hover:underline font-medium"
              >
                Click here
              </Link>
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 text-xs text-center text-gray-500">
          By joining our waitlist, you agree to our{" "}
          <Link to="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
