import React, { useState } from "react";
import { Plus } from "lucide-react";

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get total days in month
  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  // Get first day of month (0 = Sunday)
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  // Create calendar days array dynamically (do NOT force 5 rows)
  const calendarDays = [];

  // Previous month's days
  const prevMonthDays = getDaysInMonth(
    month === 0 ? 11 : month - 1,
    month === 0 ? year - 1 : year
  );
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthDays - i, currentMonth: false });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, currentMonth: true });
  }

  // Next month days to fill the last week (if needed)
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({
      day: calendarDays.length - (firstDay + daysInMonth) + 1,
      currentMonth: false,
    });
  }

  // Handlers
  const handleMonthChange = (e) => setMonth(parseInt(e.target.value));
  const handleYearChange = (e) => setYear(parseInt(e.target.value));

  return (
    <div className="bg-white rounded-2xl p-8 w-[100%] h-auto">
      {/* Header: Title left, selectors + button right */}
      <div className="flex justify-between items-center mb-9">
        <h2 className="text-xl font-semibold text-[#303972]">Calendar</h2>

        <div className="flex gap-5 items-center">
          <select
            value={month}
            onChange={handleMonthChange}
            className="border-[2px] rounded-full px-2 py-2 text-[#4D44B5] border-[#4D44B5] focus:outline-none focus:ring-0 focus:border-[#4D44B5]"
          >
            {months.map((m, i) => (
              <option key={i} value={i}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={handleYearChange}
            className="border-[2px] rounded-full px-2 py-2 text-[#4D44B5] border-[#4D44B5] focus:outline-none focus:ring-0 focus:border-[#4D44B5]"
          >
            {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <button className="flex gap-2  items-center bg-[#4D44B5] text-white px-4 py-2 rounded-full text-md">
            <Plus className="text-sm" />
            New Student
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3 w-full text-center  ">
        {/* Days Header */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-semibold text-[#4D44B5] text-sm">
            {d}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((date, i) => (
          <div
            key={i}
            className={`h-16 flex items-start justify-start rounded-xl font-bold px-2 py-2 ${
              date.currentMonth
                ? "bg-white text-[#303972] border border-[#A098AE] hover:bg-[#f0f0ff]"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            {date.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
