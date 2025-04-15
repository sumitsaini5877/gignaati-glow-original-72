
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import AuthHeader from "@/components/auth/AuthHeader";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import MFASetup from "@/components/auth/MFASetup";
import AuthFooter from "@/components/auth/AuthFooter";

enum AuthStep {
  LOGIN = "login",
  SIGNUP = "signup",
  MFA = "mfa",
}

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTab = searchParams.get("tab") === "signup" ? AuthStep.SIGNUP : AuthStep.LOGIN;
  
  const [authStep, setAuthStep] = useState<AuthStep>(initialTab);
  const [email, setEmail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const handleLoginSuccess = (data: { email: string, success: boolean }) => {
    if (data.success) {
      setEmail(data.email);
      setUserId(data.email); // In a real app, you'd store the actual user ID
      setAuthStep(AuthStep.MFA);
    }
  };

  const handleToggleForm = () => {
    setAuthStep(authStep === AuthStep.LOGIN ? AuthStep.SIGNUP : AuthStep.LOGIN);
  };

  const handleMFAComplete = () => {
    navigate("/");
  };

  const handleMFACancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#14213D] to-[#1e3a6a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 pt-6 pb-4">
          <AuthHeader 
            title="Welcome to Gignaati.com" 
            description="Connect with the world's best AI talent" 
          />
        </div>
        
        <div className="px-6 py-8">
          {authStep === AuthStep.LOGIN && (
            <LoginForm 
              onSuccess={handleLoginSuccess}
              onToggleForm={handleToggleForm}
            />
          )}
          
          {authStep === AuthStep.SIGNUP && (
            <SignupForm 
              onToggleForm={handleToggleForm}
            />
          )}
          
          {authStep === AuthStep.MFA && (
            <MFASetup 
              userId={userId}
              onComplete={handleMFAComplete}
              onCancel={handleMFACancel}
            />
          )}
        </div>
        
        <div className="bg-gray-50 px-6 py-4">
          <AuthFooter />
        </div>
      </div>
    </div>
  );
};

export default Auth;
