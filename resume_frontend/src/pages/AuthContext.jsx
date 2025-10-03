import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("username", user);
    setUsername(user);
    setIsLoggedIn(true);
    toast.success(`Welcome, ${user}! 🎉`, { duration: 3000 });
  };

  const logout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("username");
      setUsername("");
      setIsLoggedIn(false);
      toast.success("Logged out successfully!", { duration: 2000 });
    }
  };

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
