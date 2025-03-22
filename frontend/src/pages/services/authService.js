export const login = (phone, password) => {
    if (phone.length === 10 && password) {
      localStorage.setItem("authToken", "dummy-token");
      return { success: true, message: "Login Successful!" };
    }
    return { success: false, message: "Invalid credentials" };
  };
  
  export const signup = (name, phone, password) => {
    if (name && phone.length === 10 && password) {
      localStorage.setItem("authToken", "dummy-token");
      return { success: true, message: "Signup Successful!" };
    }
    return { success: false, message: "Please fill all fields correctly." };
  };
  
  export const logout = () => {
    localStorage.removeItem("authToken");
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };