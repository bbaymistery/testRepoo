import { useSelector } from 'react-redux'
import { quotationImagesObjWebp } from '../../../constants/quotationImages'
import styles from "./styles.module.scss"
import { useRouter } from 'next/router'
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation'
import { formatDate } from '../../../helpers/meetgreetPageHelpers'
const TourJourneySummaryPanel = (props) => {
    let { quotation, pickupPointAddress = "", selectedCar, splitedDate, splitedHour, splitedMinute, selectedTour, language } = props

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { direction } } = state
    let { reservations, } = state
    let { selectedPickupPoints, } = reservations[0]
    let _quotationDetails = getPriceDetailsFromQuotation({ quotation, qtype: quotation.qtype }).data || {}
    const router = useRouter();
    const { appData } = useSelector(state => state.initialReducer)
    const date = formatDate(splitedDate, "short", language)
    const time = `${splitedHour}:${splitedMinute}`
    const isAdditionalPriceStatus = _quotationDetails.price !== _quotationDetails.normalPrice

    const goBack = (e) => {
        e.preventDefault();
        router.back();
    };
    const CarInfo = () => {
        return (
            <div className={styles["car-info-section"]}>
                <div className={styles["car-image-container"]}>
                    <img src={quotationImagesObjWebp[quotation?.carId]?.image} className={styles["car-image"]} />
                </div>

                <div className={styles["car-name"]}>
                    {`${selectedCar?.transferType}  ${selectedCar?.name}  `}
                </div>
                <a href='#' onClick={goBack} className={styles["change-link"]} style={{ textTransform: "capitalize" }}> {appData?.words["strChangeCar"]} </a>

                <div className={styles["benefit-badges"]}>
                    <span className={styles["badge"]}>
                        <i className="fa-solid fa-user-tie"></i>
                        {appData?.words["strMeetandGreetIncluded"]}
                    </span>
                    <span className={styles["badge"]}>
                        <i className="fa-solid fa-tag"></i>
                        {appData.words["strFixedPrice"]}
                    </span>
                </div>

                <div className={styles["trust-badge"]}>
                    <div className={styles["star-rating"]}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className={styles["review-text"]}>
                        <span className={styles["score"]}>4.9</span> on{" "}
                        <span className={styles["score"]}>
                            <a
                                href="https://uk.trustpilot.com/review/airport-pickups-london.com?utm_medium=trustbox&utm_source=Mini"
                                target='_blank' rel="noopener noreferrer" className={styles.reviewLink}>
                                <i className="fa-solid fa-star" style={{ color: "#22c55e" }}></i> Trustpilot
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    const PriceBox = () => {
        const _item_details = getPriceDetailsFromQuotation({ quotation: quotation }).data || {}
        let { price: original, normalPrice: net, amountOfVAT: vat } = _item_details
        return (
            <div className={styles["price-box"]}>
                <div className={styles["price-label"]}>{appData?.words["strPriceTitle"]}</div>
                <div className={styles["price-right"]}>
                    <div className={styles["main-price"]}>£ {Number(original).toFixed(2)}</div>
                    {vat > 0 && <div className={styles["vat-detail"]}>
                        {`£${net} + ${appData.words["strVat"]} £${vat}`}

                    </div>}
                </div>
            </div>
        )

    }

    const AdditionalFee = () => {
        return (
            <div className={styles.additionalPrice}>
                <p className={styles.text_1}>{appData?.words["strLastMinuteBookingFee"]}
                    <span>
                        <i className={`fa-solid fa-circle-info`} onClick={() => setOpenModal(true)}></i>
                    </span>
                </p>
                <p className={styles.price}>£  {(parseFloat(_quotationDetails.price) - parseFloat(_quotationDetails.normalPrice)).toFixed(2)}</p>
            </div>
        )
    }
    const AdditionalFeeTotalPrice = () => {
        return (
            <div className={styles.TotalPrice}>
                <p className={styles.text_1}>{appData?.words["strTotalPrice"]}</p>
                <p className={styles.price}>£  {parseFloat(_quotationDetails.price)}</p>
            </div>
        )
    }
    return (
        <div className={styles["sticky-sidebar"]}>
            <div className={styles["summary-card"]}>
                <div className={styles["summary-header"]}>
                    <h3 className={styles["summary-title"]}>{appData?.words["strYourBookingDetails"]}</h3>
                </div>
                <CarInfo />
                <div className={styles["summary-content"]}>

                    <div className={styles["timeline-container"]}>
                        <div className={styles["timeline-item"]}>
                            <div className={`${styles["timeline-dot"]} ${styles["pickup-dot"]}`}></div>
                            <div className={styles["timeline-label"]}>
                                {appData.words["strPickupAddress"]}</div>
                            {selectedPickupPoints.map((point, i) => {
                                return <div key={i}>
                                    <div className={styles["timeline-location"]}>
                                        {`${i + 1}. `}  {point.address} {pickupPointAddress}
                                    </div>
                                    {point.postcode ?
                                        <div className={styles["timeline-postcode"]}>
                                            {point.postcode}
                                        </div> : null}
                                </div>
                            })}
                            <div className={styles["date-badge"]}>
                                <i className="fa-regular fa-calendar"></i> {date} <span>|</span> {time}
                            </div>
                        </div>

                        <div className={styles["timeline-item"]}>
                            <div className={`${styles["timeline-dot"]} ${styles["dropoff-dot"]}`}></div>
                            <div className={styles["timeline-label"]}>
                                {`${selectedTour.title}`}
                                <span style={{ color: 'black' }}>
                                    {`  ${selectedTour.duration.split(" ")[0]} ${appData?.words["strHours"]}`}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["divider"]}></div>
                    <div className={styles["stats-grid"]}>
                        <div>
                            <div className={styles["stat-label"]}>{appData.words["strNoofPassengers"]}</div>
                            <div className={styles["stat-value"]}>
                                <i className="fa-solid fa-user"></i> {selectedCar.pax}
                            </div>
                        </div>
                        <div>
                            <div className={styles["stat-label"]}>{appData.words["strNoofSuitcases"]}</div>
                            <div className={styles["stat-value"]}>
                                <i className="fa-solid fa-suitcase"></i> {selectedCar.suitcases}
                            </div>
                        </div>
                    </div>
                </div>

                <PriceBox />
                {/* {isAdditionalPriceStatus && <AdditionalFee />}
                {isAdditionalPriceStatus && <AdditionalFeeTotalPrice />} */}
            </div>
            <div className={styles["trust-help-box"]}>
                <div className={styles["secure-text"]}>
                    <i className="fa-solid fa-lock"></i> {appData.words["strSecure256"]}
                </div>
                <img src="/images/others/accepted-cards.png" className={styles["accepted-cards"]} />
            </div>
        </div>
    )
}

export default TourJourneySummaryPanel
