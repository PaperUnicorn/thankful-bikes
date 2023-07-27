import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { logout, setUser } from "../../UserSlice";

export const AuthContext = React.createContext(null);

const AuthProvider: React.FC<any> = ({ children }) => {
  const user = useAppSelector((state) => state.userDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState<null | String>(null);

  const handleLogin = async (token: string) => {
    dispatch(setUser({ id: null, username: null, token }));
    const origin = location.state?.from?.pathname || "/dashboard";
    navigate(origin);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const value: any = {
    AuthContext,
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
