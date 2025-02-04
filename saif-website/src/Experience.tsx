import "./Experience.css";

export default function Experience() {
  return (
    <div className={"listContainer"}>
      <ul>
        <li>
          <div>
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle jumpAnimationOfIntro"}>Software Developer (Started as an Intern)</h2>
              <span className={"date"}>May 2023 &#x2192; Aug 2024</span>
            </div>
            <h3>PixMob, Montreal</h3>
            <p>
              Designed and developed features and internal library components
              for a 3D light show visualization web application
            </p>
          </div>
        </li>

        <li>
          <div>
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle jumpAnimationOfIntro"}>Intern Developer</h2>
              <span className={"date"}>May 2022 &#x2192; Apr 2023</span>
            </div>
            <h3>Raymond Chabot Grant Thornton, Montreal</h3>
            <p>
              Designed and developed a 80,000$ Power apps application
              integrated with PowerBI for accountants and CFOs to manage
              financial statements
            </p>
          </div>
        </li>

        <li>
          <div>
            <div className={"jobTitleContainer "}>
              <h2 className={"jobTitle jumpAnimationOfIntro"}>Coding teacher</h2>
              <span className={"date"}>Sep 2021 &#x2192; May 2022</span>
            </div>
            <h3>BLI, Montreal</h3>
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
