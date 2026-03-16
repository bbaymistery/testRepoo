import React from 'react'
import styles from "./pointsStyle.module.scss"
const PickUpPoints = ({ selectedPickupPoints, direction, language, appData }) => {
    return (
        <div className={styles.stop}>
            {selectedPickupPoints?.map((point, i) => {
                const addressText = point.address
                const pointPostcode = point.postcode ? point.postcode : null
                return (
                    <div key={i}>
                        <div className={styles.stopRow}>
                            <div className={direction}>
                                <div className={styles.stopLabel}>{appData.words["strPickUp1"]}</div>
                                <h3 className={styles.stopTitle}>{addressText}</h3>
                                {/* {pointPostcode?.length && <div className={styles.stopSub}>{pointPostcode}</div>} */}

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
                          
                            </div>
{/* 
                            {point?.flightDetails?.flightNumber &&
                                (<div className={styles.flightBox}>
                                    <div>{appData.words["strFlightNumberTitle"]}: <strong>{point?.flightDetails?.flightNumber}</strong></div>
                                    {point?.flightDetails?.waitingPickupTime > 0 && (
                                        <div>{appData.words["strMeetAfter"]}: <strong> {appData.words["strMinutesLaterText"].replace("{{}}", point?.flightDetails?.waitingPickupTime)} </strong></div>
                                    )}
                                </div>)} */}


                        </div>
                    </div>
                );
            })}
        </div >
    )
}

export default PickUpPoints