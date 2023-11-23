import React from "react";
import styles from "./styles.module.scss";
const TextInvoice = () => {
  return (
    <div className={styles.text_invoice}>
      <span className={styles.first_three}>INV</span>
      <span className={styles.second_three}>OICE</span>
    </div>
  );
};

export default TextInvoice;
