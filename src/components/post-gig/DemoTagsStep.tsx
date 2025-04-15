
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tag, LinkIcon } from "lucide-react";

interface DemoTagsStepProps {
  demoLink: string;
  tags: string[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTagInput: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const DemoTagsStep = ({ 
  demoLink, 
  tags, 
  onInputChange, 
  onTagInput, 
  onRemoveTag 
}: DemoTagsStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Demo Link & Tags</h2>
      
      <div>
        <Label htmlFor="demoLink">Demo URL</Label>
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-500">Add a link to a working demo of your AI agent</span>
        </div>
        <Input 
          id="demoLink" 
          name="demoLink"
          placeholder="https://your-demo-link.com" 
          value={demoLink}
          onChange={onInputChange}
          className="mt-1"
        />
      </div>
      
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onTagInput((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
          <Button 
            variant="outline" 
            onClick={(e) => {
              const input = document.getElementById('tagInput') as HTMLInputElement;
              onTagInput(input.value);
              input.value = '';
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoTagsStep;
