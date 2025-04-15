
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export type FilterState = {
  categories: string[];
  functions: string[];
  platforms: string[];
  industries: string[];
  ratings: string[];
  priceRange: [number, number];
}

interface GigFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const GigFilters = ({ filters, onFilterChange }: GigFiltersProps) => {
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

  const handleCheckboxChange = (section: keyof Omit<FilterState, 'priceRange'>, itemId: string) => {
    const currentValues = filters[section];
    let newValues: string[];
    
    if (currentValues.includes(itemId)) {
      newValues = currentValues.filter(id => id !== itemId);
    } else {
      newValues = [...currentValues, itemId];
    }
    
    onFilterChange({
      ...filters,
      [section]: newValues
    });
  };

  const FilterSection = ({ 
    title, 
    items, 
    section 
  }: { 
    title: string, 
    items: { id: string, label: string }[],
    section: keyof Omit<FilterState, 'priceRange'>
  }) => (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox 
              id={item.id} 
              checked={filters[section].includes(item.id)}
              onCheckedChange={() => handleCheckboxChange(section, item.id)}
            />
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
      <FilterSection title="Category" items={categories} section="categories" />
      <FilterSection title="Function" items={functions} section="functions" />
      <FilterSection title="Platform" items={platforms} section="platforms" />
      <FilterSection title="Industry" items={industries} section="industries" />
      <FilterSection title="Rating" items={ratings} section="ratings" />
      
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider 
            value={filters.priceRange}
            max={1000} 
            step={10}
            onValueChange={(value) => onFilterChange({
              ...filters,
              priceRange: value as [number, number]
            })}
            className="mb-6"
          />
          <div className="flex justify-between text-sm">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigFilters;
