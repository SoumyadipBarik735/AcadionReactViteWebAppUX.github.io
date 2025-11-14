import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Home/Dashboard";
import Student from "../components/Home/Student";
import Teachers from "../components/Home/Teachers";
import Event from "../components/Home/Event";
import Finance from "../components/Home/Finance";
import Food from "../components/Home/Food";
import User from "../components/Home/User";
import Chat from "../components/Home/Chat";
import LatestActivity from "../components/Home/LatestActivity";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "student":
        return <Student />;
      case "teachers":
        return <Teachers />;
      case "event":
        return <Event />;
      case "finance":
        return <Finance />;
      case "food":
        return <Food />;
      case "user":
        return <User />;
      case "chat":
        return <Chat />;
      case "latestactivity":
        return <LatestActivity />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      {/* Main content area */}
      <div className="flex-1 bg-white">{renderComponent()}</div>
    </div>
  );
};

export default Home;
