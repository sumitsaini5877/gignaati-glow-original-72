
import { Card, CardContent } from "@/components/ui/card";

interface PackageData {
  title: string;
  description: string;
  price: string;
  deliveryTime: string;
}

interface PackagesPreviewProps {
  packages: {
    setup: PackageData;
    training: PackageData;
    customization: PackageData;
  };
}

const PackagesPreview = ({ packages }: PackagesPreviewProps) => (
  <div>
    <h3 className="font-medium text-gray-500">Packages</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      {Object.keys(packages).map((packageType) => {
        const pkg = packages[packageType as keyof typeof packages];
        return (
          <Card key={packageType} className="overflow-hidden">
            <div className={`p-2 text-white text-center ${
              packageType === 'setup' 
                ? 'bg-gray-600' 
                : packageType === 'training' 
                  ? 'bg-gignaati-coral' 
                  : 'bg-blue-600'
            }`}>
              <h3 className="font-semibold">{pkg.title}</h3>
            </div>
            <CardContent className="p-3 text-sm">
              <div className="flex justify-between py-1 border-b">
                <span>Price:</span>
                <span className="font-semibold">${pkg.price || "N/A"}</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>Delivery:</span>
                <span>{pkg.deliveryTime || "N/A"} days</span>
              </div>
              <p className="mt-2 text-gray-700">{pkg.description || "No description provided"}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
);

export default PackagesPreview;
