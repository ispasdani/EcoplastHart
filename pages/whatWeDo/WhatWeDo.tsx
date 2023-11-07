import React from "react";
import styles from "@/pages/whatWeDo/styles.module.scss";
import BottomEdgyWave from "@/svgs/BottomEdgyWave/BottomEdgyWave";
import TopEdgyWave from "@/svgs/TopEdgyWave/TopEdgyWave";

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDoContainer}>
      <TopEdgyWave />
      <BottomEdgyWave />
    </div>
  );
};

export default WhatWeDo;
