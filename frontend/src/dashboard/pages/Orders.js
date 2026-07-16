import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { getOrders } from "../../api/orders";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await getOrders();

      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h3>Loading Orders...</h3>
      </div>
    );
  }

  const totalTransactionValue = orders.reduce(
    (sum, order) => sum + order.quantity * order.price,
    0,
  );

  return (
    <div className="container-fluid p-4">
      <div className="mb-4">
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 680,
            color: "#1F2937",
            marginBottom: "6px",
          }}
        >
          Order History
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#6B7280",
            marginBottom: 0,
          }}
        >
          View all your completed buy and sell transactions
        </p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#F8FCFC",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <small
              className="text-muted"
              style={{
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Total Orders
            </small>

            <h4
              className="mt-3 mb-0"
              style={{
                fontSize: "25px",
                fontWeight: 550,
                color: "#1F2937",
              }}
            >
              {orders.length}
            </h4>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#F8FCFC",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <small
              className="text-muted"
              style={{
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Total Transaction Value
            </small>

            <h4
              className="mt-3 mb-0"
              style={{
                fontSize: "25px",
                fontWeight: 550,
                color: "#1F2937",
              }}
            >
              <MdCurrencyRupee size={22} style={{ verticalAlign: "-2px" }} />
              {totalTransactionValue.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>

      <div
        className="rounded-4 shadow-sm p-4"
        style={{ background: "#F8FAFC" }}
      >
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Order Details</h4>

          <small className="text-muted">
            Complete history of your executed trades
          </small>
        </div>

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
                <th>Date & Time</th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-5">
                    <h6 className="fw-bold">No Orders Found</h6>

                    <p className="text-muted mb-0">
                      Your completed orders will appear here....
                    </p>
                  </td>
                </tr>
              ) : (
                orders.map((order) => {
                  const date = new Date(order.createdAt);
                  const formattedDate = `${String(date.getDate()).padStart(
                    2,
                    "0",
                  )}-${String(date.getMonth() + 1).padStart(
                    2,
                    "0",
                  )}-${date.getFullYear()}`;
                  return (
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
                            backgroundColor: "#008080",
                            color: "#fff",
                            padding: "6px 10px",
                          }}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td>
                        {formattedDate}

                        <br />

                        <small className="text-muted">
                          {date.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </small>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
