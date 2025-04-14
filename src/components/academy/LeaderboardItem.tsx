
import React from "react";
import { Award, Star, Trophy } from "lucide-react";

interface LeaderboardItemProps {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  badges: number;
  isYou: boolean;
}

const LeaderboardItem = ({ rank, name, xp, avatar, badges, isYou }: LeaderboardItemProps) => {
  return (
    <div className={`flex items-center p-4 border-b last:border-b-0 ${
      isYou ? "bg-blue-50" : ""
    }`}>
      <div className="w-8 text-center font-bold text-lg text-gray-700">
        {rank}
      </div>
      
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium ml-4">
        {avatar}
      </div>
      
      <div className="ml-4 flex-1">
        <div className="flex items-center">
          <p className="font-medium">
            {name}
            {isYou && <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">You</span>}
          </p>
          {badges > 0 && (
            <div className="ml-2 flex items-center">
              <Award className="h-4 w-4 text-yellow-500" />
              <span className="text-xs text-gray-500 ml-1">×{badges}</span>
            </div>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Star className="h-3 w-3 text-yellow-500 mr-1" />
          <span>{xp.toLocaleString()} XP</span>
        </div>
      </div>
      
      {rank <= 3 && (
        <div className="ml-auto">
          <Trophy className={`h-5 w-5 ${
            rank === 1 ? "text-yellow-500" : 
            rank === 2 ? "text-gray-400" : 
            "text-amber-700"
          }`} />
        </div>
      )}
    </div>
  );
};

export default LeaderboardItem;
