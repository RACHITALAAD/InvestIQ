import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Features from "./landing_page/features/FeaturePage";
import Pricing from "./landing_page/pricing/PricingPage";
import Markets from "./landing_page/markets/MarketPage";
import Contact from "./landing_page/contact/ContactPage";
import Login from "./landing_page/auth/Login";
import Signup from "./landing_page/auth/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/features" element={<Features />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/markets" element={<Markets />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>,
);
