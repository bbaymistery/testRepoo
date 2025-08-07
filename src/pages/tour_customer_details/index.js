import { createWrapper } from 'next-redux-wrapper';
import React, { useState } from 'react'
import store from '../../store/store';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import GlobalLayout from '../../components/layouts/GlobalLayout';
import styles from "./styles.module.scss"
import TextInput from '../../components/elements/TextInput';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import Textarea from '../../components/elements/Textarea';
import SelectedPointsOnHomePage from '../../components/elements/SelectedPointsOnHomePage';
import OutsideClickAlert from '../../components/elements/OutsideClickAlert';
let description = ""
let title = ""
let keywords = ""
import HandleSearchResults from '../../components/elements/HandleSearchResults';
import SelectedPointsOnTransferDetails from '../../components/elements/SelectedPointsOnTransferDetails'
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import { generalAllTranslations } from '../../constants/generalTranslataions';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import TourJourneySummaryPanel from '../../components/elements/TourJourneySummaryPanel';
import FlightWaitingTimeContent from '../../components/elements/FlightWaitingTimeContent';
import InfoModal from '../../components/elements/InfoModal/InfoModal';
import WaveLoading from '../../components/elements/LoadingWave';
const collectPoints = (params = {}, callback = () => { }) => {

    let { value = '', reducerSessionToken = "", language = "", env } = params;
    const url = `${env.apiDomain}/api/v1/suggestions`;
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({ value, "session-token": reducerSessionToken, language: "en", "countryId": 203 })
    const config = { method, headers, body }

    fetch(url, config)
        .then((res) => res.json())
        .then((res) => { callback(res) })
        .catch((error) => {
            let message = "ISTANBUL TRANSFER   Tour customer details component _collectPoints()  function catch blog "
            window.handelErrorLogs(error, message, { config })
        });
}
const collectPointsAsync = params => new Promise((resolve, reject) => collectPoints(params, log => resolve(log)))
const TourCustomerDetails = (props) => {
    let { env } = props

    const router = useRouter()
    const dispatch = useDispatch()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { direction, language, passengerDetailsStatus, sessionToken: reducerSessionToken, modalInfo } } = state
    let { quotation, passengerDetails: { firstname, phone, email }, transferDetails: { transferDateTimeString, specialRequests, passengersNumber, }, selectedPickupPoints, selectedDropoffPoints, } = reservations[0]


    const { appData } = useSelector(state => state.initialReducer)
    const tourActionState = useSelector(state => state.tourActions)
    let { selectedTour, } = tourActionState
    //we use it to render paxs inside select component


    // const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
    const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
    const [pickupPointAddress, setPickupPointAddress] = useState("")
    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
        'pickup-search-value-0': '',
        'dropoff-search-value-0': '',
        'collecting-pickup-points-0': [],
        'collecting-dropoff-points-0': [],
        //focus
        'pickup-search-focus-0': false,//it is for modal
        'dropoff-search-focus-0': false,//it is for modal

        'pickup-search-loading-0': false,
        'dropoff-search-loading-0': false,

        //quotation loading
        "quotation-loading": false,
    })
    let { errorHolder } = internalState;


    const handleOnChangeNumberInput = (value, _country, name) => {
        dispatch({ type: 'SET_PASSEGER_DETAILS', data: { name, value, index: 0, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }


    const onchangeHandler = (e) => {
        let { name, value } = e.target;
        if (ifHasUnwantedCharacters(value)) return
        if (['firstname', 'email',].includes(name))
            dispatch({ type: 'SET_PASSEGER_DETAILS', data: { name, value, index: 0, updateBothJourneyCheckBox: passengerDetailsStatus } })
        if (['passengersNumber', "specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index: 0, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }

    const checkValidation = (e) => {
        e.preventDefault();

        const errors = [];

        const { firstname, phone, email } = reservations[0].passengerDetails || {}; // index: 0 olan yolcu bilgisi

        if (!firstname || firstname.trim().length === 0) {
            errors.push({ field: 'firstname', message: 'First name is required' });
        }

        if (!phone || phone.trim().length < 6) {
            errors.push({ field: 'phone', message: 'Valid phone number is required' });
        }

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors.push({ field: 'email', message: 'Valid email is required' });
        }

        if (errors.length > 0) {
            setInternalState({ errorHolder: { status: 400, errors } });
            return;
        }

        // Tüm validasyon geçtiyse
        setInternalState({ errorHolder: { status: 200, errors: [] } });

        // Tur paketleri için dropoff = pickup olabilir gibi işlemler gerekiyorsa burada yapılabilir

        router.push(`${language === 'en' ? "/payment-details" : `/${language}/payment-details`}`);
    };



    const goBack = (e) => {
        e.preventDefault();
        router.back();
    };

    const reservationError = (errorHolder.status === 400 && Array.isArray(errorHolder.errors))
        ? Object.fromEntries(errorHolder.errors.map(err => [err.field, err.message]))
        : {};


    return (
        <GlobalLayout keywords={keywords} title={title} description={description} >
            <div className={`${styles.tr_details} page`}>
                <div className={`${styles.tr_details_section} page_section`}>
                    <div className={`${styles.tr_details_section_container} page_section_container`}>
                        <div className={styles.transferdetails_subcontainer} id="main_container">
                            <div className={`${styles.transferdetails_subcontainer_content} ${direction}`}>
                                <div className={`${styles.transferdetails_subcontainer_content_points_and_passengerdetails}`}>
                                    <div className={styles.passenger_details_div}>
                                        <h2> {generalAllTranslations.strLeadPassengerName[language]}</h2>
                                        <div className={styles.passenger_details}>
                                            <div className={styles.input_div}>
                                                <TextInput label={appData?.words["strFullName"]} type="text" name="firstname" onChange={e => onchangeHandler(e)} value={firstname} errorMessage={reservationError.firstname} />
                                            </div>
                                            <div className={styles.input_div}>
                                                <TextInput label={appData?.words["strEmail"]} type="text" name="email" onChange={e => onchangeHandler(e)} value={email} errorMessage={reservationError.email} />
                                            </div>
                                            {/* <div className={styles.input_div}>
                                                <Select label={appData?.words["strNoofPassengers"]} name="passengersNumber" onChange={e => onchangeHandler(e)} value={passengersNumber} data={carObject[quotation.carId]?.pax} />
                                            </div> */}
                                            <Textarea inputStyle={{ height: "50px" }} label={appData?.words["strSpecialRequestsTitle"]} name="specialRequests" value={specialRequests} onChange={(e) => onchangeHandler(e)} />

                                            <div className={styles.input_div}>
                                                <PhoneInput
                                                    className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                    value={phone}
                                                    onChange={(value, selectedCountry) => handleOnChangeNumberInput(value, selectedCountry, "phone")}
                                                    country={"gb"}
                                                    inputProps={{
                                                        name: 'phone',
                                                        required: true,
                                                        style: { border: reservationError?.phone ? '1px solid red' : ' 1px solid #ced4da' }
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className={` ${direction === 'rtl' ? styles.directionbuttons : styles.buttons} `} >
                                            <div className={styles.left}>
                                                <Button
                                                    type={BUTTON_TYPES.PRIMARY_OUTLINE}
                                                    onBtnClick={goBack}
                                                    style={{ padding: "12px 22px", }}
                                                    btnText={appData?.words["strGoBack"]}
                                                />

                                                <Button
                                                    type={BUTTON_TYPES.PRIMARY_OUTLINE}
                                                    onBtnClick={checkValidation}
                                                    style={{ padding: "12px 22px", }}
                                                    btnText={appData?.words["strNext"]}
                                                />
                                            </div>
                                            <div className={styles.right}></div>
                                        </div>
                                    </div>
                                </div>
                                {<TourJourneySummaryPanel language={language} pickupPointAddress={pickupPointAddress} splitedHour={splitedHour} splitedMinute={splitedMinute} splitedDate={splitedDate} quotation={quotation} selectedTour={selectedTour} />}
                                {modalInfo ? <InfoModal content={<FlightWaitingTimeContent />} /> : <React.Fragment></React.Fragment>}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/tour_customer_details' : `/${lang}/tour_customer_details`
        if (req.url === langUrl) {
            return {
                redirect: {
                    destination: lang === 'en' ? "/" : `/${lang}`,
                    permanent: false
                }
            }
        }
    }
    return {
        props: {
            data: ""
        }
    }
});
export default TourCustomerDetails