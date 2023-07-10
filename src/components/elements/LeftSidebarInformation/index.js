import React from 'react'
import styles from "./styles.module.scss"
const LeftSidebarInformation = ({ direction, appData }) => {
    return (
        <div className={styles.quotation_panel_istaxideal}>

            <div className={`${styles.left_info} ${styles.tripad_left_info}`} >
                <p className={`${styles.left_info_title} ${direction}`}>Tripadvisor Ratings</p>
                <ul>
                    <a
                        className={styles.tripad_a}
                        target="_blank"
                        href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"
                        title="Tripadvisor Rating for Airport Pickups London">
                        <img className={styles.tripad_img} border="0" alt="Airport Pickups" src="/images/TripAdvisor2.png" />
                    </a>
                </ul>
            </div>
            <div className={`${styles.left_info} ${styles.left_support}`} >
                <p className={`${styles.left_info_title} ${direction}`}>7/24 Support</p>

                <ul>
                    <li className={styles.phone}>
                        <img src="/images/tel.png" alt="Airport Pickups Support" />
                        <a href="tel:+44 73 8790 1028">+44 73 8790 1028</a>
                    </li>
                    <li className={styles.wp}>
                        <img src="/images/WhatsApp.svg.png" alt="Airport Pickups Support" />
                        <a target="_blank" href="https://wa.me/447387901028">
                            +44 73 8790 1028
                        </a>
                    </li>
                    <li className={styles.mail}>
                        <span>
                            <img border="0" alt="Airport Pickups" src="/images/mail.svg" />
                        </span>
                        <a href="mailto:info@aplcars.com" >info@aplcars.com</a>

                    </li>
                </ul>
            </div>
            <div className={`${styles.left_info} ${styles.services}`} direction={String(direction === "rtl")} >
                <p className={styles.left_info_title}>ALL Inclusive Prices</p>
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
                        Flight monitoring
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        FREE Baby/Child Seat
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        FIXED Prices
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        NO hidden charges
                    </li>
                    <li className={`${direction}`}>
                        <input readOnly={true} className={styles.checkbox} type="checkbox" defaultChecked={true} />
                        <label className={styles.primary_text} >
                        </label>
                        FREE Cancellation (24h)
                    </li>

                </ul>
            </div>

            <div className={`${styles.left_info} ${styles.acceptedcards}`}>
                <p className={`${styles.left_info_title} ${direction}`}> Accepted Cards</p>
                <img className={styles.acceptedcards_img} border="0" alt="Airport Pickups" src="/images/payments.png" />
            </div>
            <div className={`${styles.left_info} ${styles.tfl}`}>
                <img className={styles.tfl_img} border="0" alt="Airport Pickups" src="/images/tfl2.png" />
            </div>

        </div>
    )
}

export default LeftSidebarInformation