import { useEffect, useState } from "react";
import { FaMoon, FaLightbulb } from "react-icons/fa";
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
        <footer className={styles.footer}>Sambalicious &copy; 2020</footer>
      </div>
    </div>
  );
};

export default Layout;
