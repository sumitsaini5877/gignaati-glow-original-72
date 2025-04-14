import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart, BarChart2,
  Bell,
  BookOpen,
  DollarSign,
  Edit,
  ExternalLink,
  Eye,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PlusCircle,
  Settings,
  Star,
  Tag,
  Trash,
  TrendingUp,
  User,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FreelancerDashboard = () => {
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
                <CardTitle className="text-lg font-medium">Freelancer Dashboard</CardTitle>
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
                    label="My Gigs" 
                    active={activeTab === "gigs"} 
                    onClick={() => setActiveTab("gigs")} 
                  />
                  <SidebarItem 
                    icon={<DollarSign size={18} />} 
                    label="Earnings" 
                    active={activeTab === "earnings"} 
                    onClick={() => setActiveTab("earnings")} 
                  />
                  <SidebarItem 
                    icon={<MessageSquare size={18} />} 
                    label="Messages" 
                    active={activeTab === "messages"} 
                    onClick={() => setActiveTab("messages")} 
                    badge="4"
                  />
                  <SidebarItem 
                    icon={<Bell size={18} />} 
                    label="Notifications" 
                    active={activeTab === "notifications"} 
                    onClick={() => setActiveTab("notifications")} 
                    badge="7"
                  />
                  <SidebarItem 
                    icon={<Star size={18} />} 
                    label="Reviews" 
                    active={activeTab === "reviews"} 
                    onClick={() => setActiveTab("reviews")} 
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
                  <p className="text-sm font-medium">Create New Gig</p>
                  <Button asChild className="w-full bg-gignaati-coral hover:bg-red-500">
                    <Link to="/post-gig">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Gig
                    </Link>
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
                    value="3" 
                    change="+1 last month"
                    icon={<FileText className="h-6 w-6 text-green-500" />} 
                  />
                  <StatCard 
                    title="Total Earnings" 
                    value="$3,428" 
                    change="+$890 last month"
                    icon={<DollarSign className="h-6 w-6 text-blue-500" />} 
                  />
                  <StatCard 
                    title="Avg. Rating" 
                    value="4.8" 
                    change="23 reviews"
                    icon={<Star className="h-6 w-6 text-amber-500" />} 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">Earnings Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="h-48 flex items-center justify-center">
                        <BarChart2 className="h-32 w-32 text-gray-300" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">Wallet Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">Available for withdrawal</p>
                          <p className="text-lg font-bold">$1,240</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">Pending clearance</p>
                          <p className="text-lg font-medium text-gray-500">$680</p>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800">
                          Withdraw Funds
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mb-6">
                  <CardHeader className="pb-2 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-medium">My Gigs</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/post-gig">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        New Gig
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <GigItem 
                        title="AI Chatbot Development" 
                        price="$120"
                        views="243"
                        orders="18"
                        rating={4.9}
                      />
                      <GigItem 
                        title="Custom GPT Model Training" 
                        price="$300"
                        views="187"
                        orders="7"
                        rating={4.7}
                      />
                      <GigItem 
                        title="AI Content Generator" 
                        price="$85"
                        views="342"
                        orders="26"
                        rating={4.8}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">AI Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <SuggestionItem 
                        title="Optimize your gig title"
                        description="Try 'Professional AI Chatbot Development with Custom Training' to improve visibility."
                        icon={<Tag className="h-5 w-5 text-blue-500" />}
                      />
                      <SuggestionItem 
                        title="Add more portfolio items"
                        description="Gigs with 5+ portfolio items get 70% more orders on average."
                        icon={<FileText className="h-5 w-5 text-green-500" />}
                      />
                      <SuggestionItem 
                        title="Respond faster to messages"
                        description="Your average response time is 8 hours. Aim for under 2 hours to improve ranking."
                        icon={<MessageSquare className="h-5 w-5 text-amber-500" />}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="gigs" className="m-0">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Gigs</CardTitle>
                    <Button asChild>
                      <Link to="/post-gig">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create New Gig
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* My gigs would go here */}
                      <p className="text-muted-foreground text-center">This tab is under development.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Other tab contents would be implemented here */}
              <TabsContent value="earnings" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings</CardTitle>
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
  change,
  icon 
}: { 
  title: string; 
  value: string; 
  change?: string;
  icon: React.ReactNode; 
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            {change && <p className="text-xs text-green-500 mt-1">{change}</p>}
          </div>
          <div>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const GigItem = ({ 
  title, 
  price,
  views,
  orders,
  rating
}: { 
  title: string; 
  price: string;
  views: string;
  orders: string;
  rating: number;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex-1 min-w-0 mb-4 sm:mb-0">
        <h3 className="text-base font-medium truncate">{title}</h3>
        <div className="flex flex-wrap items-center mt-1 text-sm text-gray-500">
          <span className="flex items-center mr-4">
            <Eye className="h-4 w-4 mr-1" />
            {views} views
          </span>
          <span className="flex items-center mr-4">
            <FileText className="h-4 w-4 mr-1" />
            {orders} orders
          </span>
          <span className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            {rating}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto">
        <span className="text-base font-bold text-gray-900 mr-4">{price}</span>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const SuggestionItem = ({ 
  title, 
  description,
  icon
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex p-4 border rounded-lg hover:bg-gray-50">
      <div className="mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600 mt-1">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
