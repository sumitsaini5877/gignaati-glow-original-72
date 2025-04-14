
import { Search } from 'lucide-react';

const GetStarted = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between gap-10">
          {/* Left content */}
          <div className="mb-10 md:mb-0 md:w-1/2">
            <p className="text-gignaati-coral uppercase font-semibold tracking-wider mb-2">GET STARTED</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Marketplace for Verified AI Gigs</h2>
            
            <p className="text-gray-600 mb-8">
              Welcome to Gignaati, where top AI innovators showcase AI Gigs such as AI Agents, Trained 
              LLMs, and offer ready-to-deploy or custom AI solutions. You can browse gigs & customize 
              with integrations that fits your business needs.
            </p>
            
            <div className="mb-8">
              <div className="flex max-w-md">
                <input 
                  type="text" 
                  placeholder="What are you looking for" 
                  className="search-input"
                />
                <button className="search-button">
                  <Search size={20} />
                  <span className="ml-2">Search</span>
                </button>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">Trending AI Gigs:</p>
              <div className="flex flex-wrap gap-2">
                <span className="gig-tag">AI Recruiter</span>
                <span className="gig-tag">AI Assistant</span>
                <span className="gig-tag">AI Ad Writer</span>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-full h-full bg-gradient-coral rounded-3xl -rotate-6 opacity-30"></div>
              <img 
                src="/placeholder.svg" 
                alt="AI Agent" 
                className="w-full h-auto rounded-2xl shadow-lg z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
