import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Your CSS for Navbar

export default function Navbar() {
  const location = useLocation(); // Get the current location/path

  return (
    <div className="navigationContainer">
      <hr />
      <div className="menu-container">
        <Link to="/">
          <button
            className={`menu-button ${location.pathname === "/" ? "active" : ""}`}
          >
            WhoAmI
          </button>
        </Link>

        <Link to="/experience">
          <button
            className={`menu-button ${location.pathname === "/experience" ? "active" : ""}`}
          >
            Experience
          </button>
        </Link>

        <Link to="/projects">
          <button
            className={`menu-button ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </button>
        </Link>

        <Link to="/contact">
          <button
            className={`menu-button ${location.pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
