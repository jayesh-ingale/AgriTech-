import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { loginUser, signupUser } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = async () => {
    if (isLogin) {
      if (email && password) {
        const response = await loginUser(email, password);
        if (response.success) {
          alert(response.message); // "Login successful"
          // Optional: Redirect or update UI here
          // e.g., window.location.href = "/dashboard";
        } else {
          alert(response.message); // Show error
        }
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } else {
      if (name && email && password) {
        const response = await signupUser(name, email, password);
        if (response.success) {
          alert(response.message); // "User registered"
          setIsLogin(true); // Switch to login after signup
        } else {
          alert(response.message); // Show error
        }
      } else {
        alert("Please fill all fields correctly.");
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Media/Farming.jpg')" }}
    >
      <div className="bg-[#2d3748] text-softWhite p-8 rounded-2xl shadow-lg w-96 bg-opacity-90">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Farmer Login" : "Farmer Sign Up"}
        </h2>
        <p className="text-softGray text-center mb-6">
          {isLogin ? "Enter your credentials to log in" : "Create your account"}
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bcbba] text-black mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bcbba] text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mt-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bcbba] text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleAuth}
          className="mt-4 w-full bg-[#45a29e] hover:bg-[#2bcbba] text-white font-bold py-2 rounded-lg transition-all"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-softWhite">
          {isLogin ? (
            <>Don't have an account? <a href="#" onClick={() => setIsLogin(false)} className="text-[#2bcbba] hover:underline">Sign up here</a></>
          ) : (
            <>Already have an account? <a href="#" onClick={() => setIsLogin(true)} className="text-[#2bcbba] hover:underline">Login here</a></>
          )}
        </p>
      </div>
    </div>
  );
}