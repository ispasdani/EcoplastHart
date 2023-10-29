import React from "react";
import styles from "@/components/ModalDots/styles.module.scss";
import { modalDotsTexts } from "@/constants";

const ModalDots = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalRelative}>
        <svg
          width="94"
          height="54"
          viewBox="0 0 94 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.modalLineSvg}
        >
          <path
            d="M92.179 53.592L52.3289 2.28403H0.407959V0.284027H53.308L53.608 0.671021L93.7579 52.366L92.179 53.592Z"
            fill="#3F3D56"
          />
        </svg>
        <div className={styles.circlesAndLinesWrapper}>
          <div className={styles.lines}>{modalDotsTexts.firstDot}</div>
          <div className={styles.modalCirclesOne}></div>
        </div>
        <div className={styles.circlesAndLinesWrapper}>
          <div className={styles.lines}>{modalDotsTexts.secondDot}</div>
          <div className={styles.modalCirclesTwo}></div>
        </div>
        <div className={styles.circlesAndLinesWrapper}>
          <div className={styles.lines}>{modalDotsTexts.thirdDot}</div>
          <div className={styles.modalCirclesThree}></div>
        </div>
      </div>
    </div>
  );
};

export default ModalDots;
