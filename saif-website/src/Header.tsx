import "./Header.css";

export default function Header() {
  return (
    <div className={"headerContainer"}>
      <img src="../assets/images/headshot4.jpg" className={"headshot"} />
      <div className={"title"}>
        <div className="name"> Saif Abdelkefi</div>
        <div className="occupation"> Software Engineer</div>
      </div>
      <div className={"links"}>
        <div>
          <a href="../assets/saif_resume.pdf" target="_blank">
            <i className="fa-solid fa-file-pen"></i>
          </a>
        </div>
        {/* download cv with cool animation*/}
        <div>
          <a href="https://github.com/AslemaEnaSaif" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* checkout my github */}
        <div>
          <a href="https://www.linkedin.com/in/saifabdelkefi/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        {/* lets connect on linkedin */}
      </div>
      <hr></hr>
    </div>
  );
}
