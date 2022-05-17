import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthService() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate("/dashboard");
  };
  const getToken = () => {
    const userToken = JSON.parse(sessionStorage.getItem("token"));
    return userToken;
  };
  const getUser = () => {
    const userDetails = JSON.parse(sessionStorage.getItem("user"));
    return userDetails;
  };
  const logout = () => {
    sessionStorage.clear();
    toast.success("User logged out successfully!");
    navigate("login");
  };
  return {
    saveToken,
    token,
    user,
    getToken,
    getUser,
    logout,
  };
}
