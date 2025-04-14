
import React from "react";
import { Trophy } from "lucide-react";
import AchievementCard from "./AchievementCard";

const AchievementsSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Your Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AchievementCard 
          title="First Gig Completed" 
          description="Successfully delivered your first project" 
          points={100}
          icon={<Trophy className="h-6 w-6 text-yellow-500" />}
        />
        <AchievementCard 
          title="Prompt Master" 
          description="Completed the Prompt Engineering course" 
          points={150}
          icon={<Trophy className="h-6 w-6 text-yellow-500" />}
        />
        <AchievementCard 
          title="AI Pioneer" 
          description="Used 5 different AI tools in projects" 
          points={200}
          icon={<Trophy className="h-6 w-6 text-yellow-500" />}
        />
      </div>
    </div>
  );
};

export default AchievementsSection;
