import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Market from "./pages/Market";
import Weather from "./pages/Weather";
import Guidance from "./pages/Guidance";
import SupplyChain from "./pages/SupplyChain";
import Schemes from "./pages/Schemes";
import Training from "./pages/Training";
import RecordKeeping from "./pages/RecordKeeping";
import Navbar from "./components/Navbar";
import "./index.css"; // Tailwind CSS
import './i18n/i18n'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/market" element={<Market />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/supplychain" element={<SupplyChain />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/training" element={<Training />} />
          <Route path="/record-keeping" element={<RecordKeeping />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
