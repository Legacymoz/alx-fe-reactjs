// src/hooks/useAuth.js
import { useState, useEffect } from "react";

// Mock authentication function - replace with real authentication logic
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate fetching authentication status (e.g., check localStorage or API)
    const user = localStorage.getItem("user"); // Example of storing user info in localStorage
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify({ username: "John Doe" })); // Example
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
