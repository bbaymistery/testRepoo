let description = "We specialize in airport transfer shuttle service. We can provide you with a chauffeur driven car to and from all major London airports. The airports include Heathrow, Gatwick, Stanstead, Luton and City airport.!"
let title = "Results Airport Transfers London Airport Pickups"
let keywords = " London airport transfers, London airport transfer, heathrow airport transfer, Gatwick airport transfer, stansted airport transfer, luton airport transfer, shuttle service, shuttle services, airport shuttle services, airport transfer shuttle service,  airport taxi service, taxi services, cab services, airport taxi service, London airport, airport transport, luton airport transport, London airport transportation, London shuttle services, Gatwick airport shuttle service, Heathrow airport shuttle service, Luton airport shuttle service, Stansted airport shuttle service, London airport taxi transfer, London airport shuttle, airport transfers London, airport transfers, chauffeur driven car, chauffeur driven cars, airport pick up and drop."

import { createWrapper } from 'next-redux-wrapper'
import { useRouter } from 'next/router'
import React from 'react'
import 'react-phone-input-2/lib/style.css'
import { useSelector } from 'react-redux'
import FlightWaitingTimeContent from '../../components/elements/FlightWaitingTimeContent'
import InfoModal from '../../components/elements/InfoModal/InfoModal'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'
import store from '../../store/store'
import ManualQuotationFlow from './ManualQuotationFlow'
import TaxiDealQuotationFlow from './TaxiDealQuotationFlow'
import styles from "./styles.module.scss"
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader'


const TransferDetails = (props) => {

    let { env } = props

    const router = useRouter()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { passengerDetailsStatus, modalInfo, direction, quotations, sessionToken: reducerSessionToken, language, journeyType } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: localStorage.getItem("path"), nextUrl: "/payment-details", currentUrl: router.asPath })
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
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
                            />
                        }
                        {modalInfo ? <InfoModal content={<FlightWaitingTimeContent />} /> : <React.Fragment></React.Fragment>}

                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}

export default TransferDetails
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    setNoCacheHeader(res);

    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/transfer-details' : `/${lang}/transfer-details`
        if (req.url === langUrl) {
            return {
                redirect: {
                    destination: lang === 'en' ? "/" : `/${lang}`,
                    permanent: false
                }
            }
        }
    }
    // const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // const geo = geoip.lookup(ip);

    return {
        props: {
            data: ""
        }
    }


});