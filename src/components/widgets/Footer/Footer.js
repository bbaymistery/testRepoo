import React from "react";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <div className={`element_section ${styles.element_section_inside}`}>
      <div className={`section ${styles.section_inside}`}>
        <div className={`section_container ${styles.section_container_inside}`}>
          <div className={styles.boxes}>
            <div className={`${styles.box_one} ${styles.box}`}>
              <a className={styles.box_logo} href="/">
                london-heathrow.taxi
              </a>
              <p className={styles.box_desc}>
                Copyright © 2017 London Heathrow Car Service
              </p>
            </div>
            <div className={`${styles.box} ${styles.box_two}`}>
              <p className={styles.text_white}>Have Questions</p>
              <p className={styles.text_color}>+44 (0) 20 3887 3844</p>
              <p className={styles.text_white}>
                24/7 Dedicated Customer Support
              </p>
            </div>
            <div className={`${styles.box} ${styles.box_three}`}>
              <p className={styles.text_white}>E-Mail</p>
              <p>
                <a href="mailto:info@london-heathrow.taxi" className={styles.text_color}>
                  info@london-heathrow.taxi
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
