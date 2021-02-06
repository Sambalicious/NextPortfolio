import { useEffect, useState } from "react";
import { FaMoon, FaLightbulb } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Head from "next/head";
import styles from "./Layouts.module.css";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, title }) => {
  const [openNavBarState, setOpenNavBarState] = useState(false);
  const handleNavbar = () => {
    setOpenNavBarState(!openNavBarState);
    // this.setState({ navbarOpen: !this.state.navbarOpen });
  };
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
      <div>
        <Navbar navbarState={openNavBarState} handleNavbar={handleNavbar} />
      </div>
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
          <div>Made by sambalicious</div>
          Copyright &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
