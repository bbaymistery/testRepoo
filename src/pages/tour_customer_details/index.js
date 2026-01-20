import { createWrapper } from 'next-redux-wrapper';
import React, { useState } from 'react'
import store from '../../store/store';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import GlobalLayout from '../../components/layouts/GlobalLayout';
import styles from "./styles.module.scss"
import 'react-phone-input-2/lib/style.css'
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import TourJourneySummaryPanel from '../../components/elements/TourJourneySummaryPanel';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import SelectedPointsOnHomePage from '../../components/elements/SelectedPointsOnHomePage';
import OutsideClickAlert from '../../components/elements/OutsideClickAlert';
let description = ""
let title = ""
let keywords = ""
import Loading from '../../components/elements/Loading'
import HandleSearchResults from '../../components/elements/HandleSearchResults';
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import PassengerDetailsSection from '../../components/elements/PassengerDetailsSection';
import MobileTabs from '../../components/elements/MobileTabs/MobileTabs';
import { carAccordionImages } from '../../constants/carss';
import ProceedPayment from '../../components/elements/ProceedPayment';
import LastMinuteModal from '../../components/elements/LastMinuteModal';
import CapacityAlert from '../../components/elements/CapacityAlert';
import { useEffect } from 'react';
import JourneyDetails from '../../components/elements/JourneyDetails';
import InfoModal from '../../components/elements/InfoModal/InfoModal';
const collectPoints = (params = {}, callback = () => { }) => {

    let { value = '', reducerSessionToken = "", language = "", env } = params;
    const url = `${env.apiDomain}/api/v1/suggestions`;
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({ value, "session-token": reducerSessionToken, language: "en" })
    const config = { method, headers, body }

    fetch(url, config)
        .then((res) => res.json())
        .then((res) => { callback(res) })
        .catch((error) => {
            let message = "APL   Tour customer details component _collectPoints()  function catch blog "
            window.handelErrorLogs(error, message, { config })
        });
}
const collectPointsAsync = params => new Promise((resolve, reject) => collectPoints(params, log => resolve(log)))
const TourCustomerDetails = (props) => {
    let { env } = props

    const router = useRouter()
    const dispatch = useDispatch()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { direction, language, passengerDetailsStatus, sessionToken: reducerSessionToken, modalInfo, } } = state
    let { quotation, passengerDetails: { firstname, phone, email }, transferDetails: { transferDateTimeString, specialRequests, passengersNumber, }, selectedPickupPoints, selectedDropoffPoints, } = reservations[0]


    const { appData } = useSelector(state => state.initialReducer)
    const tourActionState = useSelector(state => state.tourActions)
    let { selectedTour, } = tourActionState
    //we use it to render paxs inside select component


    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    const [openModal, setOpenModal] = useState(false) //for lastminute component

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

    const [mobileTabs, setMobileTabs] = useState(
        reservations.map(() => 0) // 0 = Passenger, 1 = Summary
    );



    const onchangeHandler = (e) => {
        let { name, value } = e.target;
        if (ifHasUnwantedCharacters(value)) return
        if (['passengersNumber', "specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index: 0, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }


    const checkValidation = (e) => {

        let newReservations = reservations.map(reservation => {
            // Copy selectedPickupPoints to selectedDropoffPoints
            let updatedReservation = { ...reservation }; // Create a shallow copy to avoid mutating the original object
            updatedReservation.selectedDropoffPoints = [...reservation.selectedPickupPoints];
            return updatedReservation;
        });

        let errorHolder = reservationSchemeValidator({ reservations: newReservations, appData }, { checkTransferDetails: true });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) {
            //Copy selectedpickup points details to selected drop off points for tours exactly
            dispatch({ type: 'COPY_PICK_UP_DETAILS_FOR_TOURS_DROPOFF', data: { selectedPickupPoints } })
            router.push(`${language === 'en' ? "/payment-details" : `/${language}/payment-details`}`)
        }
    }
    const outsideClick = ({ destination, index }) => {
        //it means if we have seggested points then it will work otherwise it is nt
        if (!Array.isArray(internalState[`collecting-${destination}-points-${index}`]))
            setInternalState({ [`collecting-${destination}-points-${index}`]: [], [`${destination}-search-focus-${index}`]: false })

    }
    const setFocusToInput = (params = {}) => {
        let { e, destination, index } = params

        e.target.style.opacity = 0
        setInternalState({ [`${destination}-search-focus-${index}`]: window.innerWidth > 990 ? false : true })
        setTimeout(() => e.target.style.opacity = 1);
    }
    const inputOnChangeHandler = (params = {}) => {
        let { index, value, destination } = params
        let { passengerDetails: { token: passengerDetailsToken } } = reservations[0]

        //hinder user  to add some Characters
        if (ifHasUnwantedCharacters(value)) return

        setInternalState({ [`${destination}-search-value-${index}`]: value })

        if (value.length > 2) {
            (async () => {
                //set input loading to true
                setInternalState({ [`${destination}-search-loading-${index}`]: true })

                let log = await collectPointsAsync({ value, reducerSessionToken, language, env })
                let { status, result, "session-token": sessionToken = "", token } = log

                if (status == 200) {
                    setInternalState({ [`${destination}-search-loading-${index}`]: false })

                    //if we dont have passengerDetailsToken then save token on reservation objects;s passenger details
                    if (!passengerDetailsToken) dispatch({ type: 'SET_TOKEN_TO_PASSENGERDETAILS', data: { token } })

                    //check if session doesnt exist then  set session token to the reducer
                    if (!reducerSessionToken) dispatch({ type: 'SET_SESSION_TOKEN', data: { sessionToken } });

                    setInternalState({ [`collecting-${destination}-points-${index}`]: result })
                } else {
                    setInternalState({ [`collecting-${destination}-points-${index}`]: {} })
                    setInternalState({ [`${destination}-search-loading-${index}`]: false })
                }
            })()
        } else {
            //reset collecting points
            setInternalState({ [`collecting-${destination}-points-${index}`]: [] })
        }
    }
    const closeModal = (params = {}) => {
        let { index, destination } = params
        let inputField = document.getElementById("input_focused")
        inputField.style.opacity = 1
        setInternalState({ [`${destination}-search-focus-${index}`]: false, [`${destination}-search-value-${index}`]: "", [`collecting-${destination}-points-${index}`]: [] })
    }
    const goBack = (e) => {
        e.preventDefault();
        router.back();
    };


    const setToFalse = () => setOpenModal(false)

    const handleCloseLastMinuteModal = () => {
        if (openModal) {
            setOpenModal(false)
        }
    }

    // Function to handle tab click and set the active tab index
    const handleTabClick = (journeyIndex, tabIndex) => {
        setMobileTabs(prev => {
            const updated = [...prev];
            updated[journeyIndex] = tabIndex;
            return updated;
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.tr_details} page`}>

                <div className={`${styles.tr_details_section} page_section`}>
                    <div className={`${styles.tr_details_section_container} page_section_container`}>
                        {reservations.map((obj, index) => {
                            let reservationError = (errorHolder.status === 403 && Array.isArray(errorHolder.reservations)) ? errorHolder.reservations[index] : {};
                            let { transferDetails, passengerDetails, quotation, selectedPickupPoints, selectedDropoffPoints } = obj
                            let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                            let { phone, email, firstname } = passengerDetails
                            const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                            const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                            //passenger details errors
                            let isReturnJourney = index === 1;
                            //cartypes object for card item as {1:{image:'sds, name:Economy}}
                            const selectedCar = carObject[quotation.carId]
                            const gallery = carAccordionImages[selectedCar?.id] ?? [];
                            console.log(gallery);

                            return (
                                <div key={index}>
                                    <MobileTabs handleTabClick={handleTabClick} mobileTabs={mobileTabs} appData={appData} index={index} isReturnJourney={isReturnJourney} />
                                    <div className={styles.main_grid} key={index} style={{ marginTop: `${isReturnJourney ? "20px" : "0px"}` }} >
                                        <div className={`${styles.form_section} ${mobileTabs[index] === 0 ? styles.show_mobile : styles.hide_mobile}`}>
                                            <div className={styles.main_card}>

                                                <PassengerDetailsSection
                                                    passengerDetailsStatus={passengerDetailsStatus}
                                                    index={0}
                                                    appData={appData}
                                                    reservationError={reservationError}
                                                    email={email}
                                                    firstname={firstname}
                                                    phone={phone}
                                                    passengersNumber={passengersNumber}
                                                    quotation={quotation}
                                                    direction={direction}
                                                />
                                                {gallery.length === 2 && <CapacityAlert images={gallery} appData={appData} passengers={selectedCar.pax} suitcases={selectedCar.suitcases} />}

                                                <div className={`${styles.search_menu} ${styles.second_column}`}>

                                                    {!selectedPickupPoints?.length > 0 ? <p className={`${styles.point_title1} ${direction}`}>{`${appData?.words["strPickupAddress"]}:`}</p> : <React.Fragment></React.Fragment>}
                                                    {selectedPickupPoints?.length > 0 ? <p className={`${styles.point_title} ${direction}`} >{appData?.words["strPickupPoints"]}</p> : <React.Fragment></React.Fragment>}
                                                    {selectedPickupPoints?.length === 1 && <SelectedPointsOnHomePage env={env} hasOneItem={false} isTaxiDeal={true} index={0} destination="pickup" points={selectedPickupPoints} isTours={true} />}


                                                    {
                                                    selectedPickupPoints?.length === 1 && <JourneyDetails
                                                        index={index}
                                                        goTitle={appData?.words["seGoingDetails"]}
                                                        returnTitle={appData?.words["seReturnDetails"]}
                                                        textAreaLabel={appData?.words["strSpecialRequestsTitle"]}
                                                        specialRequests={specialRequests}
                                                        handleTextarea={onchangeHandler}
                                                        selectedPickupPoints={selectedPickupPoints}
                                                        selectedDropoffPoints={selectedDropoffPoints}
                                                        appData={appData}
                                                        env={env}
                                                        reservationError={reservationError}
                                                        showOnlyDetailsForTour={true}
                                                    />}
                                                    <OutsideClickAlert onOutsideClick={(e) => outsideClick({ destination: "pickup", index: 0 })}>
                                                        <div className={`${styles.input_div} ${styles['search-input-container']}`} f={String(internalState[`pickup-search-focus-${0}`])} >
                                                            <div className={`${styles.popup_header} ${direction}`} f={String(internalState[`pickup-search-focus-${0}`])}>
                                                                <i className={`fa-solid fa-xmark ${styles.close_icon}`} onClick={(e) => closeModal({ index: 0, destination: "pickup" })}></i>
                                                                <p className={direction}>{appData?.words["strWhereWithQuestionMark"]} </p>
                                                            </div>
                                                            {/* //!case 3 => if quotations.points has not has   item  =>show input field */}
                                                            {selectedPickupPoints?.length === 0 ?
                                                                <input
                                                                    type="text"
                                                                    autoComplete="off"
                                                                    id="input_focused"//this is for scrolling top when ever we focus on mobile
                                                                    placeholder={appData?.words["strPleaseTypePickupAddress"]}
                                                                    value={internalState[`pickup-search-value-${0}`]}
                                                                    autoFocus={internalState[`pickup-search-focus-${0}`]}
                                                                    f={String(internalState[`pickup-search-focus-${0}`])} //giving a style if we focused
                                                                    onFocus={e => setFocusToInput({ e, destination: "pickup", index: 0 })}
                                                                    onChange={(e) => inputOnChangeHandler({ index: 0, destination: 'pickup', value: e.target.value })}
                                                                    className={`${direction} ${reservationError?.selectedPickupPoints?.length > 0 && !internalState[`pickup-search-value-${0}`] && selectedPickupPoints?.length === 0 ? styles.error_input : ""}`}
                                                                /> : <React.Fragment></React.Fragment>}
                                                            {/* loading icon inside input */}
                                                            {internalState[`pickup-search-loading-${0}`] ? <div className={styles.loading_div} popupp={String(internalState[`pickup-search-focus-${0}`])} direction={String(direction === "rtl")}><Loading /></div> : <React.Fragment></React.Fragment>}
                                                            {/* results when we get points */}
                                                            {!Array.isArray(internalState[`collecting-pickup-points-${0}`]) ?
                                                                <HandleSearchResults env={env} isTours={true} isTaxiDeal={true} language={language} index={0} destination="pickup" setInternalState={setInternalState} collectingPoints={internalState[`collecting-pickup-points-${0}`]} /> : <React.Fragment></React.Fragment>}
                                                        </div>
                                                    </OutsideClickAlert>
                                                </div>


                                                <ProceedPayment
                                                    onBack={goBack}
                                                    onProceed={(e) => checkValidation(e)}
                                                    backText={appData?.words["strGoBack"]}
                                                    proceedText={appData?.words["strProceedtoPayment"]}
                                                />
                                            </div>
                                        </div>

                                        <div className={`${styles.summary_section} ${mobileTabs[index] === 1 ? styles.show_mobile : styles.hide_mobile}`}>

                                            <TourJourneySummaryPanel
                                                language={language}
                                                pickupPointAddress={pickupPointAddress}
                                                splitedHour={splitedHour}
                                                splitedMinute={splitedMinute}
                                                splitedDate={splitedDate}
                                                quotation={quotation}
                                                selectedTour={selectedTour}
                                                selectedCar={selectedCar}
                                            />
                                        </div>
                                    </div>

                                </div>

                            )
                        })}
                        <LastMinuteModal openModal={openModal} setToFalse={setToFalse} handleClose={handleCloseLastMinuteModal} text={appData.words["strLastMinuteBookinginfo"]} />
                        {modalInfo ? <InfoModal appData={appData} content={appData?.words["seParkingNote"]} /> : <React.Fragment></React.Fragment>}

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