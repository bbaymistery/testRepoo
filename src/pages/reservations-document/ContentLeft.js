import React from "react";
import styles from "./styles.module.scss";
const ContentLeft = () => {
  return (
    <div className={styles.reserv_content_left}>
      <div className={`${styles.left_break} ${styles.left_break_1}`}>
        <p className={styles.break_to_whom}>Registered Office</p>
        <p
          className={`
                      ${styles.break_explanation_email}
                      ${styles.break_explanation}`}
        >
          Aero House, 611 Sipson Road, West Drayton, UB7 0JD, United Kingdom
        </p>
      </div>

      <div className={styles.left_break}>
        <p className={styles.break_to_whom}>Contact Us</p>
        <div
          className={`
                      ${styles.break_explanation_email}
                      ${styles.break_explanation}`}
        >
          00442038873844 <br />
          00442038873844 <br />
          info@london-heathrow.taxi
        </div>
      </div>
      <div className={styles.left_break}>
        <p className={styles.break_to_whom}>Terms & Conditions</p>
        <div
          className={`
                      ${styles.break_explanation_email}
                      ${styles.break_explanation}`}
        >
          <p>
            All quotations are valid for 30 days and Airport -meet and greet,
            waiting time*, parking or tolls.
          </p>

          <p>Gratuities are at the Customer’s discretion.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
