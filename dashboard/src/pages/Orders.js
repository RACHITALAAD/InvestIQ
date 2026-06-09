import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

function Orders() {
  const orders = [
    {
      stock: "Reliance",
      type: "BUY",
      quantity: 10,
      price: 2500,
      status: "Completed",
      date: "12 Jun 2026",
    },
    {
      stock: "TCS",
      type: "SELL",
      quantity: 5,
      price: 3600,
      status: "Completed",
      date: "15 Jun 2026",
    },
    {
      stock: "Infosys",
      type: "BUY",
      quantity: 15,
      price: 1450,
      status: "Pending",
      date: "18 Jun 2026",
    },
    {
      stock: "HDFC Bank",
      type: "BUY",
      quantity: 8,
      price: 1600,
      status: "Completed",
      date: "20 Jun 2026",
    },
  ];

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Orders</h2>
      <div className="bg-white p-4 rounded shadow-sm">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index}>
                  <td className="fw-semibold">{order.stock}</td>

                  <td>
                    <span
                      className={
                        order.type === "BUY"
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >
                      {order.type}
                    </span>
                  </td>

                  <td>{order.quantity}</td>
                  <td>
                    <MdCurrencyRupee />
                    {order.price}
                  </td>

                  <td>
                    <span
                      className={
                        order.status === "Completed"
                          ? "badge bg-success"
                          : "badge bg-warning text-dark"
                      }
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>{order.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
