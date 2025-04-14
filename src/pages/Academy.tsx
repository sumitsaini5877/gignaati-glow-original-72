
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  FileText,
  GraduationCap,
  Layout,
  Lock,
  MessageSquareText,
  Play,
  Search,
  Star,
  Trophy,
  Users,
  Video
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses, topics, skills..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gignaati-coral"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <TabsContent value="courses" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search query</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="achievements" className="mt-0">
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
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Your Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <CertificateCard 
                title="Prompt Engineering Mastery" 
                date="May 12, 2023" 
                icon={<FileText className="h-6 w-6 text-blue-500" />}
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="mt-0">
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
        </TabsContent>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Quiz Assistant</CardTitle>
            <CardDescription>Get help with course material and test your knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                <MessageSquareText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-700">
                  Ask me anything about the courses you're taking. I can help explain concepts, 
                  provide examples, or quiz you on what you've learned.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                    Explain prompt chaining
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                    Quiz me on fine-tuning
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                    Example of few-shot prompting
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type your question here..."
                className="w-full p-3 pr-12 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-md px-3 py-1 bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                Ask
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

interface CourseProps {
  course: {
    id: number;
    title: string;
    description: string;
    category: string;
    level: string;
    lessons: number;
    duration: string;
    enrolled: number;
    completed: boolean;
    progress: number;
  };
}

const CourseCard = ({ course }: CourseProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        {course.completed && (
          <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1">
            <CheckCircle className="h-5 w-5" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          {getCourseIcon(course.category)}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
              {course.category}
            </Badge>
            <CardTitle className="text-lg">{course.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </span>
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {course.enrolled}
          </span>
        </div>
        
        {course.progress > 0 && (
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          className={`w-full ${
            course.completed 
              ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
              : course.progress > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gignaati-coral hover:bg-red-500"
          }`}
        >
          {course.completed 
            ? "View Certificate" 
            : course.progress > 0
              ? "Continue Learning"
              : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const getCourseIcon = (category: string) => {
  const iconClass = "h-16 w-16 text-white opacity-80";
  
  switch (category.toLowerCase()) {
    case "prompt engineering":
      return <Edit className={iconClass} />;
    case "design":
      return <Layout className={iconClass} />;
    case "development":
      return <Code className={iconClass} />;
    case "automation":
      return <Zap className={iconClass} />;
    case "model development":
      return <Cpu className={iconClass} />;
    case "chatbots":
      return <MessageSquareText className={iconClass} />;
    default:
      return <BookOpen className={iconClass} />;
  }
};

const Edit = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Cpu = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

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

interface CertificateProps {
  title: string;
  date: string;
  icon: React.ReactNode;
}

const CertificateCard = ({ title, date, icon }: CertificateProps) => {
  return (
    <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-gray-500">Issued on {date}</p>
      </div>
      <Button variant="outline" size="sm">
        <Download className="h-4 w-4 mr-1" />
        PDF
      </Button>
    </div>
  );
};

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

export default Academy;
