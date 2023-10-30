import React from "react";
import styles from "@/components/VideoCard/styles.module.scss";
import { videoCardTexts } from "@/constants";

type VideoCardProps = {
  videoPath: string;
};

const VideoCard = ({ videoPath }: VideoCardProps) => {
  return (
    <div className={styles.videoCard}>
      <video loop autoPlay muted className={styles.videoPlayer}>
        <source src={`${videoPath}`} type="video/mp4" />
      </video>

      <a className={styles.videoCardText} href="">
        {videoCardTexts.videoCardText}
      </a>
    </div>
  );
};

export default VideoCard;
