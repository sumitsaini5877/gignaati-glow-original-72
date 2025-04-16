
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AuthGuard from "@/components/auth/AuthGuard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FileText, DollarSign, Users, TrendingUp, Plus } from "lucide-react";

const fakeData = [
  { name: "Jan", views: 12, orders: 4 },
  { name: "Feb", views: 19, orders: 7 },
  { name: "Mar", views: 25, orders: 13 },
  { name: "Apr", views: 32, orders: 17 },
  { name: "May", views: 45, orders: 20 },
  { name: "Jun", views: 37, orders: 15 },
];

const CreatorDashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Creator";
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    // Verify user role
    if (userRole !== "Creator") {
      localStorage.setItem("userRole", "Creator");
    }
  }, [userRole]);

  const handlePostGig = () => {
    navigate("/post-gig");
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 mt-16 mb-16 flex-grow">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Creator Dashboard</h1>
                <p className="text-gray-600 mb-4">Welcome back, {userName}! Here's an overview of your gigs and performance.</p>
              </div>
              
              <Button onClick={handlePostGig} className="bg-gignaati-coral hover:bg-red-500 flex items-center gap-2">
                <Plus size={16} />
                Post New Gig
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Gigs</p>
                    <h3 className="text-2xl font-bold mt-1">3</h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Earnings</p>
                    <h3 className="text-2xl font-bold mt-1">$1,250</h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Orders</p>
                    <h3 className="text-2xl font-bold mt-1">24</h3>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                    <h3 className="text-2xl font-bold mt-1">8.5%</h3>
                  </div>
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Views vs. Orders (Last 6 months)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={fakeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="views" fill="#3b82f6" name="Profile Views" />
                      <Bar dataKey="orders" fill="#ef4444" name="Orders" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest gig activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="font-medium">New order received</p>
                    <p className="text-sm text-gray-500">AI Chatbot Integration - Basic Package</p>
                    <p className="text-xs text-gray-500">Today, 10:23 AM</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="font-medium">Gig viewed 12 times</p>
                    <p className="text-sm text-gray-500">Custom ML Model Development</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="font-medium">Review received</p>
                    <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐ "Excellent work!"</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Complete Your Profile</h3>
                <p className="text-gray-600 mb-3">Add more details to increase your chances of getting hired.</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">65% Complete</p>
                <Button variant="outline" className="w-full mt-4">Complete Profile</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Optimize Your Gigs</h3>
                <p className="text-gray-600 mb-4">Get tips on how to improve your gig visibility and conversion.</p>
                <Button variant="outline" className="w-full">View Tips</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Join Creator Community</h3>
                <p className="text-gray-600 mb-4">Connect with other AI creators and share knowledge.</p>
                <Button variant="outline" className="w-full">Join Community</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default CreatorDashboard;
