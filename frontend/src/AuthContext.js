// AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(localStorage.getItem("token"));

  const setItemInLS = (token) => {
    setToken(token);
    return localStorage.setItem("token", token);
  };

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const isLoggedIn = !!Token;
  // const verifyAuth = async () => {
  //   try {
  //     console.log("auth verification started");
  //     const res = await axios.get(
  //       " http://localhost:5000/api/user/verify ",
  //       {}
  //     );
  //     console.log("auth verification successsful");
  //     setAuth({ isAuthenticated: true, user: res.data.user });
  //   } catch (err) {
  //     console.log("verification failed");
  //     setAuth({ isAuthenticated: false, user: null });
  //   }
  //};

  return (
    <AuthContext.Provider value={{ setItemInLS, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
