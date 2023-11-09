import React from "react";
import styles from "@/components/CollectCard/styles.module.scss";
import Image from "next/image";

type CollectCardProps = {
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundColor?: string;
  color?: string;
  iconPath?: string;
  iconAlt?: string;
  textOne?: string;
  textTwo?: string;
  textThree?: string;
  fontSize?: string;
  circlesDecorLeftBoolean?: boolean;
  circlesDecorRightBoolean?: boolean;
  circlesDecorColor?: string;
  decorComponent?: () => React.ReactNode;
};

const CollectCard = ({
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  color,
  iconPath,
  iconAlt,
  textOne,
  textTwo,
  textThree,
  fontSize,
  circlesDecorRightBoolean,
  circlesDecorLeftBoolean,
  circlesDecorColor,
  decorComponent,
}: CollectCardProps) => {
  return (
    <div
      className={styles.collectCard}
      style={{
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `${backgroundImage}`,
        backgroundPosition: `${backgroundPosition}`,
        backgroundSize: `${backgroundSize}`,
        color: `${color}`,
        fontSize: `${fontSize}`,
      }}
    >
      {textOne && <p className={styles.collectCardText}>{textOne}</p>}
      {textTwo && <p className={styles.collectCardText}>{textTwo}</p>}
      {textThree && <p className={styles.collectCardText}>{textThree}</p>}
      {iconPath && (
        <Image
          src={iconPath}
          width={34}
          height={34}
          alt={iconAlt ? iconAlt : "What we collect card icon"}
          className={styles.collectCardIconOne}
        />
      )}
      {iconPath && (
        <Image
          src={iconPath}
          width={34}
          height={34}
          alt={iconAlt ? iconAlt : "What we collect card icon"}
          className={styles.collectCardIconTwo}
        />
      )}
      {decorComponent && <>{decorComponent}</>}

      {circlesDecorLeftBoolean && (
        <div
          className={styles.smallCircleLeft}
          style={{ backgroundColor: `${circlesDecorColor}` }}
        ></div>
      )}
      {circlesDecorLeftBoolean && (
        <div
          className={styles.bigCircleLeft}
          style={{ backgroundColor: `${circlesDecorColor}` }}
        ></div>
      )}
      {circlesDecorRightBoolean && (
        <div
          className={styles.smallCircleRight}
          style={{ backgroundColor: `${circlesDecorColor}` }}
        ></div>
      )}
      {circlesDecorRightBoolean && (
        <div
          className={styles.bigCircleRight}
          style={{ backgroundColor: `${circlesDecorColor}` }}
        ></div>
      )}
    </div>
  );
};

export default CollectCard;
