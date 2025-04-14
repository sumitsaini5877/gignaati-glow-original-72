
import React from "react";
import LeaderboardItem from "./LeaderboardItem";

const LeaderboardSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">XP Leaderboard</h2>
        <p className="text-gray-500">Top learners this month</p>
      </div>
      
      <div className="p-0">
        <LeaderboardItem 
          rank={1} 
          name="Jessica Chen" 
          xp={12450} 
          avatar="JC"
          badges={3}
          isYou={false}
        />
        <LeaderboardItem 
          rank={2} 
          name="Michael Stewart" 
          xp={10820} 
          avatar="MS"
          badges={2}
          isYou={false}
        />
        <LeaderboardItem 
          rank={3} 
          name="Sophia Rodriguez" 
          xp={9340} 
          avatar="SR"
          badges={4}
          isYou={false}
        />
        <LeaderboardItem 
          rank={4} 
          name="David Kim" 
          xp={8760} 
          avatar="DK"
          badges={1}
          isYou={true}
        />
        <LeaderboardItem 
          rank={5} 
          name="Emma Wilson" 
          xp={7890} 
          avatar="EW"
          badges={2}
          isYou={false}
        />
        <LeaderboardItem 
          rank={6} 
          name="James Johnson" 
          xp={6540} 
          avatar="JJ"
          badges={1}
          isYou={false}
        />
        <LeaderboardItem 
          rank={7} 
          name="Olivia Brown" 
          xp={5980} 
          avatar="OB"
          badges={2}
          isYou={false}
        />
      </div>
    </div>
  );
};

export default LeaderboardSection;
