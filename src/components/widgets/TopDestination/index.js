import React from "react";
import styles from "./style.module.scss";
const TopDestination = () => {
  return (
    <div className={styles.top_destination}>
      <div className={`container ${styles.dest_container}`}>
        <h2 className={`text_center ${styles.title}`}>Top Destinations</h2>
        <div className={styles.thumbs}>
          <div className={styles.thumb}>
            <header className={styles.thumb_header}>
              <a
                className={styles.hover_img_tag}
                href="/heathrow-central-london"
              >
                <img
                  className={styles.hover_img}
                  src="/images/destCard1.jpg"
                  alt="destCard1"
                />
              </a>
            </header>
            <div className={styles.icon_left}>
              <i className="fa fa-plane"></i>
            </div>
            <div className={styles.thumb_caption}>
              <h4 className={styles.thumb_title}>
                <a href="/heathrow-central-london">Heathrow Central London</a>
              </h4>
              <div className={styles.thumb_caption}>
                <p className={styles.thumb_desc}>
                  Best way to travel from Heathrow to Central London? Private
                  car is comfortable, convenient and affordable.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.thumb}>
            <header className={styles.thumb_header}>
              <a
                className={styles.hover_img_tag}
                href="/heathrow-central-london"
              >
                <img
                  className={styles.hover_img}
                  src="/images/destCardTerminal2.jpg"
                  alt="destCard2"
                />
              </a>
            </header>
            <div className={styles.icon_left}>
              <i className="fa fa-plane"></i>
            </div>
            <div className={styles.thumb_caption}>
              <h4 className={styles.thumb_title}>
                <a href="/heathrow-central-london">Heathrow Central London</a>
              </h4>
              <div className={styles.thumb_caption}>
                <p className={styles.thumb_desc}>
                  Best way to travel from Heathrow to Central London? Private
                  car is comfortable, convenient and affordable.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.thumb}>
            <header className={styles.thumb_header}>
              <a
                className={styles.hover_img_tag}
                href="/heathrow-central-london"
              >
                <img
                  className={styles.hover_img}
                  src="/images/destCard3.jpg"
                  alt="destCard3"
                />
              </a>
            </header>
            <div className={styles.icon_left}>
              <i className="fa fa-plane"></i>
            </div>
            <div className={styles.thumb_caption}>
              <h4 className={styles.thumb_title}>
                <a href="/heathrow-central-london">Heathrow Central London</a>
              </h4>
              <div className={styles.thumb_caption}>
                <p className={styles.thumb_desc}>
                  Best way to travel from Heathrow to Central London? Private
                  car is comfortable, convenient and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
