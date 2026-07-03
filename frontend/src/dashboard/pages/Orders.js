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
      <h2 className="fw-bold mb-4">Order History</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body">
              <small className="text-muted">Total Orders</small>

              <h3 className="fw-bold mt-2">{orders.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body">
              <small className="text-muted">Total Transaction Value</small>

              <h3 className="fw-bold mt-2 text-primary">
                <MdCurrencyRupee />
                {totalTransactionValue.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-4 shadow-sm p-4">
        <table className="table table-hover align-middle">
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
                  No Orders Found
                </td>
              </tr>
            ) : (
              orders.map((order) => {
                const date = new Date(order.createdAt);

                return (
                  <tr key={order._id}>
                    <td className="fw-bold">{order.stock}</td>

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
                      <span
                        className={`badge ${
                          order.status === "Completed"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td>
                      <div>{date.toLocaleDateString()}</div>

                      <small className="text-muted">
                        {date.toLocaleTimeString()}
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
  );
}

export default Orders;
