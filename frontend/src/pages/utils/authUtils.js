export const saveAuthToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  export const removeAuthToken = () => {
    localStorage.removeItem("authToken");
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };
  