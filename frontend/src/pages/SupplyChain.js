import React, { useState } from "react";

const mockEquipment = [
  { id: 1, name: "Tractor", type: "Rental", price: "₹2000/day" },
  { id: 2, name: "Harvester", type: "Rental", price: "₹3000/day" },
  { id: 3, name: "Plough", type: "Purchase", price: "₹25,000" },
  { id: 4, name: "Seed Drill", type: "Purchase", price: "₹15,000" },
];

const mockTransport = [
  { id: 1, type: "Truck", availability: "Available" },
  { id: 2, type: "Mini Van", availability: "Booked" },
];

const SupplyChain = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);

  const handleRent = (equipment) => {
    alert(`Renting ${equipment.name} for ${equipment.price}`);
  };

  const handlePurchase = (equipment) => {
    alert(`Purchasing ${equipment.name} for ${equipment.price}`);
  };

  const handleTransportBooking = (transport) => {
    alert(`Booking ${transport.type} - ${transport.availability}`);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Supply Chain Management</h1>

      {/* Renting and Buying Equipment */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Farming Equipment</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockEquipment.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold">{equipment.name}</h3>
              <p>Type: {equipment.type}</p>
              <p>Price: {equipment.price}</p>
              {equipment.type === "Rental" ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => handleRent(equipment)}
                >
                  Rent Now
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => handlePurchase(equipment)}
                >
                  Buy Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Transport Options */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Transport Options</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {mockTransport.map((transport) => (
            <div
              key={transport.id}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold">{transport.type}</h3>
              <p>Status: {transport.availability}</p>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => handleTransportBooking(transport)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics Support */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Logistics Support</h2>
        <form className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg">
          <label className="block text-white mb-2">Issue/Query:</label>
          <textarea
            className="w-full p-2 rounded-lg text-gray-800"
            placeholder="Describe your issue or support request..."
            rows={4}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Spare Parts and Maintenance */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Spare Parts & Maintenance</h2>
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg">
          <p>Coming Soon! Stay tuned for more updates.</p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
