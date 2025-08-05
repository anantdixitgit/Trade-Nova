import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import SignUpPage from "./landing_page/signup/SignUpPage";
import PricingPage from "./landing_page/pricing/pricingPage";
import ProductPage from "./landing_page/products/ProductPage";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/login/Login";
import { AuthProvider } from "./AuthContext";
import { Logout } from "./landing_page/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/crypto" element={<PricingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
