
import { useState } from "react";
import { Star } from "lucide-react";
import ReviewReply from "./ReviewReply";
import { useNavigate } from "react-router-dom";

interface Reply {
  user: string;
  avatar: string;
  text: string;
  date: string;
}

interface ReviewProps {
  avatar: string;
  user: string;
  date: string;
  rating: number;
  text: string;
  gigId: string;
  isAuthenticated: boolean;
  replies?: Reply[];
}

const ReviewItem = ({ 
  avatar, 
  user, 
  date, 
  rating, 
  text, 
  gigId, 
  isAuthenticated, 
  replies: initialReplies = [] 
}: ReviewProps) => {
  const navigate = useNavigate();
  const [replies, setReplies] = useState<Reply[]>(initialReplies);

  const handleAddReply = (replyText: string) => {
    // In a real app, this would send to an API
    const newReply = {
      user: "Current User", // In a real app, this would come from auth
      avatar: "/placeholder.svg", // In a real app, this would be the user's avatar
      text: replyText,
      date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
    };
    
    setReplies([...replies, newReply]);
  };

  const handleRequestLogin = () => {
    // Store the current URL to redirect back after login
    localStorage.setItem("authRedirectUrl", `/gig/${gigId}`);
    // Navigate to auth page
    navigate("/auth");
  };

  return (
    <div className="border-b pb-6 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-3 mb-2">
        <img 
          src={avatar} 
          alt={user} 
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-medium">{user}</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700">{text}</p>
      
      {/* Reply section */}
      <ReviewReply 
        replies={replies}
        onAddReply={handleAddReply}
        isAuthenticated={isAuthenticated}
        onRequestLogin={handleRequestLogin}
      />
    </div>
  );
};

export default ReviewItem;
