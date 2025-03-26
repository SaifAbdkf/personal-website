import "./Experience.css";

export default function Experience() {
  return (
    <div className={"listContainer jumpAnimation"}>
      <ul>
        <li>
          <div className="listItemContainer">
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle"}>
                Software Developer (Started as an Intern)
              </h2>
              <span className={"date"}>May 2023 &#x2192; Aug 2024</span>
            </div>
            <h3>
              <a className="myLink" href="https://pixmob.com/" target="_blank">
                PixMob
              </a>
              , Montreal
            </h3>
            <p>
              Designed and developed features and internal library components
              for a 3D light show visualization web application using React
              Typescript and Three.Js
            </p>
          </div>
        </li>

        <li>
          <div className="listItemContainer">
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle"}>Intern Developer</h2>
              <span className={"date"}>May 2022 &#x2192; Apr 2023</span>
            </div>
            <h3>
              <a
                className="myLink"
                href="https://www.rcgt.com/"
                target="_blank"
              >
                Raymond Chabot Grant Thornton
              </a>
              , Montreal
            </h3>
            <p>
              Developed a 80,000$ Power apps application integrated with PowerBI
              for accountants and CFOs to manage financial statements
            </p>
          </div>
        </li>

        <li>
          <div className="listItemContainer">
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle"}>Coding teacher</h2>
              <span className={"date"}>Sep 2021 &#x2192; Apr 2022</span>
            </div>
            <h3>
              <a
                className="myLink"
                href="https://www.rcgt.com/"
                target="_blank"
              >
                BLI
              </a>
              , Montreal
            </h3>
            <p>
              Designed a Python programming course and taught it to over 20 high
              school teenagers guiding them to come up with creative and optimal
              designs for their programs
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
