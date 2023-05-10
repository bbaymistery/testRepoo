import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { quotationImagesObj } from '../../../constants/quotationImages'
import env from '../../../resources/env'
import styles from "./styles.module.scss"
const TransferJourneySummaryPanel = (props) => {
    let { index, quotation, selectedPickupPoints, selectedDropoffPoints, splitedDate, splitedHour, splitedMinute, isTaxiDeal = false, journeyType } = props

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { quotations, direction } } = state

    const { appData } = useSelector(state => state.initialReducer)
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    //https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html

    return (
        <div className={`${styles.journey_summary_panel} ${isTaxiDeal ? styles.journey_summary_panel_taxi_deal : ""}`}>
            {isTaxiDeal ?
                <div className={styles.content}>
                    <h3>Your Booking Details</h3>
                    <div className={`${styles.journey_card} ${direction === 'rtl' && styles.rtljourney_card}`}>
                        <div className={`${styles.img_div} ${quotation.carId === 6 || quotation.carId === 5 ? styles.cardIdSix : ""} ${quotation.carId === 4 ? styles.carIdFour : ""}`} style={{ backgroundImage: `url(${env.apiDomain}${quotationImagesObj[quotation?.carId]?.image})` }}>

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
                                {selectedDropoffPoints.map((dropoff, i) => { return <li key={i + 15}><span>{isTaxiDeal ? "" : `${i + 1}. `} {dropoff.address}</span></li> })}


                                <a href={"https://g.co/kgs/Rg7vb8"} target="_blank" className={styles.review}>
                                    <div className={styles.review_left}>4.8 </div>
                                    <div className={styles.review_center} >Exceptional </div>
                                    <div className={styles.review_right}><span>495</span> reviews  </div>
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
                        <div className={styles.text_1}>Total Length of journey </div>
                        <div className={styles.duration}>
                            <span>Distance</span>
                            <span>{quotations[index].distance}</span>
                        </div>
                        <div className={styles.duration}>
                            <span>{appData?.words["strJourneyDurationTitle"]}</span>
                            <span>{quotations[index].duration}</span>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className={styles.total_journey}>
                        <div className={styles.text_1}>Your Vehicle Details</div>
                        <div className={styles.duration}>
                            <span>{carObject[quotation.carId]?.transferType}</span>
                        </div>
                        <div className={styles.duration}>
                            <span>Max</span>
                            <span>{carObject[quotation.carId]?.suitcases} Suitcases</span>
                        </div>
                        <div className={styles.duration}>
                            <span>Max</span>
                            <span>{carObject[quotation.carId]?.pax} Passengers</span>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.content}>
                    <h3>{index === 0 ? "Booking Details" : "Return Journey Booking Details"}</h3>
                    <div className={`${styles.journey_card} ${direction === 'rtl' && styles.rtljourney_card}`}>

                        <div className={`${styles.img_div} ${quotation.carId === 6 || quotation.carId === 5 ? styles.cardIdSix : ""} ${quotation.carId === 4 ? styles.carIdFour : ""}`} style={{ backgroundImage: `url(${env.apiDomain}${quotationImagesObj[quotation?.carId]?.image})` }}>
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

                                <h5>FROM:       {/* <h5>Pickup point:</h5> */}
                                </h5>
                                {selectedPickupPoints.map((pickup, i) => { return <li key={i}><span>{isTaxiDeal ? "" : `${i + 1}. `}  {pickup.address}</span></li> })}
                                <div className={styles.space}> </div>
                                <h5>TO:</h5>
                                {selectedDropoffPoints.map((dropoff, i) => { return <li key={i + 15}><span>{isTaxiDeal ? "" : `${i + 1}. `} {dropoff.address}</span></li> })}
                                <h5>ON:</h5>
                                <li>
                                    <span>
                                        {direction === 'rtl'
                                            ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}`
                                            : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`}

                                        &nbsp;
                                        {`${splitedHour}:${splitedMinute}`}
                                    </span>
                                </li>
                                <a href={"https://g.co/kgs/Rg7vb8"} target="_blank" className={styles.review}>
                                    <div className={styles.review_left}>4.8 </div>
                                    <div className={styles.review_center} >Exceptional </div>
                                    <div className={styles.review_right}><span>495</span> reviews  </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.total_journey}>
                        <div className={styles.text_1}>Total Length of journey </div>
                        <div className={styles.duration}>
                            <span>Distance</span>
                            <span>{quotations[index].distance}</span>
                        </div>
                        <div className={styles.duration}>
                            <span>{appData?.words["strJourneyDurationTitle"]}</span>
                            <span>{quotations[index].duration}</span>
                        </div>
                    </div>

                    <div style={{ border: 'none' }} className={styles.total_journey}>
                        <div className={styles.text_1}>Your Vehicle Details</div>
                        <div className={styles.duration}>
                            <span>{carObject[quotation.carId]?.transferType}</span>
                        </div>
                        <div className={styles.duration}>
                            <span>Max</span>
                            <span>{carObject[quotation.carId]?.suitcases} Suitcases</span>
                        </div>
                        <div className={styles.duration}>
                            <span>Max</span>
                            <span>{carObject[quotation.carId]?.pax} Passengers</span>
                        </div>
                        {quotations[0].taxiDeal ? <></> : <Link href="/quotation-results"> Change Car Type </Link>}
                    </div>
                    <div className={styles.price_div}>
                        <div className={styles.text_1}>{appData?.words["strPriceTitle"]} </div>
                        <div className={styles.price}>£ {quotation.price}  </div>
                    </div>
                </div>
            }
            {isTaxiDeal ?
                <div className={`${styles.content} ${styles.summarycontent} mt_3`}>
                    <div className={`${styles.total_journey}`}>
                        <div className={styles.duration}>
                            <span>{carObject[quotation.carId]?.name} Vehicle</span>
                            <span>£ {quotation.price}</span>
                        </div>
                        <div className={styles.duration}>
                            <span>Taxes and Fees	</span>
                            <span>	Included</span>
                        </div>
                        <div className={styles.duration}>
                            <span>Meet & Greet by Arrivals	</span>
                            <span>	Included</span>
                        </div>
                    </div>
                    <div className={styles.price_div}>
                        <div className={styles.text_1}>{appData?.words["strPriceTitle"]} </div>
                        <div className={styles.price}>£ {quotation.price}</div>
                    </div>
                </div>
                : <></>}

{/* || index === 1 || (index === 0&&+journeyType===0) */}
            {isTaxiDeal  ?
                <div className={`${styles.content} ${styles.summarycontent} mt_3`}>
                    <div className={`${styles.left_info} ${styles.acceptedcards} mt_0`} title="Accepted Cards for Airport Pickups London">
                        <img className={styles.acceptedcards_img} border="0" alt="Accepted Cards for Airport Pickups London " src="/images/accepted-cards10Final.png" />
                    </div>
                </div>
                : <></>}

        </div>
    )
}

export default TransferJourneySummaryPanel


    // {
    //     isTaxiDeal ?
    //         <div className={`${styles.left_info} ${styles.tripad}`} >
    //             <a
    //                 target="_blank"
    //                 href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"
    //                 title="Tripadvisor Rating for Airport Pickups London">
    //                 <img border="0" alt="Tripadvisor Rating for Airport Pickups London" src="/images/advisor3.0.png" />
    //             </a>
    //         </div>
    //         : <></>
    // }

    // {isTaxiDeal ?
    //     <div className={`${styles.left_info} ${styles.acceptedcards}`} title="Accepted Cards for Airport Pickups London">
    //         <img className={styles.acceptedcards_img} border="0" alt="Accepted Cards for Airport Pickups London " src="/images/payments.png" />
    //     </div>
    //     : <></>}

    // {isTaxiDeal ?
    //     <div className={`${styles.left_info} ${styles.google_review}`} >
    //         <a
    //             target="_blank"
    //             href="https://g.co/kgs/Rg7vb8"
    //             title="Customer Reviesw for Airport Pickups London"
    //         >
    //             <img
    //                 border="0"
    //                 alt="Customer Reviesw for Airport Pickups London "
    //                 src={"/images/review1.png"} />
    //         </a>
    //     </div>
    //     : <></>}