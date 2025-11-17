import React from "react";
import styles from "./styles.module.scss";

const ContentLeft = () => {
  return (
    <div className={styles.form_content_left}>
      <p className={styles.form_content_left_title}>Contact Info</p>

      <div className={styles.icon_div}>
        <i className="fa-solid fa-phone"></i>
        <h5>Phone</h5>
        <a href="tel:+442038873844" className={styles.link}>
          +44 (0)20 3887 3844
        </a>
      </div>

      <div className={styles.icon_div}>
        <i className="fa-brands fa-whatsapp"></i>
        <h5>WhatsApp Us</h5>
        <a
          href="https://wa.me/447387901028"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          +44 73 8790 1028
        </a>
      </div>

      <div className={styles.icon_div}>
        <i className="fa-solid fa-envelope"></i>
        <h5>Email</h5>
        <a
          href="mailto:info@london-heathrow.taxi"
          className={styles.link}
        >
          info@london-heathrow.taxi
        </a>
      </div>

      <div className={styles.icon_div}>
        <i className="fa-solid fa-location-dot"></i>
        <h5>Address</h5>
        <a
          href="https://www.google.com/maps?q=Orega+Offices,+4+Longwalk+Road,+Uxbridge,+UB11+1FE,+UK"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          London Heathrow Taxi Ltd<br />
          Orega Offices, 4 Longwalk Road,<br />
          Uxbridge, United Kingdom, UB11 1FE
        </a>
      </div>
    </div>
  );
};

export default ContentLeft;
