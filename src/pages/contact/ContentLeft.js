import React from "react";
import styles from "./styles.module.scss";
const ContentLeft = () => {
  return (
    <div className={styles.form_content_left}>
      <p className={styles.form_content_left_title}>Contact Info</p>
      <div className={styles.icon_div}>
        <i className="fa-solid fa-phone"></i>
        <h5>Phone</h5>
        <p>+44 (0)20 3887 3844</p>
      </div>
      <div className={styles.icon_div}>
        <i className="fa-solid fa-print"></i>
        <h5>Fax</h5>
        <p>+44 (0) 208 683 0884</p>
      </div>
      <div className={styles.icon_div}>
        <i className="fa-solid fa-envelope"></i>
        <h5>Email</h5>
        <p>info@london-heathrow.taxi</p>
      </div>
      <div className={styles.icon_div}>
        <i className="fa-solid fa-location-dot"></i>
        <h5>Address </h5>
        <p>
          Aero House, 611 Sipson Road,
          <br />
          West Drayton, UB7 0JD, United Kingdom
        </p>
      </div>
      {/* <div className={styles.icon_div}>
                  <i className="fa-solid fa-building"></i>
                  <h5> Admin Office </h5>
                  <p>
                    Challenge House 616 Mitcham Road,
                    <br />
                    Croydon, London, CR0 3AA, United Kingdom
                  </p>
                </div> */}
      {/* <div className={styles.icon_div}>
        <i className="fa-solid fa-people-group"></i>
        <h5>Webmaster Team</h5>
        <p>info@london-heathrow.taxi</p>
      </div> */}
    </div>
  );
};

export default ContentLeft;
