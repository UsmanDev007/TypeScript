import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const token =
      useSelector((state: any) => state.auth.token) ||
      localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };