import AuthService from "../services/auth";
import { Link } from "react-router-dom";

function AuthNav() {
  const { logout } = AuthService();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item active">
            <Link to={"/dashboard"} className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={logout}
            >
              logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AuthNav;
