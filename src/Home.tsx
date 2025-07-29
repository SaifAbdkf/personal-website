import "./Home.css";

export default function Home() {
  return (
    <div className={"homeDescription jumpAnimation"}>
      <p>
        Hey! My name is Saif, a full stack software engineer with 3+ years of
        experience & a{" "}
        <a className="myLink" href="https://www.mcgill.ca/" target="_blank">
          McGill
        </a>{" "}
        Computer Science alumni.
      </p>
      <p>
        I aim to write maintainable, efficient, and composable code. To me,
        programming is about decomposing problems and figuring things out one
        step at a time, with the user always in mind. I find LLMs to be a great
        assistant along the way.
      </p>
    </div>
  );
}
