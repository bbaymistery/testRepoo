import React from 'react'
import styles from "./styles.module.scss"
const DestinationsCustomers = () => {
    return (
        <div className={styles.destinations}>
            <div className={styles.destinations_content}>
                <div className={styles.column}>
                    <div className={styles.numbers}>5,200 </div>
                    <div className={styles.text}>Destinations</div>
                </div>

                <div className={styles.column}>
                    <div className={styles.numbers}>757</div>
                    <div className={styles.text}>Total Vehicles</div>
                </div>

                <div className={styles.column}>
                    <div className={styles.numbers}>1.6 M</div>
                    <div className={styles.text}>Happy customers</div>
                </div>

                <a rel="noreferrer"
                    href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"
                    target="_blank" title="Airport Pickups London Reviews"
                    className={styles.column}>
                    <div className={styles.numbers}>
                        4.8

                    </div>
                    <div className={styles.text}>Service Ratings</div>
                </a>

            </div>
        </div>
    )
}

export default DestinationsCustomers