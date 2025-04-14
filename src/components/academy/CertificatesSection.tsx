
import React from "react";
import { FileText } from "lucide-react";
import CertificateCard from "./CertificateCard";

const CertificatesSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Your Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CertificateCard 
          title="Prompt Engineering Mastery" 
          date="May 12, 2023" 
          icon={<FileText className="h-6 w-6 text-blue-500" />}
        />
      </div>
    </div>
  );
};

export default CertificatesSection;
