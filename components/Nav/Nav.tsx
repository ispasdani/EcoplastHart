"use client";

import React from "react";
import { navTexts } from "@/constants";
import styles from "@/components/Nav/styles.module.scss";
import { motion } from "framer-motion";

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
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["50%", "20%", "50%", "30%", "50%"],
          }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
          className={styles.languageCircle}
        ></motion.div>
        <p>{navTexts.languageEn}</p>
      </div>
    </nav>
  );
};

export default Nav;
