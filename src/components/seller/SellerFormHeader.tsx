
import React from "react";
import { Shield } from "lucide-react";

interface SellerFormHeaderProps {
  title: string;
  description: string;
}

const SellerFormHeader = ({ title, description }: SellerFormHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <Shield className="h-10 w-10 text-indigo-600 mr-3" />
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SellerFormHeader;
