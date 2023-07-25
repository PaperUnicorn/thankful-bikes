import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthProvider from "./components/auth/AuthProvider";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const content = useRoutes(routes);
  return <AuthProvider>{content}</AuthProvider>;
}

export default App;
