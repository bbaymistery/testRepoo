

import React, { useEffect } from 'react'
import 'react-phone-input-2/lib/style.css'
import { useSelector } from 'react-redux'
import InfoModal from '../../components/elements/InfoModal/InfoModal'
import Loading from '../../components/elements/Loading'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import usePageGuard from '../../hooks/usePageGuard'
import usePageLeave from '../../hooks/usePageLeave'
import ManualQuotationFlow from './ManuelFlow/ManualQuotationFlow'
import TaxiDealQuotationFlow from './TaxiFlow'
import styles from "./styles.module.scss"

let title = " Airport Pickups London | Finalize Your Transfer ";
let description = "Please enter your journey details to secure your reliable London airport transfer.";
const TransferDetails = (props) => {

    let { env, } = props

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { passengerDetailsStatus, modalInfo, direction, quotations, sessionToken: reducerSessionToken, language, journeyType, tokenForArchieve } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const isDataValid = reservations[0]?.quotation?.price;
    const { isPageAuthorized } = usePageGuard(isDataValid, () => { });
    //passenge
    //passenger landing payment page We need archieveToken
    const fetchArchieveToken = async (params = {}) => {
        if (!isPageAuthorized) return
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
    usePageLeave({
        reservations,
        tokenForArchieve,
        apiDomain: env.apiDomain,
        allowedUrls: [],
        isEnabled: false,
        planToClose: "PLAN_TO_CLOSE_WEBSITEE",
        pageIsClosed: "WEBSITE_IS_CLOSED",
    });




    useEffect(() => {
        fetchArchieveToken({ stage: "LANDED_INTO_TRANSFER_DETAILS_PAGE" })
        //smooth scroll
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    if (!isPageAuthorized) {
        return <GlobalLayout title={title} description={description} >
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loading />
            </div>
        </GlobalLayout>

    }

    return (
        <GlobalLayout title={title} description={description} >

            <div className={`${styles.tr_details} page`}>
                <div className={`${styles.tr_details_section} page_section`}>
                    <div className={`${styles.tr_details_section_container} page_section_container`}>

                        {quotations[0].taxiDeal ?
                            // isTaxideal true
                            <TaxiDealQuotationFlow
                                quotations={quotations}
                                appData={appData}
                                env={env}
                                reservations={reservations}
                                language={language}
                                direction={direction}
                                passengerDetailsStatus={passengerDetailsStatus}
                                reducerSessionToken={reducerSessionToken}
                                fetchArchieveToken={fetchArchieveToken}
                            />
                            :
                            // !in case client comes from normal way to transfer details
                            <ManualQuotationFlow
                                quotations={quotations}
                                appData={appData}
                                env={env}
                                language={language}
                                reservations={reservations}
                                direction={direction}
                                journeyType={journeyType}
                                passengerDetailsStatus={passengerDetailsStatus}
                                fetchArchieveToken={fetchArchieveToken}
                            />
                        }
                        {modalInfo ? <InfoModal appData={appData} content={appData?.words["seParkingNote"]} /> : <React.Fragment></React.Fragment>}

                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}

export default TransferDetails
