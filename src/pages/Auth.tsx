
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthFooter from "@/components/auth/AuthFooter";
import MFASetup from "@/components/auth/MFASetup";

const Auth = () => {
  const navigate = useNavigate();
  const [showMFASetup, setShowMFASetup] = useState(false);
  const [userId, setUserId] = useState("");

  const handleLoginSuccess = (data: { email: string, success: boolean }) => {
    if (data.success) {
      // In a real app, check if user already has MFA enabled
      // For demo purposes, we'll always show the MFA setup
      setUserId(data.email);
      setShowMFASetup(true);
    }
  };

  const handleMFAComplete = () => {
    navigate("/");
  };

  const handleMFACancel = () => {
    navigate("/");
  };

  // Show MFA setup screen if login was successful
  if (showMFASetup) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <MFASetup 
          userId={userId}
          onComplete={handleMFAComplete}
          onCancel={handleMFACancel}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-xl">
        <CardHeader className="space-y-2 text-center">
          <AuthHeader 
            title="Welcome to Gignaati.com" 
            description="Connect with the world's best AI talent"
          />
        </CardHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <CardContent>
              <LoginForm onSuccess={handleLoginSuccess} />
            </CardContent>
          </TabsContent>
          
          <TabsContent value="signup">
            <CardContent>
              <SignupForm />
            </CardContent>
          </TabsContent>
        </Tabs>
        
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <SocialLoginButtons />
          <AuthFooter />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
