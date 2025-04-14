
import { 
  Lightbulb, 
  FileText, 
  Search, 
  Pen, 
  Bot, 
  BarChart, 
  ShoppingCart, 
  CreditCard, 
  Megaphone 
} from "lucide-react";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const categories = [
    { name: "Automation", icon: Bot, color: "bg-blue-100 text-blue-600" },
    { name: "Content Creation", icon: FileText, color: "bg-green-100 text-green-600" },
    { name: "Research", icon: Search, color: "bg-purple-100 text-purple-600" },
    { name: "Prompt Writing", icon: Pen, color: "bg-yellow-100 text-yellow-600" },
    { name: "AI Development", icon: Lightbulb, color: "bg-red-100 text-red-600" },
    { name: "Data Analysis", icon: BarChart, color: "bg-indigo-100 text-indigo-600" },
    { name: "E-commerce", icon: ShoppingCart, color: "bg-pink-100 text-pink-600" },
    { name: "Finance", icon: CreditCard, color: "bg-cyan-100 text-cyan-600" },
    { name: "Marketing", icon: Megaphone, color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find specialized AI agents for every industry and function
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/browse-gigs?category=${category.name.toLowerCase().replace(" ", "-")}`}
              className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center mb-3`}>
                <category.icon className="h-6 w-6" />
              </div>
              <span className="font-medium text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
