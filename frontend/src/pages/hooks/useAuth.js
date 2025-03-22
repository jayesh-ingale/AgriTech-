import { useState } from "react";

const BASE_URL = "http://localhost:3000/api/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("authToken", data.token); // Store token
        setUser({ email }); // Minimal user info for now
        return { success: true, message: data.message, token: data.token };
      } else {
        return { success: false, message: data.message || "Login failed" };
      }
    } catch (error) {
      return { success: false, message: "Server error. Try again later." };
    }
  };

  const signupUser = async (name, email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("authToken", data.token); // Store token
        setUser({ name, email }); // Minimal user info
        return { success: true, message: data.message, token: data.token };
      } else {
        return { success: false, message: data.message || "Signup failed" };
      }
    } catch (error) {
      return { success: false, message: "Server error. Try again later." };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return { user, loginUser, signupUser, logoutUser };
}