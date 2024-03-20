import { createWrapper } from 'next-redux-wrapper';
import React, { useState } from 'react'
import store from '../../store/store';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import GlobalLayout from '../../components/layouts/GlobalLayout';
import styles from "./styles.module.scss"
import TextInput from '../../components/elements/TextInput';
import Select from '../../components/elements/Select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import TourJourneySummaryPanel from '../../components/elements/TourJourneySummaryPanel';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import Textarea from '../../components/elements/Textarea';
import { tourSchemaValidator } from '../../helpers/tourSchemaValidator';
let description = ""
let title = ""
let keywords = ""

const TourCustomerDetails = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { direction, language, } } = state

    const { appData } = useSelector(state => state.initialReducer)
    const tourActionState = useSelector(state => state.tourActions)
    let { quotation, passengerDetails: { firstname, phone, email }, selectedTour, transferDetails: { transferDateTimeString, specialRequests, passengersNumber, }, pickupPoint } = tourActionState
    //we use it to render paxs inside select component
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
    const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
    const [pickupPointAddress, setPickupPointAddress] = useState("")


    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), { 'errorHolder': [], })
    let { errorHolder } = internalState;
    const handleOnChangeNumberInput = (value, _country, name) => dispatch({ type: 'SET_TOUR_PASSEGER_DETAILS', data: { name, value } })

    const handlePickUpPointAddress = (e) => {
        setPickupPointAddress(e.target.value)
        dispatch({ type: 'SET_TOUR_PICKUP_ADRESS', data: { pickupadress: e.target.value } })
    }
    const onchangeHandler = (e) => {
        let { name, value } = e.target;
        if (ifHasUnwantedCharacters(value)) return
        if (['firstname', 'email',].includes(name)) dispatch({ type: 'SET_TOUR_PASSEGER_DETAILS', data: { name, value } })
        if (['passengersNumber', "specialRequests"].includes(name)) dispatch({ type: 'SET_TOUR_TRANSFER_DETAILS', data: { name, value } })
    }

    const checkValidation = (e) => {
        let passengerDetails = { firstname, phone, email }
        let errorHolder = tourSchemaValidator({ passengerDetails, pickupPoint });
        console.log(errorHolder);

        setInternalState({ errorHolder })
        if (errorHolder.status === 200) {
            router.push(`${language === 'en' ? "/tour_payment_details" : `/${language}/tour_payment_details`}`)

        }
    }
    const goBack = (e) => {
        e.preventDefault();
        router.back();
    };
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.tr_details} page`}>
                <div className={`${styles.tr_details_section} page_section`}>
                    <div className={`${styles.tr_details_section_container} page_section_container`}>
                        <div className={styles.transferdetails_subcontainer} id="main_container">
                            <div>
                                <div className={`${styles.transferdetails_subcontainer_content} ${direction}`}>
                                    <div className={`${styles.transferdetails_subcontainer_content_points_and_passengerdetails}`}>
                                        <div className={styles.passenger_details_div}>
                                            {<h2> {appData?.words['strPassengerDetails']}</h2>}
                                            <div className={styles.passenger_details}>
                                                <div className={styles.input_div}>
                                                    <TextInput label={appData?.words["strFullName"]} type="text" name="firstname" onChange={e => onchangeHandler(e)} value={firstname} errorMessage={errorHolder?.passengerDetails?.firstname} />
                                                </div>
                                                <div className={styles.input_div}>
                                                    <TextInput label={appData?.words["strEmail"]} type="text" name="email" onChange={e => onchangeHandler(e)} value={email} errorMessage={errorHolder?.passengerDetails?.email} />
                                                </div>
                                                <div className={styles.input_div}>
                                                    <Select label={appData?.words["strNoofPassengers"]} name="passengersNumber" onChange={e => onchangeHandler(e)} value={passengersNumber} data={carObject[quotation.carId]?.pax} />
                                                </div>
                                                <div className={styles.input_div}>
                                                    <PhoneInput
                                                        className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                        value={phone}
                                                        onChange={(value, selectedCountry) => handleOnChangeNumberInput(value, selectedCountry, "phone")}
                                                        country={"gb"}
                                                        inputProps={{
                                                            name: 'phone',
                                                            required: true,
                                                            style: { border: errorHolder.passengerDetails?.phone ? '1px solid red' : ' 1px solid #ced4da' }
                                                        }}
                                                    />
                                                </div>
                                            </div>


                                            <div className={styles.selected_points_details}>
                                                <h2>  {appData?.words["seGoingDetails"]}  </h2>
                                                <div className={`${styles.selectedlist_points}`} >
                                                    {/* //index =0 it is like destination pickup  */}
                                                    <div className={styles.list}>
                                                        <p className={styles.list_Description}>
                                                            Pickup address
                                                        </p>
                                                    </div>
                                                    <TextInput label={"Description"} type="text" name="pickupadress" onChange={e => handlePickUpPointAddress(e)} value={pickupPointAddress} errorMessage={errorHolder.pickupPoint?.pickupadress} />

                                                </div>
                                            </div>
                                            <div className={styles.textarea_div}>
                                                <Textarea label={appData?.words["strSpecialRequestsTitle"]} name="specialRequests" value={specialRequests} onChange={(e) => onchangeHandler(e)} />
                                            </div>
                                            <div className={` ${direction === 'rtl' ? styles.directionbuttons : styles.buttons} `} >
                                                <div className={styles.left}>
                                                    <button onClick={goBack} className='btn btn_primary'>{appData?.words["strGoBack"]}</button>
                                                    <button onClick={(e) => checkValidation(e)} className='btn btn_primary'>{appData?.words["strNext"]}</button>
                                                </div>
                                                <div className={styles.right}></div>
                                            </div>
                                        </div>
                                    </div>
                                    {<TourJourneySummaryPanel pickupPointAddress={pickupPointAddress} splitedHour={splitedHour} splitedMinute={splitedMinute} splitedDate={splitedDate} quotation={quotation} selectedTour={selectedTour} />}

                                </div>
                                <div className={`${direction === 'rtl' ? styles.directionbuttons_for_gap : styles.buttons_for_gap}  `} >
                                    <div className={styles.left}>

                                    </div>
                                    <div className={styles.right}>
                                        <div className={`${styles.content} ${styles.summarycontent} `}>
                                            <div className={`${styles.left_info} ${styles.acceptedcards}`} style={{ marginTop: "0rem" }} title="Accepted Cards for Airport Pickups London">
                                                <img className={styles.acceptedcards_img} border="0" alt="Accepted Cards for Airport Pickups London " src="/images/others/accepted-cards.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/tour_customer_details' : `/${lang}/tour_customer_details`
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
            data: ""
        }
    }


});
export default TourCustomerDetails