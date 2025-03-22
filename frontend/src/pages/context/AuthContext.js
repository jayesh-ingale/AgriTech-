import { createContext, useState } from "react";
import { isAuthenticated } from "./authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  const loginUser = (phone, password) => {
    const response = login(phone, password);
    setIsAuth(response.success);
    return response;
  };

  const signupUser = (name, phone, password) => {
    const response = signup(name, phone, password);
    setIsAuth(response.success);
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