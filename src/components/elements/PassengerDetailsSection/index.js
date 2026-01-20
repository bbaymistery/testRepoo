import { useDispatch } from "react-redux";
import styles from "./passengerDetails.module.scss";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import PassengerWhatsapCheckBox from "../PassengerWhatsapCheckBox/PassengerWhatsapCheckBoxTour";
import PhoneInput from 'react-phone-input-2';
import InputField from "../InputField";
import SelectField from "../SelectField";

const PassengerDetailsSection = (props) => {
    let { passengerDetailsStatus, index, appData, reservationError, firstname, email, passengersNumber, phone, quotation, direction, } = props
    const dispatch = useDispatch()
    //we use it to render paxs inside select component
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    //for passengers information
    const onPassengerDetailsHandler = (e, index) => {

        let { name, value } = e.target;
        //hinder user  to add some Characters
        if (ifHasUnwantedCharacters(value)) return

        if (['firstname', 'email',].includes(name))
            dispatch({ type: 'SET_PASSEGER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })

        if (['passengersNumber', "specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })

    }

    const handleOnChangeNumberInput = (value, _country, index, name) => {
        dispatch({ type: 'SET_PASSEGER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })
    };

    return (index === 0 || (!passengerDetailsStatus && index === 1) ?
        <div className={styles["section-wrapper"]}>
            {index === 0 ? <h2 className={styles["section-title"]}> {appData?.words['strPassengerDetails']}</h2> 
            : <h2  className={styles["section-title"]}>{appData?.words["strReturnJourneyPassengerDetails"]}
            </h2>}

            <div className={styles["form-grid"]}>

                <InputField
                    name="firstname"
                    label={appData?.words["strFullName"]}
                    placeholder={appData?.words["strFullName"]}
                    value={firstname}
                    onChange={e => onPassengerDetailsHandler(e, index)}
                    errorMessage={reservationError?.passengerDetails?.firstname ? appData?.words["strRequired"] : null}
                />

                <InputField
                    name="email"
                    label={appData?.words["strEmail"]}
                    placeholder={appData?.words["strEmail"]}
                    type="email"
                    value={email}
                    onChange={e => onPassengerDetailsHandler(e, index)}
                    errorMessage={reservationError?.passengerDetails?.email ? appData?.words["strRequired"] : null} // Örnek hata mesajı
                    isRequired={true}
                />
                <div>
                    <label style={{lineHeight: "normal",marginBottom:'4px'}} className={styles["label"]}>{appData.words["appContactUsFormPhone"]}</label>
                    <div className={styles["flex-input"]}>
                        <PhoneInput
                            className={styles.phone_input}
                            value={phone}
                            onChange={(value, selectedCountry) => handleOnChangeNumberInput(value, selectedCountry, index, "phone")}
                            country={"gb"}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                style: { border: reservationError?.passengerDetails?.phone ? '1px solid red' : ' 1px solid #ced4da' }
                            }}
                        />
                    </div>
                </div>


                <SelectField
                    name="passengersNumber"
                    label={appData?.words["strNoofPassengers"]}
                    value={passengersNumber}
                    data={carObject[quotation.carId]?.pax}
                    dataIsNumber={true}
                    onChange={e => onPassengerDetailsHandler(e, index)}
                />

            </div>
            {<PassengerWhatsapCheckBox direction={direction} text={appData?.words["textWhatsappNotificationSubscriptionDescriptionAtWebsite"]} />}

        </div> : <></>
    );
};

export default PassengerDetailsSection;
