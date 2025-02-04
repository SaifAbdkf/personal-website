import "./Header.css";
import headshot4 from "../assets/images/headshot4.jpg";

export default function Header() {
  return (
    <div className={"headerContainer"}>
      <img src="../assets/headshot3.jpg" className={"headshot"} />
      <div className={"title"}>
        <div className="saif_H1"> Saif Abdelkefi</div>
        <div> Sofware Engineer</div>
      </div>
      <div className={"links"}>
        <div> CV </div>
        {/* download cv with cool animation*/}
        <div> github </div>
        {/* checkout my github */}
        <div> linkedin </div>
        {/* lets connect on linkedin */}
      </div>
    </div>
  );
}
