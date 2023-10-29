import React from "react";
import { navTexts } from "@/constants";
import styles from "@/components/Nav/styles.module.scss";
import CircleToSquareMotionDiv from "@/components/CircleToSquareMotionDiv/CircleToSquareMotionDiv";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>{navTexts.navTitle}</h1>
      <ul>
        <li>{navTexts.navLink1}</li>
        <li>{navTexts.navLink2}</li>
        <li>{navTexts.navLink3}</li>
      </ul>
      <div className={styles.language}>
        <CircleToSquareMotionDiv />
        <p>{navTexts.languageEn}</p>
      </div>
    </nav>
  );
};

export default Nav;
