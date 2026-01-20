import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { splitAndTranslateDuration, splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../../helpers/splitHelper';
import { formatDate } from '../../../helpers/meetgreetPageHelpers';
import { quotationImagesObjWebp } from '../../../constants/quotationImages';
import PickUpPoints from './PickUpPoints';
import DropOffPoints from './DropOffPoints';

const OrderSummary = ({ appData, reservations = [], selectedTour, language, direction, totalPrice, quotations }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);
    const isReturnJourney = reservations.length > 1;
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});


    const activeReservation = reservations[activeTab];

    const Header = () => {
        return (
            <div className={styles.summaryHeader}>
                <h3>{selectedTour?.title ? selectedTour?.title : (appData?.words?.["strOrderSummary"] || "Order Summary")}</h3>
                <button style={{ cursor: "pointer",textTransform:"capitalize" ,border:"none"}} onClick={() => router.back()} className={styles.linkEdit}  >
                    {appData?.words?.["editForm"] || "Edit"}
                </button>
            </div>
        );
    };
    const Tabs = () => {
        return (isReturnJourney && (
            <div className={styles.tabContainer}>
                <button className={`${styles.tabButton} ${activeTab === 0 ? styles.active : ''}`} onClick={() => setActiveTab(0)}   >
                    {appData?.words?.["seGoingDetails"] || "Journey Details"}
                </button>
                <button className={`${styles.tabButton} ${activeTab === 1 ? styles.active : ''}`} onClick={() => setActiveTab(1)} >
                    {appData?.words?.["seReturnDetails"] || "Return Journey Details"}
                </button>
            </div>
        )
        )
    }
    const PassengerInfo = (props) => {
        let { passengerDetails: { firstname, email, phone }, passengersNumber } = props;

        return (
            <div className={styles.passengerSection}>
                <div className={styles.sectionLabel}>{appData?.words?.["strPassengerTitle"] || "Passenger"}</div>
                <div className={styles.passengerDetails}>
                    <div className={styles.avatarCircle}>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div>
                        <div className={styles.passengerName}>{firstname}</div>
                        <div className={styles.passengerContact}>{email}</div>
                        <div className={styles.passengerContact}>{phone}</div>
                        <div className={styles.passengerContact}>{passengersNumber}</div>
                    </div>
                </div>
            </div>
        )
    }

    const CarInfo = ({ quotation }) => {
        return (
            <div className={styles.vehicleReview}>
                <div className={styles.vehicleImgBox}>
                    <img src={quotationImagesObjWebp[quotation?.carId]?.image} className={styles.car_img} alt="Car" />
                </div>
                <div>
                    <div className={styles.vehicleName}>
                        {`${carObject[quotation.carId]?.transferType} ${carObject[quotation.carId]?.name} `}
                    </div>
                    <div className={styles.vehicleSpecs}>
                        <span>
                            <i className="fa-solid fa-user-group"></i> {carObject[quotation.carId]?.pax}
                        </span>
                        <span>
                            <i className="fa-solid fa-suitcase"></i> {carObject[quotation.carId]?.suitcases}
                        </span>
                    </div>
                </div>
            </div>
        )
    }


    const CostProvided = () => {
        let quotation0 = reservations[0].quotation;
        let { price: original, normalPrice: net, amountOfVAT: vat } = quotation0

        let quotation1 = isReturnJourney && reservations[1].quotation;
        let { price: original1, normalPrice: net1, amountOfVAT: vat1 } = quotation1;
        return (
            <div className={styles.costTable}>
                <div className={styles.costRow}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                        <span>{appData.words["strJourneyPrice"]}</span>
                        <p style={{ display: 'block' }}>
                            <p style={{ textAlign: 'right', fontSize: "16px" }}>
                                £ {Number(original).toFixed(2)}
                            </p>
                            {vat > 0 && <p style={{ textAlign: 'right', fontSize: '11px' }}>
                                {`( £${net} + ${appData.words["strVat"]} £${vat} )`}
                            </p>}

                        </p>
                    </span>

                </div>


                {isReturnJourney && <div className={styles.costRow}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                        <span>Return Journey Price</span>
                        <p style={{ display: 'block' }}>
                            <p style={{ textAlign: 'right', fontSize: "16px" }}>
                                £ {Number(original1).toFixed(2)}
                            </p>
                            {vat1 > 0 && <p style={{ textAlign: 'right', fontSize: '11px' }}>
                                {`( £${net1} + ${appData.words["strVat"]} £${vat1} )`}
                            </p>}

                        </p>
                    </span>

                </div>}

                <div className={styles.costRow}>
                    <span>{appData.words["strMeetandGreet"]}</span>
                    <span className={styles.textGreen}>{appData.words["strFree"]}</span>
                </div>

                <div className={styles.costRow}>
                    <span>{appData?.words["strCarFeatureFreeWaitingTime"] || ""} (30 mins)</span>
                    <span className={styles.textGreen}>{appData.words["strFree"]}</span>
                </div>



                <div className={`${styles.costRow} ${styles.total}`}>
                    <span className={styles.totalLabel}>{appData.words["strTotalPrice"]}</span>
                    <span className={styles.priceFinal}>{totalPrice}</span>
                </div>
            </div>
        )
    }
    // Eğer veri henüz yüklenmediyse hata vermesin diye kontrol
    if (!activeReservation) return null;

    // 2. VERİ AYIKLAMA (DESTRUCTURING) - Map'in içinden çıkardık
    const { transferDetails, quotation, selectedPickupPoints, selectedDropoffPoints, passengerDetails } = activeReservation;
    const { transferDateTimeString, passengersNumber, specialRequests, passengerSuitcase } = transferDetails;
    // Tarih formatlama işlemleri
    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || [];
    const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || [];
    const date = formatDate(splitedDate, "short", language);
    const distance = quotations[activeTab]?.distance;
    const duration = quotations[activeTab]?.duration;

    const distanceInMiles = distance ? parseFloat(distance.replace(' mile', '')) : null;
    const distanceInKm = distanceInMiles ? (distanceInMiles * 1.60934).toFixed(2) : null;
    const formattedDuration = splitAndTranslateDuration(duration, language, appData);
    
    return (
        <div className={styles.summaryCard}>

            <Header selectedTour={selectedTour} />
            <Tabs />

            <div className={styles.summaryBody}>
                <CarInfo quotation={quotation} />
                <PassengerInfo passengerDetails={passengerDetails} passengersNumber={passengersNumber} />
                {/* Header: Tag & Tarih */}
                {/* <div className={styles.panel_header}>
                    <span className={styles.date_text}>{date} {splitedHour}:{splitedMinute}</span>
                </div> */}
                     <div className={styles["date-badge"]}>
                                <i className="fa-regular fa-calendar"></i> {date} <span>|</span> 

                                {splitedHour}:{splitedMinute}
                            </div>

                {selectedPickupPoints[0]?.flightDetails?.flightNumber && (
                    <div className={styles.flight_info_box}>
                        <div className={styles.row}>
                            <i className="fa-solid fa-plane"></i>
                            <span className={styles.flight_no}>{appData.words["strFlightNumberTitle"]}: {selectedPickupPoints[0]?.flightDetails?.flightNumber}</span>
                        </div>
                        {selectedPickupPoints[0]?.flightDetails?.waitingPickupTime >= 0 && (

                            <div className={styles.row}>
                                <i className="fa-regular fa-clock"></i>
                                <span className={styles.pickup_time}>
                                    {appData?.words["strMeetAfter"]}:
                                    :
                                    {appData?.words["strMinutesLaterText"].replace("{{}}", selectedPickupPoints[0]?.flightDetails?.waitingPickupTime)}

                                </span>
                            </div>
                        )}
                    </div>
                )}

                <div className={styles.timeline_container}>
                    <div className={styles.visual}>
                        <div className={`${styles.dot} ${styles.dot_start}`}></div>
                        <div className={styles.line}></div>
                        <div className={`${styles.dot} ${styles.dot_end}`}></div>
                    </div>
                    <div className={styles.content}>
                        <PickUpPoints appData={appData} selectedPickupPoints={selectedPickupPoints} direction={direction} language={language} />
                        <br />
                        <DropOffPoints selectedDropoffPoints={selectedDropoffPoints} direction={direction} />
                    </div>
                </div>
                {(distanceInMiles || formattedDuration) &&
                    <div className={`${styles.flight_info_box} ${styles.duration_box}`}>
                        {distanceInMiles && <div className={styles.row}>
                            <span className={styles.flight_no}>
                                {appData?.words["strDistance"]} : <span>{distanceInMiles} {appData?.words["strMiles"]} ({distanceInKm} km)</span>
                            </span>
                        </div>}

                        {formattedDuration && <div className={styles.row}>

                            <span className={styles.flight_no}>
                                {appData?.words["strDuration"]}
                                :   <span >{formattedDuration}
                                </span>

                            </span>

                        </div>}
                    </div>}
                {selectedDropoffPoints[0]?.flightDetails?.flightNumber && (
                    <div className={styles.flight_info_box} style={{ marginTop: "5px" }}>
                        <div className={styles.row}>
                            <i className="fa-solid fa-plane"></i>
                            <span className={styles.flight_no}>{appData.words["strFlightNumberTitle"]}: {selectedDropoffPoints[0]?.flightDetails?.flightNumber}</span>
                        </div>
                        {selectedDropoffPoints[0]?.flightDetails?.waitingPickupTime > 0 && (

                            <div className={styles.row}>
                                <i className="fa-regular fa-clock"></i>
                                <span className={styles.pickup_time}>
                                    {appData?.words["strMeetAfter"]}:
                                    :
                                    {appData?.words["strMinutesLaterText"].replace("{{}}", selectedDropoffPoints[0]?.flightDetails?.waitingPickupTime)}

                                </span>
                            </div>
                        )}
                    </div>
                )}
                <div className={styles.notesSection}>
                    <div className={styles.sectionLabel}>{appData.words["strNotes"]}</div>
                    <div className={styles.notesText}>
                        {specialRequests ? specialRequests : "No notes provided."}
                    </div>
                </div>
                <CostProvided />
            </div>
        </div>
    );
};

export default OrderSummary;