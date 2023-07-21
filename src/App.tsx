import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useAppSelector, useAppDispatch } from "./hooks";

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const content = useRoutes(routes);
  return content;
}

export default App;
