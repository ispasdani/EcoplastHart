import React from "react";
import styles from "@/pages/whyChooseUs/styles.module.scss";
import VideoCard from "@/components/VideoCard/VideoCard";
import SmallSquareAnimated from "@/components/SmallSquareAnimated/SmallSquareAnimated";

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUsPage}>
      <div className={styles.whyChooseUsEntry}>
        <h3>WHY</h3>
        <h2>CHOOSE ECOPLAST?</h2>
        <div className={styles.elementWhyContainer}></div>
      </div>
      <div className={styles.whyChooseUsRest}>
        <div className={styles.restLeft}>
          <div className={styles.whyTextWrapper}>
            <div className={styles.squareWrapper}>
              <SmallSquareAnimated />
            </div>
            <p>
              At ECOPLAST, we are more than just an environmental services
              company. We are a dedicated team of eco-warriors on a mission to
              collect, recover, and protect our precious planet.
            </p>
          </div>
          <div className={styles.whyTextWrapper}>
            <div className={styles.squareWrapper}>
              <SmallSquareAnimated />
            </div>
            <p>
              We are a fast growing company that currently can be found in
              multiple countries.
            </p>
          </div>
          <div className={styles.whyTextWrapper}>
            <div className={styles.squareWrapper}>
              <SmallSquareAnimated />
            </div>
            <p>
              With a shared passion for sustainability and a commitment to
              making a positive impact, we're here to tell you our story.
            </p>
          </div>
          <div className={styles.whyTextWrapper}>
            <div className={styles.squareWrapper}>
              <SmallSquareAnimated />
            </div>
            <p>
              The collection and waste recovery being our main desire to step on
              a cleaner and healthier planet.
            </p>
          </div>
        </div>
        <div className={styles.restRight}>
          <div className={styles.decorElWhy}></div>
          <VideoCard videoPath="/whyVideo.mp4" width="90%" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
