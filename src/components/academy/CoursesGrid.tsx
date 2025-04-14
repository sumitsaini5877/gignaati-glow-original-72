
import React from "react";
import { BookOpen } from "lucide-react";
import CourseCard from "./CourseCard";

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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
      {courses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold mb-2">No courses found</h3>
          <p className="text-gray-500">Try adjusting your search query</p>
        </div>
      )}
    </>
  );
};

export default CoursesGrid;
