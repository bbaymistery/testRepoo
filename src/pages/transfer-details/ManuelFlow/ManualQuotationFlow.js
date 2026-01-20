import React, { useState } from 'react';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../../helpers/splitHelper';
import CheckBox from '../CheckBox';
import styles from "./manuelFlow.module.scss";
import { reservationSchemeValidator } from '../../../helpers/reservationSchemeValidator';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import MobileTabs from '../../../components/elements/MobileTabs/MobileTabs';
import BookingSummary from '../../../components/elements/BookingSummary';
import LastMinuteModal from '../../../components/elements/LastMinuteModal';
import PassengerDetailsSection from '../../../components/elements/PassengerDetailsSection';
import CapacityAlert from '../../../components/elements/CapacityAlert';
import { carAccordionImages } from '../../../constants/carss';
import JourneyDetails from '../../../components/elements/JourneyDetails';
import ProceedPayment from '../../../components/elements/ProceedPayment';

const ManualQuotationFlow = (props) => {
    let { quotations, appData, env, language, passengerDetailsStatus, reservations, direction, journeyType, fetchArchieveToken = () => { } } = props

    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
    })
    let { errorHolder } = internalState;
    const router = useRouter()
    const dispatch = useDispatch()
    // 0 will represent the "Passenger Details" tab
    // 1 will represent the "Booking Summary" tab
    const [mobileTabs, setMobileTabs] = useState(
        reservations.map(() => 0) // 0 = Passenger, 1 = Summary
    );
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const checkValidation = (e) => {
        fetchArchieveToken({ stage: "PUSHED_NEXT_FROM_TRANSFER_DETAILS_PAGE" })

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

    const setToFalse = () => setOpenModal(false)

    const handleClose = () => {
        if (openModal) {
            setOpenModal(false)
        }
    }
console.log({errorHolder});

    // Function to handle tab click and set the active tab index
    const handleTabClick = (journeyIndex, tabIndex) => {
        setMobileTabs(prev => {
            const updated = [...prev];
            updated[journeyIndex] = tabIndex;
            return updated;
        });
    };

    return (
        <div className={styles.transferdetails_subcontainer} id="main_container">
            {/* Conditional Rendering of Content */}

            {reservations.map((obj, index) => {
                let reservationError = (errorHolder.status === 403 && Array.isArray(errorHolder.reservations)) ? errorHolder.reservations[index] : {};
                let { transferDetails, passengerDetails, quotation, selectedPickupPoints, selectedDropoffPoints } = obj
                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                let { phone, email, firstname } = passengerDetails
                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                //passenger details errors
                let isReturnJourney = index === 1;
                const gallery = carAccordionImages[quotation?.carId] ?? [];
                console.log({ quotation });
                //cartypes object for card item as {1:{image:'sds, name:Economy}}
                const selectedCar = carObject[quotation.carId]
                return (
                    <div key={index}>
                        <MobileTabs handleTabClick={handleTabClick} mobileTabs={mobileTabs} appData={appData} index={index} isReturnJourney={isReturnJourney} />
                        <div className={styles.main_grid} key={index} style={{ marginTop: `${isReturnJourney ? "20px" : "0px"}` }} >
                            <div className={`${styles.form_section} ${mobileTabs[index] === 0 ? styles.show_mobile : styles.hide_mobile}`}>
                                <div className={styles.main_card}>
                                    <PassengerDetailsSection
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
                                    <CapacityAlert images={gallery} appData={appData} passengers={selectedCar.pax} suitcases={selectedCar.suitcases} />
                                    <JourneyDetails
                                        index={index}
                                        goTitle={appData?.words["seGoingDetails"]}
                                        returnTitle={appData?.words["seReturnDetails"]}
                                        textAreaLabel={appData?.words["strSpecialRequestsTitle"]}
                                        specialRequests={specialRequests}
                                        handleTextarea={handleTextarea}
                                        selectedPickupPoints={selectedPickupPoints}
                                        selectedDropoffPoints={selectedDropoffPoints}
                                        appData={appData}
                                        env={env}
                                        reservationError={reservationError}
                                    />
                                    {index === 1 ? <CheckBox
                                        direction={direction}
                                        textSame={appData?.words["strPassengerDetailsCheckBox"]}
                                        textNotSame={appData?.words["strThePassengerDetailsAreNotSame"]}
                                    /> : <React.Fragment></React.Fragment>}


                                    {index === 1 || (index === 0 && +journeyType === 0) ? <ProceedPayment
                                        onBack={() => router.back()}
                                        onProceed={(e) => checkValidation(e)}
                                        backText={appData?.words["strGoBack"]}
                                        proceedText={appData?.words["strProceedtoPayment"]}
                                    /> : <></>}

                                </div>
                            </div>

                            <div className={`${styles.summary_section} ${mobileTabs[index] === 1 ? styles.show_mobile : styles.hide_mobile}`}>
                                <BookingSummary
                                    index={index}
                                    journeyType={journeyType}
                                    quotation={quotation}
                                    language={language}
                                    setOpenModal={setOpenModal}
                                    splitedHour={splitedHour}
                                    splitedMinute={splitedMinute}
                                    splitedDate={splitedDate}
                                    selectedDropoffPoints={selectedDropoffPoints}
                                    selectedPickupPoints={selectedPickupPoints}
                                    selectedCar={selectedCar}
                                />
                            </div>
                        </div>

                    </div>

                )
            })}

            <LastMinuteModal openModal={openModal} setToFalse={setToFalse} handleClose={handleClose} text={appData.words["strLastMinuteBookinginfo"]} />
        </div>
    )
}

export default ManualQuotationFlow