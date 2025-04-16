
import { useState } from "react";
import { Edit, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample permission data
const USERS_WITH_PERMISSIONS = [
  { 
    id: 1, 
    email: "john@example.com", 
    role: "Admin",
    permissions: [
      { id: 1, name: "View Dashboard", active: true },
      { id: 2, name: "Manage Users", active: true },
      { id: 3, name: "Manage Roles", active: true },
      { id: 4, name: "View Reports", active: true },
      { id: 5, name: "Edit System Settings", active: true },
    ] 
  },
  { 
    id: 2, 
    email: "sarah@example.com", 
    role: "Moderator",
    permissions: [
      { id: 1, name: "View Dashboard", active: true },
      { id: 2, name: "Manage Users", active: false },
      { id: 3, name: "Manage Roles", active: false },
      { id: 4, name: "View Reports", active: true },
      { id: 5, name: "Edit System Settings", active: false },
    ] 
  },
  { 
    id: 3, 
    email: "robert@example.com", 
    role: "Creator",
    permissions: [
      { id: 1, name: "View Dashboard", active: true },
      { id: 2, name: "Manage Users", active: false },
      { id: 3, name: "Manage Roles", active: false },
      { id: 4, name: "View Reports", active: false },
      { id: 5, name: "Edit System Settings", active: false },
    ] 
  },
  { 
    id: 4, 
    email: "alice@example.com", 
    role: "Buyer",
    permissions: [
      { id: 1, name: "View Dashboard", active: true },
      { id: 2, name: "Manage Users", active: false },
      { id: 3, name: "Manage Roles", active: false },
      { id: 4, name: "View Reports", active: false },
      { id: 5, name: "Edit System Settings", active: false },
    ] 
  },
  { 
    id: 5, 
    email: "tom@example.com", 
    role: "Ops Team",
    permissions: [
      { id: 1, name: "View Dashboard", active: true },
      { id: 2, name: "Manage Users", active: true },
      { id: 3, name: "Manage Roles", active: false },
      { id: 4, name: "View Reports", active: true },
      { id: 5, name: "Edit System Settings", active: false },
    ] 
  },
];

const PermissionsTable = () => {
  const [users, setUsers] = useState(USERS_WITH_PERMISSIONS);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof USERS_WITH_PERMISSIONS[0] | null>(null);
  
  const usersPerPage = 10;
  
  // Handle search
  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  
  // Toggle permission status
  const togglePermission = (userId: number, permissionId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? {
            ...user,
            permissions: user.permissions.map(perm => 
              perm.id === permissionId 
                ? { ...perm, active: !perm.active } 
                : perm
            )
          }
        : user
    ));
  };
  
  // Open modal with selected user
  const openPermissionModal = (user: typeof USERS_WITH_PERMISSIONS[0]) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Permissions</div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users..."
                className="pl-8 h-9 w-[200px] md:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                <th className="px-4 py-3">S. No.</th>
                <th className="px-4 py-3">Email ID</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Permission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentUsers.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{indexOfFirstUser + index + 1}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <Badge className={
                      user.role === "Admin" ? "bg-red-100 text-red-800" : 
                      user.role === "Moderator" ? "bg-blue-100 text-blue-800" : 
                      user.role === "Creator" ? "bg-purple-100 text-purple-800" :
                      user.role === "Ops Team" ? "bg-amber-100 text-amber-800" :
                      "bg-gray-100 text-gray-800"
                    }>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openPermissionModal(user)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit Permissions
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>

      {/* Permissions Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Permissions</DialogTitle>
            <DialogDescription>
              {selectedUser?.email} - {selectedUser?.role}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-4">
            {selectedUser?.permissions.map((permission) => (
              <div key={permission.id} className="flex items-center justify-between py-2 border-b">
                <span>{permission.name}</span>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={permission.active}
                    onCheckedChange={() => {
                      if (selectedUser) {
                        togglePermission(selectedUser.id, permission.id);
                      }
                    }}
                  />
                  <span className={permission.active ? "text-green-500" : "text-gray-500"}>
                    {permission.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setIsModalOpen(false)}>
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PermissionsTable;
