
import { useState } from "react";
import { Edit, Filter, Plus, Search, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample role data
const ROLES = [
  { id: 1, name: "Admin", active: true },
  { id: 2, name: "Ops Team Members", active: true },
  { id: 3, name: "Creators", active: true },
  { id: 4, name: "Buyers", active: true },
  { id: 5, name: "Moderators", active: false },
];

const RoleManagementTable = () => {
  const [roles, setRoles] = useState(ROLES);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rolesPerPage = 10;
  
  // Toggle role active status
  const toggleRoleStatus = (roleId: number) => {
    setRoles(roles.map(role => 
      role.id === roleId ? { ...role, active: !role.active } : role
    ));
  };
  
  // Handle search
  const filteredRoles = roles.filter(role => 
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle pagination
  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;
  const currentRoles = filteredRoles.slice(indexOfFirstRole, indexOfLastRole);
  const totalPages = Math.ceil(filteredRoles.length / rolesPerPage);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Role Management</div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search roles..."
              className="pl-8 h-9 w-[200px] md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
          <Button className="bg-black hover:bg-gray-800">
            <Plus className="h-4 w-4 mr-1" />
            Add Role
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              <th className="px-4 py-3">S. No.</th>
              <th className="px-4 py-3">Role Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentRoles.map((role, index) => (
              <tr key={role.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{indexOfFirstRole + index + 1}</td>
                <td className="px-4 py-3">{role.name}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={role.active}
                      onCheckedChange={() => toggleRoleStatus(role.id)}
                    />
                    <span className={role.active ? "text-green-500" : "text-gray-500"}>
                      {role.active ? "Active" : "Inactive"}
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
            Showing {indexOfFirstRole + 1}-{Math.min(indexOfLastRole, filteredRoles.length)} of {filteredRoles.length} roles
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

export default RoleManagementTable;
