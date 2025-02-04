import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation(); // Récupérer le chemin actuel

  return (
    <div className="navigationContainer">
      <hr />
      <div className="menu-container">
        <Link to="/">
          <button className={`menu-button ${location.pathname === "/" ? "active" : ""}`}>
            WhoAmI
          </button>
        </Link>

        <Link to="/experience">
          <button className={`menu-button ${location.pathname === "/experience" ? "active" : ""}`}>
            Experience
          </button>
        </Link>

        <Link to="/projects">
          <button className={`menu-button ${location.pathname === "/projects" ? "active" : ""}`}>
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
