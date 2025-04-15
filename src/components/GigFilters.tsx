
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export type FilterState = {
  categories: string[];
  functions: string[];
  types: string[];
  llmModels: string[];
  hostingProviders: string[];
  industries: string[];
  integrations: string[];
  businessFunctions: string[];
  professions: string[];
  ratings: string[];
  priceRange: [number, number];
}

interface GigFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const GigFilters = ({ filters, onFilterChange }: GigFiltersProps) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    categories: true,
    functions: true,
    types: true,
    llmModels: true,
    hostingProviders: true,
    industries: true,
    integrations: true,
    businessFunctions: true,
    professions: true,
    ratings: true
  });
  
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
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

  const types = [
    { id: "free", label: "Free" },
    { id: "paid", label: "Paid" },
    { id: "freemium", label: "Freemium" }
  ];
  
  const llmModels = [
    { id: "gpt4", label: "GPT-4" },
    { id: "claude3", label: "Claude 3" },
    { id: "llama3", label: "LLaMA 3" },
    { id: "mistral", label: "Mistral" },
    { id: "gemini", label: "Gemini" },
    { id: "falcon", label: "Falcon" },
    { id: "cohere", label: "Cohere" },
    { id: "palm", label: "PaLM" },
    { id: "j2", label: "J2" },
    { id: "gpt3", label: "GPT-3" }
  ];
  
  const hostingProviders = [
    { id: "aws", label: "AWS" },
    { id: "azure", label: "Azure" },
    { id: "googlecloud", label: "Google Cloud" },
    { id: "vercel", label: "Vercel" },
    { id: "netlify", label: "Netlify" },
    { id: "heroku", label: "Heroku" },
    { id: "digitalocean", label: "DigitalOcean" },
    { id: "cloudflare", label: "Cloudflare" },
    { id: "linode", label: "Linode" },
    { id: "render", label: "Render" }
  ];
  
  const industries = [
    { id: "technology", label: "Technology" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance", label: "Finance" },
    { id: "education", label: "Education" },
    { id: "retail", label: "Retail" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "media", label: "Media" },
    { id: "legal", label: "Legal" },
    { id: "realestate", label: "Real Estate" },
    { id: "transportation", label: "Transportation" }
  ];
  
  const integrations = [
    { id: "slack", label: "Slack" },
    { id: "google", label: "Google" },
    { id: "microsoft", label: "Microsoft" },
    { id: "salesforce", label: "Salesforce" },
    { id: "jira", label: "Jira" },
    { id: "github", label: "GitHub" },
    { id: "zapier", label: "Zapier" },
    { id: "trello", label: "Trello" },
    { id: "asana", label: "Asana" },
    { id: "notion", label: "Notion" },
    { id: "figma", label: "Figma" },
    { id: "adobe", label: "Adobe" }
  ];
  
  const businessFunctions = [
    { id: "marketing", label: "Marketing" },
    { id: "sales", label: "Sales" },
    { id: "finance", label: "Finance" },
    { id: "humanresources", label: "Human Resources" },
    { id: "operations", label: "Operations" },
    { id: "customerservice", label: "Customer Service" },
    { id: "product", label: "Product" },
    { id: "development", label: "Development" },
    { id: "legal", label: "Legal" },
    { id: "strategy", label: "Strategy" }
  ];
  
  const professions = [
    { id: "developer", label: "Developer" },
    { id: "designer", label: "Designer" },
    { id: "marketer", label: "Marketer" },
    { id: "salesrep", label: "Sales Representative" },
    { id: "executive", label: "Executive" },
    { id: "writer", label: "Writer" },
    { id: "researcher", label: "Researcher" },
    { id: "customersupport", label: "Customer Support" },
    { id: "projectmanager", label: "Project Manager" },
    { id: "datascientist", label: "Data Scientist" },
    { id: "legal", label: "Legal" },
    { id: "hr", label: "Human Resources" }
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
    section,
    open = true,
  }: { 
    title: string, 
    items: { id: string, label: string }[],
    section: keyof Omit<FilterState, 'priceRange'>,
    open?: boolean,
  }) => (
    <Collapsible 
      open={openSections[section]} 
      onOpenChange={() => toggleSection(section)}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>
        <CollapsibleTrigger asChild>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <ChevronDown className={`h-5 w-5 transition-transform ${openSections[section] ? 'transform rotate-180' : ''}`} />
          </button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent>
        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`${section}-${item.id}`} 
                checked={filters[section].includes(item.id)}
                onCheckedChange={() => handleCheckboxChange(section, item.id)}
              />
              <Label 
                htmlFor={`${section}-${item.id}`} 
                className="text-sm font-normal cursor-pointer"
              >
                {item.label}
              </Label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="space-y-2">
      <FilterSection title="Type" items={types} section="types" />
      <FilterSection title="LLM Models" items={llmModels} section="llmModels" />
      <FilterSection title="Hosting Providers" items={hostingProviders} section="hostingProviders" />
      <FilterSection title="Category" items={categories} section="categories" />
      <FilterSection title="Function" items={functions} section="functions" />
      <FilterSection title="Industries" items={industries} section="industries" />
      <FilterSection title="Integrations" items={integrations} section="integrations" />
      <FilterSection title="Business Functions" items={businessFunctions} section="businessFunctions" />
      <FilterSection title="Professions" items={professions} section="professions" />
      <FilterSection title="Rating" items={ratings} section="ratings" />
      
      <Collapsible 
        open={openSections['priceRange']} 
        onOpenChange={() => toggleSection('priceRange')}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Price Range</h3>
          <CollapsibleTrigger asChild>
            <button className="rounded-full p-1 hover:bg-gray-100">
              <ChevronDown className={`h-5 w-5 transition-transform ${openSections['priceRange'] ? 'transform rotate-180' : ''}`} />
            </button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default GigFilters;
