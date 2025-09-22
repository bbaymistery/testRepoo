import React from 'react'
import { quotationImagesObjWebp } from '../../../constants/quotationImages'
import styles from "./styles.module.scss"
import Link from 'next/link'
const NormalJourneyPanel = (props) => {

    let {
        quotation, index, appData, direction,
        selectedPickupPoints, selectedDropoffPoints,
        splitedDate, distanceInKm, quotations, carObject,
        formattedDuration, _quotationDetails, distanceInMiles,
        splitedHour, splitedMinute, setOpenModal
    } = props

    return (
        <div className={styles.content}>
            <h3>{index === 0 ? appData?.words["strYourBookingDetails"] : appData?.words["strReturnJourneyDetails"]}</h3>
            <div className={`${styles.journey_card} ${direction === 'rtl' && styles.rtljourney_card}`}>

                <div d={quotation.carId}
                    className={`${styles.img_div}
            ${quotation.carId === 6 || quotation.carId === 5 ? styles.cardIdSix : ""} 
            ${quotation.carId === 3 || quotation.carId === 3 ? styles.cardIdThree : ""} 
            ${quotation.carId === 4 ? styles.carIdFour : ""}
            ${quotation.carId === 2 ? styles.carIdTwo : ""}`}
                    style={{ backgroundImage: `url(${quotationImagesObjWebp[quotation?.carId]?.image})` }}>
                    <div className={styles.stars}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>


                </div>
                <div className={styles.details_div}>

                    <div id="from to" className={styles.fromto}>

                        <h5>
                            {appData?.words["strFrom2"]}:
                        </h5>
                        {selectedPickupPoints.map((point, i) => {
                            return <li key={i}>
                                <span>
                                    {`${i + 1}. `}   {point.address.includes(point.postcode) ? `${point.address}` : `${point.address} ${point.postcode ? point.postcode : ""}`}
                                </span></li>
                        })}
                        <div className={styles.space}> </div>
                        <h5>{appData?.words["strTo"]}:</h5>
                        {selectedDropoffPoints.map((point, i) => {
                            return <li key={i + 15}>
                                <span>
                                    {`${i + 1}. `} {point.address.includes(point.postcode) ? `${point.address}` : `${point.address} ${point.postcode ? point.postcode : ""}`}
                                </span></li>
                        })}
                        <h5>{appData?.words["strOn"]}:</h5>
                        <li>
                            <span>
                                {direction === 'rtl'
                                    ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}`
                                    : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`}

                                &nbsp;
                                {`${splitedHour}:${splitedMinute}`}
                            </span>
                        </li>
                        <a href={"https://uk.trustpilot.com/review/airport-pickups-london.com"} target="_blank" className={styles.review}>
                            <div className={styles.review_left}>4.8 </div>
                            <div className={styles.review_center} >
                                {appData?.words["strExceptional"]}
                            </div>
                            <div className={styles.review_right}><span>495</span> {appData?.words["strReviews"]}  </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.total_journey}>
                <div className={styles.text_1}>{appData?.words["strTotalLengthofJourney"]} </div>
                <div className={styles.duration}>
                    <span>{appData?.words["strDistance"]}</span>
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
                <Link href="/quotation-results" style={{ textTransform: "capitalize" }}> {appData?.words["strChangeCar"]} </Link>
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
    )
}

export default NormalJourneyPanel