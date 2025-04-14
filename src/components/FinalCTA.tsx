
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl shadow-xl py-16 px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of companies leveraging AI agents from Gignaati to automate, innovate, and scale their operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
              <Link to="/browse-gigs">
                Browse AI Gigs
              </Link>
            </Button>
            <Button asChild className="bg-gignaati-coral hover:bg-red-500 text-white text-lg px-8 py-6 rounded-full">
              <Link to="/post-gig">
                Post a Gig
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
