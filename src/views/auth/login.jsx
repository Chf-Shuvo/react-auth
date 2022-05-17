import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import AuthService from "../../services/auth";
import apiServices from "../../services/api";
import config from "../../config.json";
import { useState } from "react";

export default function Login() {
  const { saveToken } = AuthService();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = () => {
    apiServices
      .post(
        config.apiBase + "login",
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      )
      .then((response) => {
        console.log(response.status);
        saveToken(response.data.user, response.data.token);
      })
      .catch(function (error) {
        console.log(error.response.status);
        toast.error("Invalid User Credentials!");
      });
  };
  return (
    <div className="container">
      <h1>Login Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            value={email || ""}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            value={password || ""}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
