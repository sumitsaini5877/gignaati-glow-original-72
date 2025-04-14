
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white rounded-md"
          >
            REGISTER
          </Button>
          <Button 
            variant="default" 
            className="bg-gignaati-coral hover:bg-red-500 text-white rounded-md"
          >
            SIGN IN
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
                className="bg-black hover:bg-gray-800 text-white w-full"
              >
                REGISTER
              </Button>
              <Button 
                variant="default" 
                className="bg-gignaati-coral hover:bg-red-500 text-white w-full"
              >
                SIGN IN
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
    { name: 'AI Gigs', path: '/ai-gigs' },
    { name: 'AI Projects', path: '/ai-projects' },
    { name: 'How It Work', path: '/how-it-works' },
    { name: 'AI Academy', path: '/ai-academy' },
    { name: 'Blog', path: '/blog' },
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
