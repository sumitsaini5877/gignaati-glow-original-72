
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, Clock, Users } from "lucide-react";
import { getCourseIcon } from "./utils/icons";

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

export default CourseCard;
