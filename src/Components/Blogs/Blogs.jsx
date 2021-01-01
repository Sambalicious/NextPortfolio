import styles from "./Blogs.module.css";

const Blog = ({ title, img, description }) => {
  return (
    <div className={styles.wrapper__right__item__flex__blog}>
      <div className={styles.blog__div}>
        <h4 className={styles.bold}>{title}</h4>

        <div className={styles.blog__text}>
          <p className={styles.mute}> {description}</p>
        </div>
      </div>

      <div className={styles.blog__img}>
        <img src={img} alt="" style={{ objectFit: "cover" }} height="200px" />
      </div>
    </div>
  );
};
export default Blog;
