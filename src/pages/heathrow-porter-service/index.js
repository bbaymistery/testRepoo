import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import LeftSidebarInformation from '../../components/elements/LeftSidebarInformation'

let description = "heathrow airport porter service cost £28.00 for arrivals and departures.  Porters hold name board by the baggage carousel."
let title = "Porter service for Heathrow airport passengers."
let keywords = "Heathrow porter service"

const Porter = (props) => {
    let { bggray = false } = props;
    const { appData } = useSelector(state => state.initialReducer)

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state

    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.porter} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.porter_section} page_section`}>
                    <div className={`${styles.porter_section_container} page_section_container`}>
                        <div className={styles.left_content}>

                            {/* bura eftsidebar componentin normal div formasi yazilmisdi onu sadece reusable olsun deye tek sekilde yazdm */}
                            <LeftSidebarInformation direction={direction} appData={appData} />
                        </div>
                        <div className={styles.right_content}>
                            <div className={`${styles.porter_header}`}>
                                <h1>Welcome to our Heathrow Porter Service  page!</h1>
                            </div>

                            &nbsp;
                            <div className={`${styles.porter_footer}`}>

                                <h2>Heathrow Porter Service</h2>
                                <ul className={styles.img_flex_ul}>
                                    <li >
                                        Airport Pickups London provides a porter service to help with your baggage at Heathrow airport.  Our porter will hold your name board by the baggage carousel. (after passport control)
                                        For departures, porters will get your suitcases from our drivers.  You can add this service during the booking process.
                                        If you like to book via email please email your details to    <a style={{ fontWeight: "500" }} href="mailto: info@aplcars.com"> info@aplcars.com</a>  or give us a call at 0208 688 7744


                                    </li>

                                    <li>
                                        <img src="/images/meetGreet/porterService.jpg" alt="" />

                                    </li>
                                </ul>

                                <br />
                                <h2>Heathrow Arrivals  Porter  includes</h2>
                                <ul className={styles.img_flex_ul}>
                                    <li>
                                        At arrivals our Porters will hold your name board by the baggage carousel.
                                        Our Porter will remove your luggage from the carousel and take your luggage
                                        to your mode of transport from the airport.
                                    </li>

                                    <li>
                                        <img src="/images/meetGreet/heathrowArrival.jpg" alt="" />

                                    </li>
                                </ul>
                                <br />
                                <h2>Heathrow Departures  Porter  includes</h2>

                                <ul className={styles.img_flex_ul}>
                                    <li>
                                        At departures our Porters will transport your luggage
                                        from the terminal forecourt to check-in for you. Once our
                                        vehicle approach departures area, we will notify the Porter
                                        and they will collect your suitcases from your selected mode of transport
                                    </li>

                                    <li>
                                        <img src="/images/meetGreet/departuresPorter.jpg" alt="" />
                                    </li>
                                </ul>



                                <br />
                                <h2>Porter Terms and Conditions</h2>
                                <ul className={styles.img_flex_ul}>
                                    <li>
                                        <ul className={styles.li_circle_ul}>
                                            <li className={styles.li_circle}>Porter price is £65.00 including all taxes and charges.</li>
                                            <li className={styles.li_circle}>Max 8 suitcases per porter. (In any case, we can carry max 8 bags in our cars.)</li>
                                        </ul>
                                    </li>


                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Porter