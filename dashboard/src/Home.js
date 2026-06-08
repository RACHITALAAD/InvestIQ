import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1"
           style={{backgroundColor: "#f5f7fb" , minHeight : "100vh",
           }}>
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;