import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import { splitAndTranslateDuration } from '../../../helpers/splitHelper'
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation'
import TransferJourneyAcceptedCards from './TransferJourneyAcceptedCards'
import TaxiDealsJourneyPanel from './TaxiDealsJourneyPanel'
import NormalJourneyPanel from './NormalJourneyPanel'

//props>> selectedPickuppoints and selectedDropoffPoints  , splitedDate splitedHour splitedMinute
const TransferJourneySummaryPanel = (props) => {
    let { index, quotation, isTaxiDeal = false, language, setOpenModal } = props

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { quotations, direction, modalInfo } } = state
    let _quotationDetails = getPriceDetailsFromQuotation({ quotation, qtype: quotation.qtype }).data || {}
    const [formattedDuration, setFormattedDuration] = useState(null)
    const { appData } = useSelector(state => state.initialReducer)
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});


    // Check if distance exists, remove 'mile', and convert to km
    const distanceInMiles = quotations[index].distance ? parseFloat(quotations[index].distance.replace(' mile', '')) : null;
    const distanceInKm = distanceInMiles ? (distanceInMiles * 1.60934).toFixed(2) : null;

    // Format the duration based on the language

    useEffect(() => {
        if (quotations[index]?.duration && language && appData) {
            const formatted = splitAndTranslateDuration(quotations[index].duration, language, appData);
            setFormattedDuration(formatted);
        }
    }, [language, appData]);


    return (
        <div className={`${styles.journey_summary_panel} ${isTaxiDeal ? styles.journey_summary_panel_taxi_deal : ""}`}>
            {isTaxiDeal ?
                <TaxiDealsJourneyPanel
                    distanceInMiles={distanceInMiles}
                    distanceInKm={distanceInKm}
                    formattedDuration={formattedDuration}
                    quotations={quotations}
                    index={index}
                    _quotationDetails={_quotationDetails}
                    carObject={carObject}
                    setOpenModal={setOpenModal}
                    appData={appData}
                    {...props}
                />
                :
                <NormalJourneyPanel
                    distanceInMiles={distanceInMiles}
                    distanceInKm={distanceInKm}
                    formattedDuration={formattedDuration}
                    quotations={quotations}
                    carObject={carObject}
                    appData={appData}
                    direction={direction}
                    _quotationDetails={_quotationDetails}
                    setOpenModal={setOpenModal}
                    {...props}
                />}
            {isTaxiDeal && <TransferJourneyAcceptedCards />}

        </div>
    )
}

export default TransferJourneySummaryPanel
