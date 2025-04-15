
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Phone, Video, MoreVertical, ChevronLeft, Bot } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Contact = {
  id: string;
  name: string;
  avatar?: string;
  status: "online" | "offline" | "away";
  lastMessage: string;
  timestamp: Date;
  unread: number;
  isBot?: boolean;
};

interface ChatHeaderProps {
  contact: Contact;
  onBackClick: () => void;
}

const ChatHeader = ({ contact, onBackClick }: ChatHeaderProps) => {
  const { toast } = useToast();
  
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden mr-2"
          onClick={onBackClick}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Avatar>
          {contact.avatar ? (
            <AvatarImage src={contact.avatar} alt={contact.name} />
          ) : (
            <AvatarFallback className={contact.isBot ? "bg-purple-500" : "bg-blue-500"}>
              {contact.isBot ? <Bot className="h-4 w-4 text-white" /> : contact.name.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="ml-3">
          <h3 className="font-medium">{contact.name}</h3>
          <p className="text-xs text-gray-500">
            {contact.status === "online"
              ? "Online"
              : contact.status === "away"
              ? "Away"
              : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-500" 
          onClick={() => toast({ title: "Call feature", description: "Voice call feature coming soon!" })}
        >
          <Phone className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-500" 
          onClick={() => toast({ title: "Video feature", description: "Video call feature coming soon!" })}
        >
          <Video className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => toast({ title: "Profile", description: "Viewing profile is coming soon!" })}>
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast({ title: "Media", description: "Shared media gallery is coming soon!" })}>
              Shared Media
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast({ title: "Block", description: "Block user functionality coming soon!" })}>
              Block User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ChatHeader;
