// // import React, { useState } from "react";
// // import axios from "axios";

// // const Guidance = () => {
// //   const [location, setLocation] = useState("");
// //   const [soilType, setSoilType] = useState("");
// //   const [season, setSeason] = useState("");
// //   const [recommendation, setRecommendation] = useState("");

// //   const getCropRecommendation = async () => {
// //     try {
// //       const response = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`, {
// //         params: {
// //           location: location,
// //           soilType: soilType,
// //           season: season,
// //           apiKey: process.env.REACT_APP_GEMINI_API_KEY,
// //         },
// //       });
// //       setRecommendation(response.data.recommendation);
// //     } catch (error) {
// //       console.error("Error fetching crop recommendation:", error);
// //       setRecommendation("Failed to fetch recommendations.");
// //     }
// //   };

// //   return (
// //     <div className="p-8 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
// //       <h1 className="text-4xl font-bold text-center mb-8">Guidance Page</h1>

// //       <div className="space-y-8">
// //         <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
// //           <h2 className="text-2xl font-semibold mb-4">Crop Selection Guidance</h2>
// //           <p className="text-gray-300 mb-4">
// //             Personalized crop recommendations based on soil type, weather conditions, and market demand.
// //           </p>
// //           <div className="flex space-x-2 mb-4">
// //             <input
// //               type="text"
// //               placeholder="Enter Location"
// //               value={location}
// //               onChange={(e) => setLocation(e.target.value)}
// //               className="border p-2 rounded w-1/3 text-gray-800"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Enter Soil Type"
// //               value={soilType}
// //               onChange={(e) => setSoilType(e.target.value)}
// //               className="border p-2 rounded w-1/3 text-gray-800"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Enter Season"
// //               value={season}
// //               onChange={(e) => setSeason(e.target.value)}
// //               className="border p-2 rounded w-1/3 text-gray-800"
// //             />
// //             <button
// //               onClick={getCropRecommendation}
// //               className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
// //             >
// //               Get Crop Recommendation
// //             </button>
// //           </div>
// //           {recommendation && (
// //             <p className="text-gray-300">
// //               <strong>Recommendation:</strong> {recommendation}
// //             </p>
// //           )}
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Guidance;



// import React, { useState } from "react";
// import axios from "axios";

// const Guidance = () => {
//   const [location, setLocation] = useState("");
//   const [soilType, setSoilType] = useState("");
//   const [season, setSeason] = useState("");
//   const [recommendation, setRecommendation] = useState("");

//   // API URL and API key
//   const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
//   const API_KEY = "AIzaSyDBCt8tHrtb0ov4LOm1Xi32LuV_arFytFg"; // 🔴 Replace with actual API key

//   const getCropRecommendation = async () => {
//     try {
//       const message = `Location: ${location}, Soil Type: ${soilType}, Season: ${season}`;
      
//       const response = await axios.post(
//         API_URL,
//         {
//           contents: [{ role: "user", parts: [{ text: message }] }]
//         },
//         {
//           params: { key: API_KEY }
//         }
//       );

//       // Extracting recommendation from API response
//       const recommendationText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No recommendation available.";
//       setRecommendation(recommendationText);
//     } catch (error) {
//       console.error("Error fetching crop recommendation:", error);
//       setRecommendation("Failed to fetch recommendations.");
//     }
//   };

//   return (
//     <div className="p-8 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
//       <h1 className="text-4xl font-bold text-center mb-8">Guidance Page</h1>

//       <div className="space-y-8">
//         <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
//           <h2 className="text-2xl font-semibold mb-4">Crop Selection Guidance</h2>
//           <p className="text-gray-300 mb-4">
//             Personalized crop recommendations based on soil type, weather conditions, and market demand.
//           </p>
//           <div className="flex space-x-2 mb-4">
//             <input
//               type="text"
//               placeholder="Enter Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="border p-2 rounded w-1/3 text-gray-800"
//             />
//             <input
//               type="text"
//               placeholder="Enter Soil Type"
//               value={soilType}
//               onChange={(e) => setSoilType(e.target.value)}
//               className="border p-2 rounded w-1/3 text-gray-800"
//             />
//             <input
//               type="text"
//               placeholder="Enter Season"
//               value={season}
//               onChange={(e) => setSeason(e.target.value)}
//               className="border p-2 rounded w-1/3 text-gray-800"
//             />
//             <button
//               onClick={getCropRecommendation}
//               className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Get Crop Recommendation
//             </button>
//           </div>
//           {recommendation && (
//             <p className="text-gray-300">
//               <strong>Recommendation:</strong> {recommendation}
//             </p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Guidance;



import React, { useState } from "react";
import axios from "axios";

const Guidance = () => {
  const [location, setLocation] = useState("");
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [recommendation, setRecommendation] = useState("");

  // API URL and API key
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  const API_KEY = "AIzaSyDBCt8tHrtb0ov4LOm1Xi32LuV_arFytFg"; // 🔴 Replace with actual API key

  const getCropRecommendation = async () => {
    try {
      const message = `Location: ${location}, Soil Type: ${soilType}, Season: ${season} and give output in normal text form, don't add any markdown formats , remove** or any other unnecessary formats`;
      
      const response = await axios.post(
        API_URL,
        {
          contents: [{ role: "user", parts: [{ text: message }] } ]
        },
        {
          params: { key: API_KEY }
        }
      );

      // Extracting recommendation from API response
      const recommendationText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No recommendation available.";
      setRecommendation(recommendationText);
    } catch (error) {
      console.error("Error fetching crop recommendation:", error);
      setRecommendation("Failed to fetch recommendations.");
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Guidance Page</h1>

      <div className="space-y-8">
        <section className="bg-gray-800 bg-opacity-70 shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Crop Selection Guidance</h2>
          <p className="text-gray-300 mb-4">
            Personalized crop recommendations based on soil type, weather conditions, and market demand.
          </p>

          {/* Input Fields */}
          <div className="flex space-x-2 mb-4 flex-wrap justify-center">
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 rounded w-1/3 md:w-1/4 text-gray-800"
            />
            <input
              type="text"
              placeholder="Enter Soil Type"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="border p-2 rounded w-1/3 md:w-1/4 text-gray-800"
            />
            <input
              type="text"
              placeholder="Enter Season"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="border p-2 rounded w-1/3 md:w-1/4 text-gray-800"
            />
            <button
              onClick={getCropRecommendation}
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded md:w-1/4"
            >
              Get Crop Recommendation
            </button>
          </div>

          {/* Displaying Recommendation */}
          {recommendation && (
            <div className="bg-white text-gray-800 rounded-xl p-6 mt-6 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Recommended Crop</h3>
              <div className="flex space-x-4 items-center">
                <p className="text-lg">{recommendation}</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Guidance;
