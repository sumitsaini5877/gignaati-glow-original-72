
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import EmptyState from "./EmptyState";

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

interface ChatAreaProps {
  selectedContact: Contact | null;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onBackClick: () => void;
}

const ChatArea = ({
  selectedContact,
  messages,
  onSendMessage,
  onBackClick
}: ChatAreaProps) => {
  return (
    <div className="flex-1 flex flex-col">
      {selectedContact ? (
        <>
          <ChatHeader 
            contact={selectedContact} 
            onBackClick={onBackClick} 
          />
          <ChatMessages 
            messages={messages} 
            contact={selectedContact} 
          />
          <ChatInput onSendMessage={onSendMessage} />
        </>
      ) : (
        <EmptyState type="no-chat" />
      )}
    </div>
  );
};

export default ChatArea;
