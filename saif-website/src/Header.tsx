import "./Header.css";
import pic2 from "../assets/images/coverPicteotihuacan.jpg";
import cv from "../assets/Saif_Eddine_Abdelkefi_CV.pdf";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={"headerContainer"}>
      <div className="pictureContainer">
        <Link to="/" className="homeLink">
          <img
            src={pic2}
            className={"headshot"}
            alt={"headshot"}
            title="Me in front of the pyramids of Teotihuacan in Mexico"
          />
        </Link>
      </div>
      <div className={"infoContainer"}>
        <div className="name"> Saif Abdelkefi</div>
        <div className="occupation"> Software Engineer</div>
        <div className={"links"}>
          <div className="cvLink">
            <a href={cv} target="_blank">
              <i className="fa-solid fa-file-pen"></i>
            </a>
          </div>
          <span className={"tooltipCV"}>preview cv</span>
          <div className="githubLink">
            <a href="https://github.com/AslemaEnaSaif" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <span className={"tooltipGithub"}>checkout github</span>
          </div>

          <div className={"linkedinLink"}>
            <a
              href="https://www.linkedin.com/in/saifabdelkefi/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <span className={"tooltipLinkedin"}>connect on linkedin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
