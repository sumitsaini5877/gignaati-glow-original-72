
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CourseCard from "./CourseCard";
import CertificatePopup from "./CertificatePopup";
import { Icons } from "./utils/icons";

interface Course {
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
}

interface CoursesGridProps {
  courses: Course[];
}

const CoursesGrid = ({ courses }: CoursesGridProps) => {
  const [certificatePopup, setCertificatePopup] = useState<{isOpen: boolean, courseTitle: string}>({
    isOpen: false,
    courseTitle: "",
  });

  const handleCourseCompletion = (courseTitle: string) => {
    setCertificatePopup({
      isOpen: true,
      courseTitle,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-md bg-blue-50">
                    {Icons[course.category] || <Icons.Default />}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="text-xs text-gray-500 mb-4 flex justify-between">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.duration}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <div>
                  {course.completed ? (
                    <Button 
                      variant="outline" 
                      className="w-full mb-2 bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                      onClick={() => handleCourseCompletion(course.title)}
                    >
                      View Certificate
                    </Button>
                  ) : (
                    <Button className="w-full mb-2">
                      {course.progress > 0 ? "Continue Learning" : "Start Course"}
                    </Button>
                  )}
                  
                  <div className="text-xs text-center text-gray-500">
                    {course.enrolled.toLocaleString()} enrolled
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center p-8">
            <h3 className="text-lg font-medium text-gray-500">No courses found</h3>
          </div>
        )}
      </div>
      
      <CertificatePopup 
        isOpen={certificatePopup.isOpen} 
        setIsOpen={(isOpen) => setCertificatePopup({...certificatePopup, isOpen})}
        courseTitle={certificatePopup.courseTitle}
      />
    </>
  );
};

export default CoursesGrid;
