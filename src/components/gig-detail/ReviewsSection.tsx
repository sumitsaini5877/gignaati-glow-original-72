
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import ReviewItem from "./ReviewItem";
import WriteReviewBox from "./WriteReviewBox";
import { useState } from "react";
import TagCloud from "./TagCloud";

interface Reply {
  user: string;
  avatar: string;
  text: string;
  date: string;
}

interface Review {
  user: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  replies?: Reply[];
}

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  reviews: Review[];
  gigId: string;
  isAuthenticated: boolean;
  tags?: string[];
}

const ReviewsSection = ({ 
  rating, 
  reviewCount, 
  reviews: initialReviews, 
  gigId,
  isAuthenticated,
  tags 
}: ReviewsSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews || []);
  
  // Calculate the new average rating when reviews change
  const calculateAverageRating = (reviewsArray: Review[]) => {
    if (reviewsArray.length === 0) return 0;
    const sum = reviewsArray.reduce((total, review) => total + review.rating, 0);
    return Math.round((sum / reviewsArray.length) * 10) / 10; // Round to 1 decimal place
  };
  
  // Handle adding a new review
  const handleAddReview = (newReview: Review) => {
    setReviews([...reviews, newReview]);
  };

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
        {/* Tag cloud display */}
        {tags && tags.length > 0 && (
          <div className="mb-6">
            <TagCloud tags={tags} />
          </div>
        )}
        
        {/* Reviews list */}
        <div className="space-y-6 mb-6">
          {reviews.map((review, index) => (
            <ReviewItem 
              key={index} 
              {...review} 
              gigId={gigId}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
        
        {/* Write a review box */}
        <WriteReviewBox 
          gigId={gigId}
          onReviewSubmit={handleAddReview}
          isAuthenticated={isAuthenticated}
        />
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;
