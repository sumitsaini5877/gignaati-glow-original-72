
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";
import UserManagementTable from "@/components/admin/UserManagementTable";
import RoleManagementTable from "@/components/admin/RoleManagementTable";
import PermissionsTable from "@/components/admin/PermissionsTable";

const AdminConsole = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-8 flex-grow">
        <div className="border-b pb-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Console</h1>
              <p className="text-gray-500">Manage your platform and users</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardContent className="p-0">
                <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">AI Admin Assistant</p>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Run command or query..."
                      className="h-9 text-sm"
                    />
                    <Button size="sm" className="h-9 px-3 bg-black hover:bg-gray-800">
                      <Terminal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="dashboard" className="m-0">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                    <p className="text-gray-500">Welcome to the admin dashboard.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="users" className="m-0">
                <Card>
                  <CardContent className="p-6">
                    <UserManagementTable />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="roles" className="m-0">
                <Card>
                  <CardContent className="p-6">
                    <RoleManagementTable />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="permissions" className="m-0">
                <Card>
                  <CardContent className="p-6">
                    <PermissionsTable />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="m-0">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Reports</h2>
                    <p className="text-gray-500">View and manage system reports.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              Admin Console v1.3.0 | Last updated: April 16, 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminConsole;
