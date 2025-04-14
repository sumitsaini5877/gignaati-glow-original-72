
import { ShieldCheck, CreditCard, Star, Bot } from "lucide-react";

const TrustIndicators = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "All transactions are protected by our secure payment system with money-back guarantee."
    },
    {
      icon: Star,
      title: "Verified Reviews",
      description: "Every review on our platform comes from a real client who has used the service."
    },
    {
      icon: Bot,
      title: "AI Moderation",
      description: "Our AI systems continuously monitor for quality and ensure adherence to our standards."
    },
    {
      icon: CreditCard,
      title: "No-Risk Trials",
      description: "Many of our freelancers offer demo experiences before you commit to a purchase."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Gignaati</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've built a platform you can trust for all your AI needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
