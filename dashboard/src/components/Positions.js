import React, { useState, useEffect } from "react";
//import { positions } from "../data/Data";
import axios from "axios";

const Positions = () => {
  const [allpositions, setAllpositions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchPosition = async () => {
      try {
        const response = await axios.get(
          "https://trade-nova-backend.onrender.com/api/positions/allpositions",
          {
            signal,
          }
        );

        if (response.status === 200) {
          setAllpositions(response.data);
        }
      } catch (error) {
        console.log("error occur in fetching positions : ", error.message);
      }
    };

    fetchPosition();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allpositions.map((stock, index) => {
            const currValue = stock.qty * stock.price;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>

                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
