import styles from "./Projects.module.css";


export default function Project() {
  return (
    <div className={"listContainer"}>
      <ul>
        <li>
          <a
            href="https://github.com/AslemaEnaSaif/2022_Worldcup_predictor"
            target="_blank"
          >
            <div>
              <h2 className={styles.projectTitle}>World Cup 2022 predictor</h2>
              <p className=".jumpAnimationOfIntro">
                An SVM model trained on a historical game results and FIFA video
                game team ratings, running in the backend of a Django
                application
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="https://codejam.mcgilleus.ca/" target="_blank">
            <div>
              <h2 className={styles.projectTitle}>Codejam Website</h2>
              <p>
                Codejam is the biggest annual hackathon in McGill. The website
                has a static part to display the event information and a dynamic
                part allowing for hackers to register and match with other
                hackers to form teams
              </p>
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/AslemaEnaSaif/Get_me_MyCourses/"
            target="_blank"
          >
            <div>
              <h2 className={styles.projectTitle}>Get Me MyCourses</h2>
              <p>
                A python bot automating the retrieval and local organization of
                newly uploaded course material from “myCourses”, McGill’s
                learning management system
              </p>
            </div>
          </a>
        </li>
      </ul>


    </div>
  );
}
