import React, { useState, useEffect } from 'react';

const mockWeatherData = {
    location: "Your Farm",
    temperature: "28°C",
    humidity: "65%",
    windSpeed: "12 km/h",
    precipitation: "20%",
    weatherCondition: "Partly Cloudy",
    forecast: [
        { day: "Monday", condition: "Sunny", temp: "30°C" },
        { day: "Tuesday", condition: "Cloudy", temp: "27°C" },
        { day: "Wednesday", condition: "Rainy", temp: "25°C" },
        { day: "Thursday", condition: "Thunderstorm", temp: "23°C" },
        { day: "Friday", condition: "Clear Sky", temp: "29°C" },
    ],
};

const Weather = () => {
    const [weatherData, setWeatherData] = useState(mockWeatherData);

    // Simulate real-time updates with random temperature changes
    useEffect(() => {
        const interval = setInterval(() => {
            const newTemp = `${Math.floor(Math.random() * 10) + 25}°C`;
            setWeatherData((prevData) => ({
                ...prevData,
                temperature: newTemp,
            }));
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 bg-gradient-to-r from-[#00467F] to-[#A5CC82] text-white rounded-2xl shadow-md">
            <h1 className="text-4xl font-bold mb-4">Weather Predictions</h1>
            <p className="text-lg mb-4">
                Stay updated with hyperlocal weather forecasts powered by satellite data and AI, 
                helping you make better farming decisions.
            </p>

            {/* Real-Time Weather Data */}
            <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg mb-4">
                <h2 className="text-2xl font-semibold">Current Weather at {weatherData.location}</h2>
                <p className="text-xl">Temperature: {weatherData.temperature}</p>
                <p>Humidity: {weatherData.humidity}</p>
                <p>Wind Speed: {weatherData.windSpeed}</p>
                <p>Precipitation: {weatherData.precipitation}</p>
                <p>Condition: {weatherData.weatherCondition}</p>
            </div>

            {/* 5-Day Forecast */}
            <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">5-Day Forecast</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {weatherData.forecast.map((day, index) => (
                        <div key={index} className="bg-gray-700 bg-opacity-70 p-3 rounded-lg">
                            <h3 className="text-xl font-bold">{day.day}</h3>
                            <p>Condition: {day.condition}</p>
                            <p>Temperature: {day.temp}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tips and Warnings */}
            <div className="mt-4 bg-gray-800 bg-opacity-60 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Farming Tips & Warnings</h2>
                <p>
                    🌦️ Monitor precipitation closely to plan irrigation.  
                    🌬️ Strong winds detected — protect your crops and equipment.  
                    ☀️ Stay prepared for sunny and hot conditions.  
                </p>
            </div>
        </div>
    );
};

export default Weather;
