
import { LinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DemoLinkInputProps {
  demoLink: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DemoLinkInput = ({ demoLink, onInputChange }: DemoLinkInputProps) => {
  return (
    <div>
      <Label htmlFor="demoLink">Demo URL (Optional)</Label>
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
  );
};

export default DemoLinkInput;
