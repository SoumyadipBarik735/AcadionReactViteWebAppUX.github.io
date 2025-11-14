import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReactApexChart from "react-apexcharts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Search,
  Calendar,
  UserPen,
  Utensils,
  UsersRound,
  CircleSmall,
  ChevronDown,
  ChevronUp,
  User,
  Printer,
  Bell,
  Settings,
  Plus,
  Mail,
} from "lucide-react";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [showCalendar, setShowCalendar] = useState(true);
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex font-poppins min-h-screen overflow-y-auto">
      {/*Left  */}
      <div className="w-[904px] h-auto bg-[#F3F4FF] px-7">
        {/*Header */}
        <div className="flex items-center justify-between mt-5 mb-5">
          <p className="text-[#303972] text-2xl font-bold">Dashboard</p>
          <div className="relative w-60 ">
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
        </div>
        {/*students ----- */}
        <div className="flex shadow-sm bg-white rounded-md p-4 px-10 items-center justify-between gap-5">
          <div className="flex justify-center items-center gap-5">
            <UsersRound className="text-white h-10 w-10 p-2 rounded-full bg-[#4D44B5]" />
            <div>
              <p className="text-sm text-[#A098AE]">Students</p>
              <p className="font-bold text-2xl text-[#303972]">932</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <UserPen className="text-white h-10 w-10 p-2 rounded-full bg-[#FB7D5B]" />
            <div>
              <p className="text-sm text-[#A098AE]">Teachers</p>
              <p className="font-bold text-2xl text-[#303972]">754</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Calendar className="text-white h-10 w-10 p-2 rounded-full bg-[#FCC43E]" />
            <div>
              <p className="text-sm text-[#A098AE]">Events</p>
              <p className="font-bold text-2xl text-[#303972]">40</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Utensils className="text-white h-10 w-10 p-2 rounded-full bg-[#303972]" />
            <div>
              <p className="text-sm text-[#A098AE]">Foods</p>
              <p className="font-bold text-2xl text-[#303972]">32k</p>
            </div>
          </div>
        </div>
        {/*School performance */}
        <div className="shadow-sm bg-white rounded-md p-4 mt-5 mb-5">
          <div className="flex justify-between">
            <div>
              <p className="text-[#303972] text-xl font-bold">
                School Performance
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <div className="mt-1  border-[4px] rounded-full h-3 w-3 border-[#FCC43E] "></div> 
                <div>
                  <p className="text-sm text-[#A098AE]">This Week</p>
                  <p className="text-[#303972] font-bold">1.245</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="mt-1 border-[4px] rounded-full h-3 w-3 border-[#FB7D5B] "></div>
                <div>
                  <p className="text-sm text-[#A098AE]">Last Week</p>
                  <p className="text-[#303972] font-bold">1.356</p>
                </div>
              </div>
            </div>
          </div>
          {/*  Graph appears here */}
          <ApexChart />
        </div>
        {/*Calender and finance */}
        <div className="flex gap-4 mb-5">
          {/* Calendar */}
          <div className="flex-1 shadow-sm bg-white rounded-md p-4 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center">
              <p className="text-[#303972] text-xl font-bold">
                School Calendar
              </p>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center gap-2 text-[#303972] font-sm rounded-md transition-all"
              >
                <span>
                  {date.toLocaleString("default", { month: "long" })}{" "}
                  {date.getFullYear()}
                </span>
                {showCalendar ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Calendar */}
            {showCalendar && (
              <div className="mt-4 flex-1 flex items-center justify-center">
                <ReactCalendar
                  onChange={setDate}
                  value={date}
                  className="custom-calendar w-full h-full"
                />
              </div>
            )}
          </div>

          {/* Finance */}
          <div className="flex-1 shadow-sm bg-white rounded-md p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[#303972] text-xl font-bold">School Finance</p>
              <div className="flex gap-4">
                <div className="flex gap-1">
                  <div className="mt-1  border-[4px] rounded-full h-3 w-3 border-[#FCC43E] "></div> 
                  <div>
                    <p className="text-sm text-[#A098AE]">This Week</p>
                    <p className="text-[#303972] font-bold">1.245</p>
                  </div>
                </div>
                <div className="flex gap-1 ">
                  <div className="mt-1 border-[4px] rounded-full h-3 w-3 border-[#FB7D5B]"></div>
                  <div>
                    <p className="text-sm text-[#A098AE]">Last Week</p>
                    <p className="text-[#303972] font-bold">1.356</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex-1">
              <ApexChart2 />
            </div>
          </div>
        </div>
        {/*Unpaid Student */}
        <div>
          <UnpaidStudent />
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              <p className="font-sm text-[#A098AE]">
                Showing<span className="text-[#303972]">1-5</span>from
                <span className="text-[#303972]">100</span>data
              </p>
            </div>
            <div className="flex justify-end items-center mt-5 mb-5">
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
      </div>
      {/*Right */}
      <div className="w-[350px] h-auto bg-[#FFFFFF] px-8">
        {/*notification header */}
        <div className="flex items-center justify-between mt-7 mb-5">
          <Bell className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <Settings className="h-10 w-10 p-2 text-[#A098AE] bg-gray-50 rounded-full" />
          <div className="flex gap-2">
            <div>
              <p className="text-[#303972] font-semibold">Nabila A.</p>
              <p className="text-[#A098AE] text-sm">Admin</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#C1BBEB] border-none"></div>
          </div>
        </div>
        {/*Recent Students */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#303972] font-bold text-xl">Recent Students</p>
            <p className="text-sm text-[#A098AE]">You have 456 students</p>
          </div>
          <Plus className="h-10 w-10 p-2 bg-[#4D44B5] text-[#FFFFFF] rounded-full" />
        </div>
        {/*Samanta william----- */}
        <SamantaFriendsName />
        {/*View More */}
        <div>
          <button className="h-12 w-full flex justify-center items-center py-1 bg-[#4D44B51A] text-[#4D44B5] font-bold rounded-full ">
            View More
          </button>
        </div>
        {/*Message */}
        <div className="mt-6 mb-6">
          <p className="text-[#303972] font-bold text-xl mb-3 mt-10">Message</p>
          <MessageName />
          {/*view More */}
          <div className="mt-5 mb-5">
            <button className="h-12 w-full flex justify-center items-center py-1 bg-[#4D44B51A] text-[#4D44B5] font-bold rounded-full ">
              View More
            </button>
          </div>
          {/*Current Food menu */}
          <div className="mt-10">
            <p className="text-[#303972] font-bold text-xl mb-6">
              Current Foods Menu
            </p>
            <CurrenttFood />
          </div>
          {/*view More */}
          <div className="mt-5 mb-5">
            <button className="h-12 w-full flex justify-center items-center py-1 bg-[#4D44B51A] text-[#4D44B5] font-bold rounded-full ">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const ApexChart = () => {
  const [state] = React.useState({
    series: [
      {
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: "Total Visits",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: [5, 7, 5],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      title: { text: "Page Statistics", align: "left" },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: { size: 0, hover: { sizeOffset: 6 } },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
        ],
      },
      tooltip: {
        y: [
          { title: { formatter: (val) => val + " (mins)" } },
          { title: { formatter: (val) => val + " per session" } },
          { title: { formatter: (val) => val } },
        ],
      },
      grid: { borderColor: "#f1f1f1" },
    },
  });

  return (
    <div id="chart" className="mt-2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={250}
      />
    </div>
  );
};

const ApexChart2 = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

const UnpaidStudent = ({}) => {
  const UnpaidStudentItemsData = [
    { num: "Samantha William " },
    {
      num: "Tony Soap",
    },
    {
      num: "Jordan Nico",
    },
    {
      num: "Karea Hope ",
    },
    { num: " Nadila Adja" },
  ];
  return (
    <div className="shadow-sm bg-white rounded-md p-4 mt-5 ">
      <p className="text-[#303972] text-xl font-bold">
        Unpaid Student Intuition
      </p>
      <div>
        {UnpaidStudentItemsData.map((item, index) => (
          <UnpaidStudentItems key={index} num={item.num} />
        ))}
      </div>
    </div>
  );
};

const UnpaidStudentItems = ({ num }) => (
  <div className="grid grid-cols-[6fr_4fr_4fr_4fr_1fr_1fr] items-center p-2 mx-3 mt-3 mb-3">
    <div className=" flex items-center gap-3 ">
      <div className="h-10 w-10 rounded-full bg-[#C1BBEB] border-none"></div>
      <p className="flex-1 font-semibold text-[#303972] mr-5">{num}</p>
    </div>
    <p className="font-bold text-[#303972]">ID 123456789</p>
    <div className="flex  gap-2">
      <User className="h-10 w-10 text-white p-2 rounded-full bg-[#FB7D5B]" />
      <div>
        <p className="text-[#A098AE] text-sm">Class</p>
        <p className="font-bold text-[#303972]">VII A</p>
      </div>
    </div>
    <p className="font-bold text-[#303972]">$ 50,036</p>
    <Printer className=" h-5 w-5 text-[#A098AE]" />
    <MoreHorizIcon className="  text-[#A098AE] " />
  </div>
);

const SamantaFriendsName = ({}) => {
  const SamantaFriendsNameItemsdata = [
    { num: "Samantha William " },
    {
      num: "Tony Soap",
    },
    {
      num: "Jordan Nico",
    },
    {
      num: "Karea Hope ",
    },
    { num: " Nadila Adja" },
  ];
  return (
    <div className="py-5">
      {SamantaFriendsNameItemsdata.map((item, index) => (
        <SamantaFriendsNameItems key={index} num={item.num} />
      ))}
    </div>
  );
};

const SamantaFriendsNameItems = ({ num }) => (
  <div className="flex justify-between items-center py-2">
    <div className="flex gap-3">
      <div className="h-10 w-10 rounded-full bg-[#C1BBEB] border-none"></div>
      <div>
        <p className="text-[#303972] font-bold">{num}</p>
        <p className="text-sm text-[#A098AE]">Class VII A</p>
      </div>
    </div>
    <div>
      <Mail className="text-[#A098AE] h-10 w-10 p-2 border border-[#A098AE] rounded-full hover:bg-[#4D44B5] hover:text-[#FFFFFF]" />
    </div>
  </div>
);

const MessageName = ({}) => {
  const MessageNameItemsdata = [
    { num: "Samantha William " },
    {
      num: "Tony Soap",
    },
    {
      num: "Jordan Nico",
    },
    {
      num: "Karea Hope ",
    },
  ];
  return (
    <div>
      {MessageNameItemsdata.map((item, index) => (
        <MessageNameItems key={index} num={item.num} />
      ))}
    </div>
  );
};

const MessageNameItems = ({ num }) => (
  <div className="flex justify-between py-5 border-b">
    <div className="flex gap-2">
      <div className="h-10 w-10 rounded-full bg-[#C1BBEB] border-none"></div>
      <div>
        <p className="text-[#303972]  font-bold ">{num}</p>
        <p className="text-xs text-[#A098AE]">
          Lorem ipsum dolor, sit amet ....
        </p>
      </div>
    </div>
    <div>
      <p className="text-xs text-[#A098AE]">12:45 PM</p>
    </div>
  </div>
);

const CurrenttFood = ({}) => {
  const CurrentFoodItemsdata = [
    { num: "Beef Steak with Fried Potato" },
    { num: "Pancake with Honey" },
    { num: "Japanese Beef Ramen" },
  ];
  return (
    <div>
      {CurrentFoodItemsdata.map((item, index) => (
        <CurrenttFoodItems key={index} num={item.num} />
      ))}
    </div>
  );
};

const CurrenttFoodItems = ({ num }) => (
  <div className="mb-6">
    <div className="h-28 w-full bg-[#C1BBEB] rounded-md"></div>
    <div className="mt-3 mb-3">
      <p className="text-[#303972]  font-bold">{num}</p>
      <p className="text-xs text-[#A098AE]">Lorem ipsum dolor, sit amet ....</p>
    </div>
  </div>
);
