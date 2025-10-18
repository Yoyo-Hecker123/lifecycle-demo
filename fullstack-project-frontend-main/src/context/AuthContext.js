import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser"));

  // Sync state with localStorage in case of manual changes
  useEffect(() => {
    const handleStorageChange = () => setLoggedInUser(localStorage.getItem("loggedInUser"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (username) => {
    localStorage.setItem("loggedInUser", username);
    setLoggedInUser(username);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
