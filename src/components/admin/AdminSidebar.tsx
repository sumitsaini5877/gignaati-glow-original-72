
import { 
  LayoutDashboard,
  Users,
  Shield,
  Key,
  FileText
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}

export const SidebarItem = ({ 
  icon, 
  label, 
  active, 
  onClick, 
  badge 
}: SidebarItemProps) => {
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
        <span className="inline-flex items-center justify-center h-5 min-w-5 px-1 text-xs font-medium text-white bg-red-500 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: "users",
      label: "User Management",
      icon: <Users size={18} />,
    },
    {
      id: "roles",
      label: "Role Management",
      icon: <Shield size={18} />,
    },
    {
      id: "permissions",
      label: "Permissions",
      icon: <Key size={18} />,
    },
    {
      id: "reports",
      label: "Reports",
      icon: <FileText size={18} />,
    }
  ];

  return (
    <nav className="py-2">
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          active={activeTab === item.id}
          onClick={() => setActiveTab(item.id)}
        />
      ))}
    </nav>
  );
};

export default AdminSidebar;
