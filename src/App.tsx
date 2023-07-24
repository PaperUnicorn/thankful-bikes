import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useAppSelector, useAppDispatch } from "./hooks";
import AuthProvider from "./components/auth/AuthProvider";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";

function App() {
  const content = useRoutes(routes);
  return <AuthProvider>{content}</AuthProvider>;
}

export default App;
