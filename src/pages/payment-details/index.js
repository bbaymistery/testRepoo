import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Router, useRouter } from "next/router";
import { createWrapper } from 'next-redux-wrapper'
import styles from "./styles.module.scss"

import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'

import GlobalLayout from '../../components/layouts/GlobalLayout'
import moment from "moment-timezone";
import { collectQuotationsAsync } from '../../helpers/getQuotations';
import { getPriceDetailsFromQuotation } from '../../helpers/getPriceDetailsFromQuotation';
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { postDataAPI } from '../../helpers/fetchDatas';
import ProgressContainer from './ProgressContainer';

import NewPaymentDesign from '../../components/elements/NewPaymentDesign';
import TrustBudgetSsl from './TrustBudgetSsl';
import NeedHelp from './NeedHelp';
import OrderSummary from './OrderSummary';
import usePageLeave from '../../hooks/usePageLeave';
import usePageGuard from '../../hooks/usePageGuard';
import Loading from '../../components/elements/Loading';

let title = "Payment Details | APL"
let description = "Securely finalize your London airport transfer. Enter your payment details to confirm your booking with Airport Pickups London."


const PaymentDetails = (props) => {

    let { env } = props

    const router = useRouter()
    const { appData } = useSelector(state => state.initialReducer)

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { tokenForArchieve, direction, journeyType, sessionToken: reducerSessionToken, language, quotations } } = state
    // 1. parseInt yerine Number kullanarak kuruşları koruyoruz
    const calculatedPrice = Number(journeyType) === 0
        ? Number(reservations[0].quotation.price)
        : Number(reservations[0].quotation.price) + Number(reservations[1].quotation.price);

    // 2. Sonra .toFixed(2) ile formatlayalım
    let totalPrice = ` £ ${calculatedPrice.toFixed(2)}`;
    console.log({ totalPrice });

    const tourActionState = useSelector(state => state.tourActions) || {}; // Add a fallback to an empty object
    let { selectedTour = {}, pickupPoint = {} } = tourActionState;

    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: "/transfer-details", nextUrl: "/reservations-document", currentUrl: router.asPath })
    const isDataValid = reservations[0]?.quotation?.price;
    const { isPageAuthorized } = usePageGuard(isDataValid, () => { });

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


                    //normal quotation api request again
                    if (+previousQuotation.qtype === 1 || previousQuotation.qtype === 2) {
                        newQuotationsResponse = await collectQuotationsAsync({ reservations, journeyType, env, message: "APL PaymentDetails - handleFocus() message" });
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
                    //handle the request for the quotation
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


        //scrolling to top when page load  smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return () => {
            window.removeEventListener("focus", handleFocus);
        };
    }, []);


    //confirmation hook  with stages 
    usePageLeave({
        reservations,
        tokenForArchieve,
        apiDomain: env.apiDomain,
        allowedUrls: [...nexturls, ...previousUrls, ...currentUrls],
        isEnabled: isPageAuthorized, // İstersen bir koşula bağlayabilirsin
        planToClose: "PLAN_TO_CLOSE_PAYMENT_PAGE",
        pageNotClosed: "PAYMENT_PAGE_NOT_CLOSED",
        pageIsClosed: "PAYMENT_PAGE_IS_CLOSED",
    });
    useEffect(() => {
        // 
        fetchArchieveToken({ stage: "LANDED_INTO_PAYMENT_PAGE" })

    }, [])
    if (!isPageAuthorized) {
        return <GlobalLayout title={title} description={description} >
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loading />
            </div>
        </GlobalLayout>

    }

    return (
        <GlobalLayout title={title} description={description} footerbggray={true}>
            <div className={`${styles.payment_details} page`}>
                <div className={`${styles.payment_details_section} page_section`}>
                    <div className={`${styles.payment_details_section_container} page_section_container`}>
                        <div className={`${styles.grid_layout}`} >
                            <div className={styles.main_column}>
                                <ProgressContainer appData={appData} />
                                <NewPaymentDesign env={env} totalPrice={totalPrice} />
                                <TrustBudgetSsl appData={appData} />
                                <NeedHelp appData={appData} />
                            </div>
                            <div className={styles.sidebar_column}>
                                <OrderSummary
                                    selectedTour={selectedTour}
                                    language={language}
                                    direction={direction}
                                    appData={appData}
                                    reservations={reservations}
                                    totalPrice={totalPrice}
                                    quotations={quotations}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default PaymentDetails

