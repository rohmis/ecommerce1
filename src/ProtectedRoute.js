import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/Login" />;
};

const ProtectedLoginRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn  ? <Navigate to="/" /> : children;
};

export { ProtectedRoute, ProtectedLoginRoute };