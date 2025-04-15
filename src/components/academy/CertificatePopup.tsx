
import { useState, useEffect } from "react";
import { Check, Award, Share2, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CertificatePopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  courseTitle: string;
  completionDate?: string;
}

const CertificatePopup = ({ isOpen, setIsOpen, courseTitle, completionDate = new Date().toLocaleDateString() }: CertificatePopupProps) => {
  const [confetti, setConfetti] = useState(false);

  // Simulate confetti animation when certificate is shown
  useEffect(() => {
    if (isOpen) {
      setConfetti(true);
      const timer = setTimeout(() => {
        setConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast.success("Sharing certificate...");
  };

  const handleDownload = () => {
    // In a real app, this would download the certificate
    toast.success("Certificate downloaded!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Award className="h-6 w-6 text-yellow-500" />
            Congratulations!
          </DialogTitle>
          <DialogDescription>
            You've completed the course and earned a certificate.
          </DialogDescription>
        </DialogHeader>
        
        {/* Certificate Display */}
        <div className="relative mx-auto my-4 p-6 border-8 border-double border-blue-200 bg-white text-center">
          {confetti && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="animate-fade-in absolute -top-10 left-1/4 text-4xl">🎉</div>
              <div className="animate-fade-in absolute -top-5 left-1/2 text-4xl" style={{ animationDelay: "0.2s" }}>🎊</div>
              <div className="animate-fade-in absolute top-0 right-1/4 text-4xl" style={{ animationDelay: "0.4s" }}>🎉</div>
            </div>
          )}
          
          <div className="text-2xl font-bold mb-1">Certificate of Completion</div>
          <div className="text-sm mb-4">presented to</div>
          <div className="text-xl font-medium mb-4">John Doe</div>
          <div className="text-sm mb-2">for successfully completing</div>
          <div className="text-lg font-semibold mb-4">"{courseTitle}"</div>
          <div className="text-sm">Issued on {completionDate}</div>
          <div className="mt-4 flex justify-center">
            <div className="bg-green-100 p-2 rounded-full">
              <Check className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between flex-row gap-2">
          <Button variant="outline" onClick={handleShare} className="flex-1 sm:flex-none">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button onClick={handleDownload} className="flex-1 sm:flex-none">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CertificatePopup;
