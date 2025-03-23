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
import Dashboard from "./pages/Dashboard";
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
          <Route path="/dashboard" element={<Dashboard />} />
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


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Weather = ({ language }) => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const apiKey = "436cda8fecee367525cd30b63bbb63ff"; // Replace with your API key
//   const city = "London"; // Replace with dynamic city if needed

//   useEffect(() => {
//     axios
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//       .then((response) => {
//         console.log('Weather data:', response.data);  // Check the response data
//         setWeather(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//         setWeather(null);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>{language === "English" ? "Loading..." : "लोड हो रहा है..."}</p>;
//   }

//   if (!weather) {
//     return <p>{language === "English" ? "Failed to fetch weather data." : "मौसम डेटा प्राप्त करने में विफल।"}</p>;
//   }

//   const { main, weather: weatherCondition, wind } = weather;
//   const temperature = main.temp;
//   const condition = weatherCondition[0].description;
//   const humidity = main.humidity;
//   const windSpeed = wind.speed;

//   return (
//     <div className="card flex-1 min-w-[220px]">
//       <h3 className="text-soft-white text-xl font-semibold mb-4">{language === "English" ? "Current Weather" : "वर्तमान मौसम"}</h3>
//       <p className="mb-2"><strong>{language === "English" ? "Temperature" : "तापमान"}:</strong> {temperature}°C</p>
//       <p className="mb-2"><strong>{language === "English" ? "Condition" : "हालत"}:</strong> {condition}</p>
//       <p className="mb-2"><strong>{language === "English" ? "Humidity" : "नमी"}:</strong> {humidity}%</p>
//       <p className="mb-4"><strong>{language === "English" ? "Wind Speed" : "हवा की गति"}:</strong> {windSpeed} m/s</p>
//     </div>
//   );
// };

// export default Weather;
