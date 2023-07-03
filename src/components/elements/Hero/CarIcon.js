import React from "react";
import styles from "./styles.module.scss";
const CarIcon = () => {
  return (
    <div className={styles.carIcon}>
      <ul className={styles.section_tab}>
        <li className={styles.navItem}>
          <a href="/" className={`${styles.navLink}`}>
            <i className={`fa-solid fa-car-rear ${styles.icon}  `}></i>
            <span> Transfer Search</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CarIcon;
