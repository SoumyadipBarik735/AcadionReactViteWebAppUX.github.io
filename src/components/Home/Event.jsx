import React, { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";
import Calendar2 from "../Home/Calendar";

const Event = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col font-poppins overflow-hidden bg-[#F3F4FF] px-7">
      {/* Header + Search */}
      <div className="w-full flex items-center justify-between mt-5 mb-3">
        <p className="text-[#303972] text-2xl font-bold">Event</p>

        <div className="flex gap-5 items-center">
          {/* Search Bar */}
          <div className="relative w-56">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4D44B5]"
            />
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-300 text-gray-800 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icons */}
          <Bell className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <Settings className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />

          {/* Profile */}
          <div className="flex gap-2 items-center">
            <div>
              <p className="text-[#303972] font-semibold">Nabila A.</p>
              <p className="text-[#A098AE] text-sm">Admin</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#C1BBEB]"></div>
          </div>
        </div>
      </div>

      {/* Calendar + Sidebar */}
      <div className="flex gap-5">
        {/* Calendar Section */}
        <div className="w-3/4">
          <Calendar2 />
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4">
          {/* Header */}
          <div className="px-5 py-3 bg-white rounded-lg">
            <p className="text-md font-bold text-[#363B64]">Schedule Details</p>
            <p className="text-xs text-[#A098AE]">Thursday, 10th April, 2021</p>
          </div>

          {/* Sidebar Items */}
          <div className="mt-3 mb-3">
            <RightSidebar />
          </div>

          {/* View More Button */}
          <div className="mt-3 mb-3">
            <button className="h-12 w-full flex justify-center items-center py-1 bg-[#4D44B51A] text-[#4D44B5] font-bold rounded-full">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

const RightSidebar = () => {
  const RightSidebarItemsData = [
    { head: "Basic Algorithm", sub: "Algorithm" },
    { head: "Basic Art", sub: "Art" },
    { head: "HTML & CSS Class", sub: "Programming" },
    { head: "Simple Past Tense", sub: "English" },
  ];

  return (
    <div className="flex flex-col gap-3">
      {RightSidebarItemsData.map((item, index) => (
        <RightSidebarItems key={index} head={item.head} sub={item.sub} />
      ))}
    </div>
  );
};

const RightSidebarItems = ({ head, sub }) => {
  // Dynamically choose border color
  let borderColor = "";
  switch (sub) {
    case "Algorithm":
      borderColor = "border-[#4D44B5]";
      break;
    case "Art":
      borderColor = "border-[#FB7D5B]";
      break;
    case "Programming":
      borderColor = "border-[#FCC43E]";
      break;
    case "English":
      borderColor = "border-[#303972]";
      break;
    default:
      borderColor = "border-gray-300";
  }

  const stateClasses = `bg-white rounded-lg border-l-8 ${borderColor} px-4 py-3`;

  return (
    <div className={stateClasses}>
      <p className="text-[#363B64] font-bold text-sm">{head}</p>
      <p className="text-xs text-[#A098AE]">{sub}</p>

      <div className="flex justify-between items-center mt-3">
        <div>
          <div className="flex gap-2 items-center">
            <CalendarIcon className="text-[#FB7D5B]" size={16} />
            <p className="text-xs text-[#A098AE]">March 20, 2021</p>
          </div>
          <div className="flex gap-2 items-center mt-1">
            <Clock className="text-[#FCC43E]" size={16} />
            <p className="text-xs text-[#A098AE]">09.00-10.00 AM</p>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full bg-[#C1BBEB]"></div>
      </div>
    </div>
  );
};
