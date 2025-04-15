
import { useState } from "react";
import { Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  PenTool,
  Search,
  Bot,
  Zap,
  FileText,
  Database,
  PieChart,
  Layers,
  Briefcase,
  MessageSquare
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Map of tag names to their corresponding icons
const tagIcons: Record<string, React.ComponentType<any>> = {
  "AI Assistant": Bot,
  "GPT": Bot,
  "Automation": Zap,
  "Content": FileText,
  "Research": Search,
  "Prompt Writing": PenTool,
  "Data Analysis": PieChart,
  "Code": Code,
  "Database": Database,
  "Integration": Layers,
  "Business": Briefcase,
  "Chat": MessageSquare,
};

// Get the appropriate icon for a given tag
const getTagIcon = (tag: string) => {
  // Try to find an exact match
  if (tagIcons[tag]) {
    return tagIcons[tag];
  }
  
  // Try to find a partial match
  for (const [key, icon] of Object.entries(tagIcons)) {
    if (tag.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  
  // Default icon
  return Robot;
};

// Common tags that users can quickly select from
const commonTags = [
  "AI Assistant",
  "GPT",
  "Automation",
  "Content",
  "Research",
  "Prompt Writing",
  "Data Analysis",
  "Code",
  "Database",
  "Integration",
  "Business",
  "Chat",
];

interface TagsInputProps {
  tags: string[];
  onTagInput: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagsInput = ({ tags, onTagInput, onRemoveTag }: TagsInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim()) {
      onTagInput(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSelectCommonTag = (value: string) => {
    if (!tags.includes(value)) {
      onTagInput(value);
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="tags">Tags</Label>
      <div className="flex items-center gap-2 mb-2">
        <Tag className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-500">Add relevant tags to help buyers find your gig</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => {
          const TagIcon = getTagIcon(tag);
          return (
            <Badge key={index} variant="outline" className="flex items-center gap-1 bg-white border py-2 px-3">
              <TagIcon className="h-3.5 w-3.5 text-gray-600" />
              <span>{tag}</span>
              <button 
                onClick={() => onRemoveTag(tag)} 
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </Badge>
          );
        })}
      </div>
      
      <div className="flex gap-2">
        <Input 
          id="tagInput" 
          placeholder="AI Assistant, GPT, Automation..." 
          className="mt-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button 
          variant="outline" 
          onClick={handleAddTag}
        >
          Add
        </Button>
      </div>
      
      <div className="mt-4">
        <Label className="mb-2 block">Quick Select Common Tags</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {commonTags.map((tag) => {
            const TagIcon = tagIcons[tag] || Robot;
            const isSelected = tags.includes(tag);
            return (
              <Button
                key={tag}
                type="button"
                variant={isSelected ? "secondary" : "outline"}
                className={`justify-start text-sm h-auto py-2 ${isSelected ? 'bg-gray-100' : ''}`}
                onClick={() => handleSelectCommonTag(tag)}
                disabled={isSelected}
              >
                <TagIcon className="h-3.5 w-3.5 mr-2" />
                {tag}
              </Button>
            );
          })}
        </div>
      </div>
      
      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-3">Tag Cloud Preview</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            const TagIcon = getTagIcon(tag);
            return (
              <Badge key={index} variant="outline" className="flex items-center gap-1 bg-white border py-1 px-2">
                <TagIcon className="h-3.5 w-3.5 text-gray-600" />
                <span>{tag}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TagsInput;
