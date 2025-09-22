import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Router, useRouter } from "next/router";
import { createWrapper } from 'next-redux-wrapper'
import styles from "./styles.module.scss"

import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper'
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'

import PaymentPageSummary from '../../components/elements/PaymentPageSummary'
import PaymentMethods from '../../components/elements/PaymentMethods'
import CarInfo from '../../components/elements/PaymentCarInfo'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import moment from "moment-timezone";
import { collectQuotationsAsync } from '../../helpers/getQuotations';
import { getPriceDetailsFromQuotation } from '../../helpers/getPriceDetailsFromQuotation';
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { postDataAPI } from '../../helpers/fetchDatas';


let title = ""
let keywords = ""
let description = ""


const PaymentDetails = (props) => {

    let { env } = props

    const router = useRouter()
    const { appData } = useSelector(state => state.initialReducer)

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { tokenForArchieve, direction, journeyType, sessionToken: reducerSessionToken, language } } = state

    const tourActionState = useSelector(state => state.tourActions) || {}; // Add a fallback to an empty object
    let { selectedTour = {}, pickupPoint = {} } = tourActionState;

    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: "/transfer-details", nextUrl: "/reservations-document", currentUrl: router.asPath })

    const [confirmation, setConfirmation] = useState(true);

    //passenger landing payment page We need archieveToken
    const fetchArchieveToken = async (params = {}) => {
        let { stage } = params
        const method = "POST"
        const reservationObj = reservations
        const url = `${env.apiDomain}/api/v1/sessions/add`;
        const headers = { "Content-Type": "application/json" }
        const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage })
        const response = await fetch(url, { method, body, headers, });
        const data = await response.json();
        console.log({ data, stage });


    };

    useEffect(() => {
        let hasPriceUpdateWarningShown = false;
        let hasShowMessage = false

        const handleFocus = async () => {
            if (hasPriceUpdateWarningShown) return; // ❗ Alert gösterildiyse tekrar çalışmasın

            // Get the current time in UK timezone
            const now = moment().tz("Europe/London");
            console.log("focus");

            for (let index in reservations) {
                const obj = reservations[index];
                const { transferDetails, 'quotation': previousQuotation } = obj;
                const { transferDateTimeString } = transferDetails;

                // 🔧 Parse the transfer date from string into moment object
                const transferTime = moment.tz(transferDateTimeString, "YYYY-MM-DD HH:mm", "Europe/London");

                // 🔴 2.1. If transfer time is in the past, redirect to home page
                if (transferTime.isBefore(now) && !hasShowMessage) {
                    hasShowMessage = true
                    alert(`Transfer time for reservation is in the past. Redirecting to home page.`);
                    window.location.href = "/";
                    return;
                } else {
                    let newQuotationsResponse = { status: 400 }
                    let newQuotations = {}
                    let newQuotationOptions = []
                    console.log(previousQuotation);
                    console.log(newQuotationsResponse);

                    //normal quotation api request again
                    if (+previousQuotation.qtype === 1 || previousQuotation.qtype === 2) {
                        newQuotationsResponse = await collectQuotationsAsync({ reservations, journeyType, env ,message:"APL PaymentDetails - handleFocus() "});
                        if (newQuotationsResponse.status === 200) {
                            newQuotations = newQuotationsResponse.data[index] || {}
                            newQuotationOptions = (newQuotations || {}).quotationOptions || []
                        }
                    }

                    //send taxiDeal request again
                    if (+previousQuotation.qtype === 3) {
                        const taxiDealApiUrl = `${env.apiDomain}/api/v1/taxi-deals/details`
                        const body = {
                            "taxiDealPathname": localStorage.getItem("path"),
                            "language": language,
                            "withoutExprectedPoints": true,
                            "checkRedirect": false,
                            "channelId": 2,
                            transferDateTimeString,
                        }
                        const response = await postDataAPI({ url: taxiDealApiUrl, body, errorMessage: "APL PaymentDetails - handleFocus() function postDataAPI  +previousQuotation.qtype === 3 part" });
                        newQuotationsResponse = { data: [response.data], status: response.status }

                        if (newQuotationsResponse.status === 200) {
                            newQuotations = newQuotationsResponse.data[0] || {}
                            newQuotationOptions = (newQuotations || {}).quotationOptions || []
                        }
                    }

                    //send tour request again
                    if (+previousQuotation.qtype === 4) {
                        const tourApi = `${env.apiDomain}/api/v1/tours-deals/details`
                        const body = { "pathname": localStorage.getItem("path"), "language": language, transferDateTimeString, }

                        const response = await postDataAPI({ url: tourApi, body, errorMessage: "APL PaymentDetails - handleFocus() function postDataAPI  +previousQuotation.qtype === 4 part" });
                        newQuotationsResponse = { data: [response.data], status: response.status }

                        if (newQuotationsResponse.status === 200) {
                            newQuotations = newQuotationsResponse.data[0] || {}
                            newQuotationOptions = (newQuotations || {}).quotationOptions || []
                        }
                    }

                    if (newQuotationsResponse.status === 200) {
                        const newQuotation = newQuotationOptions.find(item => item.carId === previousQuotation.carId);
                        if (newQuotation && typeof newQuotation.normalPrice === 'number' && !isNaN(newQuotation.normalPrice)) {
                            let prevQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': previousQuotation, qtype: previousQuotation.qtype }).data || {};
                            let newQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': newQuotation, qtype: newQuotation.qtype }).data || {};
                            if (newQuotationDetails.price !== prevQuotationDetails.price) {
                                //!alert on focus checking for quotation price without updaing the quoation object
                                hasPriceUpdateWarningShown = true; // ❗ Alert gösterildi, artık tetiklenmesin
                                alert(appData.words["strPriceUpdatedOnPaymentPage"])

                            }

                        }
                    }
                }
            }
        };

        // 🔔 Listen to window focus to re-check if pricing needs update
        window.addEventListener("focus", handleFocus);

        return () => {
            window.removeEventListener("focus", handleFocus);
        };
    }, []);



    // prompt the user if they try and leave with unsaved changes
    useEffect(() => {
        const confirmationMessage = "If you leave the page, all data will be deleted.";
        // This function will be triggered when the user tries to leave the page
        const beforeUnloadHandler = async (e) => {
            // When we click to close the browser
            setTimeout(() => { fetchArchieveToken({ stage: "PLAN_TO_CLOSE_PAYMENT_PAGE" }) }, 10);

            // In case it is cancelled
            if (window.event.cancelable) {
                setTimeout(() => { fetchArchieveToken({ stage: "PAYMENT_PAGE_NOT_CLOSED" }) }, 450);
            }

            if (confirmation) {
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };

        // This function will be triggered when the user tries to navigate to another page
        const beforeRouteHandler = (url) => {

            if (confirmation) {
                if (nexturls.includes(url) || previousUrls.includes(url) || currentUrls.includes(url)) {
                    setConfirmation(false);
                    return;
                } else {
                    setConfirmation(true);
                }

                if (Router.pathname !== url && !confirm(confirmationMessage)) {
                    Router.events.emit("routeChangeError");
                    throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
                }
            }
        };

        // This function is triggered when the user closes the browser or reloads the page
        const handleEndConcert = async () => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const method = "POST";
            const reservationObj = reservations;
            const url = `${env.apiDomain}/api/v1/sessions/add`;
            const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage: "PAYMENT_PAGE_IS_CLOSED" });
            const response = await fetch(url, { method, body, headers, keepalive: true });
            const data = await response.json();
        };
        // Add event listeners to handle the above functions
        window.addEventListener("beforeunload", beforeUnloadHandler);
        window.addEventListener('unload', handleEndConcert);
        Router.events.on("routeChangeStart", beforeRouteHandler);

        // Remove the event listeners when the component is unmounted
        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            window.removeEventListener('unload', handleEndConcert);
            Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [confirmation]);


    useEffect(() => {
        // 
        fetchArchieveToken({ stage: "LANDED_INTO_PAYMENT_PAGE" })

    }, [])

    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.payment_details} page`}>
                <div className={`${styles.payment_details_section} page_section`}>
                    <div className={`${styles.payment_details_section_container} page_section_container`}>
                        {/* strTotalPrice */}
                        <div className={styles.payment_details_section} >

                            {reservations.map((obj, index) => {
                                let { transferDetails, quotation, selectedPickupPoints, selectedDropoffPoints, passengerDetails } = obj
                                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []


                                return (
                                    <div key={index}>
                                        <div className={`${styles.main_container} ${reservations.length > 1 && index === 0 ? "mb_4" : ""}`} >
                                            <CarInfo index={index} quotation={quotation} splitedHour={splitedHour} splitedDate={splitedDate} splitedMinute={splitedMinute} selectedTour={selectedTour} tourDetailsStatus={true} />
                                            <PaymentPageSummary
                                                index={index}
                                                email={passengerDetails.email}
                                                phone={passengerDetails.phone}
                                                specialRequests={specialRequests}
                                                passengersNumber={passengersNumber}
                                                firstname={passengerDetails.firstname}
                                                selectedPickupPoints={selectedPickupPoints}
                                                selectedDropoffPoints={selectedDropoffPoints}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                            <PaymentMethods env={env} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default PaymentDetails

const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    setNoCacheHeader(res);

    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/payment-details' : `/${lang}/payment-details`
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
            data: ''
        }
    }


});
