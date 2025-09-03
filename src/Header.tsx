import "./Header.css";
import pic2 from "../assets/images/coverPicteotihuacan_smaller.jpg";
import { Link } from "react-router-dom";
import { FileUser, Github, Linkedin } from "lucide-react";

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
              href="https://saifabdkf.github.io/my-resume/Saif_Abdelkefi_Resume.pdf"
              target="_blank"
            >
              <FileUser className="icon" size={26} />
            </a>
            <span className={"tooltipCV"}>preview resume</span>
          </div>
          <span className={"tooltipCV"}>preview cv</span>
          <div className="githubLink">
            <a href="https://github.com/SaifAbdkf" target="_blank">
              {/* <i className="fa-brands fa-github icon"></i> */}
              <Github className="icon" size={26} />
            </a>
            <span className={"tooltipGithub"}>checkout github</span>
          </div>

          <div className={"linkedinLink"}>
            <a
              href="https://www.linkedin.com/in/saifabdelkefi/"
              target="_blank"
            >
              <Linkedin className="icon" size={26} />
              {/* <i className="fa-brands fa-linkedin icon"></i> */}
            </a>
            <span className={"tooltipLinkedin"}>connect on linkedinnn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
