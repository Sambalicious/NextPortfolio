import { useState } from "react";
import Layouts from "../Components/Layouts/Layouts";
import Home from "../Components/Home/Home";
import styles from "../styles/Home.module.css";

export default function App({ countries }) {
  return (
    <Layouts>
      <Home />
    </Layouts>
  );
}
