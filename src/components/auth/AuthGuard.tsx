
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
  redirectTo?: string;
  saveRouteInStorage?: boolean;
}

const AuthGuard = ({ 
  children, 
  redirectTo = "/auth", 
  saveRouteInStorage = true 
}: AuthGuardProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    
    // If not authenticated and we should save the route
    if (!authStatus && saveRouteInStorage) {
      // Save the current path to redirect back after authentication
      localStorage.setItem('authRedirectUrl', window.location.pathname);
    }
    
    setLoading(false);
  }, [saveRouteInStorage]);

  // If loading, return nothing or a loading indicator
  if (loading) {
    return null;
  }

  // If authenticated, render children
  if (isAuthenticated) {
    return <>{children}</>;
  }
  
  // If not authenticated, redirect
  navigate(redirectTo);
  return null;
};

export default AuthGuard;
