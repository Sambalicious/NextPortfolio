import styles from "./Projects.module.css";

const Projects = ({ img, tools, about, title }) => {
  return (
    <div className={styles.wrapper__right__item__flex__project}>
      <div className={styles.projects__img}>
        <img
          src={img}
          alt="projects"
          style={{ objectFit: "cover" }}
          height="200px"
        />
      </div>
      <div>
        <p className={styles.mute}>{tools}</p>
        <h4 className={styles.bold}>{title}</h4>

        <div className={styles.mute}> {about}</div>

        <div className={styles.button__flex}>
          <button>Code</button>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
