import React from "react";
import styles from "@/pages/whatWeDo/styles.module.scss";
import BottomEdgyWave from "@/svgs/BottomEdgyWave/BottomEdgyWave";
import TopEdgyWave from "@/svgs/TopEdgyWave/TopEdgyWave";
import CollectCard from "@/components/CollectCard/CollectCard";

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDoContainer}>
      <TopEdgyWave />
      <div className={styles.collectContainer}>
        <CollectCard
          backgroundColor="var(--dark-green)"
          color="var(--main-white)"
          textOne="Metal Scrap"
          textTwo="Non-ferrous waste"
          textThree="Ferrous waste"
          iconPath="./iron.svg"
          circlesDecorRightBoolean={true}
          circlesDecorColor="var(--light-green)"
        />
        <CollectCard
          backgroundImage="url(./imageNaturePath.jpg)"
          backgroundPosition="center"
          backgroundSize="cover"
          textOne="Plastic"
          textTwo="PET plastic"
          textThree="Pet Aluminium"
          color="var(--main-white)"
          fontSize="20px"
        />
        <CollectCard
          backgroundColor="var(--light-green)"
          color="var(--main-white)"
          textOne="Glass"
          textTwo="Recyclable"
          fontSize="20px"
          iconPath="./recyclable.svg"
          circlesDecorLeftBoolean={true}
          circlesDecorColor="var(--dark-green)"
        />
      </div>
      <div className={styles.recycleContainer}></div>
      <BottomEdgyWave />
    </div>
  );
};

export default WhatWeDo;
