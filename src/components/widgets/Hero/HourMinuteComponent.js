import React from 'react'
import styles from "./styles.module.scss"
import { hours, minutes } from '../../../constants/minutesHours'

/**
 * Renders a time selection component for hour and minute input
 * 
 * @param {Object} props - Component properties
 * @param {Function} props.onChangeSetDateTimeHandler - Callback function to handle time selection changes
 * @param {Array} props.selectedPickupPoints - Array of pickup points
 * @param {string} props.direction - Text direction (e.g., 'ltr' or 'rtl')
 * @param {Object} props.appData - Application data containing localized text
 * @param {number} props.index - Journey type index
 * @returns {JSX.Element} A time selection dropdown component
 * param {Object} transferDateTimeString - Date and time string for transfer
 */
const HourMinuteComponent = ({ onChangeSetDateTimeHandler, selectedPickupPoints, direction, appData, index, splitedHour, splitedMinute, transferDateTimeString }) => {
    const hour = String(splitedHour).padStart(2, "0");
    const minute = String(splitedMinute).padStart(2, "0");
    return (
        <div className={` ${styles.search_menu} ${styles.hours_minutes} ${styles.fourth_column}`} key={transferDateTimeString}>
            <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]}</p>
            <div className={`${styles.select_time_div} ${direction}`}>
                {/* Saat */}
                <div className={styles.booking_form_hour_minute_wrapper}>
                    <label htmlFor="hour"></label>
                    <select
                        aria-label="hour"
                        value={hour} // <--- controlled
                        onChange={(e) =>
                            onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "hour", journeyType: index })
                        }
                    >
                        {hours.map((h) => (
                            <option key={h.id} value={h.value}>{h.value}</option> // value "00".."23"
                        ))}
                    </select>
                </div>

                {/* Dakika */}
                <div className={styles.booking_form_hour_minute_wrapper}>
                    <label htmlFor="minute"></label>
                    <select
                        aria-label="minute"
                        value={minute} // <--- controlled
                        onChange={(e) =>
                            onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "minute", journeyType: index })
                        }
                    >
                        {minutes.map((m) => (
                            <option key={m.id} value={m.value}>{m.value}</option> // value "00","05",...
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default HourMinuteComponent