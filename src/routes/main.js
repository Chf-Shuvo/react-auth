import { Navigate, Route, Routes } from "react-router-dom";

import AuthService from "../services/auth";
import Dashboard from "../views/pages/dashboard";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Start from "../views/start";

function AppRoutes() {
  const { getToken } = AuthService();
  const authenticated = getToken();
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          authenticated ? <Dashboard /> : <Navigate replace to="/login" />
        }
      ></Route>
      <Route
        path="/login"
        element={
          authenticated ? <Navigate replace to="/dashboard" /> : <Login />
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" exact element={<Start />}></Route>
    </Routes>
  );
}

export default AppRoutes;
