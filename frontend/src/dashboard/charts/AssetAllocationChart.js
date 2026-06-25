import React from "react";
import { assetAllocationData } from "../../data/dashboardData";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function AssetAllocationChart() {
  const COLORS = [
    "#008080",
    "#20c997",
    "#ffc107",
    "#6f42c1",
  ];

  return (
    <div className="bg-white rounded-4 shadow-sm p-4 h-100">
      <h4 className="fw-bold mb-1">
        Asset Allocation
      </h4>

      <small className="text-muted">
        Portfolio diversification
      </small>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={assetAllocationData}
            cx="50%"
            cy="50%"
            outerRadius={95}
            dataKey="value"
            label
          >
            {assetAllocationData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssetAllocationChart;