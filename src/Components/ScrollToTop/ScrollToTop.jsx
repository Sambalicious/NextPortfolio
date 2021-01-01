import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <FaArrowCircleUp
        className={styles.scrollTop}
        onClick={scrollTop}
        style={{ height: 40, width: 50, display: showScroll ? "flex" : "none" }}
      />
    </>
  );
};

export default ScrollToTop;
