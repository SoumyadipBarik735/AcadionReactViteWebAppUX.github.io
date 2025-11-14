import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
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

const Student = () => {
  const [search, setSearch] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const orderItems = [
    { num: "Samanta William", pname: "Mana William", grade: "VII A" },
    { num: "Tony Soap", pname: "James Soap", grade: "VII B" },
    { num: "Kerean Hope", pname: "Justin Hope", grade: "VII C" },
    { num: "Jordan Nico", pname: "Amanda Nico", grade: "VII A" },
    { num: "Nadila Adja", pname: "Jack Adja", grade: "VII A" },
    { num: "Jonny Ahmad", pname: "Danny Ahmad", grade: "VII B" },
  ];

  return (
    <div className="flex flex-col font-poppins min-h-screen overflow-y-hidden bg-[#F3F4FF] px-7">
      {/* Header */}
      <div className="w-full flex items-center justify-between mt-5 mb-5">
        <div>
          <p className="text-[#303972] text-2xl font-bold">Students</p>
        </div>
        <div className="flex gap-2 items-center">
          <Bell className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <Settings className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <div className="flex gap-2 items-center">
            <div>
              <p className="text-[#303972] font-semibold">Nabila A.</p>
              <p className="text-[#A098AE] text-sm">Admin</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#C1BBEB] border-none"></div>
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
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm border border-[#4D44B5] text-[#303972] rounded-full h-10 w-28 hover:bg-[#4D44B5] hover:text-white transition"
          >
            Newest
            <ChevronDown className="text-[#4D44B5] hover:text-white" />
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm rounded-full h-10 w-40 bg-[#303972] text-white transition-all duration-200"
          >
            <Plus className="h-5 w-5" />
            New Student
          </button>
        </div>
      </div>

      {/* Table+Pagiation */}
      <div className="w-full mb-5 bg-[#FFFFFF] rounded-md overflow-hidden">
        <div className="w-full flex mb-5 bg-[#FFFFFF] rounded-md overflow-x-auto">
          {/*Table */}
          <table className="w-full border-collapse text-sm mx-5 my-4">
            <thead className="sticky top-0 bg-[#FFFFFF]">
              <tr className="">
                <th className="px-3 py-2 text-left">
                  <input type="checkbox" className="accent-[#2b1aed]" />
                </th>
                <th className="px-3 py-2 text-left text-[#303972]">Name</th>
                <th className="px-3 py-2 text-left text-[#303972]">ID</th>
                <th className="px-3 py-2 text-left text-[#303972]">Date</th>
                <th className="px-3 py-2 text-left text-[#303972]">
                  Parent Name
                </th>
                <th className="px-3 py-2 text-left text-[#303972]">City</th>
                <th className="px-3 py-2 text-left text-[#303972]">Contact</th>
                <th className="px-3 py-2 text-left text-[#303972]">Grade</th>
                <th className="px-3 py-3 text-center text-[#303972]">Action</th>
              </tr>
            </thead>

            <tbody>
              {orderItems.map((it, index) => {
                // Grade badge color
                let stateClasses =
                  "inline-block text-sm text-white px-3 py-1 rounded-full";
                switch (it.grade) {
                  case "VII A":
                    stateClasses += " bg-[#FB7D5B]";
                    break;
                  case "VII B":
                    stateClasses += " bg-[#FCC43E]";
                    break;
                  case "VII C":
                    stateClasses += " bg-[#4D44B5]";
                    break;
                  default:
                    stateClasses += " bg-gray-400";
                }

                //  Row highlight if checked
                const isChecked = checkedItems[index];
                const rowClasses = `border-t border-gray-200 border-l-[#4D44B5] transition-all ${
                  isChecked ? "border-l-4 border-[#4D44B5] " : "border-l-0"
                }`;

                return (
                  <tr key={index} className={rowClasses}>
                    <td className="px-3 py-4 sticky top-0">
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => handleCheckboxChange(index)}
                        className="accent-[#2b1aed]"
                      />
                    </td>
                    <td className="px-3 py-3 flex items-center text-[#303972] font-bold gap-2">
                      <div className="h-10 w-10 rounded-full bg-[#C1BBEB]"></div>
                      {it.num}
                    </td>
                    <td className="px-3 py-2 text-[#303972] font-bold ">
                      #123456789
                    </td>
                    <td className="px-3 py-2 text-xs text-[#A098AE]">
                      March 25, 2021
                    </td>
                    <td className="px-3 py-2 text-sm text-[#303972]">
                      {it.pname}
                    </td>
                    <td className="px-3 py-2 text-sm text-[#303972]">
                      Jakarta
                    </td>
                    <td className="px-3 py-2 flex gap-2">
                      <Phone className="h-10 w-10 text-[#4D44B5] rounded-full p-2 bg-[#e8e7f0]" />
                      <Mail className="h-10 w-10 text-[#4D44B5] rounded-full p-2 bg-[#e8e7f0]" />
                    </td>
                    <td className="px-3 py-2">
                      <span className={stateClasses}>{it.grade}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <MoreHorizIcon className="text-[#A098AE]" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/*Pagiation Section */}
        <div className="flex justify-between items-center mt-5 mb-5 mx-5">
          <p className="font-sm text-[#A098AE]">
            Showing<span className="text-[#303972]">1-5</span>from
            <span className="text-[#303972]">100</span>data
          </p>
          <Pagination
            count={3}
            shape="rounded-full"
            variant="outlined"
            siblingCount={1}
            boundaryCount={1}
            onChange={(event, value) => console.log("Page:", value)}
            sx={{
              "& .MuiPaginationItem-root": {
                borderColor: "#A098AE", // outline color
                color: "#A098AE", // text color
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#4D44B5", // active background
                color: "#fff", // active text
                borderColor: "#4D44B5", // border matches background
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(77,68,181,0.08)", // subtle hover
              },
              //  Remove border for first/last arrows
              "& .MuiPaginationItem-previousNext": {
                border: "none",
                color: "#4D44B5",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Student;
