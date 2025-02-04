import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
  <img src="../assets/headshot3.jpg" className="headshot" alt="Saif Abdelkefi" />
  <div className="title">
    <div className="saif_H1">Saif Abdelkefi</div>
    <div>Software Engineer</div>
  </div>
  <div className="links">
    <div>CV</div>
    <div>GitHub</div>
    <div>LinkedIn</div>
  </div>
  <div className="menu-container">
    <a href="/" className="menu-item">
      <button className="menu-button">
        <span className="button-text">WhoAmI</span>
      </button>
    </a>
    <a href="/blogs" className="menu-item">
      <button className="menu-button">
        <span className="button-text">Experience</span>
      </button>
    </a>
    <a href="/newsletter" className="menu-item">
      <button className="menu-button">
        <span className="button-text">Projects</span>
      </button>
    </a>
  </div>
</div>

  );
}
