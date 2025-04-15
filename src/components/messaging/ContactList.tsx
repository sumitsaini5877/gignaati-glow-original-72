
import { useState } from "react";
import { Search, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
}

const ContactList = ({ contacts, selectedContact, onSelectContact }: ContactListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatLastMessageTime = (timestamp: Date) => {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffMinutes = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60));
    
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return messageDate.toLocaleDateString();
  };

  const renderContactItem = (contact: Contact) => (
    <div
      key={contact.id}
      className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors flex items-center ${
        selectedContact?.id === contact.id ? "bg-gray-50" : ""
      }`}
      onClick={() => onSelectContact(contact)}
    >
      <div className="relative">
        <Avatar>
          {contact.avatar ? (
            <AvatarImage src={contact.avatar} alt={contact.name} />
          ) : (
            <AvatarFallback className={contact.isBot ? "bg-purple-500" : "bg-blue-500"}>
              {contact.isBot ? <Bot className="h-4 w-4 text-white" /> : contact.name.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        <span
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
            contact.status === "online"
              ? "bg-green-500"
              : contact.status === "away"
              ? "bg-yellow-500"
              : "bg-gray-400"
          } border-2 border-white`}
        ></span>
      </div>
      <div className="ml-3 flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="font-medium truncate">
            {contact.name}
          </h3>
          <span className="text-xs text-gray-500">
            {formatLastMessageTime(contact.timestamp)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 truncate">
            {contact.lastMessage}
          </p>
          {contact.unread > 0 && (
            <Badge variant="default" className="bg-blue-500 text-white ml-2">
              {contact.unread}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full md:w-1/3 border-r">
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search messages..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <div className="px-3 pt-2">
          <TabsList className="w-full">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
            <TabsTrigger value="ai" className="flex-1">AI Agents</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="m-0">
          <div className="overflow-y-auto max-h-[calc(100vh-320px)]">
            {filteredContacts.map(renderContactItem)}
          </div>
        </TabsContent>
        
        <TabsContent value="unread" className="m-0">
          <div className="overflow-y-auto max-h-[calc(100vh-320px)]">
            {filteredContacts.filter(c => c.unread > 0).map(renderContactItem)}
          </div>
        </TabsContent>
        
        <TabsContent value="ai" className="m-0">
          <div className="overflow-y-auto max-h-[calc(100vh-320px)]">
            {filteredContacts.filter(c => c.isBot).map(renderContactItem)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactList;
