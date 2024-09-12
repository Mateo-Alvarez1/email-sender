import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to={"/home"} />;
};
