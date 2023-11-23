import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import Steps from '../Steps';
import TextInput from '../TextInput';
import { ifHasUnwantedCharacters } from '../../../helpers/ifHasUnwantedCharacters';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from '../Dropdown/dropdown';
import { currentDate } from '../../../helpers/getDates';
import DateInput from '../DateInput';
import Select from '../Select';
import { hours, minutes } from '../../../constants/minutesHours';
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
//FOR STEP _2
const flightDetailsError = (flightDetails) => {
    const errors = {};

    if (flightDetails.airline === "-- Select Airline --") {
        errors.airline = { statusCode: 400, errorMessage: "required", };
    }

    if (flightDetails.flightNumber.trim() === "") {
        errors.flightNumber = { statusCode: 400, errorMessage: "required", };
    }

    if (flightDetails.flightClass === "-- Select Class --") {
        errors.flightClass = { statusCode: 400, errorMessage: "required", };
    }

    if (flightDetails.noOfLuggageBags.trim() === "") {
        errors.noOfLuggageBags = { statusCode: 400, errorMessage: "required", };
    }

    return errors;
};

const bookersDetailsError = (bookerDetails) => {
    const errors = {};

    if (bookerDetails.firstname.trim() === "") {
        errors.firstname = { statusCode: 400, errorMessage: "required", };
    }
    if (bookerDetails.lastname.trim() === "") {
        errors.lastname = { statusCode: 400, errorMessage: "required", };
    }
    if (bookerDetails.mobileNumber.trim() === "") {
        errors.mobileNumber = { statusCode: 400, errorMessage: "required", };
    }
    if (bookerDetails.email.trim() === "") {
        errors.email = { statusCode: 400, errorMessage: "required", };
    }

    return errors;
}
// 2023-07-29=> to => Sat, Jul 29, 2023
function formatDate(dateString) {
    var date = new Date(dateString);
    var options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}
const steps = ['Passengers', 'Flight', 'Payment', 'Confirmation'];
const dropdownAirlineLabels = [
    { id: "-- Select Airline --", value: "-- Select Airline --", },
    { id: "1", value: "1", },
    { id: "3", value: "3", },
    { id: "4", value: "4", },
    { id: "5", value: "5", }
];
const dropdownFlightClass = [
    { id: "-- Select Airline --", value: "-- Select Airline --", },
    { id: "Economy", value: "Economy", },
    { id: "Business", value: "Business", },
    { id: "First", value: "First", },
];

const MeetAndGrettForm = (props) => {
    let { formRef, passengersForm, inputDateValue, seatLists, terminal, totalPrice, appData, selectedButtonLabel, direction, buggerLists, vat, buggerListTotalPrice } = props
    const dispatch = useDispatch()
    const meetAndGreetState = useSelector(state => state.meetAndGreetActions)
    let { flightDetails, bookersDetails } = meetAndGreetState
    let { airline, flightNumber, flightClass, noOfLuggageBags } = flightDetails
    let { firstname, lastname, email, mobileNumber } = bookersDetails

    const [activeStep, setActiveStep] = useState(0)
    const [errorHolderPassengerDetails, setErrorHolderPassengerDetails] = useState([])//activeStep0
    const [errorHolderFlightDetails, setErrorHolderFlightDetails] = useState([]);//activeStep1
    const [errorHolderBookerDetails, setErrorHolderBookersDetails] = useState([]);//activeStep1

    const handleFormClose = () => {
        dispatch({ type: 'SET_FORM_STATUS', data: { status: false } })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //for passengers information
    const onchangePassengerHandler = (e, index) => {
        const { name, value } = e.target;
        if (ifHasUnwantedCharacters(value)) return
        dispatch({ type: "SET_PASSENGERS_FROM", data: { name, value, index } })
    };
    const onchangeNumberLuggageHandler = (e) => {
        const { name, value } = e.target;
        if (ifHasUnwantedCharacters(value)) return
        dispatch({ type: "SET_FLIGHT_NUMBER_OR_LUGGAGE", data: { name, value, } })
    }
    const gotoNextPage = () => {
        let errors = {};

        if (activeStep === 0) {
            errors = passengerDetailsError(passengersForm);
            setErrorHolderPassengerDetails(errors);

        } else if (activeStep === 1) {
            errors = flightDetailsError(meetAndGreetState.flightDetails);
            setErrorHolderFlightDetails(errors);
        }
        else if (activeStep === 2) {
            errors = bookersDetailsError(meetAndGreetState.bookersDetails);
            setErrorHolderBookersDetails(errors);
        }

        // Check if there are any errors, if yes, return and prevent moving to the next step
        const errorKeys = Object.keys(errors);

        for (const key of errorKeys) {
            if (errors[key].statusCode === 400) return;
        }

        // If no errors, move to the next step
        if (activeStep < 3) {
            setActiveStep((activeStep) => activeStep + 1);
        }
    };



    const gotoPreviousPage = () => {
        if (activeStep === 0) return
        setActiveStep((activeStep) => activeStep - 1)

    }

    const handleDecrementBugger = (idx, incordec) => dispatch({ type: 'SET_BUGGER_PORTER', data: { idx, incordec } })
    const handleIncrementBugger = (idx, incordec) => dispatch({ type: 'SET_BUGGER_PORTER', data: { idx, incordec } })
    const onchangeAirlineHandler = e => dispatch({ type: "SET_AIRLINE", data: { newAirline: e.target.value } })
    const onchangeFlightClassHandler = e => dispatch({ type: "SET_FLIGHT_CLASS", data: { newFlightClass: e.target.value } })
    const onChangeSetDateTimeHandler = (params = {}) => dispatch({ type: 'SET_FLIGHT_TIME', data: { ...params } })
    const onchangeBookerDetailsHandler = (params = {}) => dispatch({ type: 'SET_BOOKER_DETAILS', data: { ...params } })


    useEffect(() => {
        // Calculate the height of the content div when passenger form is changing and activestep is changing
        const formContent = document.querySelector(`.${styles.form_to_fill_content}`);
        if (formContent) {
            const contentHeight = formContent.offsetHeight;
            formRef.current.style.height = `${contentHeight}px`;
        }
    }, [activeStep, passengersForm,]);
    return (
        <div ref={formRef} className={styles.form_to_fill} >
            <div className={styles.form_to_fill_content}>
                <div className={styles.left}>
                    <Steps steps={steps} activeStep={activeStep} />
                    {/* //!step 0   Initial step */}
                    {activeStep === 0 ?
                        <div className={styles.passengers}>
                            <p className={styles.passengers_title}> Passengers </p>
                            {passengersForm.map((guest, idx) => {
                                let errors = errorHolderPassengerDetails[idx]
                                return <div key={idx} className={styles.passengers_details_div}>
                                    <p>Passenger {idx + 1}</p>
                                    <div className={styles.passengers_details}>
                                        <div className={styles.input_div}>
                                            <TextInput label={"Firstname"} type="text" name="firstname" onChange={e => onchangePassengerHandler(e, idx)} value={guest.firstname} errorMessage={errors?.errorMessage} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label="Lastname" type="text" name="lastname" onChange={e => onchangePassengerHandler(e, idx)} value={guest.lastname} errorMessage={errors?.errorMessage} />
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        : <></>}
                    {/* //!step 1   Second step */}
                    {activeStep === 1 ?
                        <div className={styles.flight_details}>
                            <p className={styles.flight_details_title}> Flight Details</p>
                            <p className={styles.format_date}> {`${selectedButtonLabel} Flight ${formatDate(inputDateValue)}`} </p>
                            <div className={styles.flight_details_inputs_div}>
                                <div className={styles.dropdown_div}>
                                    <Select errorMessage={errorHolderFlightDetails?.airline?.errorMessage} label="Airline" name="Airline" postCodeSelectOption={true} onChange={onchangeAirlineHandler} value={airline} data={dropdownAirlineLabels} />
                                </div>
                                <div className={styles.input_div}>
                                    <TextInput errorMessage={errorHolderFlightDetails.flightNumber?.errorMessage} label={"Flight Nummber"} type="text" name="flightNumber" onChange={e => onchangeNumberLuggageHandler(e)} value={flightNumber} />
                                </div>
                                <div className={styles.input_div}>
                                    <Select errorMessage={errorHolderFlightDetails.flightClass?.errorMessage} label="Flight Class" name="Flight Class" postCodeSelectOption={true} onChange={onchangeFlightClassHandler} value={flightClass} data={dropdownFlightClass} />
                                </div>

                                <div className={` ${styles.search_menu} ${styles.hours_minutes} `}>
                                    <p className={direction}>{"Flight Time"}</p>
                                    <div className={`${styles.select_time_div} ${direction}`}>
                                        {Array.from(new Array(2)).map((_arr, i) => {
                                            return (
                                                <div key={i} className={styles.booking_form_hour_minute_wrapper}>
                                                    <select onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, index: i })}  >
                                                        {/* //if index==0 thenhours will show up if not then minutes show up */}
                                                        {i === 0
                                                            ? hours.map((hour) => (<option key={hour.id} id={hour.id} value={hour.value}> {hour.value} </option>))
                                                            : minutes.map((minute) => (<option key={minute.id} id={minute.id} value={minute.value}  > {minute.value} </option>))}
                                                    </select>
                                                </div>)
                                        })}
                                    </div>
                                </div>
                                <div className={styles.input_div}>
                                    <TextInput errorMessage={errorHolderFlightDetails.noOfLuggageBags?.errorMessage} label={"No of Luggage Bags"} type="number" name="noOfLuggageBags" onChange={e => onchangeNumberLuggageHandler(e)} value={noOfLuggageBags} />
                                </div>
                            </div>
                            <div className={styles.flight_extras_div}>

                                <p className={styles.flight_extras_div_title}> Flight Extras </p>

                                <div className={styles.bugger_selection_div}>
                                    {buggerLists.map((item, index) => {
                                        return <div key={index} className={styles.bugger_selection_div_column}>
                                            <p className={styles.name}> {item.name}</p>
                                            <p className={styles.desc}>  {item.desc}</p>
                                            <div className={styles.bugger_selection_div_column_numbers_div} direction={String(direction === 'rtl')}>
                                                <p className={`${styles.left_arrow} ${item.minNum === 0 ? styles.disabled : ""}`} onClick={() => handleDecrementBugger(index, "dec")}>
                                                    <i className="fa-solid fa-chevron-left"></i>
                                                </p>
                                                <p className={styles.number}>  {item.minNum}  </p>
                                                <p className={`${styles.right_arrow} `} onClick={() => handleIncrementBugger(index, "inc")}>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>

                        </div>
                        : <></>}

                    {/* //!step 2   Third step */}
                    {activeStep === 2 ?
                        <div className={styles.bookers}>
                            <p className={styles.bookers_title}> Payment </p>
                            <div className={styles.bookers_details_div}>
                                <p>Booker's Details</p>
                                <div className={styles.bookers_details}>
                                    <div className={styles.input_div}>
                                        <TextInput errorMessage={errorHolderBookerDetails?.firstname?.errorMessage} label="First Name" type="text" name="firstname" onChange={(e) => onchangeBookerDetailsHandler({ value: e.target.value, name: e.target.name })} value={firstname} />
                                    </div>
                                    <div className={styles.input_div}>
                                        <TextInput errorMessage={errorHolderBookerDetails?.lastname?.errorMessage} label="Last Name" type="text" name="lastname" onChange={(e) => onchangeBookerDetailsHandler({ value: e.target.value, name: e.target.name })} value={lastname} />
                                    </div>
                                    <div className={styles.input_div}>
                                        <TextInput errorMessage={errorHolderBookerDetails?.email?.errorMessage} label="E-Mail Address" type="text" name="email" onChange={(e) => onchangeBookerDetailsHandler({ value: e.target.value, name: e.target.name })} value={email} />
                                    </div>
                                    <div className={styles.input_div}>
                                        <TextInput errorMessage={errorHolderBookerDetails?.mobileNumber?.errorMessage} label="Mobile Number" type="text" name="mobileNumber" onChange={(e) => onchangeBookerDetailsHandler({ value: e.target.value, name: e.target.name })} value={mobileNumber} />
                                    </div>
                                </div>
                            </div>
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
                            {formatDate(inputDateValue)}
                        </li>
                        <li className={styles.adults}>
                            {seatLists[0].minNum} Adults, {seatLists[1].minNum} Children, {seatLists[2].minNum} Infants
                        </li>

                        <div className={styles.border}> </div>
                        <div className={styles.total}>
                            <p>
                                <span>Total exc. VAT </span> <span>£{totalPrice - vat}</span>
                            </p>

                            {buggerListTotalPrice > 0 ?
                                <p>
                                    <span>Extra(s) </span> <span>£{buggerListTotalPrice}</span>
                                </p>
                                : <></>}
                            <p>
                                <span>VAT</span> <span>£{vat}</span>
                            </p>
                            <p className={styles.total_price}>
                                <span>Total</span><span>£{totalPrice}</span>
                            </p>
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