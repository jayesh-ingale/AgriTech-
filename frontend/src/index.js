import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Market from "./pages/Market";
import Weather from "./pages/Weather";
import Guidance from "./pages/Guidance";
import SupplyChain from "./pages/SupplyChain";
import Schemes from "./pages/Schemes";
import Training from "./pages/Training";
import RecordKeeping from "./pages/RecordKeeping";
import Chatbot from "./pages/Chatbot";  // ✅ Added Chatbot
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import "./index.css";  // Tailwind CSS
import './i18n/i18n';

const App = () => {
  const location = useLocation();

  // Hide Navbar on Login and Signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/market" element={<Market />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/supplychain" element={<SupplyChain />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/training" element={<Training />} />
          <Route path="/record-keeping" element={<RecordKeeping />} />
          <Route path="/chatbot" element={<Chatbot />} />  {/* ✅ Added Chatbot Route */}
        </Routes>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);