import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bell,
  BookOpen,
  Clock,
  DollarSign,
  Download,
  FileText,
  HeadphonesIcon,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Star,
  User,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-12 flex-grow">
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  <SidebarItem 
                    icon={<LayoutDashboard size={18} />} 
                    label="Overview" 
                    active={activeTab === "overview"} 
                    onClick={() => setActiveTab("overview")} 
                  />
                  <SidebarItem 
                    icon={<FileText size={18} />} 
                    label="Booked Gigs" 
                    active={activeTab === "booked"} 
                    onClick={() => setActiveTab("booked")} 
                  />
                  <SidebarItem 
                    icon={<Users size={18} />} 
                    label="Saved Freelancers" 
                    active={activeTab === "saved"} 
                    onClick={() => setActiveTab("saved")} 
                  />
                  <SidebarItem 
                    icon={<MessageSquare size={18} />} 
                    label="Inbox" 
                    active={activeTab === "inbox"} 
                    onClick={() => setActiveTab("inbox")} 
                    badge="3"
                  />
                  <SidebarItem 
                    icon={<Bell size={18} />} 
                    label="Notifications" 
                    active={activeTab === "notifications"} 
                    onClick={() => setActiveTab("notifications")} 
                    badge="5"
                  />
                  <SidebarItem 
                    icon={<Download size={18} />} 
                    label="Deployments" 
                    active={activeTab === "deployments"} 
                    onClick={() => setActiveTab("deployments")} 
                  />
                  <SidebarItem 
                    icon={<HeadphonesIcon size={18} />} 
                    label="Support" 
                    active={activeTab === "support"} 
                    onClick={() => setActiveTab("support")} 
                  />
                  <SidebarItem 
                    icon={<User size={18} />} 
                    label="Profile" 
                    active={activeTab === "profile"} 
                    onClick={() => setActiveTab("profile")} 
                  />
                  <SidebarItem 
                    icon={<Settings size={18} />} 
                    label="Settings" 
                    active={activeTab === "settings"} 
                    onClick={() => setActiveTab("settings")} 
                  />
                </nav>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium">Need Custom Agent?</p>
                  <Button className="w-full bg-gignaati-coral hover:bg-red-500">
                    Request Custom
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="overview" className="m-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <StatCard 
                    title="Active Gigs" 
                    value="5" 
                    icon={<FileText className="h-6 w-6 text-green-500" />} 
                  />
                  <StatCard 
                    title="Total Spent" 
                    value="$1,249" 
                    icon={<DollarSign className="h-6 w-6 text-blue-500" />} 
                  />
                  <StatCard 
                    title="Experience Points" 
                    value="450 XP" 
                    icon={<Star className="h-6 w-6 text-amber-500" />} 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">XP Tracker</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                          style={{ width: '45%' }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-sm text-gray-500">
                        <span>450 XP</span>
                        <span>Next Level: 1000 XP</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <ActivityItem 
                          icon={<FileText size={16} />} 
                          title="Booked Content Generator Gig" 
                          time="2 hours ago" 
                        />
                        <ActivityItem 
                          icon={<Star size={16} />} 
                          title="Left a review for AI Chatbot" 
                          time="1 day ago" 
                        />
                        <ActivityItem 
                          icon={<DollarSign size={16} />} 
                          title="Purchased premium package" 
                          time="3 days ago" 
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Deployment Logs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <DeploymentLogItem 
                        name="Content Generator" 
                        status="success" 
                        time="Today, 14:23" 
                        endpoint="/api/content-gen" 
                      />
                      <DeploymentLogItem 
                        name="AI Chatbot Integration" 
                        status="running" 
                        time="Today, 10:45" 
                        endpoint="/api/chatbot" 
                      />
                      <DeploymentLogItem 
                        name="Data Scraper" 
                        status="error" 
                        time="Yesterday, 18:12" 
                        endpoint="/api/scraper" 
                      />
                      <DeploymentLogItem 
                        name="Email Automator" 
                        status="success" 
                        time="Yesterday, 09:10" 
                        endpoint="/api/email" 
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Chat Inbox</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <ChatItem 
                        name="Sarah Williams" 
                        message="I've sent you the API integration document."
                        time="10:23 AM" 
                        unread
                      />
                      <ChatItem 
                        name="Alex Johnson" 
                        message="Looking forward to our meeting tomorrow."
                        time="Yesterday" 
                      />
                      <ChatItem 
                        name="Maria Garcia" 
                        message="Thanks for booking my gig! Let me know if you have any questions."
                        time="Yesterday" 
                        unread
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" size="sm">View All Messages</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="booked" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Booked Gigs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>You have 5 active gigs. View and manage all your bookings here.</p>
                    <div className="mt-6 space-y-4">
                      {/* Booked gigs content here */}
                      <p className="text-muted-foreground text-center">This tab is under development.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Other tab contents would be implemented here */}
              <TabsContent value="inbox" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">This tab is under development.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const SidebarItem = ({ 
  icon, 
  label, 
  active, 
  onClick, 
  badge 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void; 
  badge?: string; 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${
        active ? "bg-gray-100 font-medium" : "text-gray-700"
      }`}
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </div>
      {badge && (
        <span className="inline-flex items-center justify-center h-5 w-5 text-xs font-medium text-white bg-gignaati-coral rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

const StatCard = ({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ActivityItem = ({ 
  icon, 
  title, 
  time 
}: { 
  icon: React.ReactNode; 
  title: string; 
  time: string; 
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-gray-100 p-2 rounded-full mr-3">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

const DeploymentLogItem = ({ 
  name, 
  status, 
  time, 
  endpoint 
}: { 
  name: string; 
  status: "success" | "error" | "running"; 
  time: string; 
  endpoint: string; 
}) => {
  const statusColors = {
    success: "text-green-500",
    error: "text-red-500",
    running: "text-blue-500",
  };
  
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="flex items-center space-x-3">
        <div className={`h-2 w-2 rounded-full ${
          status === "success" ? "bg-green-500" : 
          status === "error" ? "bg-red-500" : 
          "bg-blue-500"
        }`} />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{endpoint}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm ${statusColors[status]}`}>
          {status === "success" ? "Deployed" : 
           status === "error" ? "Failed" : 
           "Running"}
        </p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

const ChatItem = ({ 
  name, 
  message, 
  time, 
  unread 
}: { 
  name: string; 
  message: string; 
  time: string; 
  unread?: boolean; 
}) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
        {name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className={`text-sm ${unread ? "font-semibold" : "font-medium"}`}>
            {name}
          </p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <p className={`text-sm truncate ${unread ? "text-black" : "text-gray-500"}`}>
          {message}
        </p>
      </div>
      {unread && (
        <div className="w-2 h-2 bg-gignaati-coral rounded-full"></div>
      )}
    </div>
  );
};

export default ClientDashboard;
