import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="menu-container">
      <a href="/" className="menu-item">
        <button className="menu-button">WhoAmI</button>
      </a>
      <a href="/experience" className="menu-item">
        <button className="menu-button">Experience</button>
      </a>
      <a href="/projects" className="menu-item">
        <button className="menu-button">Projects</button>
      </a>
    </div>
  );
}
