import React from 'react'
import styles from "./styles.module.scss"
import store from '../../store/store'
import { createWrapper } from 'next-redux-wrapper'
import CarInfo from '../../components/elements/PaymentCarInfo'
import GlobalLayout from '../../components/layouts/GlobalLayout';
import PaymentMethods from '../../components/elements/PaymentMethods'
import { useDispatch, useSelector } from 'react-redux'
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper'
import PaymentPageSummary from '../../components/elements/PaymentPageSummary'

let title = ""
let keywords = ""
let description = ""
const TourPaymentDetails = () => {
    const tourActionState = useSelector(state => state.tourActions)
    let { quotation, passengerDetails: { firstname, phone, email }, selectedTour, transferDetails: { transferDateTimeString, specialRequests, passengersNumber, }, pickupPoint } = tourActionState
    // //we use it to render paxs inside select component
    // const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
    const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.payment_details} page`}>
                <div className={`${styles.payment_details_section} page_section`}>
                    <div className={`${styles.payment_details_section_container} page_section_container`}>
                        {/* strTotalPrice */}
                        <div className={styles.payment_details_section} >

                            {/* {reservations.map((obj, index) => {
                        let { transferDetails, quotation, selectedPickupPoints, selectedDropoffPoints, passengerDetails } = obj
                        let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                        const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                        const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []

                        return ( */}
                            <div >
                                <div className={`${styles.main_container}`} >
                                    <CarInfo index={0} quotation={quotation} splitedHour={splitedHour} splitedDate={splitedDate} splitedMinute={splitedMinute} selectedTour={selectedTour} tourDetailsStatus={true} />
                                    <PaymentPageSummary
                                        email={email}
                                        phone={phone}
                                        specialRequests={specialRequests}
                                        passengersNumber={passengersNumber}
                                        firstname={firstname}
                                        selectedPickupPoints={[]}
                                        selectedDropoffPoints={[]}
                                        tourPickupPointAddress={pickupPoint}
                                        selectedTour={selectedTour}
                                        tourDetailsStatus={true}
                                    />
                                </div>
                            </div>
                            {/* )
                    })} */}
                            {/* <PaymentMethods selectedTour={selectedTour} tourDetailsStatus={true} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default TourPaymentDetails

const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/tour_payment_details' : `/${lang}/tour_payment_details`
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