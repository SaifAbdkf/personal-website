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
        Computer Science alumni. I always aim to write maintainable efficient
        and composable code.
      </p>
      <p>
        I have an overwhelming urge to tinker, figure things out, and build
        scalable user-facing applications. I find LLMs to be a great assistant
        along the way.
      </p>

      <p>...Also, naming commits is my nemesis: ‘fix-stuff’ is default.</p>
    </div>
  );
}
