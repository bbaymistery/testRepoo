import React, {  useState } from 'react';
import SelectedPointsOnTransferDetails from '../../components/elements/SelectedPointsOnTransferDetails';
import Textarea from '../../components/elements/Textarea';
import TransferJourneySummaryPanel from '../../components/elements/TransferJourneySummaryPanel';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import CheckBox from './CheckBox';
import HandlePassengerDetailsTransferForm from './HandlePassengerDetailsTransferForm';
import styles from "./styles.module.scss";
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
const ManualQuotationFlow = (props) => {


    let { quotations, appData, env, language, passengerDetailsStatus, reservations, direction, journeyType } = props

    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
    })
    let { errorHolder } = internalState;
    const router = useRouter()
    const dispatch = useDispatch()
    const checkValidation = (e) => {
        let errorHolder = reservationSchemeValidator({ reservations, appData }, { checkTransferDetails: true });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) router.push(`${language === 'en' ? "/payment-details" : `${language}/payment-details`}`)
    }
    const handleTextarea = (e, index) => {
        let { name, value } = e.target;
        if (["specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }
    const [openModal, setOpenModal] = useState(false)

    const setToFalse = () => {
        setOpenModal(false)
    };
    const handleClose = () => {
        if (openModal) {

            setOpenModal(false)

        }
    }

    return (
        <div className={styles.transferdetails_subcontainer} id="main_container">
            {reservations.map((obj, index) => {
                let reservationError = (errorHolder.status === 403 && Array.isArray(errorHolder.reservations)) ? errorHolder.reservations[index] : {};
                let { transferDetails, passengerDetails, quotation, selectedPickupPoints, selectedDropoffPoints } = obj
                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                let { phone, email, firstname } = passengerDetails
                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                //passenger details errors
                return (
                    <div key={index} >
                        <div className={`${styles.transferdetails_subcontainer_content} ${direction}`}>
                            <div className={`${styles.transferdetails_subcontainer_content_points_and_passengerdetails} ${quotations[0]?.taxiDeal ? styles.details_panel_taxideal : ""}`}>
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

                                {/* if client come from taxi deal then here will not be visible */}
                                {quotations[0]?.taxiDeal ? <></> :
                                    <div className={styles.selected_points_details}>
                                        <h2>   {index === 0 ? appData?.words["seGoingDetails"] : appData?.words["seReturnDetails"]}  </h2>
                                        <div className={styles.selecteditems} >
                                            <div className={`${styles.points} ${styles.selectedlist_points_left}`} >
                                                <h3 className={styles.points_header}>{appData?.words["strSelectedPickUpPoint"]}</h3>
                                                {/* //index =0 it is like destination pickup  */}
                                                <SelectedPointsOnTransferDetails env={env} pointsError={reservationError['selectedPickupPoints']} selectedPoints={selectedPickupPoints} journeyType={index} type='pickup' language={language} />
                                            </div>
                                            {/* {  selectedlist_points_left     bunu aldk select komponentde kulandk} */}
                                            <div className={`${styles.points} ${styles.selectedlist_points_right}`}>
                                                <h3 className={styles.points_header}>{appData?.words["strSelectedDropOffPoint"]}</h3>
                                                {/* //index =1 it is like destination dropoff */}
                                                <SelectedPointsOnTransferDetails env={env} pointsError={reservationError['selectedDropoffPoints']} selectedPoints={selectedDropoffPoints} journeyType={index} type='dropoff' language={language} />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className={styles.textarea_div}>
                                    <Textarea label={appData?.words["strSpecialRequestsTitle"]} name="specialRequests" value={specialRequests} onChange={(e) => handleTextarea(e, index)} />
                                </div>
                                {index === 1 ? <CheckBox direction={direction} textSame={appData?.words["strPassengerDetailsCheckBox"]} textNotSame={appData?.words["strThePassengerDetailsAreNotSame"]} /> : <React.Fragment></React.Fragment>}
                                {index === 1 || (index === 0 && +journeyType === 0) ?
                                    <div className={` ${direction === 'rtl' ? styles.directionbuttons : styles.buttons}  ${quotations[0]?.taxiDeal ? styles.taxideal_buttons : ""}`} >
                                        <div className={styles.left}>
                                            <button onClick={() => { router.back() }} className='btn btn_primary'>{appData?.words["strGoBack"]}</button>

                                            <button onClick={(e) => checkValidation(e)} className='btn btn_primary'>{appData?.words["strNext"]}</button>
                                        </div>

                                    </div>
                                    : <></>}
                            </div>
                            {quotations[0].taxiDeal ? <></> : <TransferJourneySummaryPanel
                                setOpenModal={setOpenModal}
                                language={language} journeyType={journeyType} index={index} splitedHour={splitedHour}
                                splitedMinute={splitedMinute} splitedDate={splitedDate} quotation={quotation}
                                selectedDropoffPoints={selectedDropoffPoints} selectedPickupPoints={selectedPickupPoints}
                            />}
                        </div>
                        {index === 1 || (index === 0 && +journeyType === 0) ?
                            <div className={`${direction === 'rtl' ? styles.directionbuttons_for_gap : styles.buttons_for_gap}  ${quotations[0]?.taxiDeal ? styles.taxideal_buttons : ""}`} >
                                <div className={styles.left}>

                                </div>
                                <div className={styles.right}>
                                    <div className={`${styles.content} ${styles.summarycontent} `}>
                                        <div className={`${styles.left_info} ${styles.acceptedcards}`} style={{ marginTop: "0rem" }} title="Accepted Cards for Airport Pickups London">
                                            <img className={styles.acceptedcards_img} border="0" alt="Accepted Cards for Airport Pickups London " src="/images/others/accepted-cards.png" />
                                        </div>
                                    </div>
                                </div>
                            </div> : <></>}
                    </div>
                )
            })}

            {openModal ?
                <div className={` ${styles.modal} `} onClick={handleClose}>
                    <div className={`${styles.modal_container}`} id="infoModal">
                        <div>{appData.words["strLastMinuteBookinginfo"]}  </div>
                        <i onClick={setToFalse} className={`fa-solid fa-x ${styles.close_icon}`}></i>
                    </div>
                </div>
                : <React.Fragment></React.Fragment>}
        </div>
    )
}

export default ManualQuotationFlow