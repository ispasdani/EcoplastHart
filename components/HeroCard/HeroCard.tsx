import React, { useState } from "react";
import styles from "@/components/HeroCard/styles.module.scss";

export type CardSlide = {
  title: string;
  description: string;
  image: string;
};

export type HeroCardProps = {
  slides: CardSlide[];
};

const HeroCard = ({ slides }: HeroCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.heroCard}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : styles.inactive
          }`}
        >
          <img src={slide.image} alt={slide.title} />
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
