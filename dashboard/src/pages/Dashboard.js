import React from "react";
import Summary from "../components/Summary";
import WatchList from "../components/WatchList";

function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <Summary />
      <div className="row mt-4">
        <div className="col-lg-8">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h4 className="fw-bold mb-3">Portfolio Performance</h4>

            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "300px",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
              }}
            >
              <h5 className="text-muted">Portfolio Chart Coming Soon</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <WatchList />
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-sm mt-4">
        <h4 className="fw-bold mb-4">Market Highlights</h4>

        <div className="row">
          <div className="col-md-4">
            <div className="border rounded p-3">
              <h5>Reliance</h5>
              <p className="text-success fw-bold mb-0">+3.2%</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3">
              <h5>TCS</h5>
              <p className="text-success fw-bold mb-0">+1.8%</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3">
              <h5>Infosys</h5>
              <p className="text-danger fw-bold mb-0">-0.9%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
