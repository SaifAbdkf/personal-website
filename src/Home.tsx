import "./Home.css";

export default function Home() {
  return (
    <div className={"homeDescription jumpAnimation"}>
      <p>
        I’m Saif, a full stack software engineer and a{" "}
        <a className="myLink" href="https://www.mcgill.ca/" target="_blank">
          McGill
        </a>{" "}
        CS graduate. I specialize in transforming clients needs and business
        ideas into practical engineered solutions.
      </p>
      <p>
        My experience spans 3D web visualizations, CRUD systems for resource
        management, and Microsoft Power Platform for business intelligence
        solutions. Writing maintainable code is my craft, primarily in
        TypeScript for the web, Python for automation and data driven projects,
        while keeping a soft spot for Java and its robust architecture. I also
        use LLMs and modern tools to optimize every step of the continuous
        development process.
      </p>
      <p>
        I'm a builder at heart, I dive deep into my projects, learning,
        experimenting, and delivering reliable systems that make a tangible
        impact.
      </p>
    </div>
  );
}
