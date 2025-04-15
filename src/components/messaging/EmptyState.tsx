
import { Mail, MessageSquare } from "lucide-react";

interface EmptyStateProps {
  type: "no-chat" | "no-messages";
}

const EmptyState = ({ type }: EmptyStateProps) => {
  if (type === "no-chat") {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <Mail className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>Select a conversation</p>
          <p className="text-sm">Choose from your existing conversations or start a new one.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center text-gray-500">
        <MessageSquare className="h-12 w-12 mx-auto mb-3 text-gray-300" />
        <p>No messages yet</p>
        <p className="text-sm">Start a conversation!</p>
      </div>
    </div>
  );
};

export default EmptyState;
