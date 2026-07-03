import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

function RecentTransactions({ orders = [] }) {
  return (
    <div className="bg-white rounded-4 shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Recent Transactions</h4>
          <small className="text-muted">Last 5 completed trades</small>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-5">
          <h6 className="fw-bold">No Transactions Found</h6>
          <p className="text-muted mb-0">
            Your recent trades will appear here.
          </p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Stock</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="fw-semibold">{order.stock}</td>

                  <td>
                    <span
                      className={`badge ${
                        order.type === "BUY" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {order.type}
                    </span>
                  </td>

                  <td>{order.quantity}</td>

                  <td>
                    <MdCurrencyRupee />
                    {order.price.toLocaleString()}
                  </td>

                  <td className="fw-semibold">
                    <MdCurrencyRupee />
                    {(order.quantity * order.price).toLocaleString()}
                  </td>

                  <td>
                    <span className="badge bg-primary">{order.status}</span>
                  </td>

                  <td>
                    {new Date(order.createdAt).toLocaleDateString()}

                    <br />

                    <small className="text-muted">
                      {new Date(order.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RecentTransactions;
