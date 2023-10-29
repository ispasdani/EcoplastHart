"use client";

import React from "react";
import styles from "@/pages/styles.module.scss";
import SmallSquareAnimated from "@/components/SmallSquareAnimated/SmallSquareAnimated";
import { heropageTexts } from "@/constants";
import TreeBackground from "@/svgs/TreeBackground";
import Spline from "@splinetool/react-spline";

const Heropage = () => {
  return (
    <div className={styles.heropage}>
      <div className={styles.leftSideHero}>
        <div className={styles.leftSideHeroUp}>
          <SmallSquareAnimated />
          <p>{heropageTexts.secondaryText}</p>
        </div>
        <div className={styles.leftSideHeroDown}>
          <h2>{heropageTexts.mainTextWordOne}</h2>
          <h2>{heropageTexts.mainTextWordTwo}</h2>
          <h2>{heropageTexts.mainTextWordThree}</h2>
        </div>
      </div>
      <div className={styles.rightSideHero}>
        <TreeBackground />
        <div className={styles.splineElement}>
          <Spline scene="https://prod.spline.design/R6ikkOlvMTpjMzQL/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
