import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const Logout = () => {
  const { LogoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    LogoutUser();
    navigate("/");
  }, []);
};
