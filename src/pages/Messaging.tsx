import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Phone, 
  Video, 
  MoreVertical, 
  Send, 
  PaperclipIcon, 
  Image as ImageIcon, 
  Smile, 
  Search, 
  Star, 
  Clock, 
  Users,
  Mail,
  MessageSquare,
  Settings,
  ChevronLeft,
  Bot
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

type Message = {
  id: string;
  sender: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  isBot?: boolean;
};

const Messaging = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Alex Morgan",
      status: "online",
      lastMessage: "I can help with your automation needs",
      timestamp: new Date(Date.now() - 5 * 60000),
      unread: 2,
    },
    {
      id: "2",
      name: "AI Agent: GPT Assistant",
      status: "online",
      lastMessage: "I've completed the research you requested",
      timestamp: new Date(Date.now() - 30 * 60000),
      unread: 0,
      isBot: true,
    },
    {
      id: "3",
      name: "Taylor Swift",
      status: "away",
      lastMessage: "Let me know when you're ready to discuss the project",
      timestamp: new Date(Date.now() - 120 * 60000),
      unread: 0,
    },
    {
      id: "4",
      name: "John Doe",
      status: "offline",
      lastMessage: "Thanks for your help!",
      timestamp: new Date(Date.now() - 24 * 60000 * 60),
      unread: 0,
    },
    {
      id: "5",
      name: "AI Agent: SEO Helper",
      status: "online",
      lastMessage: "Your keywords analysis is ready",
      timestamp: new Date(Date.now() - 2 * 60000 * 60),
      unread: 1,
      isBot: true,
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "101",
      sender: "Alex Morgan",
      senderId: "1",
      content: "Hi there! I saw your project requirements and I think I can help.",
      timestamp: new Date(Date.now() - (60 * 60000)),
      read: true,
    },
    {
      id: "102",
      sender: "You",
      senderId: "current-user",
      content: "Great! I'm looking for someone who can create an automation workflow for my business.",
      timestamp: new Date(Date.now() - (55 * 60000)),
      read: true,
    },
    {
      id: "103",
      sender: "Alex Morgan",
      senderId: "1",
      content: "I've built similar automation systems for several clients. What specific processes are you looking to automate?",
      timestamp: new Date(Date.now() - (50 * 60000)),
      read: true,
    },
    {
      id: "104",
      sender: "You",
      senderId: "current-user",
      content: "Mainly customer onboarding and follow-up emails. It's currently taking too much manual work.",
      timestamp: new Date(Date.now() - (45 * 60000)),
      read: true,
    },
    {
      id: "105",
      sender: "Alex Morgan",
      senderId: "1",
      content: "I can definitely help with that. I've worked with tools like Zapier, Make.com, and custom API integrations to automate similar workflows.",
      timestamp: new Date(Date.now() - (40 * 60000)),
      read: true,
    },
    {
      id: "106",
      sender: "Alex Morgan",
      senderId: "1",
      content: "Would you be available for a call tomorrow to discuss the details? I could prepare a brief proposal based on our conversation.",
      timestamp: new Date(Date.now() - (10 * 60000)),
      read: true,
    },
    {
      id: "107",
      sender: "Alex Morgan",
      senderId: "1",
      content: "I can help with your automation needs. Just let me know when you're free to talk more about your specific requirements.",
      timestamp: new Date(Date.now() - (5 * 60000)),
      read: false,
    },
    {
      id: "108",
      sender: "Alex Morgan",
      senderId: "1",
      content: "I'm also available now if you want to continue our chat here.",
      timestamp: new Date(Date.now() - (2 * 60000)),
      read: false,
    },
  ]);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Select first contact by default
    if (contacts.length > 0 && !selectedContact) {
      setSelectedContact(contacts[0]);
    }
  }, [contacts]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedContact]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
    
    // Mark messages as read
    if (contact.unread > 0) {
      setContacts(prevContacts => 
        prevContacts.map(c => 
          c.id === contact.id ? { ...c, unread: 0 } : c
        )
      );
      
      setMessages(prevMessages => 
        prevMessages.map(m => 
          m.senderId === contact.id && !m.read ? { ...m, read: true } : m
        )
      );
    }
    
    setMobileView("chat");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedContact) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: "You",
      senderId: "current-user",
      content: messageInput.trim(),
      timestamp: new Date(),
      read: true,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput("");

    // Simulate reply for demo
    if (selectedContact) {
      setTimeout(() => {
        const isBot = selectedContact.isBot;
        const replyContent = isBot 
          ? "I'm your AI assistant. I've processed your request and will provide results shortly."
          : "Thanks for your message! I'll get back to you soon.";
        
        const reply: Message = {
          id: `msg-${Date.now() + 1}`,
          sender: selectedContact.name,
          senderId: selectedContact.id,
          content: replyContent,
          timestamp: new Date(),
          read: true,
          isBot
        };
        
        setMessages(prevMessages => [...prevMessages, reply]);
      }, 1000);
    }
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentMessages = messages.filter(
    message => 
      (message.senderId === selectedContact?.id || 
       message.senderId === "current-user") && 
      (selectedContact?.id === "1" || message.timestamp > new Date(Date.now() - 60000 * 60 * 24))
  );

  const formatMessageTime = (timestamp: Date) => {
    const now = new Date();
    const messageDate = new Date(timestamp);
    
    // If same day, show time
    if (messageDate.toDateString() === now.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // If within the last week, show day of week
    const diffDays = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 7) {
      return messageDate.toLocaleDateString([], { weekday: 'short' });
    }
    
    // Otherwise show date
    return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[calc(100vh-200px)]">
            <div className="border-b flex items-center justify-between p-4">
              <h1 className="text-xl font-semibold">Messages</h1>
              <Button variant="ghost" size="sm" onClick={() => navigate("/message-settings")}>
                <Settings className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row">
              {/* Contacts list - hidden on mobile when chat is open */}
              <div className={`w-full md:w-1/3 border-r ${mobileView === "chat" ? "hidden md:block" : "block"}`}>
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
                      {filteredContacts.map(contact => (
                        <div
                          key={contact.id}
                          className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors flex items-center ${
                            selectedContact?.id === contact.id ? "bg-gray-50" : ""
                          }`}
                          onClick={() => handleContactSelect(contact)}
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
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="unread" className="m-0">
                    <div className="overflow-y-auto max-h-[calc(100vh-320px)]">
                      {filteredContacts.filter(c => c.unread > 0).map(contact => (
                        <div
                          key={contact.id}
                          className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors flex items-center ${
                            selectedContact?.id === contact.id ? "bg-gray-50" : ""
                          }`}
                          onClick={() => handleContactSelect(contact)}
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
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ai" className="m-0">
                    <div className="overflow-y-auto max-h-[calc(100vh-320px)]">
                      {filteredContacts.filter(c => c.isBot).map(contact => (
                        <div
                          key={contact.id}
                          className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors flex items-center ${
                            selectedContact?.id === contact.id ? "bg-gray-50" : ""
                          }`}
                          onClick={() => handleContactSelect(contact)}
                        >
                          <div className="relative">
                            <Avatar>
                              <AvatarFallback className="bg-purple-500">
                                <Bot className="h-4 w-4 text-white" />
                              </AvatarFallback>
                            </Avatar>
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
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
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Chat area - shown when a contact is selected */}
              <div className={`flex-1 flex flex-col ${mobileView === "list" ? "hidden md:flex" : "flex"}`}>
                {selectedContact ? (
                  <>
                    <div className="p-3 border-b flex justify-between items-center">
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="md:hidden mr-2"
                          onClick={() => setMobileView("list")}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Avatar>
                          {selectedContact.avatar ? (
                            <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                          ) : (
                            <AvatarFallback className={selectedContact.isBot ? "bg-purple-500" : "bg-blue-500"}>
                              {selectedContact.isBot ? <Bot className="h-4 w-4 text-white" /> : selectedContact.name.charAt(0)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="ml-3">
                          <h3 className="font-medium">{selectedContact.name}</h3>
                          <p className="text-xs text-gray-500">
                            {selectedContact.status === "online"
                              ? "Online"
                              : selectedContact.status === "away"
                              ? "Away"
                              : "Offline"}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <Button variant="ghost" size="sm" className="text-gray-500" onClick={() => toast({ title: "Call feature", description: "Voice call feature coming soon!" })}>
                          <Phone className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500" onClick={() => toast({ title: "Video feature", description: "Video call feature coming soon!" })}>
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
                    
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                      {currentMessages.length > 0 ? (
                        <div className="space-y-4">
                          {currentMessages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${
                                message.senderId === "current-user"
                                  ? "justify-end"
                                  : "justify-start"
                              }`}
                            >
                              {message.senderId !== "current-user" && (
                                <Avatar className="mr-2 flex-shrink-0">
                                  {selectedContact.avatar ? (
                                    <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                                  ) : (
                                    <AvatarFallback className={selectedContact.isBot ? "bg-purple-500" : "bg-blue-500"}>
                                      {selectedContact.isBot ? <Bot className="h-4 w-4 text-white" /> : selectedContact.name.charAt(0)}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                              )}
                              <div
                                className={`max-w-[75%] px-4 py-2 rounded-lg ${
                                  message.senderId === "current-user"
                                    ? "bg-blue-500 text-white"
                                    : "bg-white border"
                                }`}
                              >
                                <p>{message.content}</p>
                                <div
                                  className={`text-xs mt-1 ${
                                    message.senderId === "current-user"
                                      ? "text-blue-100"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {formatMessageTime(message.timestamp)}
                                </div>
                              </div>
                            </div>
                          ))}
                          <div ref={messagesEndRef} />
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <MessageSquare className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                            <p>No messages yet</p>
                            <p className="text-sm">Start a conversation!</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <form onSubmit={handleSendMessage} className="p-3 border-t flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-gray-500"
                        onClick={() => toast({ title: "Attachments", description: "Attachment feature coming soon!" })}
                      >
                        <PaperclipIcon className="h-5 w-5" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-gray-500"
                        onClick={() => toast({ title: "Emoji", description: "Emoji picker coming soon!" })}
                      >
                        <Smile className="h-5 w-5" />
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600"
                        disabled={!messageInput.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Mail className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p>Select a conversation</p>
                      <p className="text-sm">Choose from your existing conversations or start a new one.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messaging;
