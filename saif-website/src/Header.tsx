import "./Header.css";

export default function Header() {
  return (
    <div className={"headerContainer"}>
      <img src="../assets/images/headshot3.jpg" className={"headshot"} />
      <div className={"title"}>
        <div className="name"> Saif Abdelkefi</div>
        <div className="occupation"> Software Engineer</div>
      </div>
      <div className={"links"}>
        <div>
          <i className="fa-solid fa-file-pen"></i>
        </div>
        {/* download cv with cool animation*/}
        <div>
          <i className="fa-brands fa-github"></i>
        </div>

        {/* checkout my github */}
        <div>
          {" "}
          <i className="fa-brands fa-linkedin"></i>
        </div>
        {/* lets connect on linkedin */}
      </div>
      <hr></hr>
    </div>
  );
}
