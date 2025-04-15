
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellerFormHeader from "@/components/seller/SellerFormHeader";
import SellerApplicationForm from "@/components/seller/SellerApplicationForm";

const BecomeASeller = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-16 mt-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <SellerFormHeader 
            title="Request Seller Access"
            description="Gignaati is an invite-only marketplace for AI freelancers and agencies. Fill out this form to
            request access to showcase your AI gigs on our platform."
          />
          
          <SellerApplicationForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BecomeASeller;
