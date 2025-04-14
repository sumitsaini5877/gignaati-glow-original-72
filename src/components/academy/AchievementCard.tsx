
import React from "react";

export interface AchievementProps {
  title: string;
  description: string;
  points: number;
  icon: React.ReactNode;
}

const AchievementCard = ({ title, description, points, icon }: AchievementProps) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="p-2 bg-blue-50 rounded-md">
          {icon}
        </div>
        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
          {points} XP
        </div>
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default AchievementCard;
