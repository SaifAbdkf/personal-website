import "./Header.css";
import pdp_small from "../assets/images/pdp_small.jpg";
import cv from "../assets/Saif_CV.pdf";

export default function Header() {
  return (
    <div className={"headerContainer"}>
      <img src={pdp_small} className={"headshot"} alt={"headshot"} />
      <div className={"title"}>
        <div className="name"> Saif Abdelkefi</div>
        <div className="occupation"> Software Engineer</div>
      </div>
      <div className={"links"}>
        <div>
          <a href={cv} target="_blank">
            <i className="fa-solid fa-file-pen"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/AslemaEnaSaif" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/saifabdelkefi/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
