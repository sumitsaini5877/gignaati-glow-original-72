
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: number;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
};

const SupportChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi there! I'm your Gignaati AI assistant. How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // FAQ knowledge base for the AI assistant
  const faqResponses: Record<string, string> = {
    "booking": "To book an AI agent, browse our marketplace and select the one that fits your needs. Click 'Book Now' to proceed with payment.",
    "payment": "We accept all major credit cards, PayPal, and crypto payments. Your payment information is securely processed.",
    "refund": "You can request a refund within 7 days of purchase. Submit a support ticket with your order details and reason for the refund.",
    "commission": "Gignaati charges a 15% commission fee on all completed transactions to maintain the platform and provide support.",
    "post gig": "To post a gig, create a freelancer account, complete your profile, and click 'Post a Gig' from your dashboard.",
    "review": "Gigs are typically reviewed within 24-48 hours before going live on the marketplace.",
    "withdraw": "You can withdraw your earnings once they clear the security hold period (14 days after order completion).",
    "default": "I'm not sure I understand your question. Could you please rephrase or ask about something specific like booking, payments, or posting gigs?"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: messages.length,
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    simulateResponse(input.trim());
  };

  const simulateResponse = (query: string) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      let responseText = faqResponses.default;
      
      // Simple keyword matching for FAQ responses
      const queryLower = query.toLowerCase();
      for (const [keyword, response] of Object.entries(faqResponses)) {
        if (queryLower.includes(keyword.toLowerCase())) {
          responseText = response;
          break;
        }
      }
      
      const assistantMessage: Message = {
        id: messages.length + 1,
        text: responseText,
        sender: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col border rounded-md h-[400px]">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[80%] ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Avatar className={`h-8 w-8 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                  {message.sender === "user" ? (
                    <AvatarFallback className="bg-blue-500 text-white">U</AvatarFallback>
                  ) : (
                    <>
                      <AvatarImage src="/placeholder.svg" alt="AI" />
                      <AvatarFallback className="bg-purple-500 text-white">AI</AvatarFallback>
                    </>
                  )}
                </Avatar>
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback className="bg-purple-500 text-white">AI</AvatarFallback>
                </Avatar>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t p-3">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="sm" disabled={input.trim() === "" || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SupportChatInterface;
