import "./Header.css";
import pdp_small from "../assets/images/pdp_small.jpg";
import cv from "../assets/Saif_Eddine_Abdelkefi_CV.pdf";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={"headerContainer"}>
      <Link to="/" className="homeLink">
        <img src={pdp_small} className={"headshot"} alt={"headshot"} />

        <div className="name"> Saif Abdelkefi</div>
      </Link>
      <div className="occupation"> Software Engineer</div>

      <div className={"links"}>
        <div className="cvLink">
          <a href={cv} target="_blank">
            <i className="fa-solid fa-file-pen"></i>
          </a>
          <span className={"tooltipCV"}>preview cv</span>
        </div>
        <div className="githubLink">
          <a href="https://github.com/AslemaEnaSaif" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <span className={"tooltipGithub"}>checkout github</span>
        </div>

        <div className={"linkedinLink"}>
          <a href="https://www.linkedin.com/in/saifabdelkefi/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <span className={"tooltipLinkedin"}>connect on linkedin</span>
        </div>
      </div>
    </div>
  );
}
