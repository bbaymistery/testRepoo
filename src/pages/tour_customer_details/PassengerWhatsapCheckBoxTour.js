import { useDispatch, useSelector } from "react-redux";
import styles from "./formCheckBoxTour.module.scss";
import { useEffect, useState } from "react";
const PassengerWhatsapCheckBoxTour = ({ text, direction }) => {
    const dispatch = useDispatch()
    let state = useSelector((state) => state.pickUpDropOffActions)
    const [pasStatus, setPasStatus] = useState(2)
    const onchangeHandler = (e) => {
        dispatch({ type: "SET_WHATSAP_PASSENGER_NOTIFICATION", data: { status: !e.currentTarget.previousSibling.checked } })
    }

    useEffect(() => {
        setPasStatus(state.reservations[0]?.passengerDetails?.getWhatsappNotifiations === 1 ? true : false)

    }, [state.reservations[0]?.passengerDetails?.getWhatsappNotifiations])


    return (
        <div className={styles.form_checkbox} direction={String(direction === 'rtl')}>
            <input className={styles.checkbox} type="checkbox" id="psg-checkbox" defaultChecked={pasStatus} />
            <label htmlFor="psg-checkbox" className={styles.primary_text} onClick={(e) => onchangeHandler(e)}>
                {text}
            </label>
        </div>
    );
};

export default PassengerWhatsapCheckBoxTour;
