import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper'
import GlobalLayout from '../../components/layouts/GlobalLayout'

import { useSelector } from 'react-redux'

import styles from "./styles.module.scss"

import{ useState } from 'react'
import html2canvas from "html2canvas";
import { useEffect } from 'react'
import jsPDF from "jspdf";
import ProgresBar from '../../components/elements/ProgresBar'
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'
import { useRouter, Router } from 'next/router'
import SuccessMark from './SuccessMark'
import Payment from './Payment'
import WhatIsNext from './WhatIsNext'
import BookingActions from './BookingActions'
import Support from './Support'
import JourneyPoints from './JourneyPoints'
import VehicleDetails from './VehicleDetails'
import PassengerDetails from './PassengerrDetails'
import { carAccordionImages } from '../../constants/carss'
import { quotationImagesObjWebp } from '../../constants/quotationImages'
import usePageGuard from '../../hooks/usePageGuard'
import Loading from '../../components/elements/Loading'
let title = "APL | Booking Confirmation | Reservation Document "
let description = "Your booking is successfully confirmed. View, print, or download your reservation document for your London airport transfer. Thank you for choosing Airport Pickups London."

const ReservationsDocument = (props) => {
    let { env } = props
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { journeyType, tokenForArchieve, direction, language,quotations } } = state
    let { paymentDetails: { paymentType } } = reservations[0]


    const router = useRouter()
    const { appData } = useSelector(state => state.initialReducer)
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    // const confirmationAlert = useConfirm({ previousUrl: "/", nextUrl: "/", message: "If you leave the page, all data will be deleted." })
    const { previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: "/payment-details", nextUrl: "/", currentUrl: router.asPath })

    const [reservId, setReservId] = useState("")
    const isDataValid = reservations[0]?.quotation?.price;
    const { isPageAuthorized } = usePageGuard(isDataValid, () => { });
    //when passenger gets reserv d we need archieve token
    const fetchArchieveToken = async (params = {}) => {
        let { id, stage, response = {} } = params
        let reservationObj = parseInt(journeyType) === 1 ? reservations : [reservations[0]];
        if (stage === 'GET_SERVER_RESPONED') {
            reservationObj = JSON.parse(JSON.stringify(reservationObj))
            reservationObj[0].response = response
        }
        if (reservationObj.length > 1) {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]
                    },
                },
                {
                    ...reservationObj[1],
                    reservationDetails: {
                        ...reservationObj[1].reservationDetails,
                        id: id[0][1]
                    },
                },
            ]
        } else {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]

                    },
                },
            ]
        }

        let url = `${env.apiDomain}/api/v1/sessions/add`;
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage }),
            headers: { "Content-Type": "application/json", },
        });
        const data = await resp.json();
        console.log({ data, stage });

    };
    const generatePdf = async (e) => {
        if (typeof window === "object") {
            const file = document.getElementById("pdf_file");
            if (!file) return;

            // Görünmeyen butonları gizlemek için filtre
            const ignoreBookingActions = (element) => {
                return element.id === 'booking-actions-to-hide';
            };

            // ADIM 1: Genişliği zorla sabitle (Kesilmeyi önlemek için en kritik adım)
            const options = {
                scale: 2, // 3 yerine 2 performans ve kalite için idealdir
                useCORS: true,
                allowTaint: true,
                logging: false,
                ignoreElements: ignoreBookingActions,
                // Buradaki genişliği sayfanın gerçek genişliğine göre ayarla
                windowWidth: 1200,
                onclone: (clonedDoc) => {
                    // Klonlanan dokümanda PDF dosyasının genişliğini sabitleyelim
                    const clonedFile = clonedDoc.getElementById("pdf_file");
                    clonedFile.style.width = "1200px";
                    clonedFile.style.margin = "0 auto";
                }
            };

            try {
                const canvas = await html2canvas(file, options);
                const imgData = canvas.toDataURL("image/jpeg", 1.0);

                // ADIM 2: PDF Boyutlarını Hesapla (A4 Genişliği 210mm)
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const pdfWidth = 210;
                const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

                // ADIM 3: PDF oluştur (İçerik uzunsa tek sayfa ama tam boy)
                const doc = new jsPDF("p", "mm", [pdfWidth, pdfHeight]);

                doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
                doc.save("AirportPickUpLondon_Reservation.pdf");
            } catch (error) {
                console.error("PDF oluşturma hatası:", error);
            }
        }
    };

    function isJSON(string) {
        try {
            let json = JSON.parse(string);
            return true;
        } catch (error) {
            return false;
        }
    }
    const submitDataToGetReservId = () => {

        const method = "POST"
        const headers = { "Content-Type": "application/json" }
        const body = JSON.stringify({ reservation: reservations, configurations: { sendConfirmationEmailToPassenger: true } })
        const url = `${env.apiDomain}/api/v1/reservation/`
        var requestOptions = { method, headers, body, };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((response) => {
                response = isJSON(isJSON) ? JSON.parse(response) : response;
                console.log(response, "reservation id responds");

                if (typeof response === "object" && response.status === 200) {
                    setReservId(response.data["reservations-ids"] ? response.data["reservations-ids"] : null);
                    fetchArchieveToken({ id: response.data["reservations-ids"], stage: "GET_RESERVATION_ID" });

                } else {
                    //if fail it means we dont have any reservation id So we made it null
                    fetchArchieveToken({ id: [[null], [null]], stage: "GET_SERVER_RESPONED", response });

                    let location = "else part fetch response  https://api.london-tech.com/api/v1/reservation"
                    let message = 'Apl reservations-document Component - submitDataToGetReservId function fetch_response_ else part '
                    let options = { requestOptions, response, body }
                    window.handelErrorLogs(location, message, options)
                }
            })
            .catch((error) => {
                let location = error
                let message = 'Apl reservations-document Component - submitDataToGetReservId function fetch_ cathc blog'
                let options = { body }
                window.handelErrorLogs(location, message, options)
                fetchArchieveToken({ id: [[null], [null]], stage: "GET_SERVER_RESPONED", 'response': { 'message': error.message, 'status': error.status } });

            });
    };
    // scrolling from top
    useEffect(() => { submitDataToGetReservId() }, [])
    useEffect(() => {
        if (reservId) fetchArchieveToken({ id: reservId, stage: "RENDER_RESERVATION_DETAILS" });
    }, [reservId]);
    useEffect(() => {
        const confirmationMessage = "If you leave the page, all data will be deleted.";

        const beforeUnloadHandler = (e) => {
            e.preventDefault();
            e.returnValue = confirmationMessage;
        };
     //scrolling to top when page load  smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const disableBackButton = () => {
            window.history.pushState(null, null, window.location.href);
            window.onpopstate = () => {
                window.history.pushState(null, null, window.location.href);
            };
        };

        // Call disableBackButton() once when the component mounts
        disableBackButton();

        const beforeRouteHandler = (url) => {
            // User is trying to go back to the previous page, prevent it
            if (!previousUrls.includes(url)) return;


            // User is trying to leave the current page, show a warning message
            window.addEventListener("beforeunload", beforeUnloadHandler);
            if (!confirm(confirmationMessage) && isPageAuthorized) {
                // User cancelled the warning message, go back to the current page
                router.push(router.asPath);
            } else {
                // User confirmed the warning message, remove the beforeunload listener
                window.removeEventListener("beforeunload", beforeUnloadHandler);
            }
        };

        Router.events.on("routeChangeStart", beforeRouteHandler);

        return () => {
            Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [])

    if (!isPageAuthorized) {
        return <GlobalLayout title={title} description={description} >
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loading />
            </div>
        </GlobalLayout>

    }

    return (
        <GlobalLayout  title={title} description={description} footerbggray={true}>
            <div className={`${styles.rsv_details} page`}>
                <div className={`${styles.rsv_details_section} page_section`}>
                    <div className={`${styles.rsv_details_section_container} page_section_container`} id="pdf_file">
                        {reservId ? <>
                            {reservations.map((obj, index) => {
                                let { transferDetails, passengerDetails, quotation, selectedPickupPoints, selectedDropoffPoints } = obj
                                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                                let { phone, email, firstname } = passengerDetails
                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []

                                let paymentMethodText = appData.words["strPaidViaCreditCard"]
                                if (paymentType === 1) paymentMethodText = appData.words["strPayDriverinCash"]

                                const gallery = carAccordionImages[quotation.carId] ?? []; //quotation.carId
                                //cartypes object for card item as {1:{image:'sds, name:Economy}}
                                const selectedCar = carObject[quotation.carId]
                                let isJourneyReturn = (index === 0 && +journeyType === 0) || (index === 1 && +journeyType === 1)
                                const distance = quotations[index].distance
                                const duration = quotations[index].duration
                                return (
                                    <div key={index} className={styles.container_main} >
                                        <div className={styles.hero}>
                                            <SuccessMark
                                                confirm={appData?.words["strBookingConfirmed"]}
                                                subtitleText={appData?.words["strThankyou"].replace("{{}}", firstname)}
                                                referenceId={reservId[0]?.[index]}
                                                copy={appData.words["strCopy"]}
                                                referenceText={appData.words["strBookingReference"]}
                                            />
                                            {/* <WalletButtons /> */}
                                        </div>

                                        <div className={`${styles.grid} ${styles['grid--3']}`}>
                                            <div className={styles.left_section}>
                                                <JourneyPoints
                                                    index={index}
                                                    pickUpDate={splitedDate}
                                                    pickUpTime={`${splitedHour}: ${splitedMinute}`}
                                                    selectedPickupPoints={selectedPickupPoints}
                                                    selectedDropoffPoints={selectedDropoffPoints}
                                                    direction={direction}
                                                    language={language}
                                             
                                                    env={env}
                                                    distance={distance}
                                                    duration={duration}
                                                />
                                                {/* vehicle passenger */}
                                                <div className={styles["two-col"]}>
                                                    {/* vehicle */}
                                                    <VehicleDetails
                                                        strVehicleAndCapacity={appData.words["strVehicleAndCapacity"]}
                                                        strCarFeatureMaxPassengers={appData.words["strCarFeatureMaxPassengers"].replace("{{}}", selectedCar.pax)}
                                                        strCarFeatureMaxSuitcases={appData.words["strCarFeatureMaxSuitcases"].replace("{{}}", selectedCar.suitcases)}
                                                        strLuggageCapacity={appData.words["strLuggageCapacity"]}
                                                        images={gallery}
                                                        vehicleName={`${selectedCar?.transferType}  ${selectedCar?.name}  `}
                                                        vehicleImgSrc={quotationImagesObjWebp[quotation.carId]?.image}
                                                        strViewFullSize={appData.words["strViewFullSize"]}
                                                    />
                                                    <PassengerDetails
                                                        strNotes={appData.words["strNotes"]}
                                                        strPassengerDetails={appData.words["strPassengerDetails"]}
                                                        name={firstname}
                                                        email={email}
                                                        phone={phone}
                                                        notes={specialRequests}
                                                        passengersNumber={passengersNumber}
                                                               distance={distance}
                                                    duration={duration}
                                                    />
                                                </div>
                                            </div>
                                            <aside className={styles.right}>
                                                <Payment
                                                    summaryText={appData.words["strPaymentSummary"]}
                                                    paymentMethod={paymentMethodText}
                                                    vatText={appData.words["strVat"]}
                                                    priceTitle={appData.words["strJourneyPrice"]}
                                                    quotation={reservations[index]?.quotation}
                                                    totalPaidText={appData.words["strTotalPaid"]}
                                                    strTotalPrice={appData.words["strTotalPrice"]}
                                                    paymentType={paymentType}
                                                />
                                                <WhatIsNext
                                                    whatIsNext={appData.words["strWhatHappensNext"]}
                                                    confSentEmail={appData.words["strConfirmationEmailSent"]}
                                                    weSentaReceipt={appData?.words["strWeveSentaReceipt"]}
                                                    email={email}
                                                    loginto={appData.words["strLogintoManageBooking"]}
                                                    manageBookingText={appData.words["strTrackAndManageBooking"]}
                                                    meetDriver={appData.words["strMeetYourDriver"]}
                                                    strYourDriverWillTrack={appData.words["strYourDriverWillTrack"]}
                                                />

                                                <BookingActions
                                                    index={index}
                                                    downloadText={appData.words["strDownloadReceipt"]}
                                                    backReturnText={appData.words["strBookReturnJourney"]}
                                                    backHomeText={appData.words["strBackToHome"]}
                                                    generatePdf={generatePdf}
                                                    journeyType={journeyType}
                                                    isJourneyReturn={isJourneyReturn}
                                                />

                                                {isJourneyReturn ? <Support
                                                    wpNumber={appData.config.configAPLWhatsappNumber}
                                                    nnedText={appData.words["strNeedtoMakeChanges"]}
                                                    strLiveChat={appData.words["strLiveChat"]}
                                                /> : <></>}
                                            </aside>
                                        </div>
                                    </div>
                                )
                            })}
                        </> :
                            <ProgresBar />
                        }
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}


export default ReservationsDocument
