import { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

type Message = {
  id: string;
  sender: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  isBot?: boolean;
};

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

interface ChatMessagesProps {
  messages: Message[];
  contact: Contact | null;
}

const ChatMessages = ({ messages, contact }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  if (!contact) {
    return (
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((message) => (
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
                  {contact.avatar ? (
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                  ) : (
                    <AvatarFallback className={contact.isBot ? "bg-purple-500" : "bg-blue-500"}>
                      {contact.isBot ? <Bot className="h-4 w-4 text-white" /> : contact.name.charAt(0)}
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
            <p>No messages yet</p>
            <p className="text-sm">Start a conversation!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
