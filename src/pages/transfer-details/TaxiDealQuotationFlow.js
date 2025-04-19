import React, { useEffect, useState } from 'react';
import HandleSearchResults from '../../components/elements/HandleSearchResults';
import OutsideClickAlert from '../../components/elements/OutsideClickAlert';
import SelectedPointsOnHomePage from '../../components/elements/SelectedPointsOnHomePage';
import SelectedPointsOnTransferDetails from '../../components/elements/SelectedPointsOnTransferDetails';
import Textarea from '../../components/elements/Textarea';
import TransferJourneySummaryPanel from '../../components/elements/TransferJourneySummaryPanel';
import { hours, minutes } from '../../constants/minutesHours';
import { currentDate } from '../../helpers/getDates';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import HandlePassengerDetailsTransferForm from './HandlePassengerDetailsTransferForm';
import styles from "./styles.module.scss";
import { useRef } from 'react';
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import { collectPointsAsync } from '../../helpers/collectPoints';
import { useDispatch } from 'react-redux';
import Loading from '../../components/elements/Loading';
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import { useRouter } from 'next/router';
const TaxiDealQuotationFlow = (props) => {


    let { quotations, appData, env, language, passengerDetailsStatus,  reservations, direction, reducerSessionToken } = props


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

    const dispatch = useDispatch()
    const router = useRouter()
    const reservationsRef = useRef(reservations);
    const [pickupIdForImage, setpickupIdForImage] = useState(null)
    const [dropoffIdFormImage, setdropoffIdFormImage] = useState(null)
    const [errorDropoffSelectBox, setErrorDropoffSelectBox] = useState(false)
    const [errorPickUpSelectBox, setErrorPickUpSelectBox] = useState(false)

    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: JSON.parse(item.objectDetails), }), {});
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: item.image, }), {});


    const onSelectingPointHandler = (params = {}) => {
        let { index, value, destination } = params
        let { passengerDetails: { token: passengerDetailsToken } } = reservations[0]


        //hinder user  to add some Characters
        if (ifHasUnwantedCharacters(value)) return

        setInternalState({ [`${destination}-search-value-${index}`]: value })

        if (value.length > 2) {
            (async () => {
                //set input loading to true
                setInternalState({ [`${destination}-search-loading-${index}`]: true })

                // 🔹 First request: ignoreGooglePlaces = true
                const log1 = await collectPointsAsync({ value, reducerSessionToken, language, ignoreGooglePlaces: true, env, errorMessage: "APL TaxiDealQuotationFlow component _collectPoints() catch block" });

                const { status, "session-token": sessionToken = "", token } = log1;


                if (status == 200) {
                    setInternalState({ [`${destination}-search-loading-${index}`]: false })

                    //  immediately show log1.result for fast feedback
                    setInternalState({ [`collecting-${destination}-points-${index}`]: log1.result });


                    //if we dont have passengerDetailsToken then save token on reservation objects;s passenger details
                    if (!passengerDetailsToken) dispatch({ type: 'SET_TOKEN_TO_PASSENGERDETAILS', data: { token } })
                    //check if session doesnt exist then  set session token to the reducer
                    if (!reducerSessionToken) dispatch({ type: 'SET_SESSION_TOKEN', data: { sessionToken } });
                    //!
                    // 🔹 Second request: ignoreGooglePlaces = true
                    const log2 = await collectPointsAsync({ value, reducerSessionToken, language, ignoreGooglePlaces: false, env, errorMessage: "APL Hero component _collectPoints() catch block ignoreGooglePlaces:false" });

                    // Access the most up-to-date reservations (even inside stale closures)
                    const selected = reservationsRef.current[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`] || [];

                    if (selected.length === 0) {
                        setInternalState({ [`collecting-${destination}-points-${index}`]: log2.result });
                    }

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

    const outsideClick = ({ destination, index }) => {
        //it means if we have seggested points then it will work otherwise it is nt
        if (!Array.isArray(internalState[`collecting-${destination}-points-${index}`]))
            setInternalState({ [`collecting-${destination}-points-${index}`]: [], [`${destination}-search-focus-${index}`]: false })

    }
    const onChangeSetDateTimeHandler = (params = {}) => {
        let { value, hourOrMinute, journeyType } = params
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType, hourOrMinute, value } })
    }
    //pop up modal
    const setFocusToInput = (params = {}) => {
        let { e, destination, index } = params

        e.target.style.opacity = 0
        setInternalState({ [`${destination}-search-focus-${index}`]: window.innerWidth > 990 ? false : true })
        setTimeout(() => e.target.style.opacity = 1);
    }

    const closeModal = (params = {}) => {
        let { index, destination } = params
        let inputField = document.getElementById("input_focused")
        inputField.style.opacity = 1
        setInternalState({ [`${destination}-search-focus-${index}`]: false, [`${destination}-search-value-${index}`]: "", [`collecting-${destination}-points-${index}`]: [] })
    }
    const handleSelectTaxiDeals = (params = {}) => {
        let { e, destination, index, items } = params
        let emptyValue = { token: "", pid: "", ptype: "", }

        //in case if he select select point
        if (e.target.selectedIndex === 0 && destination === 'pickup') {
            setpickupIdForImage(null)
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: [], dropoffPoints: reservations[index].selectedDropoffPoints, index } })
            setErrorPickUpSelectBox(true)
            return
        }
        if (e.target.selectedIndex === 0 && destination !== 'pickup') {
            setdropoffIdFormImage(null)
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: reservations[index].selectedPickupPoints, dropoffPoints: [], index } })
            setErrorDropoffSelectBox(true)
            return
        }

        let value = items[e.target.selectedIndex]
        let point = { ...value, ...objectDetailss[value?.pcatId] }//...point    flightDetails{ flightNumber="",waitingPickupTime=0}


        if (destination === 'pickup') {
            if (point.pcatId === 1) {
                point = { ...point, flightDetails: { ...point.flightDetails, waitingPickupTime: "" } }
            }
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: [point], dropoffPoints: reservations[index].selectedDropoffPoints, index } })
            setpickupIdForImage(+value.pcatId)
            setErrorPickUpSelectBox(false)

        } else {
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: reservations[index].selectedPickupPoints, dropoffPoints: [point], index } })
            setdropoffIdFormImage(+value.pcatId)
            setErrorDropoffSelectBox(false)
        }

    }

    const checkValidation = (e) => {
        let errorHolder = reservationSchemeValidator({ reservations, appData }, { checkTransferDetails: true });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) router.push(`${language === 'en' ? "/payment-details" : `${language}/payment-details`}`)


        if (reservations[0].selectedPickupPoints.length === 0) {
            setErrorPickUpSelectBox(true)
        } else {
            setErrorPickUpSelectBox(false)

        }
        if (reservations[0].selectedDropoffPoints.length === 0) {
            setErrorDropoffSelectBox(true)
        } else {
            setErrorDropoffSelectBox(false)

        }
    }
    const handleTextarea = (e, index) => {
        let { name, value } = e.target;
        if (["specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }
    //if we have one point then we allow to see flight number wainting time on the box
    useEffect(() => {
        if (quotations[0]?.taxiDeal?.pickupPoints?.length <= 1) {
            setpickupIdForImage(quotations[0]?.taxiDeal?.pickupPoints[0]?.pcatId)
        }

        if (quotations[0]?.taxiDeal?.dropoffPoints?.length <= 1) {
            setdropoffIdFormImage(quotations[0]?.taxiDeal?.dropoffPoints[0]?.pcatId)
        }
    }, [])
    // Update the ref whenever `reservations` changes in Redux
    useEffect(() => {
        reservationsRef.current = reservations;
    }, [reservations]);
    return (
        <div className={styles.taxideals_subcontainer}>
            {/* taxiDeal is gonna exist if when ever we choice go by taxiDeals  */}
            {quotations[0]?.taxiDeal ?
                reservations.map((obj, index) => {
                    let reservationError = (errorHolder.status === 403 && Array.isArray(errorHolder.reservations)) ? errorHolder.reservations[index] : {};
                    let { transferDetails, selectedPickupPoints, quotation, selectedDropoffPoints, passengerDetails, } = obj
                    let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                    let { phone, email, firstname } = passengerDetails
                    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                    const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []


                    const hasSingleDropoffPoint = quotations[index]?.taxiDeal?.dropoffPoints?.length === 1;
                    const hasNoDropoffPoints = quotations[index]?.taxiDeal?.dropoffPoints?.length === 0;
                    const hasOneSelectedPointDropOff = selectedDropoffPoints?.length === 1;

                    const hasSinglePickupfPoint = quotations[index]?.taxiDeal?.pickupPoints?.length === 1;
                    const hasNoPickupPoints = quotations[index]?.taxiDeal?.pickupPoints?.length === 0;
                    const hasOneSelectedPointPickup = selectedPickupPoints?.length === 1;


                    return (
                        <div className={`${styles.taxideals_subcontainer_content} ${direction}`} key={index}>
                            <div className={styles.taxideals_subcontainer_content_points_and_passengerdetails}>
                                <div className={`${styles.points} ${direction}`} direction={String(direction === 'rtl')}>
                                    <h2>{appData?.words["seGoingDetails"]}</h2>
                                    <div className={`${styles.search_menu} ${styles.first_column}`}>
                                        {/* Pick up location text */}
                                        {!selectedPickupPoints.length > 0 ? <p className={direction}>{`${appData?.words["strPickupAddress"]}: ${quotations[0].taxiDeal.pickup}`}</p> : <React.Fragment></React.Fragment>}
                                        {/* Pick Points text */}
                                        {selectedPickupPoints.length > 0 ? <p className={` ${direction}`} >{appData?.words["strPickupPoints"]}</p> : <React.Fragment></React.Fragment>}
                                        {/* selectedPoints */}
                                        {/* //!case 1 => if quotations.points has only one item  =>show selected point*/}

                                        {!(hasSinglePickupfPoint && hasOneSelectedPointPickup) && hasNoPickupPoints && hasOneSelectedPointPickup && <SelectedPointsOnHomePage env={env} hasOneItem={hasSinglePickupfPoint} isTaxiDeal={true} index={index} destination="pickup" points={selectedPickupPoints} />}

                                        {/* //!case 2 => if quotations.points has more than 1  item  =>show select box*/}
                                        {quotations[index]?.taxiDeal?.pickupPoints.length ?
                                            <div style={{ border: (errorPickUpSelectBox) ? "1px solid red" : "" }} className={styles.taxideals_select_div} direction={String(direction === 'rtl')} title={selectedPickupPoints[0]?.address}>
                                                {/* //we r getting value by   >  quotations[index]?.taxiDeal?.pickupPoints <this  useing selectedIndex*/}
                                                {imageObjects && pickupIdForImage &&
                                                    <img className={styles.point_image} src={`${env.apiDomain}${imageObjects[pickupIdForImage]}`} alt={selectedPickupPoints[0]?.address} />}
                                                <select
                                                    className={styles.taxideals_select}
                                                    defaultValue={`${selectedPickupPoints?.[index]?.address ? `${selectedPickupPoints?.[index]?.address}` : `--- ${appData?.words["quSelectButton"]} ---`}`}
                                                    disabled={internalState[`quotation-loading`]}
                                                    onChange={(e) => handleSelectTaxiDeals({ e, destination: "pickup", index, items: [language === "en" ? { address: `--- ${appData?.words["quSelectButton"]} ---` } : { translatedAddress: `--- ${appData?.words["quSelectButton"]} ---` }, ...quotations[index]?.taxiDeal?.pickupPoints] })}
                                                >
                                                    {/* //!  */}
                                                    {[language === "en" ? { address: `--- ${appData?.words["quSelectButton"]} ---` } : { address: `--- ${appData?.words["quSelectButton"]} ---` },
                                                    ...quotations[index]?.taxiDeal?.pickupPoints].map((point, index) => {
                                                        return <option key={index} value={point.adress}> {point.address}</option>
                                                    }
                                                    )}
                                                </select>
                                            </div>
                                            : <></>}
                                        {/* //it means by default we dont have selected so he should select sth in order to see flight number waiting time  */}
                                        {/* {pickupIdForImage ? */}
                                        <SelectedPointsOnTransferDetails env={env} isTaxiDeal={true} pointsError={reservationError['selectedPickupPoints']} selectedPoints={selectedPickupPoints} journeyType={index} type='pickup' language={language} />
                                        {/* : <></>} */}
                                        <OutsideClickAlert onOutsideClick={(e) => outsideClick({ destination: "pickup", index })}>
                                            <div className={`${styles.input_div} ${styles['search-input-container']}`} f={String(internalState[`pickup-search-focus-${index}`])} >
                                                <div className={`${styles.popup_header} ${direction}`} f={String(internalState[`pickup-search-focus-${index}`])}>
                                                    <i className={`fa-solid fa-xmark ${styles.close_icon}`} onClick={(e) => closeModal({ index, destination: "pickup" })}></i>
                                                    <p className={direction}>{appData?.words["strFromWithQuestionMark"]} </p>
                                                </div>
                                                {selectedPickupPoints.length === 0 && quotations[0]?.taxiDeal?.pickupPoints?.length === 0 ?
                                                    <input
                                                        type="text"
                                                        autoComplete="off"
                                                        id="input_focused"//this is for scrolling top when ever we focus on mobile
                                                        placeholder={"Please type the pickup address"}
                                                        value={internalState[`pickup-search-value-${index}`]}
                                                        autoFocus={internalState[`pickup-search-focus-${index}`]}
                                                        f={String(internalState[`pickup-search-focus-${index}`])} //giving a style if we focused
                                                        onFocus={e => setFocusToInput({ e, destination: "pickup", index })}
                                                        onChange={(e) => onSelectingPointHandler({ index, destination: 'pickup', value: e.target.value })}
                                                        className={`${direction} ${reservationError?.selectedPickupPoints?.length > 0 && !internalState[`pickup-search-value-${index}`] && selectedPickupPoints.length === 0 ? styles.error_input : ""}`}
                                                    /> : <React.Fragment></React.Fragment>}
                                                {/* loading icon inside input */}
                                                {internalState[`pickup-search-loading-${index}`] ? <div className={styles.loading_div} popupp={String(internalState[`pickup-search-focus-${index}`])} direction={String(direction === "rtl")} >  <Loading />  </div> : <React.Fragment></React.Fragment>}


                                                {/* if !internalState[`pickup-search-value-${index}`] then our handleSearchResults will be belong to styles.book.input */}
                                                {!Array.isArray(internalState[`collecting-pickup-points-${index}`]) ?
                                                    //setInternalState>>>after adding item we set input field  to empty and add extradiv to true
                                                    <HandleSearchResults env={env} isTaxiDeal={true} language={language} index={index} destination="pickup" setInternalState={setInternalState} collectingPoints={internalState[`collecting-pickup-points-${index}`]} /> : <React.Fragment></React.Fragment>}

                                            </div>

                                        </OutsideClickAlert>

                                    </div>
                                    <div className={`${styles.search_menu} ${styles.second_column}`}>
                                        {/* Pick up location text */}
                                        {!selectedDropoffPoints.length > 0 ? <p className={direction}>{`${appData?.words["strDropoffAddress"]}: ${quotations[0].taxiDeal.dropoff}`}</p> : <React.Fragment></React.Fragment>}
                                        {/* Pick Points text */}
                                        {selectedDropoffPoints.length > 0 ? <p className={`${styles.point_title} ${direction}`} >{appData?.words["strDropoffPoints"]}</p> : <React.Fragment></React.Fragment>}
                                        {/* selectedPoints */}
                                        {/* //!case 1 => if quotations.points has only one item  =>show selected point*/}
                                        {/* {quotations[index]?.taxiDeal?.dropoffPoints?.length <= 1 &&
                                        selectedDropoffPoints.length === 1 && <SelectedPointsOnHomePage env={env} hasOneItem={quotations[index]?.taxiDeal?.dropoffPoints?.length === 1} isTaxiDeal={true} index={index} destination="dropoff" points={selectedDropoffPoints} />} */}
                                        {
                                            !(hasSingleDropoffPoint && hasOneSelectedPointDropOff) && hasNoDropoffPoints && hasOneSelectedPointDropOff && (<SelectedPointsOnHomePage env={env} hasOneItem={hasSingleDropoffPoint} isTaxiDeal={true} index={index} destination="dropoff" points={selectedDropoffPoints} />)
                                        }
                                        {/* //!case 2 => if quotations.points has more than 1  item  =>show select box*/}
                                        {quotations[index]?.taxiDeal?.dropoffPoints.length ?
                                            <div style={{ border: (errorDropoffSelectBox) ? "1px solid red" : "" }} className={styles.taxideals_select_div} direction={String(direction === 'rtl')}>
                                                {imageObjects && dropoffIdFormImage &&
                                                    <img className={styles.point_image} src={`${env.apiDomain}${imageObjects[dropoffIdFormImage]}`} alt={selectedDropoffPoints[0]?.address} />}
                                                <select

                                                    className={styles.taxideals_select}
                                                    defaultValue={`${selectedDropoffPoints?.[index]?.address ? `${selectedDropoffPoints?.[index]?.address}` : "--- select dropoff point ---`"}`}
                                                    disabled={internalState[`quotation-loading`]}
                                                    onChange={(e) => handleSelectTaxiDeals({ e, destination: "dropoff", index, items: [{ address: `--- select dropoff point ---` }, ...quotations[index]?.taxiDeal?.dropoffPoints] })}
                                                >
                                                    {[{ address: `--- select dropoff point ---` }, ...quotations[index]?.taxiDeal?.dropoffPoints].map((point, index) => {
                                                        return <option key={index} value={point.adress}> {point.address}</option>
                                                    }
                                                    )}
                                                </select>
                                            </div>
                                            : <></>}
                                        <SelectedPointsOnTransferDetails env={env} isTaxiDeal={true} pointsError={reservationError['selectedDropoffPoints']} selectedPoints={selectedDropoffPoints} journeyType={index} type='dropoff' language={language} />
                                        <OutsideClickAlert onOutsideClick={(e) => outsideClick({ destination: "dropoff", index })}>
                                            <div className={`${styles.input_div} ${styles['search-input-container']}`} f={String(internalState[`dropoff-search-focus-${index}`])} >
                                                <div className={`${styles.popup_header} ${direction}`} f={String(internalState[`dropoff-search-focus-${index}`])}>
                                                    <i className={`fa-solid fa-xmark ${styles.close_icon}`} onClick={(e) => closeModal({ index, destination: "dropoff" })}></i>
                                                    <p className={direction}>{appData?.words["strWhereWithQuestionMark"]} </p>
                                                </div>
                                                {/* //!case 3 => if quotations.points has not has   item  =>show input field */}
                                                {selectedDropoffPoints.length === 0 && quotations[0]?.taxiDeal?.dropoffPoints?.length === 0 ?
                                                    <input
                                                        type="text"
                                                        autoComplete="off"
                                                        id="input_focused"//this is for scrolling top when ever we focus on mobile
                                                        placeholder={appData?.words["strPleaseTypeInTheDropOffAddress"]}
                                                        value={internalState[`dropoff-search-value-${index}`]}
                                                        autoFocus={internalState[`dropoff-search-focus-${index}`]}
                                                        f={String(internalState[`dropoff-search-focus-${index}`])} //giving a style if we focused
                                                        onFocus={e => setFocusToInput({ e, destination: "dropoff", index })}
                                                        onChange={(e) => onSelectingPointHandler({ index, destination: 'dropoff', value: e.target.value })}
                                                        className={`${direction} ${reservationError?.selectedDropoffPoints?.length > 0 && !internalState[`dropoff-search-value-${index}`] && selectedDropoffPoints.length === 0 ? styles.error_input : ""}`}
                                                    /> : <React.Fragment></React.Fragment>}
                                                {/* loading icon inside input */}
                                                {internalState[`dropoff-search-loading-${index}`] ? <div className={styles.loading_div} popupp={String(internalState[`dropoff-search-focus-${index}`])} direction={String(direction === "rtl")}>  <Loading />  </div> : <React.Fragment></React.Fragment>}




                                                {/* results when we get points */}
                                                {!Array.isArray(internalState[`collecting-dropoff-points-${index}`]) ?
                                                    <HandleSearchResults env={env} isTaxiDeal={true} language={language} index={index} destination="dropoff" setInternalState={setInternalState} collectingPoints={internalState[`collecting-dropoff-points-${index}`]} /> : <React.Fragment></React.Fragment>}
                                            </div>
                                        </OutsideClickAlert>
                                    </div>
                                    <div className={styles.date_time_together}>
                                        <div className={` ${styles.search_menu} ${styles.book_input_date} ${styles.third_column}`}>
                                            <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]}</p>
                                            <div className={`${styles.date_div} ${direction === 'rtl' && styles.date_div_rtl}`}>
                                                <input
                                                    type="date"
                                                    name="pickup-date"
                                                    className={direction === "rtl" ? styles.rtl : ""}
                                                    value={splitedDate}
                                                    min={index === 0 ? currentDate() : reservations[0].transferDetails.transferDateTimeString.split(" ")[0]}
                                                    onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "date", journeyType: index })}
                                                />
                                            </div>
                                            <i className={`fa-solid fa-calendar-days ${styles.date_picker_icon}`}></i>
                                        </div>
                                        <div className={` ${styles.search_menu} ${styles.hours_minutes} ${styles.fourth_column}`}>
                                            <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]}</p>
                                            <div className={`${styles.select_time_div} ${direction}`}>
                                                {Array.from(new Array(2)).map((arr, i) => {
                                                    return (
                                                        <div key={i} className={styles.booking_form_hour_minute_wrapper}>
                                                            <i className={`fa-sharp fa-solid fa-angle-down ${direction === "rtl" ? styles.left : ""}`}></i>
                                                            <select
                                                                defaultValue={i === 0 ? splitedHour : splitedMinute}
                                                                onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: i === 0 ? "hour" : "minute", journeyType: index })} >
                                                                {/* //if index==0 thenhours will show up if not then minutes show up */}
                                                                {i === 0
                                                                    ? hours.map((hour) => (<option key={hour.id} id={hour.id} value={hour.value}> {hour.value} </option>))
                                                                    : minutes.map((minute) => (<option key={minute.id} id={minute.id} value={minute.value}  > {minute.value} </option>))}
                                                            </select>
                                                        </div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* //!passenger details for transfer journey */}
                                {/* //!if client choise unchecked for input checkbox then it will show up  */}
                                <HandlePassengerDetailsTransferForm
                                    passengerDetailsStatus={passengerDetailsStatus}
                                    index={index}
                                    appData={appData}
                                    reservationError={reservationError}
                                    email={email}
                                    firstname={firstname}
                                    phone={phone}
                                    passengersNumber={passengersNumber}
                                    quotation={quotation}
                                    direction={direction}
                                />
                                <div className={styles.textarea_div}>
                                    <Textarea isTaxiDeal={true} label={appData?.words["strSpecialRequestsTitle"]} name="specialRequests" value={specialRequests} onChange={(e) => handleTextarea(e, index)} />
                                </div>
                                <div className={` ${direction === 'rtl' ? styles.directionbuttons : styles.buttons}  ${quotations[0]?.taxiDeal ? styles.taxideal_buttons : ""}`} >
                                    <div className={styles.left}>
                                        {/* <Link href={`${localStorage?.getItem("path") ? localStorage?.getItem("path") : "/"}`}> */}
                                        <button onClick={() => { router.back() }} className='btn btn_primary'>{appData?.words["strGoBack"]}</button>
                                        {/* </Link> */}
                                        <button onClick={(e) => checkValidation(e)} className='btn btn_primary'>{appData?.words["strNext"]}</button>
                                    </div>
                                    <div className={styles.right}></div>
                                </div>
                            </div>

                            {<TransferJourneySummaryPanel
                                language={language} isTaxiDeal={true}
                                index={index} splitedHour={splitedHour}
                                selectedPickupPoints={selectedPickupPoints}
                                splitedMinute={splitedMinute} splitedDate={splitedDate}
                                quotation={quotation} selectedDropoffPoints={selectedDropoffPoints}
                            />}
                        </div>
                    )
                })
                : <></>}
        </div>
    )
}

export default TaxiDealQuotationFlow