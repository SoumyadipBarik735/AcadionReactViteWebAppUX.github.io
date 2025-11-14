import React, { useState } from "react";
import {
  Bell,
  Settings,
  Plus,
  Search,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Pagination from "@mui/material/Pagination";

const Teachers = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col font-poppins overflow-hidden bg-[#F3F4FF] px-7">
      {/* Header */}
      <div className="w-full flex items-center justify-between mt-5 mb-5">
        <p className="text-[#303972] text-2xl font-bold">Teachers</p>
        <div className="flex gap-2 items-center">
          <Bell className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <Settings className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <div className="flex gap-2 items-center">
            <div>
              <p className="text-[#303972] font-semibold">Nabila A.</p>
              <p className="text-[#A098AE] text-sm">Admin</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#C1BBEB]"></div>
          </div>
        </div>
      </div>

      {/* Search + Buttons */}
      <div className="w-full flex justify-between items-center mb-5">
        {/* Search */}
        <div className="relative w-56">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-800 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-5">
          <button className="flex items-center justify-center gap-2 text-sm border border-[#4D44B5] text-[#303972] rounded-full h-10 w-28 hover:bg-[#4D44B5] hover:text-white transition">
            Newest
            <ChevronDown className="text-[#4D44B5] hover:text-white" />
          </button>

          <button className="flex items-center justify-center gap-2 text-sm rounded-full h-10 w-40 bg-[#303972] text-white transition-all duration-200">
            <Plus className="h-5 w-5" />
            New Student
          </button>
        </div>
      </div>

      {/* Grid of Teachers */}
      <GridItems />

      {/* Pagination */}
      <div className="flex justify-between mt-5 mb-5">
        <p className="text-sm text-[#A098AE]">
          Showing <span className="text-[#303972]">1-5</span> from{" "}
          <span className="text-[#303972]">100</span> data
        </p>
        <Pagination
          count={3}
          shape="rounded-full"
          siblingCount={1}
          boundaryCount={1}
          onChange={(event, value) => console.log("Page:", value)}
          sx={{
            "& .MuiPaginationItem-root": {
              borderColor: "#A098AE",
              color: "#A098AE",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#4D44B5",
              color: "#fff",
              borderColor: "#4D44B5",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(77,68,181,0.08)",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Teachers;

// Grid container
const GridItems = () => {
  const data = [
    { name: "Dimitres Viga", subject: "Mathematics" },
    { name: "Tom Housenburg", subject: "Science" },
    { name: "Dana Benevista", subject: "Art" },
    { name: "Salvadore Morbeau", subject: "Biology" },
    { name: "Maria Historia", subject: "History" },
    { name: "Jack Sally", subject: "Physics" },
    { name: "Lula Beatrice", subject: "Algorithm" },
    { name: "Nella Vita", subject: "English" },
    { name: "Nadia Laravela", subject: "Programming" },
    { name: "Dakota Farral", subject: "Science" },
    { name: "Miranda", subject: "Art" },
    { name: "Indiana Barker", subject: "Biology" },
  ];

  return (
    <div className="grid grid-cols-4 gap-5 mt-5 mb-5">
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-md p-4 relative">
          <MoreHorizIcon className="absolute top-2 right-2 text-[#A098AE]" />
          <div className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#C1BBEB]"></div>
            <p className="text-[#303972] font-semibold">{item.name}</p>
            <p className="text-xs text-[#A098AE]">{item.subject}</p>
            <div className="flex gap-2 mt-2">
              <Phone className="bg-[#4D44B5] text-white rounded-full h-8 w-8 p-2" />
              <Mail className="bg-[#4D44B5] text-white rounded-full h-8 w-8 p-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
