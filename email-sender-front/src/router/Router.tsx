import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { Register } from "@/components/auth/Register";
import { Login } from "@/components/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import App from "@/App";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            // <PrivateRoute>
            <App />
            // </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
};
