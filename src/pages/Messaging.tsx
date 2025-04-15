
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useMessaging from "@/hooks/useMessaging";
import ContactList from "@/components/messaging/ContactList";
import ChatArea from "@/components/messaging/ChatArea";

const Messaging = () => {
  const {
    contacts,
    selectedContact,
    messages,
    handleContactSelect,
    handleSendMessage,
    setSelectedContact
  } = useMessaging();
  
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const navigate = useNavigate();

  const onContactSelect = (contact: Contact) => {
    handleContactSelect(contact);
    setMobileView("chat");
  };

  const handleBackClick = () => {
    setMobileView("list");
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
              <div className={mobileView === "chat" ? "hidden md:block" : "block"}>
                <ContactList 
                  contacts={contacts}
                  selectedContact={selectedContact}
                  onSelectContact={onContactSelect}
                />
              </div>
              
              {/* Chat area - shown when a contact is selected */}
              <div className={`flex-1 ${mobileView === "list" ? "hidden md:flex" : "flex"}`}>
                <ChatArea
                  selectedContact={selectedContact}
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  onBackClick={handleBackClick}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Add type definitions
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

export default Messaging;
