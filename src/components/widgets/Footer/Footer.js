import styles from "./styles.module.scss";
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically fetch the current year
  return (
    <div className={` ${styles.element_section_inside}`}>
      <div className={` ${styles.section_inside}`}>
        <div className={` ${styles.section_container_inside}`}>
          <div className={styles.boxes}>
            <div className={`${styles.box_one} ${styles.box}`}>
              <a className={styles.box_logo} href="/">
                london-heathrow.taxi
              </a>
              <p >
                Copyright © 2017-{currentYear}  London Heathrow Taxi Ltd
              </p>
            </div>
            <div className={`${styles.box} ${styles.box_two}`}>
              <p className={styles.text_white}>Have Questions</p>
              <p className={styles.text_color}>
                <a href="tel:+442038873844" aria-label="Call London Heathrow Taxi">
                  +44 (0) 20 3887 3844
                </a>
              </p>
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
              <br />

              <p className={styles.text_white}>X (Twitter) </p>
              <p>
                <a className={styles.text_color} href="https://x.com/Lhr_taxi" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)">
                  <i className="fa-brands fa-twitter"></i>
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
