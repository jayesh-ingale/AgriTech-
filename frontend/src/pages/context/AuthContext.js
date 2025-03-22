import { createContext, useState } from "react";
import { login, signup, logout, isAuthenticated } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  const loginUser = async (email, password) => {
    const response = await login(email, password);
    if (response.success) setIsAuth(true);
    return response;
  };

  const signupUser = async (name, email, password) => {
    const response = await signup(name, email, password);
    if (response.success) setIsAuth(true);
    return response;
  };

  const logoutUser = () => {
    logout();
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, signupUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
