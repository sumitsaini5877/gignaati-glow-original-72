
import { useState, FormEvent } from "react";
import { Send, PaperclipIcon, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [messageInput, setMessageInput] = useState("");
  const { toast } = useToast();

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    onSendMessage(messageInput.trim());
    setMessageInput("");
  };

  return (
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
  );
};

export default ChatInput;
