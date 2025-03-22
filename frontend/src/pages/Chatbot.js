import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setResponses((prev) => [...prev, userMessage]); // Add user message

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [{ role: "user", parts: [{ text: message }] }],
        },
        {
          params: { key: "AIzaSyDBCt8tHrtb0ov4LOm1Xi32LuV_arFytFg" }, // 🔴 Replace with your actual API key
        }
      );

      const botResponse = {
        role: "bot",
        content: res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.",
      };

      setResponses((prev) => [...prev, botResponse]); // Add bot response
    } catch (error) {
      setResponses((prev) => [...prev, { role: "bot", content: "Error fetching response!" }]);
    }

    setMessage(""); // Clear input field
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">AgriTech Chatbot 🤖</h1>
      <div className="w-full max-w-md bg-white shadow-md p-4 rounded-lg">
        <div className="h-64 overflow-y-auto p-2 border-b">
          {responses.map((msg, index) => (
            <p
              key={index}
              className={`p-2 my-1 rounded ${
                msg.role === "user" ? "bg-blue-200 text-right" : "bg-gray-200 text-left"
              }`}
            >
              {msg.content}
            </p>
          ))}
        </div>
        <div className="flex mt-3">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l"
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 rounded-r" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;