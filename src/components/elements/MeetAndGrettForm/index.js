import React, { useState } from 'react'
import styles from "./styles.module.scss"
import Steps from '../Steps';
import TextInput from '../TextInput';
import { ifHasUnwantedCharacters } from '../../../helpers/ifHasUnwantedCharacters';
import { useDispatch } from 'react-redux';
//FOR STEP _1
const passengerDetailsError = (passengersForm) => {
    const errors = [];
    for (const passenger of passengersForm) {
        const error = { statusCode: 200, errorMessage: "" };
        if (passenger.firstname === "") {
            error.statusCode = 400;
            error.errorMessage = "required";
        } else if (passenger.lastname === "") {
            error.statusCode = 400;
            error.errorMessage = "required";
        }
        errors.push(error);
    }
    return errors;
};
// 2023-07-29=> to => Sat, Jul 29, 2023
function formatDate(dateString) {
    var date = new Date(dateString);
    var options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}
const steps = ['Passengers', 'Flight', 'Payment', 'Confirmation'];
const MeetAndGrettForm = (props) => {
    let { formRef, passengersForm, inputDateValue, seatLists, terminal, price, appData, selectedButtonLabel } = props
    const dispatch = useDispatch()
    const [activeStep, setActiveStep] = useState(0)
    const [errorHolder, setErrorHolder] = useState([])

    const handleFormClose = () => {
        dispatch({ type: 'SET_FORM_STATUS', data: { status: false } })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //for passengers information
    const onchangeHandler = (e, index) => {
        const { name, value } = e.target;
        if (ifHasUnwantedCharacters(value)) return
        dispatch({ type: "SET_PASSENGERS_FROM", data: { name, value, index } })
    };
    const gotoNextPage = () => {
        const errors = passengerDetailsError(passengersForm);
        setErrorHolder(errors)
        for (const error of errors) {
            if (error.statusCode === 400) return;
        }
        if (activeStep < 3) setActiveStep((activeStep) => activeStep + 1)
    }


    const gotoPreviousPage = () => {
        if (activeStep === 0) return
        setActiveStep((activeStep) => activeStep - 1)

    }

    return (
        <div ref={formRef} className={styles.form_to_fill}>
            <div className={styles.form_to_fill_content}>
                <div className={styles.left}>
                    <Steps steps={steps} activeStep={activeStep} />
                    {activeStep === 0 ?
                        <div className={styles.passengers}>
                            <p className={styles.passengers_title}> Passengers </p>
                            {passengersForm.map((guest, idx) => {
                                let errors = errorHolder[idx]
                                return <div key={idx} className={styles.passengers_details_div}>
                                    <p>Passenger {idx + 1}</p>
                                    <div className={styles.passengers_details}>
                                        <div className={styles.input_div}>
                                            <TextInput label={"Firstname"} type="text" name="firstname" onChange={e => onchangeHandler(e, idx)} value={guest.firstname} errorMessage={errors?.errorMessage} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label="Lastname" type="text" name="lastname" onChange={e => onchangeHandler(e, idx)} value={guest.lastname} errorMessage={errors?.errorMessage} />
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        : <></>}


                    {activeStep === 1 ?
                        <div className={styles.flight_details}>
                            <p className={styles.flight_details_title}> Flight Details</p>
                            <div className={styles.format_date}> {`${selectedButtonLabel} Flight ${formatDate(inputDateValue)}`} </div>

                        </div>
                        : <></>}

                    <div className={`${styles.back_next_buttons} ${activeStep !== 0 ? styles.between : styles.end}`} >
                        {activeStep !== 0 ? <button className='btn' onClick={gotoPreviousPage}>{appData?.words["strBack"]}</button> : <></>}
                        <button className='btn' onClick={gotoNextPage}>{appData?.words["strNext"]}  </button>
                    </div>

                </div>

                <div className={styles.right}>
                    <div className={styles.right_content}>
                        <p>Order Summary</p>
                        <div className={styles.border}> </div>
                        <li className={styles.arrival}>
                            <span>{selectedButtonLabel} : </span> Meet & Greet
                        </li>
                        <li className={styles.terminal}>
                            {terminal}
                        </li>
                        <li className={styles.date}>
                            {inputDateValue}
                        </li>
                        <li className={styles.adults}>
                            {seatLists[0].minNum} Adults, {seatLists[1].minNum} Children, {seatLists[2].minNum} Infants
                        </li>

                        <div className={styles.border}> </div>
                        <div className={styles.total}>
                            <span>Total</span> <span>£{price}</span>
                        </div>
                    </div>

                </div>
                <p onClick={handleFormClose} className={styles.close_icon}>
                    <i title="Close form " className="fa-sharp fa-solid fa-xmark"></i>
                </p>
            </div>
        </div>
    )
}

export default MeetAndGrettForm