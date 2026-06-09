import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

function TopBar() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom">
      <div>
        <h3 className="fw-bold mb-1">Welcome Back</h3>

        <p className="text-muted mb-0">
          Monitor your investments and market insights.
        </p>
      </div>

      <div className="d-flex align-items-center gap-4">
        <div
          className="d-flex align-items-center px-3 py-2 border rounded"
          style={{ width: "280px" }}
        >
          <FaSearch className="text-muted me-2" />

          <input
            type="text"
            placeholder="Search stocks..."
            className="border-0 w-100 bg-transparent"
            style={{ outline: "none", 
                boxShadow : "none",
            }}
          />
        </div>

        <FaBell
          size={22}
          className="text-secondary"
          style={{ cursor: "pointer" }}
        />

        <FaUserCircle
          size={34}
          className="text-primary"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default TopBar;
