import React from "react";
import { LiaCheckSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";

function Comparison() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Compare Plans</h2>

        <p className="text-muted">
          Find the plan that best suits your investment goals.
        </p>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Features</th>
              <th>Starter</th>
              <th>Pro</th>
              <th>Premium</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Portfolio Tracking</td>
              <td>
                <LiaCheckSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
            </tr>

            <tr>
              <td>Market Watchlist</td>
              <td>
                <LiaCheckSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
            </tr>

            <tr>
              <td>Advanced Analytics</td>
              <td>
                <LiaTimesSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
            </tr>

            <tr>
              <td>Sector Analysis</td>
              <td>
                <LiaTimesSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
            </tr>

            <tr>
              <td>AI Investment Assistant</td>
              <td>
                <LiaTimesSolid />
              </td>
              <td>
                <LiaTimesSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
            </tr>

            <tr>
              <td>Risk Analysis</td>
              <td>
                <LiaTimesSolid />
              </td>
              <td>
                <LiaTimesSolid />
              </td>
              <td>
                <LiaCheckSolid />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Comparison;
