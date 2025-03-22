import axios from "axios";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = "AIzaSyDBCt8tHrtb0ov4LOm1Xi32LuV_arFytFg"; // 🔴 Replace with actual API key

export const sendChatMessage = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
      },
      {
        params: { key: API_KEY },
      }
    );

    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
  } catch (error) {
    return "Error fetching response!";
  }
};