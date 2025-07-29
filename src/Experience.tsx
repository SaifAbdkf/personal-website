import "./Experience.css";

export default function Experience() {
  return (
    <div className={"listContainer jumpAnimation"}>
      <ul>
        <li>
          <div className="listItemContainer">
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle"}> Volunteer Founding Engineer</h2>
              <span className={"date"}>July 2025</span>
            </div>
            <h3 className={"company"}>
              <a
                className="myLink"
                href="https://powerdime.io/"
                target="_blank"
              >
                Power Dime
              </a>
              , Toronto
            </h3>

            <div className={"secondParagraph"}>
              <div className="indentedParagraph">
                Collaborated on early-stage technical decisions and architecture
                planning of the MVP, working closely with the internal founder
                team and external design partners at OpsGuru.
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="listItemContainer">
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle"}>Software Developer</h2>
              <span className={"date"}>May 2023 &#x2192; Aug 2024</span>
            </div>
            <h3>
              <a className="myLink" href="https://pixmob.com/" target="_blank">
                PixMob
              </a>
              , Montreal
            </h3>
            <div>
              <div className="projectTitle">Project1 – PixMob Platform</div>
              <div className="indentedParagraph">
                An internal system designed to manage and track the state of
                PixMob's event technology ecosystem. Shaped and worked on an OTA
                update device feature. Developed frontend and backend CRUD
                functionalities.
              </div>
            </div>
            <div className={"secondParagraph"}>
              <div className="projectTitle">Project2 – The Visualizer</div>
              <div className="indentedParagraph">
                A Web application for 3D light shows visualization according to
                the PixMob DMX lighting protocol. Designed, developed and tested
                features including 3D camera transitions. Built UI/UX for
                control panels and tools, integrating and customizing opensource
                UI libraries.
              </div>
            </div>
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
              for accountants and CFOs to manage financial statements.
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
                href="https://bli.ca/bli-montreal/"
                target="_blank"
              >
                BLI
              </a>
              , Montreal
            </h3>
            <p>
              Designed a Python programming course and taught it to over 20 high
              school teenagers guiding them to come up with creative and optimal
              designs for their programs.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
