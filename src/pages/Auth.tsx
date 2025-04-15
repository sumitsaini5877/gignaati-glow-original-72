
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const initialTab = searchParams.get("tab") === "signup" ? AuthStep.SIGNUP : AuthStep.LOGIN;
  
  const [authStep, setAuthStep] = useState<AuthStep>(initialTab);
  const [email, setEmail] = useState<string>("");

  const handleCompleteLogin = (userEmail: string) => {
    setEmail(userEmail);
    setAuthStep(AuthStep.MFA);
  };

  const handleToggleForm = () => {
    setAuthStep(authStep === AuthStep.LOGIN ? AuthStep.SIGNUP : AuthStep.LOGIN);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#14213D] to-[#1e3a6a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 pt-6 pb-4">
          <AuthHeader />
        </div>
        
        <div className="px-6 py-8">
          {authStep === AuthStep.LOGIN && (
            <LoginForm 
              onComplete={handleCompleteLogin}
              onToggleForm={handleToggleForm}
            />
          )}
          
          {authStep === AuthStep.SIGNUP && (
            <SignupForm 
              onComplete={handleCompleteLogin}
              onToggleForm={handleToggleForm}
            />
          )}
          
          {authStep === AuthStep.MFA && (
            <MFASetup email={email} />
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
