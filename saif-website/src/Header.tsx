import "./Header.css";
import pic2 from "../assets/images/coverPicteotihuacan_smaller.jpg";
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
        <Link to="/" className="homeLink">
          <div className="name"> Saif Abdelkefi</div>
        </Link>
        <div className="occupation"> Full Stack Developer</div>
        <div className={"links"}>
          <div className="cvLink">
            <a
              href="https://aslemaenasaif.github.io/my-resume/Saif_Abdelkefi_Resume.pdf"
              target="_blank"
            >
              <i className="fa-solid fa-file-pen"></i>
            </a>
            <span className={"tooltipCV"}>preview resume</span>
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
