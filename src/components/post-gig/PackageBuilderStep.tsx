
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, Clock } from "lucide-react";

interface Package {
  title: string;
  description: string;
  price: string;
  deliveryTime: string;
}

interface PackageBuilderStepProps {
  packages: Record<string, Package>;
  onPackageChange: (packageType: string, field: string, value: string) => void;
}

const PackageBuilderStep = ({ packages, onPackageChange }: PackageBuilderStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Package Builder</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(packages).map((packageType) => {
          const pkg = packages[packageType];
          return (
            <Card key={packageType} className="overflow-hidden">
              <div className={`p-4 text-white text-center ${
                packageType === 'setup' 
                  ? 'bg-gray-600' 
                  : packageType === 'training' 
                    ? 'bg-gignaati-coral' 
                    : 'bg-blue-600'
              }`}>
                <h3 className="font-semibold text-lg">{pkg.title}</h3>
              </div>
              <CardContent className="p-4 space-y-4">
                <div>
                  <Label htmlFor={`${packageType}-description`}>Description</Label>
                  <Textarea 
                    id={`${packageType}-description`}
                    placeholder="What's included in this package..."
                    value={pkg.description}
                    onChange={(e) => onPackageChange(packageType, 'description', e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`${packageType}-price`}>Price ($)</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id={`${packageType}-price`}
                      placeholder="99"
                      value={pkg.price}
                      onChange={(e) => onPackageChange(packageType, 'price', e.target.value)}
                      className="pl-10"
                      type="number"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor={`${packageType}-delivery`}>Delivery Time (Days)</Label>
                  <div className="relative mt-1">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id={`${packageType}-delivery`}
                      placeholder="3"
                      value={pkg.deliveryTime}
                      onChange={(e) => onPackageChange(packageType, 'deliveryTime', e.target.value)}
                      className="pl-10"
                      type="number"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PackageBuilderStep;
