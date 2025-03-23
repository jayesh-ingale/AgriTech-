// import React, { useState, useEffect } from 'react';

// const mockWeatherData = {
//     location: "Your Farm",
//     temperature: "28°C",
//     humidity: "65%",
//     windSpeed: "12 km/h",
//     precipitation: "20%",
//     weatherCondition: "Partly Cloudy",
//     forecast: [
//         { day: "Monday", condition: "Sunny", temp: "30°C" },
//         { day: "Tuesday", condition: "Cloudy", temp: "27°C" },
//         { day: "Wednesday", condition: "Rainy", temp: "25°C" },
//         { day: "Thursday", condition: "Thunderstorm", temp: "23°C" },
//         { day: "Friday", condition: "Clear Sky", temp: "29°C" },
//     ],
// };

// const Weather = () => {
//     const [weatherData, setWeatherData] = useState(mockWeatherData);

//     // Simulate real-time updates with random temperature changes
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const newTemp = `${Math.floor(Math.random() * 10) + 25}°C`;
//             setWeatherData((prevData) => ({
//                 ...prevData,
//                 temperature: newTemp,
//             }));
//         }, 5000); // Update every 5 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="p-6 bg-gradient-to-r from-[#00467F] to-[#A5CC82] text-white rounded-2xl shadow-md">
//             <h1 className="text-4xl font-bold mb-4">Weather Predictions</h1>
//             <p className="text-lg mb-4">
//                 Stay updated with hyperlocal weather forecasts powered by satellite data and AI, 
//                 helping you make better farming decisions.
//             </p>

//             {/* Real-Time Weather Data */}
//             <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg mb-4">
//                 <h2 className="text-2xl font-semibold">Current Weather at {weatherData.location}</h2>
//                 <p className="text-xl">Temperature: {weatherData.temperature}</p>
//                 <p>Humidity: {weatherData.humidity}</p>
//                 <p>Wind Speed: {weatherData.windSpeed}</p>
//                 <p>Precipitation: {weatherData.precipitation}</p>
//                 <p>Condition: {weatherData.weatherCondition}</p>
//             </div>

//             {/* 5-Day Forecast */}
//             <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg">
//                 <h2 className="text-2xl font-semibold mb-2">5-Day Forecast</h2>
//                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                     {weatherData.forecast.map((day, index) => (
//                         <div key={index} className="bg-gray-700 bg-opacity-70 p-3 rounded-lg">
//                             <h3 className="text-xl font-bold">{day.day}</h3>
//                             <p>Condition: {day.condition}</p>
//                             <p>Temperature: {day.temp}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Tips and Warnings */}
//             <div className="mt-4 bg-gray-800 bg-opacity-60 p-4 rounded-lg">
//                 <h2 className="text-2xl font-semibold mb-2">Farming Tips & Warnings</h2>
//                 <p>
//                     🌦️ Monitor precipitation closely to plan irrigation.  
//                     🌬️ Strong winds detected — protect your crops and equipment.  
//                     ☀️ Stay prepared for sunny and hot conditions.  
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Weather;








// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Weather = ({ language }) => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const apiKey = "436cda8fecee367525cd30b63bbb63ff"; // Replace with your API key
//   const city = "Pune"; // Replace with dynamic city if needed

//   useEffect(() => {
//     // Fetch weather data directly from OpenWeather API
//     axios
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//       .then((response) => {
//         setWeather(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//         setWeather(null);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="loading">{language === "English" ? "Loading..." : "लोड हो रहा है..."}</p>;
//   }

//   if (!weather) {
//     return <p>{language === "English" ? "Failed to fetch weather data." : "मौसम डेटा प्राप्त करने में विफल।"}</p>;
//   }

//   // Format the weather data
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






import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "436cda8fecee367525cd30b63bbb63ff"; // Replace with your API key
  const city = "Pune"; // Replace with dynamic city if needed

  useEffect(() => {
    // Fetch weather data directly from OpenWeather API
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeather(null);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading text-center text-lg text-white">Loading...</p>;
  }

  if (!weather) {
    return <p className="text-center text-lg text-white">Failed to fetch weather data.</p>;
  }

  // Format the weather data
  const { main, weather: weatherCondition, wind } = weather;
  const temperature = main.temp;
  const condition = weatherCondition[0].description;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  return (
    <div className="p-8 bg-gradient-to-r from-[#00467F] to-[#A5CC82] text-soft-white rounded-2xl shadow-xl max-w-lg mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6 text-white">
        Current Weather
      </h3>
      
      <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg">
        <div className="flex flex-col items-center text-white">
          <p className="text-2xl mb-2">
            <strong>Temperature:</strong> {temperature}°C
          </p>
          <p className="text-lg mb-2">
            <strong>Condition:</strong> {condition}
          </p>
          <p className="text-lg mb-2">
            <strong>Humidity:</strong> {humidity}%
          </p>
          <p className="text-lg mb-6">
            <strong>Wind Speed:</strong> {windSpeed} m/s
          </p>
          
          <div className="flex justify-between w-full max-w-xs">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md">
              Refresh
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* English output */}
      <div className="mt-4 bg-gray-800 bg-opacity-70 p-4 rounded-lg">
        <p className="text-lg text-white">
          Weather Report for {city}: The temperature is {temperature}°C, the condition is {condition}, the humidity level is {humidity}%, and the wind speed is {windSpeed} m/s.
        </p>
      </div>
    </div>
  );
};

export default Weather;

