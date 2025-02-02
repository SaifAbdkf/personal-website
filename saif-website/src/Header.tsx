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
