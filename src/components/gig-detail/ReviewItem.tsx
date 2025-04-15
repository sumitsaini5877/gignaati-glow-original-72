
import { Star } from "lucide-react";

interface ReviewProps {
  avatar: string;
  user: string;
  date: string;
  rating: number;
  text: string;
}

const ReviewItem = ({ avatar, user, date, rating, text }: ReviewProps) => {
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
    </div>
  );
};

export default ReviewItem;
