
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import ReviewItem from "./ReviewItem";

interface Review {
  user: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

const ReviewsSection = ({ rating, reviewCount, reviews }: ReviewsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500">({reviewCount} reviews)</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;
