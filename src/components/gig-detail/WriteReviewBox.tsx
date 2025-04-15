
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface WriteReviewBoxProps {
  gigId: string;
  onReviewSubmit: (reviewData: {
    text: string;
    rating: number;
    user: string;
    avatar: string;
    date: string;
  }) => void;
  isAuthenticated: boolean;
}

const WriteReviewBox = ({ gigId, onReviewSubmit, isAuthenticated }: WriteReviewBoxProps) => {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleMouseEnter = (star: number) => {
    setHoveredRating(star);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (!isAuthenticated) {
      // Store the current URL so we can redirect back after authentication
      localStorage.setItem("authRedirectUrl", `/gig/${gigId}`);
      navigate("/auth");
      return;
    }

    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating for your review",
        variant: "destructive"
      });
      return;
    }

    if (reviewText.trim() === "") {
      toast({
        title: "Review Required",
        description: "Please write a review before submitting",
        variant: "destructive"
      });
      return;
    }

    // In a real app, we would send this to an API
    // For now, we'll create a mock review
    const newReview = {
      text: reviewText,
      rating: rating,
      user: "Current User", // In a real app, this would come from auth
      avatar: "/placeholder.svg", // In a real app, this would be the user's avatar
      date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
    };

    onReviewSubmit(newReview);
    
    // Reset the form
    setReviewText("");
    setRating(0);
    
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-7 w-7 cursor-pointer ${
                  star <= (hoveredRating || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {rating > 0 ? `${rating} out of 5 stars` : "Select a rating"}
            </span>
          </div>
          <Textarea
            placeholder={isAuthenticated ? "Share your experience with this service..." : "Please log in to write a review"}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="min-h-[120px]"
            disabled={!isAuthenticated}
          />
        </div>
        <Button 
          onClick={handleSubmit} 
          className="w-full"
        >
          {isAuthenticated ? "Submit Review" : "Log In to Write a Review"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default WriteReviewBox;
