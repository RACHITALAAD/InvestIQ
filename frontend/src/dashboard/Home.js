import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import Holdings from "./pages/Holdings";
import Orders from "./pages/Orders";
import Funds from "./pages/Funds";
import Insights from "./pages/Insights";
import Profile from "./pages/Profile";

function Home() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div
        className="flex-grow-1"
        style={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}
      >
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="orders" element={<Orders />} />
          <Route path="funds" element={<Funds />} />
          <Route path="insights" element={<Insights />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
