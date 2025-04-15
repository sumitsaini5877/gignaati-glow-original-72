
import { Button } from "@/components/ui/button";
import { Facebook, Github, Mail, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Linkedin from "@/components/icons/Linkedin";
import { supabase } from "@/integrations/supabase/client";

// Apple icon component
const Apple = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512" 
    className={className}
    fill="currentColor"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

type Provider = 'google' | 'github' | 'linkedin' | 'twitter' | 'facebook' | 'apple';

interface SocialButtonProps {
  provider: Provider;
  icon: React.ReactNode;
}

const SocialButton = ({ provider, icon }: SocialButtonProps) => {
  const { toast } = useToast();
  
  const handleClick = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message || "An error occurred during social login",
      });
    }
  };

  return (
    <Button 
      type="button" 
      variant="outline" 
      onClick={handleClick}
      className="flex items-center justify-center"
    >
      {icon}
    </Button>
  );
};

const SocialLoginButtons = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <SocialButton provider="google" icon={<Mail className="h-4 w-4" />} />
        <SocialButton provider="github" icon={<Github className="h-4 w-4" />} />
        <SocialButton provider="twitter" icon={<Twitter className="h-4 w-4" />} />
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <SocialButton provider="linkedin" icon={<Linkedin className="h-4 w-4" />} />
        <SocialButton provider="facebook" icon={<Facebook className="h-4 w-4" />} />
        <SocialButton provider="apple" icon={<Apple className="h-4 w-4" />} />
      </div>
    </>
  );
};

export default SocialLoginButtons;
