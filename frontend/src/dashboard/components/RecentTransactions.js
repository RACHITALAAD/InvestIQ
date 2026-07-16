import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

function RecentTransactions({ orders = [] }) {
  return (
    <div className="bg-white rounded-4 shadow-sm p-4">
      <div className="mb-4">
        <h4
          style={{
            color: "#1F2937",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          Recent Transactions
        </h4>

        <p
          className="mb-0"
          style={{
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          Last 5 completed trades
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-5">
          <h5
            style={{
              color: "#1F2937",
              fontWeight: 600,
            }}
          >
            No Transactions Found
          </h5>

          <p
            className="mb-0"
            style={{
              color: "#6B7280",
            }}
          >
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
                    <MdCurrencyRupee
                      size={16}
                      style={{ verticalAlign: "-2px" }}
                    />
                    {order.price.toLocaleString()}
                  </td>

                  <td className="fw-semibold">
                    <MdCurrencyRupee
                      size={16}
                      style={{ verticalAlign: "-2px" }}
                    />
                    {(order.quantity * order.price).toLocaleString()}
                  </td>

                  <td>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: "#EAF8F8",
                        color: "#008080",
                        fontWeight: 600,
                      }}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    {(() => {
                      const date = new Date(order.createdAt);

                      const formattedDate = `${String(date.getDate()).padStart(
                        2,
                        "0",
                      )}-${String(date.getMonth() + 1).padStart(
                        2,
                        "0",
                      )}-${date.getFullYear()}`;

                      return (
                        <>
                          <div style={{ fontWeight: 500 }}>{formattedDate}</div>

                          <small
                            style={{
                              color: "#6B7280",
                            }}
                          >
                            {date.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </small>
                        </>
                      );
                    })()}
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
