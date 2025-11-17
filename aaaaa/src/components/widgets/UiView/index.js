import { useState } from 'react';
import styles from './styles.module.scss';
import { useWindowSize } from '../../../hooks/useWindowSize';
import ShowContent from './ShowContent';

const UiView = () => {
  const [showText, setshowText] = useState(false)
  let size = useWindowSize()
  let { width } = size

  return (
    <div className={styles.uiView}>
      <div className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature_box}>

            {/* Feature 1: Airport Meet & Greet */}
            <div className={styles.thumb}>
              <header className={styles.thumb_header}>
                <i className={`fa-solid fa-thumbs-up ${styles.thumb_icon}`}></i>
              </header>
              <div className={styles.thumb_caption}>
                <h2 className={styles.thumb_title}>Airport meet &amp; greet</h2>
                <p className={styles.thumb_desc}>
                  Friendly meet &amp; greet service at all Heathrow terminals.
                </p>
              </div>
            </div>

            {/* Feature 2: Free Waiting Time */}
            <div className={styles.thumb}>
              <header className={styles.thumb_header}>
                <i className={`fa-solid fa-briefcase ${styles.thumb_icon}`}></i>
              </header>
              <div className={styles.thumb_caption}>
                <h2 className={styles.thumb_title}>Free waiting time</h2>
                <p className={styles.thumb_desc}>
                  No charge in case <br /> of flight delays
                </p>
              </div>
            </div>

            {/* Feature 3: Flight Tracking */}
            <div className={styles.thumb}>
              <header className={styles.thumb_header}>
                <i
                  style={{ transform: "rotate(40deg)" }}
                  className={`fa-solid fa-plane-up ${styles.thumb_icon}`}
                ></i>
              </header>
              <div className={styles.thumb_caption}>
                <h2 className={styles.thumb_title}>Flight tracking</h2>
                <p className={styles.thumb_desc}>
                  Real-time flight tracking ensures your driver is always on time.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.main_content}>
          <h2>Heathrow Taxi Transfers – London Heathrow Taxi</h2>

          <div className={styles.desc}>Your reliable Heathrow taxi service between all London Heathrow Airport
            terminals and Central London. Enjoy fixed prices, free meet and greet,
            flight tracking, and free cancellation, all included in your fare.  {showText ? <button onClick={() => setshowText(!showText)}>Hide </button> : <button onClick={() => setshowText(!showText)}>Show More</button>}</div>



          {width > 768 ? <ShowContent /> : <></>}
          {showText && width <= 768 ? <ShowContent /> : <></>}
        </div>
      </div>
    </div>
  );
};



export default UiView;