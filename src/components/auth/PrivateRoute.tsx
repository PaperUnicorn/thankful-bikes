import React from "react";
import { Navigate, redirect, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const token = useAppSelector((state) => state.userDetails.token);
  console.log(token);
  if (!token) {
    return <Navigate to="/welcome/login" replace />;
  }

  return children;
};

export default PrivateRoute;
