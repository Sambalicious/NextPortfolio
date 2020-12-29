import styles from "./Experience.module.css";
const Experience = ({ duration, img, company, job, role }) => {
  return (
    <div className={styles.wrapper__left__item__flex}>
      <div className={styles.experience__image}>
        <img src={img} alt="" width="108" height="108" />
      </div>

      <div>
        <p className={styles.mute}>{duration}</p>

        <h5 className={styles.text__700}>{role}</h5>

        <p className={styles.mute}>{company}</p>
        <p className={styles.exp}>{job}</p>
      </div>
    </div>
  );
};

export default Experience;
