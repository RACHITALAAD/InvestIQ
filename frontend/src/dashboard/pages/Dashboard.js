import React, { useEffect, useState, useCallback } from "react";

import Summary from "../components/Summary";
import PortfolioChart from "../charts/PortfolioChart";
import AssetAllocationChart from "../charts/AssetAllocationChart";
import RecentTransactions from "../components/RecentTransactions";

import { getDashboardData } from "../../api/dashboard";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const { data } = await getDashboardData();

      setDashboardData(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (loading) {
    return (
      <div
        className="container-fluid p-4"
        style={{
          backgroundColor: "#F8FAFC",
          minHeight: "100vh",
        }}
      >
        <h4
          style={{
            color: "#1F2937",
            fontWeight: 600,
          }}
        >
          Loading Dashboard...
        </h4>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="container-fluid p-4"
        style={{
          backgroundColor: "#F8FAFC",
          minHeight: "100vh",
        }}
      >
        <div className="alert alert-danger">{error}</div>

        <button
          className="btn"
          onClick={fetchDashboard}
          style={{
            backgroundColor: "#008080",
            color: "#fff",
            borderRadius: "10px",
            padding: "8px 20px",
            fontWeight: 500,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="container-fluid p-4"
      style={{
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#1F2937",
              marginBottom: "6px",
            }}
          >
            Dashboard
          </h2>

          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6B7280",
              marginBottom: 0,
            }}
          >
            Monitor your portfolio performance and recent trading activity.
          </p>
        </div>

        <button
          className="btn"
          onClick={fetchDashboard}
          style={{
            border: "1px solid #008080",
            color: "#008080",
            borderRadius: "10px",
            padding: "8px 18px",
            fontWeight: 500,
            backgroundColor: "#FFFFFF",
          }}
        >
          Refresh
        </button>
      </div>

      {/* Summary Cards */}
      <Summary data={dashboardData.summary} />

      {/* Charts */}
      <div className="row mt-4">
        <div className="col-lg-8 mb-4">
          <PortfolioChart holdings={dashboardData.holdings} />
        </div>

        <div className="col-lg-4 mb-4">
          <AssetAllocationChart holdings={dashboardData.holdings} />
        </div>
      </div>

      {/* Recent Orders */}
      <RecentTransactions orders={dashboardData.recentOrders} />
    </div>
  );
}

export default Dashboard;
