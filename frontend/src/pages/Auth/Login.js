import { useState } from "react";

export default function FarmersAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const handleAuth = () => {
    if (isLogin) {
      if (phone.length === 10 && password) {
        alert("Login Successful!"); // Replace with actual authentication logic
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } else {
      if (name && phone.length === 10 && password) {
        alert("Signup Successful!"); // Replace with actual signup logic
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
          type="tel"
          placeholder="Enter Phone Number"
          className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2bcbba] text-black"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
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
