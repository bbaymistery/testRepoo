import React from 'react'
import styles from "./styles.module.scss"
const TopHeaderWhiteLeftButtons = ({ language, }) => {
    return (
        <div className={styles.buttons}>
            <div className={styles.whitebtn_div}>
                <a href={language === 'en' ? '/travelAgents' : `/${language}/travelAgents`} title="Travel Agents" >
                    <button  >Travel Agents</button>
                </a>
            </div>
            <div className={styles.bluebtn_div}>
                <a href="/manage-booking.html" title="Manage Booking" target="_blank">
                    <button>Manage My Booking</button>
                </a>
            </div>
        </div>
    )
}

export default TopHeaderWhiteLeftButtons