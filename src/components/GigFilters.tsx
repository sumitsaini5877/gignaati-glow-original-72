
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const GigFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    { id: "automation", label: "Automation" },
    { id: "content", label: "Content Creation" },
    { id: "research", label: "Research" },
    { id: "prompt", label: "Prompt Writing" },
    { id: "development", label: "AI Development" },
    { id: "data", label: "Data Analysis" }
  ];
  
  const functions = [
    { id: "assistant", label: "Assistant" },
    { id: "generator", label: "Generator" },
    { id: "analyzer", label: "Analyzer" },
    { id: "automation", label: "Automation" },
    { id: "customization", label: "Customization" }
  ];
  
  const platforms = [
    { id: "openai", label: "OpenAI" },
    { id: "anthropic", label: "Anthropic" },
    { id: "langchain", label: "Langchain" },
    { id: "huggingface", label: "Hugging Face" },
    { id: "vertexai", label: "Google Vertex AI" }
  ];
  
  const industries = [
    { id: "marketing", label: "Marketing" },
    { id: "sales", label: "Sales" },
    { id: "hr", label: "HR" },
    { id: "finance", label: "Finance" },
    { id: "healthcare", label: "Healthcare" },
    { id: "education", label: "Education" }
  ];
  
  const ratings = [
    { id: "5", label: "5 Stars" },
    { id: "4", label: "4+ Stars" },
    { id: "3", label: "3+ Stars" }
  ];

  const FilterSection = ({ title, items }: { title: string, items: { id: string, label: string }[] }) => (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox id={item.id} />
            <Label htmlFor={item.id} className="text-sm font-normal cursor-pointer">
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <FilterSection title="Category" items={categories} />
      <FilterSection title="Function" items={functions} />
      <FilterSection title="Platform" items={platforms} />
      <FilterSection title="Industry" items={industries} />
      <FilterSection title="Rating" items={ratings} />
      
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider 
            defaultValue={[0, 1000]} 
            max={1000} 
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="mb-6"
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigFilters;
