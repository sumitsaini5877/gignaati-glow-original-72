
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X } from "lucide-react";

interface Reply {
  user: string;
  avatar: string;
  text: string;
  date: string;
}

interface ReviewReplyProps {
  replies: Reply[];
  onAddReply: (text: string) => void;
  isAuthenticated: boolean;
  onRequestLogin: () => void;
}

const ReviewReply = ({ replies = [], onAddReply, isAuthenticated, onRequestLogin }: ReviewReplyProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleSubmitReply = () => {
    if (!isAuthenticated) {
      onRequestLogin();
      return;
    }

    if (replyText.trim() !== "") {
      onAddReply(replyText);
      setReplyText("");
      setIsReplying(false);
    }
  };

  return (
    <div className="pl-6 mt-3 border-l border-gray-200">
      {replies.length > 0 && (
        <div className="space-y-4 mb-3">
          {replies.map((reply, index) => (
            <div key={index} className="flex gap-3">
              <img
                src={reply.avatar}
                alt={reply.user}
                className="w-8 h-8 rounded-full mt-1"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{reply.user}</span>
                  <span className="text-xs text-gray-500">{reply.date}</span>
                </div>
                <p className="text-gray-700 text-sm">{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isReplying ? (
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs flex items-center gap-1 text-gray-600"
          onClick={() => isAuthenticated ? setIsReplying(true) : onRequestLogin()}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Reply
        </Button>
      ) : (
        <div className="space-y-2 mt-2">
          <div className="flex items-start gap-2">
            <Textarea
              placeholder="Write your reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="text-sm min-h-[80px]"
            />
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleSubmitReply}>Reply</Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setIsReplying(false)}
              className="flex items-center gap-1"
            >
              <X className="h-3.5 w-3.5" />
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewReply;
