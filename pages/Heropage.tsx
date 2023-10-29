"use client";

import React from "react";
import styles from "@/pages/styles.module.scss";
import SmallSquareAnimated from "@/components/SmallSquareAnimated/SmallSquareAnimated";
import { heropageTexts } from "@/constants";
import TreeBackground from "@/svgs/TreesBackground/TreeBackground";
import Bird from "@/svgs/Bird/Bird";
import SlowBird from "@/svgs/SlowBird/SlowBird";
import ThirdBird from "@/svgs/ThirdBird/ThirdBird";
import ModalDots from "@/components/ModalDots/ModalDots";
import HeroCard, { CardSlide } from "@/components/HeroCard/HeroCard";

const Heropage = () => {
  const slides: CardSlide[] = [
    { title: "Test", description: "this is a test", image: "/heroImgOne.jpg" },
    {
      title: "TestTwo",
      description: "this is a another test",
      image: "/heroImgTwo.jpg",
    },
  ];

  return (
    <div className={styles.heropage}>
      <div className={styles.leftSideHero}>
        <div className={styles.leftSideHeroUp}>
          <HeroCard slides={slides} />
          <div className={styles.secondaryTextWrapper}>
            <SmallSquareAnimated />
            <p>{heropageTexts.secondaryText}</p>
          </div>
        </div>
        <div className={styles.leftSideHeroDown}>
          <h2>{heropageTexts.mainTextWordOne}</h2>
          <h2>{heropageTexts.mainTextWordTwo}</h2>
          <h2>{heropageTexts.mainTextWordThree}</h2>
        </div>
      </div>
      <div className={styles.rightSideHero}>
        <TreeBackground />
        <Bird />
        <SlowBird />
        <ThirdBird />
        <ModalDots />
      </div>
    </div>
  );
};

export default Heropage;
