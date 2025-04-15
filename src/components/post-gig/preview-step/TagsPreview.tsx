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
  
  // Default icon is now Bot, not Robot
  return Bot;
};

interface TagsPreviewProps {
  tags: string[];
}

const TagsPreview = ({ tags }: TagsPreviewProps) => (
  <div>
    <h3 className="font-medium text-gray-500">Tags</h3>
    
    {tags.length > 0 ? (
      <>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-3">Tag Cloud</h4>
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
      </>
    ) : (
      <p className="text-gray-600">No tags provided</p>
    )}
  </div>
);

export default TagsPreview;
