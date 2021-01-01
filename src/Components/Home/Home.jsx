import styles from "./Home.module.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import desktop from "../../../public/desktop.jpg";
import home from "../../../public/home.png";
import omnibiz from "../../../public/omnibiz.png";
import vgg from "../../../public/vgg.png";
import Experience from "../Experience/Experience.jsx";
import Project from "../Project.jsx/Projects";
import Blog from "../Blogs/Blogs";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <div className={styles.wrapper__left__item}>
          <div className={styles.bio}>
            <img
              src={desktop}
              alt=""
              width="100%"
              style={{ objectFit: "cover", borderRadius: "12px" }}
              height="450px"
            />

            <h3 className={styles.name}>Samuel Ayegbusi</h3>
            <p className={styles.stack}>Frontend Developer</p>
          </div>

          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:stemitope370@gmail.com"
            >
              <div className={styles.email}>
                <div style={{ marginRight: "6px" }}>
                  <MdContactMail size={"1.2rem"} />
                </div>
                <p> stemitope370@gmail.com</p>
              </div>
            </a>
            <div
              className={styles.phone}
              onClick={() => (window.location.href = "tel:+2347033098551")}
            >
              {" "}
              <div style={{ marginRight: "4px" }}>
                <FiPhone />
              </div>
              <p> Click to Call me</p>
            </div>

            <p className={styles.motivation}>
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </p>

            <p>Connect with me</p>
            <div className={styles.contact__flex}>
              <IconContext.Provider
                value={{ size: "1.5rem", className: "mr-4 my-2" }}
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sambalicious"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://facebook.com/cixtein"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/sambalicious_"
                >
                  <FaTwitter />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-ayegbusi-355169104/"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://stackoverflow.com/users/12493766/sambalicious"
                >
                  <FaStackOverflow />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <h3 className={styles.experience}>Experiences</h3>
        <div className={styles.wrapper__left__item}>
          <Experience
            img={omnibiz}
            duration={"September 2020 - Present"}
            company={"Omnibiz Africa"}
            job={
              " Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie."
            }
            role={"Frontend Developer"}
          />

          <Experience
            img={vgg}
            duration={"January 2020 - June 2020"}
            company={"Venture Garden Group"}
            job={
              " Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie."
            }
            role={"Frontend Developer (Intern)"}
          />
        </div>
      </div>

      <div className={styles.wrapper_right}>
        <div>
          <h3 className={styles.tools}>Tools</h3>

          <div className={styles.tools__items}>
            <h1>HTML</h1>
            <h1>CSS3</h1>
            <h1>Javascript</h1>
            <h1> ReactJS</h1>
            <h1> NextJS</h1>
            <h1>MongoDB</h1>
            <h1> TailwindCSS</h1>
            <h1> Bootstrap</h1>
            <h1>Firebase</h1>
            <h1>RestAPI</h1>
            <h1>C#</h1>
            <h1>Github</h1>
          </div>
        </div>

        <h3 className={styles.projects}>Projects</h3>
        <div className={styles.wrapper__right__item}>
          <Project
            tools={"#Html, #CSS , #Javascript, #React"}
            img={home}
            title={"Recipe"}
            about={
              " In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam estdui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            }
          />
          <Project
            tools={"#Html, #CSS , #Javascript, #React"}
            img={home}
            title={"Recipe"}
            about={
              " In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam estdui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            }
          />
        </div>

        <div>
          <h3 className={styles.blog}>Blogs</h3>
        </div>
        <div className={styles.wrapper__right__item}>
          <Blog
            description={
              " In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            }
            img={home}
            title={"Introduction to CSS"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
