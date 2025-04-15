
import { useState, useEffect } from 'react';

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

export const useMessaging = () => {
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

  useEffect(() => {
    // Select first contact by default
    if (contacts.length > 0 && !selectedContact) {
      setSelectedContact(contacts[0]);
    }
  }, [contacts]);

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
  };

  const handleSendMessage = (content: string) => {
    if (!selectedContact) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: "You",
      senderId: "current-user",
      content,
      timestamp: new Date(),
      read: true,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate reply for demo
    setTimeout(() => {
      if (!selectedContact) return;
      
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
  };

  // Get filtered messages for the currently selected contact
  const getCurrentMessages = () => {
    return messages.filter(
      message => 
        (message.senderId === selectedContact?.id || 
        message.senderId === "current-user") && 
        (selectedContact?.id === "1" || message.timestamp > new Date(Date.now() - 60000 * 60 * 24))
    );
  };

  return {
    contacts,
    selectedContact,
    messages: getCurrentMessages(),
    handleContactSelect,
    handleSendMessage,
    setSelectedContact
  };
};

export default useMessaging;
