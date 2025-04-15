import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleJoinWaitlist = () => {
    // TODO: Implement waitlist signup logic
    navigate('/waitlist');
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold">
            <span className="text-black">gig</span>
            <span className="font-light">naati</span>
          </span>
          <span className="hidden sm:block text-xs text-gignaati-gray mt-auto ml-1">AI AGENTS MARKETPLACE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>

        {/* Join Waitlist Button */}
        <div className="hidden md:flex items-center">
          <Button 
            variant="default" 
            className="bg-gignaati-coral hover:bg-red-500 text-white rounded-md flex items-center gap-2"
            onClick={handleJoinWaitlist}
          >
            <Mail size={16} />
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full px-6 py-4 shadow-md z-50">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile />
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button 
                variant="default" 
                className="bg-gignaati-coral hover:bg-red-500 text-white w-full flex items-center gap-2"
                onClick={handleJoinWaitlist}
              >
                <Mail size={16} />
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'AI Gigs', path: '/browse-gigs' }, // Changed from '/ai-gigs' to '/browse-gigs'
    { name: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`${
            mobile ? 'block py-2 hover:bg-gray-50 px-2' : ''
          } text-gray-800 hover:text-gignaati-coral transition-colors`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
