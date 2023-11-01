import React from "react";
import styles from "@/components/Navbar/styles.module.scss";
import CompanyNameWrapper from "../CompanyNameWrapper/CompanyNameWrapper";
import LanguageButton from "../LanguageButton/LanguageButton";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <CompanyNameWrapper />
        <ul>
          <li>Why choose us?</li>
          <li>Our story</li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <p className={styles.navContactBtn}>Contact us</p>
        <LanguageButton />
      </div>
    </nav>
  );
};

export default Navbar;
