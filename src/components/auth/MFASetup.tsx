
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface MFASetupProps {
  userId: string;
  onComplete: () => void;
  onCancel: () => void;
}

const MFASetup = ({ userId, onComplete, onCancel }: MFASetupProps) => {
  const [step, setStep] = useState<"qr" | "verify">("qr");
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Fetch TOTP secret and QR code URL
  const setupTOTP = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would make an API call to generate a TOTP secret and QR code
      // For demo purposes, we're generating a fake QR code URL
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is a placeholder. In production, you would:
      // 1. Generate a TOTP secret on the backend
      // 2. Create a QR code URL for that secret
      // 3. Return both to the client
      const mockSecret = "JBSWY3DPEHPK3PXP";
      const mockQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/Gignaati:user@example.com?secret=${mockSecret}&issuer=Gignaati`;
      
      setSecret(mockSecret);
      setQrUrl(mockQrUrl);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error setting up MFA",
        description: "There was an error setting up MFA. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Verify TOTP code
  const verifyTOTP = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would make an API call to verify the TOTP code
      // For demo purposes, we're accepting any 6-digit code
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock verification (in production, you'd verify against the backend)
      if (verificationCode.length === 6) {
        toast({
          title: "MFA Setup Complete",
          description: "Your account is now protected with multi-factor authentication.",
        });
        onComplete();
      } else {
        throw new Error("Invalid verification code");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Verification failed",
        description: error.message || "Please check your code and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize MFA setup on component mount
  useState(() => {
    setupTOTP();
  });

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6 space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Set Up Two-Factor Authentication</h2>
          <p className="text-gray-500 mt-2">
            {step === "qr" ? 
              "Scan the QR code with an authenticator app" : 
              "Enter the verification code from your authenticator app"}
          </p>
        </div>

        {step === "qr" && (
          <div className="space-y-4">
            <div className="flex justify-center">
              {qrUrl ? (
                <img 
                  src={qrUrl} 
                  alt="MFA QR Code" 
                  className="border border-gray-200 rounded-md"
                  width={200}
                  height={200}
                />
              ) : (
                <div className="w-[200px] h-[200px] flex items-center justify-center border border-gray-200 rounded-md bg-gray-50">
                  <QrCode className="h-16 w-16 text-gray-300" />
                </div>
              )}
            </div>
            
            {secret && (
              <div className="space-y-2">
                <Label htmlFor="secret-key">Secret Key (if you can't scan the QR code)</Label>
                <div className="relative">
                  <Input 
                    id="secret-key" 
                    value={secret} 
                    readOnly 
                    className="pr-20 font-mono text-sm" 
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute right-1 top-1 h-7"
                    onClick={() => {
                      navigator.clipboard.writeText(secret);
                      toast({
                        title: "Copied",
                        description: "Secret key copied to clipboard",
                      });
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button 
                className="w-full" 
                disabled={!qrUrl || isLoading}
                onClick={() => setStep("verify")}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === "verify" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp-input">Verification Code</Label>
              <InputOTP maxLength={6} value={verificationCode} onChange={setVerificationCode}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="pt-2 space-y-2">
              <Button 
                className="w-full" 
                disabled={verificationCode.length !== 6 || isLoading}
                onClick={verifyTOTP}
              >
                {isLoading ? "Verifying..." : "Verify & Complete Setup"}
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setStep("qr")}
                disabled={isLoading}
              >
                Back to QR Code
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between border-t p-4">
        <Button 
          variant="ghost" 
          onClick={onCancel}
          disabled={isLoading}
        >
          Skip for now
        </Button>
        <p className="text-xs text-gray-500">
          You can always set this up later in your account settings
        </p>
      </CardFooter>
    </Card>
  );
};

export default MFASetup;
