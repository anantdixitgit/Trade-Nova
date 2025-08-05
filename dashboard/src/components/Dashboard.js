import React from "react";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Signup from "./Signup";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/api/orders" element={<Orders />} />
          <Route path="/api/holdings" element={<Holdings />} />
          <Route path="/api/positions" element={<Positions />} />
          <Route path="/api/funds" element={<Funds />} />
          <Route path="/api/apps" element={<Apps />} />
          <Route path="/api/SignUp" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
