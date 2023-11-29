import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const HeaderOfResults = ({ distance, duration }) => {
  const { appData } = useSelector(state => state.initialReducer)
  return (
    <div className={` ${styles.quotation_header}`}>
      <ul>
        {distance ?
          <li>
            <span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>{" "}
            Distance : <span>{distance}</span>
          </li>
          : (<> </>)}

        {duration ?
          <li>
            <span>  <i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>{" "}
            <span className={styles.left} >{appData?.words["strJourneyDurationTitle"]} </span> : <span>{duration}</span>
          </li>
          : (<> </>)}
        <li>
          <span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>{" "}
          We constantly monitor all flights and do not charge for flight delays  or cancellations.
        </li>
        <li>
          <span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>
          <span className={styles.strong}>ALL INCLUSIVE PRICES</span> No Hidden
          Charges; Meet and Greet included for airport and port pickups.
        </li>
      </ul>
    </div>
  );
};

export default HeaderOfResults;
