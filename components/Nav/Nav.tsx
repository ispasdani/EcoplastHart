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
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        className={styles.languageCircle}
      >
        <p>{navTexts.languageEn}</p>
      </motion.div>
    </nav>
  );
};

export default Nav;
