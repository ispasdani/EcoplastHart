import React from "react";
import styles from "@/pages/homepage/styles.module.scss";
import VideoCard from "@/components/VideoCard/VideoCard";
import Navbar from "@/components/Navbar/Navbar";
import CircleToSquareMotionDiv from "@/components/CircleToSquareMotionDiv/CircleToSquareMotionDiv";

const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <h1 className={styles.companyTitle}>ECOPLAST HART</h1>
      <p className={styles.centerText}>Cleaning nation collaboratively</p>
      <p className={styles.centerTextSecondary}>Start working with us</p>
      <Navbar />
      <div className={styles.homeSectionLeft}>
        <div className={styles.contactUsAnimationHome}>
          <CircleToSquareMotionDiv />
          <p>Contact Us</p>
        </div>
        <div className={styles.secondaryTextContainer}>
          <p>
            At ECOPLAST HART we specialize in the collection, sorting, and
            recycling of all types of waste materials
          </p>
          <p>Join the recycling revolution and make the world greener.</p>
        </div>
      </div>
      <div className={styles.homeSectionRight}>
        <div className={styles.homeSectionRightDecorEl}></div>
        <VideoCard videoPath="/videoHeroPage.mp4" />
      </div>
    </div>
  );
};

export default HomeSection;
