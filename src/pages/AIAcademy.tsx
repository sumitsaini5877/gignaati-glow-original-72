
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Star } from "lucide-react";

const AIAcademy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 bg-gradient-to-r from-[#14213D] to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gignaati AI Academy
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Level up your AI skills with courses designed for freelancers and clients
          </p>
          
          <Button className="bg-[#FCA311] hover:bg-amber-500 text-white px-8 py-2">
            Start Learning
          </Button>
        </div>
      </div>
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
          <p className="text-gray-600">Learn from industry experts and grow your AI skills</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <Badge variant="outline" className="bg-blue-50">Beginner</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm">4.8</span>
                </div>
              </div>
              <CardTitle className="mt-2">AI Prompt Engineering Fundamentals</CardTitle>
              <CardDescription>Master the basics of crafting effective prompts for AI</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>8 Modules</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>20+ Practice Exercises</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>Certificate of Completion</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#14213D] hover:bg-blue-900">Start Course</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="h-40 bg-gradient-to-r from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <Badge variant="outline" className="bg-green-50">Intermediate</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm">4.9</span>
                </div>
              </div>
              <CardTitle className="mt-2">Building AI Agents with APIs</CardTitle>
              <CardDescription>Learn to create and deploy functional AI agents</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>12 Modules</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>5 Projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>Technical Certificate</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#14213D] hover:bg-blue-900">Start Course</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="h-40 bg-gradient-to-r from-amber-500 to-orange-600 rounded-t-lg flex items-center justify-center">
                <Award className="h-16 w-16 text-white" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <Badge variant="outline" className="bg-amber-50">Advanced</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm">4.7</span>
                </div>
              </div>
              <CardTitle className="mt-2">Enterprise AI Solutions</CardTitle>
              <CardDescription>Create scalable AI systems for businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>10 Modules</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>Case Studies</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span>Expert Certification</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#14213D] hover:bg-blue-900">Start Course</Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Leaderboard */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Academy Leaderboard</h2>
            <p className="text-gray-600">Top learners this month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="font-bold text-lg w-8">{num}</span>
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">User Name</p>
                      <p className="text-sm text-gray-500">1,200 XP</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Badge className="bg-amber-500">5 Courses</Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline">View Full Leaderboard</Button>
            </div>
          </div>
        </div>
        
        {/* Upcoming Courses */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 border border-dashed border-gray-300 rounded-lg">
              <h3 className="font-bold">Advanced Vector Databases</h3>
              <p className="text-gray-600 text-sm mt-2">Release date: June 2025</p>
            </div>
            <div className="p-6 border border-dashed border-gray-300 rounded-lg">
              <h3 className="font-bold">AI Ethics & Governance</h3>
              <p className="text-gray-600 text-sm mt-2">Release date: July 2025</p>
            </div>
            <div className="p-6 border border-dashed border-gray-300 rounded-lg">
              <h3 className="font-bold">AI for Marketing</h3>
              <p className="text-gray-600 text-sm mt-2">Release date: August 2025</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIAcademy;
