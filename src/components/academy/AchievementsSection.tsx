
import React from "react";
import { Award, Code, GraduationCap } from "lucide-react";
import AchievementCard from "./AchievementCard";

const AchievementsSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Your Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AchievementCard 
          title="Prompt Master" 
          description="Completed all prompt engineering courses" 
          earned={true}
          icon={<Award className="h-8 w-8 text-yellow-500" />} 
        />
        <AchievementCard 
          title="AI Pioneer" 
          description="Created 5 successful AI agents" 
          earned={true}
          icon={<Trophy className="h-8 w-8 text-yellow-500" />} 
        />
        <AchievementCard 
          title="Knowledge Seeker" 
          description="Completed 10 courses" 
          earned={false}
          progress={60}
          icon={<GraduationCap className="h-8 w-8 text-gray-400" />} 
        />
        <AchievementCard 
          title="Automation Wizard" 
          description="Built 10 automation workflows" 
          earned={false}
          progress={30}
          icon={<Code className="h-8 w-8 text-gray-400" />} 
        />
      </div>
    </div>
  );
};

export default AchievementsSection;
