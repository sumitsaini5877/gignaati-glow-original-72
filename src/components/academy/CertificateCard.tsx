
import React from "react";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";

interface CertificateProps {
  title: string;
  date: string;
  icon: React.ReactNode;
}

const CertificateCard = ({ title, date, icon }: CertificateProps) => {
  return (
    <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-gray-500">Issued on {date}</p>
      </div>
      <Button variant="outline" size="sm">
        <DownloadIcon className="h-4 w-4 mr-1" />
        PDF
      </Button>
    </div>
  );
};

export default CertificateCard;
