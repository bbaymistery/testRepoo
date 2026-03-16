import React from "react";
import { useSelector } from "react-redux";
import styles from "./pointsStyle.module.scss"
import { splitAndTranslateDuration } from "../../helpers/splitHelper";

const DropOffPoints = ({ selectedDropoffPoints, direction, distance, duration, language }) => {
  const { appData } = useSelector(state => state.initialReducer)


  const distanceInMiles = distance ? parseFloat(distance.replace(' mile', '')) : null;
  const distanceInKm = distanceInMiles ? (distanceInMiles * 1.60934).toFixed(2) : null;
  const formattedDuration = splitAndTranslateDuration(duration, language, appData);
    console.log({distanceInMiles, distanceInKm, formattedDuration});

  return (
    <div className={styles.stop}>
      {selectedDropoffPoints?.map((point, i) => {
        const addressText = point.address
        const pointPostcode = point.postcode ? point.postcode : null

        return (
          <div key={i}>
            <div className={`${styles.stopDot} ${styles.stopDotDrop}`}></div>
            <div className={styles.stopRow}>
              <div className={direction}>
                <div className={styles.stopLabel}>{appData.words["strDropOff1"]}</div>
                <h3 className={styles.stopTitle}>{addressText}</h3>
                {pointPostcode?.length && <div className={styles.stopSub}>{pointPostcode}</div>}


                {point?.postCodeDetails?.postCodeAddress &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData.words["strPostCodeAddress"]}</span>
                    <span className={styles.stopSub}>
                      {point?.postCodeDetails?.postCodeAddress}
                    </span>
                  </div>
                }



                {point?.cruiseNumber &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData.words["strCruiseNameTitle"]}</span>
                    <span className={styles.stopSub}>
                      {point?.cruiseNumber}
                    </span>
                  </div>
                }
                {point?.trainNumber &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData.words["strTrainNumber"]}</span>
                    <span className={styles.stopSub}>
                      {point?.trainNumber}
                    </span>
                  </div>
                }

                {point?.roomNumber &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData.words["strRoomNumberTitle"]}</span>
                    <span className={styles.stopSub}>
                      {point?.roomNumber}
                    </span>
                  </div>
                }

                {point?.pcatId === 7 && point?.["address-description"] &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData?.words["strPlacesofInterest"]}</span>
                    <span className={styles.stopSub}>
                      {point?.["address-description"]}
                    </span>
                  </div>
                }
                {point?.pcatId === 8 && point?.["address-description"] &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData?.words["strCities"]}</span>
                    <span className={styles.stopSub}>
                      {point?.["address-description"]}
                    </span>
                  </div>
                }
                {point?.pcatId === 9 && point?.["address-description"] &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData?.words["strUniversitiesAndColleges"]}</span>
                    <span className={styles.stopSub}>
                      {point?.["address-description"]}
                    </span>
                  </div>
                }
                {point?.pcatId === 10 && point?.["address-description"] &&
                  <div className={`${styles.desc} ${direction}`}>
                    <span>{appData?.words["strAddress"]}</span>
                    <span className={styles.stopSub}>
                      {point?.["address-description"]}
                    </span>
                  </div>
                }
                {(distanceInMiles || formattedDuration) && <div className={styles.badges}>
                  {distanceInMiles && <span className={styles.badge}>
                    <span>{appData?.words["strDistance"]}</span> {distanceInMiles} {appData?.words["strMiles"]} ({distanceInKm} km)
                  </span>}

                  {formattedDuration && <span className={styles.badge}>
                    <span>{appData?.words["strDuration"]}</span> {formattedDuration}
                  </span>}
                </div>}


              </div>


              {point?.flightDetails?.flightNumber &&
                (<div className={styles.flightBox}>
                  <div>{appData.words["strFlightNumberTitle"]}: <strong>{point?.flightDetails?.flightNumber}</strong></div>
                  {point?.flightDetails?.waitingPickupTime > 0 && (
                    <div>Delay: <strong>{point?.flightDetails?.waitingPickupTime}</strong></div>
                  )}
                </div>)}

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropOffPoints;
