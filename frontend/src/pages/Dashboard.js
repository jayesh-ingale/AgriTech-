// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = "579b464db66ec23bdd00000134483bd7a8f44e27533f494d361fd312"; // Your API Key
// const RESOURCE_ID = "266aad78-cad2-418a-b349-599f31942b3a"; // Your Resource ID
// const API_URL = `https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${API_KEY}&format=json&limit=10;`

// const Dashboard = () => {
//   const [cropPrices, setCropPrices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCropPrices = async () => {
//       try {
//         const response = await axios.get(API_URL);
        
//         console.log("API Response:", response.data); // Debugging line

//         if (response.data && response.data.records) {
//           setCropPrices(response.data.records);
//         } else {
//           setError("No data found in API response.");
//         }
        
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setLoading(false);
//       }
//     };

//     fetchCropPrices();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-green-600 mb-4">
//         🌾 Real-Time Kharif Crop Prices!!
//       </h1>

//       {loading && <p className="text-blue-500">Fetching data...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-green-600">
//           <thead>
//             <tr className="bg-green-200 text-left">
//               <th className="border border-green-600 p-2">Crop</th>
//               <th className="border border-green-600 p-2">Variety</th>
//               <th className="border border-green-600 p-2">2013-14 (₹)</th>
//               <th className="border border-green-600 p-2">2019-20 (₹)</th>
//               <th className="border border-green-600 p-2">2024-25 (₹)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cropPrices.length > 0 ? (
//               cropPrices.map((item, index) => (
//                 <tr key={index} className="hover:bg-green-100">
//                   <td className="border border-green-600 p-2">{item["Kharif Crops"] || "N/A"}</td>
//                   <td className="border border-green-600 p-2">{item["Variety"] || "N/A"}</td>
//                   <td className="border border-green-600 p-2">{item["2013-14"] || "N/A"}</td>
//                   <td className="border border-green-600 p-2">{item["2019-20"] || "N/A"}</td>
//                   <td className="border border-green-600 p-2">{item["2024-25"] || "N/A"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="border border-green-600 p-2 text-center">
//                   No data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";

const hardcodedData = [
  { crop: "Paddy", variety: "Common", year_2013: "1310", year_2019: "1815", year_2024: "2300" },
  { crop: "Paddy", variety: "Grade A", year_2013: "1345", year_2019: "1835", year_2024: "2320" },
  { crop: "Jowar", variety: "Hybrid", year_2013: "1500", year_2019: "2550", year_2024: "3371" },
  { crop: "Jowar", variety: "Maldandi", year_2013: "1520", year_2019: "2570", year_2024: "3421" },
  { crop: "Bajra", variety: "NA", year_2013: "1250", year_2019: "2000", year_2024: "2625" },
  { crop: "Ragi", variety: "NA", year_2013: "1500", year_2019: "3150", year_2024: "4290" },
  { crop: "Maize", variety: "NA", year_2013: "1310", year_2019: "1760", year_2024: "2225" },
  { crop: "Tur (Arhar)", variety: "NA", year_2013: "4300", year_2019: "5800", year_2024: "7550" },
  { crop: "Moong", variety: "NA", year_2013: "4500", year_2019: "7050", year_2024: "8682" },
  { crop: "Urad", variety: "NA", year_2013: "4300", year_2019: "5700", year_2024: "7400" },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">🌾 Real-Time Kharif Crop Prices!!</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-green-600">
          <thead>
            <tr className="bg-green-200 text-left">
              <th className="border border-green-600 p-2">Crop</th>
              <th className="border border-green-600 p-2">Variety</th>
              <th className="border border-green-600 p-2">2013-14 (₹)</th>
              <th className="border border-green-600 p-2">2019-20 (₹)</th>
              <th className="border border-green-600 p-2">2024-25 (₹)</th>
            </tr>
          </thead>
          <tbody>
            {hardcodedData.map((item, index) => (
              <tr key={index} className="hover:bg-green-100">
                <td className="border border-green-600 p-2">{item.crop}</td>
                <td className="border border-green-600 p-2">{item.variety}</td>
                <td className="border border-green-600 p-2">{item.year_2013}</td>
                <td className="border border-green-600 p-2">{item.year_2019}</td>
                <td className="border border-green-600 p-2">{item.year_2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;