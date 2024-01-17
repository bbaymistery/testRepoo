import React, { useState } from 'react'
import styles from "./styles.module.scss"
import OutsideClickAlert from '../OutsideClickAlert'
import { useSelector } from 'react-redux'
import Map from '../../../pages/quotation-results/Map'
import Image from 'next/image'
const QuotationResultsTaxiDealLeftPart = () => {
    const [taxidealMapStatus, setTaxidealMapStatus] = useState(false)
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params } = state
    let { direction, quotations, } = params

    const { appData } = useSelector(state => state.initialReducer)

    return (
        <div className={styles.quotation_panel_istaxideal}>
            {taxidealMapStatus ?
                <div className={`${styles.modal_map} ${styles.modal}  `}>
                    <OutsideClickAlert onOutsideClick={() => setTaxidealMapStatus(false)}>
                        <div className={styles.modal_map_container}>
                            <div onClick={() => setTaxidealMapStatus(false)} className={styles.close_div}>
                                <i className="fa-sharp fa-solid fa-xmark"></i>
                            </div>
                            <Map datas={quotations[0]} isTaxiDeal={true} />
                        </div>
                    </OutsideClickAlert>
                </div>
                : <></>}
            <div className={`${styles.left_info} ${styles.tripad_left_info}`} >
                <p className={`${styles.left_info_title} ${direction}`}>{appData?.words["strTripAdvisorReviews"]}</p>

                <ul style={{ position: 'relative', height: "105px", width: "311px" }}>
                    <a className={styles.tripad_a} target="_blank" href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html" title="Tripadvisor Rating for Airport Pickups London">
                        <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" fill className={styles.tripad_img} border="0" alt="Airport Pickups Trip Advisor" src="/images/TripAdvisor2.webp" />

                    </a>
                </ul>
            </div>
            <div className={`${styles.left_info} ${styles.left_support}`} >
                <p className={`${styles.left_info_title} ${direction}`}>{appData?.words["appContactUsHotLine"]}</p>
                <ul>
                    <li className={styles.phone}>
                        <span style={{ position: 'relative', height: "16px", width: "16px" }}>
                            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" fill src="/images/tel.webp" alt="Airport Pickups Support Phone " />
                        </span>
                        <a href="tel:+442088687744">+44 (0) 208 688 7744</a>
                    </li>
                    <li className={styles.wp} >
                        <span style={{ position: 'relative', height: "24px", width: "24px" }}>
                            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" fill src="/images/WhatsAppp.webp" alt="Airport Pickups Support Whatsapp" />
                        </span>
                        <a target="_blank" href="https://wa.me/447387901028">
                            +44 73 8790 1028
                        </a>
                    </li>
                    <li className={styles.mail} >
                        <span style={{ position: 'relative', height: "18px", width: "18px" }}>
                            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" fill border="0" alt="Airport Pickups Email" src="/images/mail.webp" />
                        </span>
                        <a href="mailto:info@aplcars.com" >info@aplcars.com</a>
                    </li>
                </ul>
            </div>
            <div className={`${styles.left_info} ${styles.services}`} direction={String(direction === "rtl")} >
                <p className={styles.left_info_title}>{appData?.words["strAllInclusivePrices"]}</p>
                <ul >
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        {appData?.words["strCarFeatureFreeMeetAndGreet"]}
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        {appData?.words["strFlightMonitoring"]}
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        {appData?.words["strFreeBabyChildSeat"]}
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        {appData?.words["strAllInclusiveFixedPrices"]}
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        {appData?.words["strCarFeatureNoCharge4Delay"]}
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        {appData?.words["strFreeCancellation24h"]}
                    </li>

                </ul>
            </div>
            <div className={styles.map_direction}  >
                <button onClick={() => setTaxidealMapStatus(true)} className='btn btn_hover_reverse_primary'><i className="fa-solid fa-map-location-dot"></i> {appData?.words["strShowOnMap"]}</button>
            </div>

            <div className={`${styles.left_info} ${styles.acceptedcards}`} style={{ position: 'relative', height: "140px", width: "100%" }}>
                <p className={`${styles.left_info_title} ${direction}`}> {appData?.words["strAcceptedCards"]}</p>
                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" fill className={styles.acceptedcards_img} border="0" alt="Airport Pickups Accepted Cards" src="/images/payments.webp" />
            </div>
            <div className={`${styles.left_info} ${styles.tfl}`} style={{ position: 'relative', height: "140px", width: "100%" }}>
                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" fill className={styles.tfl_img} border="0" alt="Airport Pickups " src="/images/tfl2.webp" />
            </div>

        </div>
    )
}

export default QuotationResultsTaxiDealLeftPart