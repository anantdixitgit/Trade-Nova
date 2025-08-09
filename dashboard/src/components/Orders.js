import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://trade-nova-backend.onrender.com/api/orders/allorders",
          {
            signal,
          }
        );
        if (response.status === 200) {
          setAllOrders(response.data);
        }
      } catch (error) {
        console.error("Error in fetching orders:", error.message);
      }
    };
    fetchOrders();
  }, []);
  return (
    <>
      <h3 className="title">All Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock, index) => {
            // const currValue = stock.qty * stock.price;
            // const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            // const profClass = isProfit ? "profit" : "loss";
            // const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
