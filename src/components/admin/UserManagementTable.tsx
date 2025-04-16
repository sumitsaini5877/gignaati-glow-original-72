
import { useState } from "react";
import { Edit, Filter, Search, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample user data
const USERS = [
  { id: 1, email: "john@example.com", username: "johndoe", role: "Admin", joinDate: "Jan 10, 2023", active: true },
  { id: 2, email: "sarah@example.com", username: "sarahlee", role: "Moderator", joinDate: "Mar 5, 2023", active: true },
  { id: 3, email: "robert@example.com", username: "robertkim", role: "Creator", joinDate: "Apr 22, 2023", active: false },
  { id: 4, email: "alice@example.com", username: "alicemiller", role: "Buyer", joinDate: "May 15, 2023", active: true },
  { id: 5, email: "tom@example.com", username: "tomlee", role: "Ops Team", joinDate: "June 3, 2023", active: false },
  { id: 6, email: "jessica@example.com", username: "jessicaparker", role: "Creator", joinDate: "July 12, 2023", active: true },
  { id: 7, email: "michael@example.com", username: "michaelscott", role: "Buyer", joinDate: "Aug 21, 2023", active: true },
  { id: 8, email: "david@example.com", username: "davidwallace", role: "Ops Team", joinDate: "Sept 9, 2023", active: false },
  { id: 9, email: "emily@example.com", username: "emilyjohnson", role: "Moderator", joinDate: "Oct 15, 2023", active: true },
  { id: 10, email: "daniel@example.com", username: "danielsmith", role: "Creator", joinDate: "Nov 28, 2023", active: true },
  { id: 11, email: "lisa@example.com", username: "lisawilson", role: "Admin", joinDate: "Dec 5, 2023", active: false },
  { id: 12, email: "kevin@example.com", username: "kevinmalone", role: "Buyer", joinDate: "Jan 17, 2024", active: true },
];

const UserManagementTable = () => {
  const [users, setUsers] = useState(USERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  
  // Toggle user active status
  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: !user.active } : user
    ));
  };
  
  // Handle search
  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">User Management</div>
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
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Joining Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{indexOfFirstUser + index + 1}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.username}</td>
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
                <td className="px-4 py-3 text-sm text-gray-600">{user.joinDate}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={user.active}
                      onCheckedChange={() => toggleUserStatus(user.id)}
                    />
                    <span className={user.active ? "text-green-500" : "text-gray-500"}>
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
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
  );
};

export default UserManagementTable;
