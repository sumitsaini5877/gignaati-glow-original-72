
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface AchievementProps {
  title: string;
  description: string;
  earned: boolean;
  progress?: number;
  icon: React.ReactNode;
}

const AchievementCard = ({ title, description, earned, progress = 0, icon }: AchievementProps) => {
  return (
    <div className={`rounded-lg p-4 border ${
      earned ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50"
    }`}>
      <div className="flex flex-col items-center text-center">
        <div className={`mb-3 ${!earned && "opacity-50"}`}>
          {icon}
        </div>
        <h3 className="font-medium text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">{description}</p>
        
        {earned ? (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
            Earned
          </Badge>
        ) : (
          <div className="w-full">
            <Progress value={progress} className="h-1.5 mb-1" />
            <span className="text-xs text-gray-500">{progress}% complete</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
