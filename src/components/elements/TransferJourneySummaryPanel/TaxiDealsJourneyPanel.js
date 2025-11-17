import React from 'react'
import styles from "./styles.module.scss"
import { quotationImagesObjWebp } from '../../../constants/quotationImages'
const TaxiDealsJourneyPanel = (props) => {
    let {
        appData, quotation, direction,
        selectedPickupPoints, selectedDropoffPoints,
        splitedDate, splitedHour, splitedMinute, isTaxiDeal = true,
        distanceInMiles, distanceInKm, formattedDuration, quotations, index, carObject, _quotationDetails, setOpenModal
    } = props
    return (
        <>
            <div className={styles.content}>
                <h3>{appData?.words["strYourBookingDetails"]}</h3>
                <div className={`${styles.journey_card} ${direction === 'rtl' && styles.rtljourney_card}`}>
                    <div
                        className={`${styles.img_div}
                         ${quotation.carId === 6 || quotation.carId === 5 ? styles.cardIdSix : ""}
                          ${quotation.carId === 4 ? styles.carIdFour : ""}
                           ${quotation.carId === 2 ? styles.carIdTwo : ""}
                           ${quotation.carId === 3 ? styles.cardIdThree : ""}
                           `}
                        style={{ backgroundImage: `url(${quotationImagesObjWebp[quotation?.carId]?.image})` }}>

                    </div>
                    <div className={styles.details_div}>
                        <div id="from to" className={styles.fromto}>
                            {/* <h5>Pickup point:</h5> */}
                            <div className={styles.stars}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            {selectedPickupPoints.map((pickup, i) => { return <li key={i}><span>{isTaxiDeal ? "" : `${i + 1}. `}  {pickup.address}</span></li> })}
                            <div className={styles.space}> </div>
                            {/* <h5>Dropoff point:</h5> */}
                            {selectedDropoffPoints.map((dropoff, i) => {
                                const addressText = dropoff.address.includes(dropoff.postcode)
                                    ? `${dropoff.address}`
                                    : `${dropoff.address} ${dropoff.postcode ? dropoff.postcode : ""}`;

                                return (
                                    <li key={i + 15}>
                                        <span>{isTaxiDeal ? "" : `${i + 1}. `}{addressText}</span>
                                    </li>
                                );
                            })}

                            <a href={"https://uk.trustpilot.com/review/airport-pickups-london.com"} target="_blank" className={styles.review}>
                                <div className={styles.review_left}>4.8 </div>
                                <div className={styles.review_center} >Exceptional </div>
                                <div className={styles.review_right}><span>495</span> {appData?.words["strReviews"]}  </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.date_time}>
                    <div className={styles.box}>
                        <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]}</p>
                        <p>
                            {direction === 'rtl'
                                ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}`
                                : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`}
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]}</p>
                        <p> {`${splitedHour} : ${splitedMinute}`}</p>
                    </div>
                </div>
                <div className={styles.total_journey}>
                    <div className={styles.text_1}>{appData?.words["strTotalLengthofJourney"]} </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strDistance"]}</span>

                        {/* //!here   */}
                        <span>{distanceInMiles} {appData?.words["strMiles"]} ({distanceInKm} km)</span>
                    </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strJourneyDurationTitle"]}</span>
                        <span>{formattedDuration ? formattedDuration : quotations[index]?.duration ? quotations[index]?.duration : null}</span>
                    </div>
                </div>
                <div style={{ border: 'none' }} className={styles.total_journey}>
                    <div className={styles.text_1}>{appData?.words["strYourVehicleDetails"]}</div>
                    <div className={styles.duration}>
                        <span>{carObject[quotation.carId]?.transferType}</span>
                    </div>
                    <div className={styles.duration}>
                        <div>{appData?.words["strVehicleCapacity"]}</div>
                        <div>
                            <span>
                                {` ${appData.words["strNoofPassengers"]} ${carObject[quotation.carId]?.pax}`}
                            </span>
                            <span>
                                {` ${appData.words["strNoofSuitcases"]} ${carObject[quotation.carId]?.suitcases}`}
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.content} ${styles.summarycontent} `} style={{ marginTop: "2rem" }}>
                <div className={`${styles.total_journey}`}>
                    <div className={styles.duration}>
                        <span>{carObject[quotation.carId]?.name} {appData?.words["strVehicleTypeTitle"]}</span>
                        <span>£ {quotation.normalPrice ? quotation.normalPrice : quotation.price}</span>
                    </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strTaxesAndFees"]}</span>
                        <span>	{appData?.words["strIncluded"]}</span>
                    </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strMeetandGreetIncluded"]}	</span>
                        <span>	{appData?.words["strIncluded"]}</span>
                    </div>
                </div>
                <div className={styles.price_div}>
                    <div className={styles.text_1}>{appData?.words["strPriceTitle"]} </div>
                    <div className={styles.price}>£ {(quotation.normalPrice).toFixed(2)}  </div>

                </div>
                {_quotationDetails.price !== _quotationDetails.normalPrice ?
                    <div className={styles.additionalPrice}>
                        <p className={styles.text_1}>{appData?.words["strLastMinuteBookingFee"]}

                            <span>
                                <i className={`fa-solid fa-circle-info`} onClick={() => setOpenModal(true)}></i>
                            </span>
                        </p>
                        <p className={styles.price}>£  {(parseFloat(_quotationDetails.price) - parseFloat(_quotationDetails.normalPrice)).toFixed(2)}</p>
                    </div> : <></>}

                {_quotationDetails.price !== _quotationDetails.normalPrice ?
                    <div className={styles.TotalPrice}>
                        <p className={styles.text_1}>{appData?.words["strTotalPrice"]}</p>
                        <p className={styles.price}>£  {parseFloat(_quotationDetails.price)}</p>
                    </div>
                    : <></>}
            </div>
        </>
    )
}

export default TaxiDealsJourneyPanel
