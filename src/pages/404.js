import styles from "./errorstyles.module.scss";
const CustomError = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.error_pagee}>
      <div id="mainC" className={styles.mainContainer}>
        <div className={styles.message}>
          <h1>404</h1>
          <h3>the page you seek does not exist</h3>
          &nbsp;
        </div>
        <div className={styles.footer}>
          <a href="/" title="home">
            Go Back <span></span>
          </a>
          <p className={styles.legal}>
            &copy; London-heathrow.taxi {currentYear} <br /> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomError;
