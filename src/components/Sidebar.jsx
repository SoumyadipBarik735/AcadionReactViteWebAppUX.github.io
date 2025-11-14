import React from "react";
import {
  Home,
  User,
  Calendar,
  HandCoins,
  UserPen,
  Utensils,
  UsersRound,
  MessagesSquare,
  Activity,
} from "lucide-react";
const Sidebar = ({ activeComponent, setActiveComponent }) => {
  //  Sidebar menu items in one array (easy to add or remove)
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "student", label: "Student", icon: UsersRound },
    { id: "teachers", label: "Teachers", icon: UserPen },
    {
      id: "event",
      label: "Event",
      icon: Calendar,
    },
    {
      id: "finance",
      label: "Finance",
      icon: HandCoins,
    },
    { id: "food", label: "Food", icon: Utensils },
    { id: "user", label: "User", icon: User },
    { id: "chat", label: "Chat", icon: MessagesSquare },
    { id: "latestactivity", label: "LatestActivity", icon: Activity },
  ];

  return (
    <div className="w-64 h-screen flex flex-col bg-[#352D91] font-poppins sticky top-0">
      {/* Brand Section */}
      <div className="flex gap-5 pl-6 py-6">
        <p className="w-8 h-8 rounded-md bg-[#FB7D5B] font-bold text-2xl text-white flex items-center justify-center">
          A
        </p>
        <p className="text-2xl font-semibold text-white">Acadion</p>
      </div>

      {/*Dynamic Menu Rendering  */}
      <div className="flex flex-col space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveComponent(id)}
            className={`group flex items-center gap-4 text-md px-4 py-3 ml-10 text-left transition-all duration-200 
        ${
          activeComponent === id
            ? "bg-[#F3F4FF] text-[#352D91]  shadow-md rounded-l-full"
            : "text-[#F3F4FF] hover:bg-[#F3F4FF] hover:text-[#352D91] rounded-l-full"
        }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
