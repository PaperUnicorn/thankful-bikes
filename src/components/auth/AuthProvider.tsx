import React, { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const AuthProvider: React.FC<any> = ({ children }) => {
  const AuthContext = React.createContext(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState<null | String>(null);

  const handleLogin = async () => {
    const token = "abcd";

    setToken(token);
    const origin = location.state?.from?.pathname || "/dashboard";
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value: any = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
