
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import our components
import SearchBar from "@/components/academy/SearchBar";
import CoursesGrid from "@/components/academy/CoursesGrid";
import AchievementsSection from "@/components/academy/AchievementsSection";
import CertificatesSection from "@/components/academy/CertificatesSection";
import LeaderboardSection from "@/components/academy/LeaderboardSection";
import QuizAssistant from "@/components/academy/QuizAssistant";

const Academy = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [searchQuery, setSearchQuery] = useState("");

  const filterCourses = (courses: any[], query: string) => {
    if (!query.trim()) return courses;
    return courses.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) || 
      course.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  const courses = [
    {
      id: 1,
      title: "Prompt Engineering Mastery",
      description: "Learn to create powerful prompts for LLMs to get the exact outputs you need.",
      category: "Prompt Engineering",
      level: "Beginner to Advanced",
      lessons: 12,
      duration: "4 hours",
      enrolled: 1243,
      completed: true,
      progress: 100
    },
    {
      id: 2,
      title: "AI Model Fine-Tuning",
      description: "Master the art of customizing foundation models for specific use cases.",
      category: "Model Development",
      level: "Intermediate",
      lessons: 18,
      duration: "6 hours",
      enrolled: 965,
      completed: false,
      progress: 67
    },
    {
      id: 3,
      title: "Automation with Custom GPTs",
      description: "Build advanced GPT apps to automate workflows and boost productivity.",
      category: "Automation",
      level: "Advanced",
      lessons: 15,
      duration: "5 hours",
      enrolled: 1456,
      completed: false,
      progress: 34
    },
    {
      id: 4,
      title: "AI UX/UI Design Principles",
      description: "Design intuitive interfaces for AI-powered applications and chatbots.",
      category: "Design",
      level: "Intermediate",
      lessons: 10,
      duration: "3.5 hours",
      enrolled: 789,
      completed: false,
      progress: 0
    },
    {
      id: 5,
      title: "Building AI Agents with Langchain",
      description: "Create autonomous AI agents that can perform complex tasks.",
      category: "Development",
      level: "Advanced",
      lessons: 20,
      duration: "8 hours",
      enrolled: 1102,
      completed: false,
      progress: 0
    },
    {
      id: 6,
      title: "Conversational AI Fundamentals",
      description: "Learn core concepts behind building engaging AI assistants.",
      category: "Chatbots",
      level: "Beginner",
      lessons: 8,
      duration: "2.5 hours",
      enrolled: 2345,
      completed: false,
      progress: 0
    },
  ];

  const filteredCourses = filterCourses(courses, searchQuery);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gignaati Academy</h1>
          <p className="text-lg text-gray-600 mb-6">
            Level up your AI skills and earn certifications to stand out in the marketplace
          </p>
          
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <div className="w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses" className="mt-0">
                <CoursesGrid courses={filteredCourses} />
              </TabsContent>
              
              <TabsContent value="achievements" className="mt-0">
                <AchievementsSection />
                <CertificatesSection />
              </TabsContent>
              
              <TabsContent value="leaderboard" className="mt-0">
                <LeaderboardSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <QuizAssistant />
      </div>
      
      <Footer />
    </div>
  );
};

export default Academy;
