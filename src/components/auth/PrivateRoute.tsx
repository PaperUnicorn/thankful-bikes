import React from "react";
import { Navigate, redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const token = localStorage.getItem("auth");

  if (!token) {
    return <Navigate to="/welcome/login" replace />;
  }

  return children;
};

export default PrivateRoute;
