import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

function Funds() {
  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Funds</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">Available Balance</p>

            <h3 className="fw-bold">
              <MdCurrencyRupee />
              20,000
            </h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">Invested Amount</p>
            <h3 className="fw-bold">
              <MdCurrencyRupee />
              80,000
            </h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">Withdrawable</p>

            <h3 className="fw-bold">
              <MdCurrencyRupee />
              15,000
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-success">Add Funds</button>

        <button className="btn btn-outline-danger">Withdraw Funds</button>
      </div>
    </div>
  );
}

export default Funds;