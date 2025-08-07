import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DateInput from '../../components/elements/DateInput';
import { splitDateTimeStringIntoDate } from '../../helpers/splitHelper';
import { currentDate } from '../../helpers/getDates';
import { hours, minutes } from '../../constants/minutesHours';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import Button from '../../components/elements/Button/Button';
import styles from "./singletour.module.scss"
import { useRouter } from 'next/router';

/**
 * SeatlistAdults Component
 *
 * This component is responsible for:
 * - Displaying a seat selection interface for tours.
 * - Allowing users to increment/decrement the number of seats.
 * - Providing a date and time selection interface for the tour.
 * - Displaying the total price based on selected seats.
 * - Handling the booking process.
 *
 * Props:
 * @param {Object} props - Component properties.
 * @param {Object} props.appData - Contains UI translations and other app-wide data.
 * @param {string} props.transferDate - The selected transfer date.
 * @param {string} props.direction - The text direction (LTR or RTL).
 *
 * State:
 * - Uses Redux store values for `seatLists` and `seatListPrice`.
 *
 * Redux Actions:
 * - `SET_TOUR_SEATLISTS` - Updates the seat count for the tour.
 * - `SET_JOURNEY_DATETIME` - Sets the selected journey date and time.
 *
 * Functions:
 * - `handleDecrement(idx, incordec)` - Decreases the seat count.
 * - `handleIncrement(idx, incordec)` - Increases the seat count.
 * - `handleBookNow()` - Handles the booking process (currently commented out).
 * - `onChangeSetDateTimeHandler({ value, hourOrMinute })` - Updates selected date/time.
 *
 * Features:
 * - Displays seat selection UI with a plus/minus button.
 * - Provides a date picker for selecting the tour date.
 * - Displays a dropdown for selecting the time (hours/minutes).
 * - Shows the total price dynamically based on seat selection.
 * - Includes a "Book Now" button to proceed with the booking.
 */
const SeatlistAdults = (props) => {

    let { tourDetails, language } = props
    let { appData, transferDate, direction } = props
    const dispatch = useDispatch()
    const router = useRouter()
    // Redux Store Selectors
    const tourActions = useSelector(state => (state.tourActions));
    const { seatLists, seatListPrice, isPound } = tourActions;

    /** Seat Selection Handlers **/
    const handleDecrement = (idx, incordec) => dispatch({ type: 'SET_TOUR_SEATLISTS', data: { idx, incordec } })
    const handleIncrement = (idx, incordec) => dispatch({ type: 'SET_TOUR_SEATLISTS', data: { idx, incordec } })

    /** Booking Process **/
    const handleBookNow = () => {

        if (+seatListPrice > 0) {
            dispatch({ type: "SET_TOUR_QUOTATION", data: { selectedTour: tourDetails } })
            router.push(`${language === 'en' ? "/tour_customer_details" : `${language}/tour_customer_details`}`)
        } else {
            alert('Please select adults')
        }
    }
    /** Handles date/time changes **/
    const onChangeSetDateTimeHandler = ({ value, hourOrMinute }) => {
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType: 0, hourOrMinute, value } });
    };


    return (
        <div className={styles.form_div}>
            <div className={styles.form_div_wrapper}>
                <div className={styles.adults_selection_div_columns}>
                    {seatLists?.map((item, index) => {
                        return <div key={index} className={styles.adults_selection_div_column}>
                            <p className={styles.name}>
                                {appData?.words[item.strName]}
                                <span>{isPound ? "£" : "Є"} {item.price}</span>
                            </p>
                            <p className={styles.desc}>  {item.description}</p>

                            <div className={styles.adults_selection_div_column_numbers_div} direction={String(direction === 'rtl')}>
                                <div className={styles.adults_selection_div_column_numbers_div_left}>
                                    <p className={`${styles.left_arrow}`} onClick={() => handleDecrement(index, "dec")}>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </p>
                                    <p className={styles.number}>  {item.minNum}  </p>
                                    <p className={`${styles.right_arrow} `} onClick={() => handleIncrement(index, "inc")}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className={styles.arrivaldate_div}>
                    <DateInput
                        form_control_input_div_style={{ width: "100%", maxWidth: "100%" }}
                        showIcon={true}
                        headingStyle={{ fontSize: "15px", }}
                        value={splitDateTimeStringIntoDate(transferDate)[0]}
                        min={currentDate()}
                        title={appData?.words["strTourDate"]}
                        onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "date", })}
                    />
                </div>
                <div className={styles.time}>
                    <div className={` ${styles.hours_minutes} `}>
                        <p className={direction}>{appData?.words["sePickUpTime"]}</p>
                        <div className={`${styles.select_time_div} ${direction}`}>
                            {Array.from(new Array(2)).map((_, i) => {
                                return (
                                    <div key={i} className={styles.booking_form_hour_minute_wrapper}>
                                        <label htmlFor={i}></label>
                                        <select
                                            aria-label={i}
                                            defaultValue={i === 0 ? transferDate?.split(" ")[1]?.split(":")[0] : transferDate?.split(" ")[1]?.split(":")[1]}
                                            onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: i === 0 ? "hour" : "minute", })}
                                        >
                                            {/* //if index==0 thenhours will show up if not then minutes show up */}
                                            {i === 0
                                                ? hours.map((hour) => (<option key={hour.id} id={hour.id + 50} value={hour.value}> {hour.value} </option>))
                                                : minutes.map((minute) => (<option key={minute.id} id={minute.id} value={minute.value}  > {minute.value} </option>))}
                                        </select>
                                    </div>)
                            })}
                        </div>
                    </div>
                    <div className={styles.price}> {appData?.words["strTotalPrice"]}: {isPound ? "£" : "Є"}{seatListPrice} </div>

                </div>
            </div>
            <div className={styles.booknow_div}>
                <Button type={BUTTON_TYPES.PRIMARY} onBtnClick={handleBookNow} style={{ padding: '8px 24px' }} btnText={appData?.words["strBookNow"]} />
            </div>
        </div>

    )
}

export default SeatlistAdults
