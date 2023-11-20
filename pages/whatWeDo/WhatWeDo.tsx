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
          iconPath="./iron.svg"
          circlesDecorRightBoolean={true}
          circlesDecorColor="var(--light-green)"
        />
        <CollectCard
          backgroundImage="url(./copperWire.jpg)"
          backgroundPosition="center"
          backgroundSize="cover"
          color="var(--main-white)"
          textOne="Non-ferrous waste"
          iconPath="./iron.svg"
        />
        <CollectCard
          backgroundColor="var(--light-green)"
          color="var(--main-white)"
          textOne="Ferrous waste"
          iconPath="./iron.svg"
          circlesDecorLeftBoolean={true}
          circlesDecorColor="var(--dark-green)"
        />
        <CollectCard
          backgroundImage="url(./petBottle.jpg)"
          backgroundPosition="center"
          backgroundSize="cover"
          textOne="PET plastic"
          color="var(--main-white)"
          fontSize="20px"
        />
        <CollectCard
          backgroundColor="var(--light-green)"
          textOne="Plastic Waste"
          color="var(--main-white)"
          fontSize="20px"
        />
        <CollectCard
          backgroundImage="url(./imageNaturePath.jpg)"
          backgroundPosition="center"
          backgroundSize="cover"
          textOne="Pet Aluminium"
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
