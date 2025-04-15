
import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();

  // Check authentication status on mount and when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
      
      if (authStatus) {
        // Get user data from localStorage if authenticated
        const storedUserName = localStorage.getItem('userName') || 'User';
        const storedUserImage = localStorage.getItem('userImage') || '';
        setUserName(storedUserName);
        setUserImage(storedUserImage);
      }
    };

    // Initial check
    checkAuth();

    // Listen for storage events (in case another tab changes auth status)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBecomeSeller = () => {
    navigate('/become-a-seller');
  };

  const handleBuyAndTry = () => {
    // If not authenticated, redirect to auth page and set return URL
    if (!isAuthenticated) {
      localStorage.setItem('authRedirectUrl', '/');
      navigate('/auth');
    }
  };

  const handleLogout = () => {
    // Clear authentication status and user data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('userImage');
    setIsAuthenticated(false);
    setUserName('');
    setUserImage('');
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

        {/* Authentication and Seller Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Buy and Try / User Profile Button */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 border-gray-300">
                  {userImage ? (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={userImage} alt={userName} />
                      <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <User size={16} />
                  )}
                  <span>{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white">
                <DropdownMenuItem onClick={() => navigate('/user-profile')}>
                  <User size={16} className="mr-2" />
                  See Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut size={16} className="mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline" 
              className="border-gray-300"
              onClick={handleBuyAndTry}
            >
              Buy and Try
            </Button>
          )}
          
          {/* Become a Seller Button */}
          <Button 
            variant="default" 
            className="bg-gignaati-coral hover:bg-red-500 text-white rounded-md"
            onClick={handleBecomeSeller}
          >
            Become a Seller/Creator
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
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 p-2 border rounded-md">
                    {userImage ? (
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={userImage} alt={userName} />
                        <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <User size={16} />
                    )}
                    <span>{userName}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/user-profile')}
                  >
                    <User size={16} className="mr-2" />
                    See Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-red-500"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleBuyAndTry}
                >
                  Buy and Try
                </Button>
              )}
              
              <Button 
                variant="default" 
                className="bg-gignaati-coral hover:bg-red-500 text-white w-full"
                onClick={handleBecomeSeller}
              >
                Become a Seller/Creator
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
    { name: 'AI Gigs', path: '/browse-gigs' },
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
