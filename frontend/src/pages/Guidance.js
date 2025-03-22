import React from "react";

const Guidance = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Guidance Page</h1>

      <div className="space-y-8">
        <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Crop Selection Guidance</h2>
          <p className="text-gray-300 mb-4">
            Personalized crop recommendations based on soil type, weather conditions, and market demand.
          </p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter Location"
              className="border p-2 rounded w-1/3 text-gray-800"
            />
            <input
              type="text"
              placeholder="Enter Soil Type"
              className="border p-2 rounded w-1/3 text-gray-800"
            />
            <input
              type="text"
              placeholder="Enter Season"
              className="border p-2 rounded w-1/3 text-gray-800"
            />
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
              Get Crop Recommendation
            </button>
          </div>
        </section>

        <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Fertilizer and Pesticide Usage</h2>
          <p className="text-gray-300 mb-4">
            Get guidance on optimal fertilizer and pesticide usage to maximize yield and minimize environmental impact.
          </p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            View Guidelines
          </button>
        </section>

        <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Soil Health Assessment</h2>
          <p className="text-gray-300 mb-4">
            Get soil testing guidelines and recommendations to maintain soil health and improve soil pH.
          </p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Assess Soil Health
          </button>
        </section>

        <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Financial Support</h2>
          <p className="text-gray-300 mb-4">
            Learn how to get crop insurance, agricultural loans, and government subsidies.
          </p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Get Financial Tips
          </button>
        </section>
      </div>
    </div>
  );
};

export default Guidance;
