import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navigationContainer">
      <hr />
      <div className="menu-container">
        <Link to="/">
          <button
            className={`menu-button ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            WhoAmI
          </button>
        </Link>

        <Link to="/experience">
          <button
            className={`menu-button ${
              location.pathname === "/experience" ? "active" : ""
            }`}
          >
            Experience
          </button>
        </Link>

        <Link to="/projects">
          <button
            className={`menu-button ${
              location.pathname === "/projects" ? "active" : ""
            }`}
          >
            Projects
          </button>
        </Link>
        <Link to="/contact" className="menu-item">
          <button className={`menu-button ${
              location.pathname === "/contact" ? "active" : ""
            }`}>Contact
            </button>
        </Link>
      </div>
    </div>
  );
}
