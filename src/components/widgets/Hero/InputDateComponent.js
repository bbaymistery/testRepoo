import React from 'react'
import styles from "./styles.module.scss"
import { currentDate } from '../../../helpers/getDates'
const InputDateComponent = ({ reservations,selectedPickupPoints, direction, appData, index, splitedDate, onChangeSetDateTimeHandler }) => {
    return (
        <div className={styles.main_search_wrapper}>
            <div className={styles.icon_wrapper}>
                <i className="fa-solid fa-calendar"></i>
            </div>
            <div className={`${styles.book_input_date} ${styles.search_menu}`}>
                <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]}</p>
                <div className={`${styles.date_div} ${direction === 'rtl' && styles.date_div_rtl}`}>
                    <input aria-label="date" type="date" name="pickup-date" className={direction === "rtl" ? styles.rtl : ""} value={splitedDate} min={index === 0 ? currentDate() : reservations[0].transferDetails.transferDateTimeString.split(" ")[0]} onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "date", journeyType: index })} />
                </div>
            </div>
        </div>
    )
}

export default InputDateComponent