
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  PenTool, 
  Search, 
  Robot, 
  Zap, 
  FileText, 
  Database, 
  PieChart, 
  Layers, 
  Briefcase,
  MessageSquare 
} from "lucide-react";

// Map of tag names to their corresponding icons
const tagIcons: Record<string, React.ComponentType<any>> = {
  "AI Assistant": Robot,
  "GPT": Robot,
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
  // Default icon for tags not in this map will be Robot
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

interface TagCloudProps {
  tags: string[];
}

const TagCloud = ({ tags }: TagCloudProps) => {
  if (!tags || tags.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-sm font-medium mb-3">Tag Cloud</h3>
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
  );
};

export default TagCloud;
