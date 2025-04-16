
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Briefcase, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface RoleSelectionProps {
  onRoleSelect: (role: "Creator" | "Buyer") => void;
}

const RoleSelection = ({ onRoleSelect }: RoleSelectionProps) => {
  const [selectedRole, setSelectedRole] = useState<"Creator" | "Buyer" | null>(null);

  const handleRoleChange = (value: string) => {
    setSelectedRole(value as "Creator" | "Buyer");
  };

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Your Role</h2>
        <p className="text-gray-600">
          How would you like to use Gignaati? You can always change your role later.
        </p>
      </div>

      <RadioGroup className="grid gap-6" value={selectedRole || ""} onValueChange={handleRoleChange}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className={`cursor-pointer border-2 transition-all ${
            selectedRole === "Creator" ? "border-gignaati-coral" : "border-transparent"
          } hover:border-gignaati-coral/50`}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Briefcase size={40} className="text-blue-600" />
                </div>
                
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="Creator" id="creator" className="mt-1" />
                  <div>
                    <Label htmlFor="creator" className="text-xl font-semibold block mb-2">Creator</Label>
                    <p className="text-gray-600">
                      I want to create and sell AI services on the platform. 
                      I have skills to offer and want to reach potential clients.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`cursor-pointer border-2 transition-all ${
            selectedRole === "Buyer" ? "border-gignaati-coral" : "border-transparent"
          } hover:border-gignaati-coral/50`}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                  <ShoppingBag size={40} className="text-green-600" />
                </div>
                
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="Buyer" id="buyer" className="mt-1" />
                  <div>
                    <Label htmlFor="buyer" className="text-xl font-semibold block mb-2">Buyer</Label>
                    <p className="text-gray-600">
                      I'm looking to purchase AI services. I need help with 
                      AI projects and want to find the right specialists.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>

      <div className="mt-8 text-center">
        <Button 
          onClick={handleContinue} 
          className="bg-gignaati-coral hover:bg-red-500 px-8 py-2" 
          disabled={!selectedRole}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default RoleSelection;
