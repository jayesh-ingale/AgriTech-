export const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("authToken", data.data.token);
      }
      return data;
    } catch (error) {
      return { success: false, message: "Login failed. Please try again." };
    }
  };
  
  export const signup = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("authToken", data.data.token);
      }
      return data;
    } catch (error) {
      return { success: false, message: "Signup failed. Please try again." };
    }
  };
  
  export const logout = () => {
    localStorage.removeItem("authToken");
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };
  