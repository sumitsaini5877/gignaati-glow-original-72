
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogIn } from 'lucide-react';
import UserMenuButton from './UserMenuButton';

interface DesktopButtonsProps {
  isAuthenticated: boolean;
  userName: string;
  userImage: string;
  handleLogout: () => void;
  handleLogin: () => void;
  handleBecomeSeller: () => void;
}

const DesktopButtons = ({ 
  isAuthenticated, 
  userName, 
  userImage, 
  handleLogout, 
  handleLogin,
  handleBecomeSeller 
}: DesktopButtonsProps) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Login / User Profile Button */}
      {isAuthenticated ? (
        <UserMenuButton 
          userName={userName} 
          userImage={userImage} 
          handleLogout={handleLogout} 
        />
      ) : (
        <Button 
          variant="outline" 
          className="border-gray-300 flex items-center gap-2"
          onClick={handleLogin}
        >
          <LogIn size={16} />
          Login
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
  );
};

export default DesktopButtons;
