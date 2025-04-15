
import { useState } from "react";
import { Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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

  return (
    <div>
      <Label htmlFor="tags">Tags</Label>
      <div className="flex items-center gap-2 mb-2">
        <Tag className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-500">Add relevant tags to help buyers find your gig</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm">{tag}</span>
            <button 
              onClick={() => onRemoveTag(tag)} 
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        ))}
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
    </div>
  );
};

export default TagsInput;
