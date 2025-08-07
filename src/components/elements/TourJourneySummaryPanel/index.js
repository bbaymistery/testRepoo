import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
const TourJourneySummaryPanel = (props) => {
    let { splitedDate, splitedHour, splitedMinute, selectedTour, language } = props

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { direction } } = state

    const { appData } = useSelector(state => state.initialReducer)
    const tourActionState = useSelector(state => state.tourActions)
    const adults = tourActionState.seatLists[0].minNum
    const children = tourActionState.seatLists[1].minNum
    const infants = tourActionState.seatLists[2].minNum
    const totalPrice = tourActionState.seatListPrice
    const isPound=tourActionState.isPound
const symbol=isPound ? "£" : "Є"
    return (
        <div className={`${styles.journey_summary_panel}`}>
            <div className={styles.content}>
                <h3>{appData?.words["strYourBookingDetails"]}</h3>
                <div className={`${styles.journey_card} ${direction === 'rtl' && styles.rtljourney_card}`}>
                    <div className={styles.details_div}>
                        <div id="from to" className={styles.fromto}>

                            {adults > 0 ? <p>
                                <span>{appData?.words["strOn"]}</span>
                                   <span>
                                    {direction === 'rtl' ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}` : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`}
                                    &nbsp;
                                    &nbsp;
                                    {`${splitedHour}:${splitedMinute}`}
                                </span>
                              </p> : <></>}
          
                
                            {adults > 0 ? <p><span>{appData?.words["strAdults"]}</span>  <span>{adults}</span> </p> : <></>}
                            {children > 0 ? <p><span>{appData?.words["strChildren"]}</span>  <span>{children}</span> </p> : <></>}
                            {infants > 0 ? <p><span>{appData?.words["strInfants"]}</span>  <span>{infants}</span> </p> : <></>}
                            <p>
                                <span>{selectedTour[0].pageTitle[language]}</span>
                                <span>{selectedTour[0].duration[language]}</span>
                            </p>
                            <a href={"https://www.trustpilot.com/review/airport-pickups-london.com"} target="_blank" className={styles.review}>
                                <div className={styles.review_left}>4.8 </div>
                                <div className={styles.review_center} >
                                    {appData?.words["strExceptional"]}
                                </div>
                                <div className={styles.review_right}><span>495</span> {appData?.words["strReviews"]}  </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.tourname}>
                    <p>
                        <span>{appData?.words["strTotalPrice"]}</span>
                        <span>{symbol}{totalPrice}</span>
                    </p>
                </div>


                <div className={styles.acceptedcards_div} title="Accepted Cards for Airport Pickups London">
                    <img className={styles.acceptedcards_img} border="0" alt="Accepted Cards for Airport Pickups London " src="/images/others/accepted-cards.png" />
                </div>
            </div>
        </div>
    )
}

export default TourJourneySummaryPanel
