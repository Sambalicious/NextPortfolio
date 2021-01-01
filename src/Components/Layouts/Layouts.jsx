import { useEffect, useState } from "react";
import { FaMoon, FaLightbulb } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import MadeWithLove from "react-made-with-love";
import Head from "next/head";
import styles from "./Layouts.module.css";

const Layout = ({ children, title }) => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    if (theme === "dark") {
      saveTheme("light");
    } else {
      saveTheme("dark");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>{children}</main>
      <div>
        <button onClick={switchTheme} className={styles.theme}>
          {theme === "light" ? (
            <FaMoon color={"#fff"} />
          ) : (
            <FaLightbulb color={"#fff"} />
          )}
        </button>

        <ScrollToTop />

        <footer className={styles.footer}>
          <div>
            <MadeWithLove
              by="Sambalicious"
              emoji={{
                verb: "Built",
              }}
            />{" "}
          </div>
          &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
