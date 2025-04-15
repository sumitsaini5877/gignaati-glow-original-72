
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepManager from "@/components/post-gig/StepManager";
import { BasicInfoStep, DemoTagsStep, PackageBuilderStep, PreviewStep } from "@/components/post-gig";
import usePostGigForm from "@/hooks/usePostGigForm";

const steps = [
  { id: 1, name: "Basic Info", component: BasicInfoStep },
  { id: 2, name: "Demo & Tags", component: DemoTagsStep },
  { id: 3, name: "Packages", component: PackageBuilderStep },
  { id: 4, name: "Preview", component: PreviewStep }
];

const PostGig = () => {
  const [formData, handlers] = usePostGigForm();
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16 mb-16">
        <h1 className="text-3xl font-bold mb-2 text-center">Post a New AI Gig</h1>
        <p className="text-gray-600 text-center mb-8">Create a compelling gig to showcase your AI talent</p>
        
        <StepManager 
          steps={steps} 
          formData={formData} 
          handlers={handlers} 
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default PostGig;
