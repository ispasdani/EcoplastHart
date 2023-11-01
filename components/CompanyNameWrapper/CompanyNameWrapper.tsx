import React from "react";
import styles from "@/components/CompanyNameWrapper/styles.module.scss";
import Image from "next/image";

const CompanyNameWrapper = () => {
  return (
    <div className={styles.companyNavWrapper}>
      <Image
        src="/recycleLogo.svg"
        width="26"
        height="26"
        alt="Company Logo"
        className={styles.companyLogo}
      />
      <p>ECOPLAST HART</p>
    </div>
  );
};

export default CompanyNameWrapper;
