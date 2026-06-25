import React from "react";
import { portfolioGrowthData } from "../../data/dashboardData";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PortfolioChart() {
  return (
    <div className="bg-white rounded-4 shadow-sm p-4 h-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Portfolio Growth</h4>

          <small className="text-muted">
            Last 6 months performance
          </small>
        </div>

        <span className="badge bg-success fs-6">
          +18.6%
        </span>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={portfolioGrowthData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#008080"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PortfolioChart;