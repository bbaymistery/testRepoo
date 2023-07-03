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
              <h4 className={styles.text_white}>Have Questions</h4>
              <h4 className={styles.text_color}>+44 (0) 20 3887 3844</h4>
              <p className={styles.text_white}>
                24/7 Dedicated Customer Support
              </p>
            </div>
            <div className={`${styles.box} ${styles.box_three}`}>
              <h4 className={styles.text_white}>E-Mail</h4>
              <h4>
                <a
                  href="mailto:info@london-heathrow.taxi"
                  className={styles.text_color}
                >
                  info@london-heathrow.taxi
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
