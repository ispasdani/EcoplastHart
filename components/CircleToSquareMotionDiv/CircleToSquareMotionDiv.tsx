"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/components/CircleToSquareMotionDiv/styles.module.scss";

const CircleToSquareMotionDiv = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "20%", "50%", "30%", "50%"],
      }}
      transition={{ ease: "linear", duration: 4, repeat: Infinity }}
      className={styles.languageCircle}
    ></motion.div>
  );
};

export default CircleToSquareMotionDiv;
