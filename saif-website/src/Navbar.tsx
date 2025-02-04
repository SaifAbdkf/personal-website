import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  //   const navigate = useNavigate();
  return (
    <div className={"navigationContainer"}>
      <hr></hr>
      <div className="menu-container">
        <Link to="/">
          <button className="menu-button">WhoAmI</button>
        </Link>
        <Link to="/experience" className="menu-item">
          <button className="menu-button">Experience</button>
        </Link>

        <Link to="/projects" className="menu-item">
          <button className="menu-button">Projects</button>
        </Link>
        <Link to="/contact" className="menu-item">
          <button className="menu-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
