import { createWrapper } from 'next-redux-wrapper'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardQuotationItem from '../../components/elements/CardQuotationItem'
import WaveLoading from '../../components/elements/LoadingWave'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator'
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper'
import store from '../../store/store'
import Map from "./Map.js"
import QuotationHourMinute from './QuotationHourMinute.js'
import QuotationInputDate from './QuotationInputDate.js'
import QuotatıonInputHandleComponent from './QuotatıonInputHandler.js'
import styles from "./styles.module.scss"
import { readyToCollectQuotationOptions } from '../../helpers/readyToCollectQuotationOptions.js'
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader.js'
let description = "We specialize in airport transfer shuttle service. We can provide you with a chauffeur driven car to and from all major London airports. The airports include Heathrow, Gatwick, Stanstead, Luton and City airport.!"
let title = "Results Airport Transfers London Airport Pickups"
let keywords = " London airport transfers, London airport transfer, heathrow airport transfer, Gatwick airport transfer, stansted airport transfer, luton airport transfer, shuttle service, shuttle services, airport shuttle services, airport transfer shuttle service,  airport taxi service, taxi services, cab services, airport taxi service, London airport, airport transport, luton airport transport, London airport transportation, London shuttle services, Gatwick airport shuttle service, Heathrow airport shuttle service, Luton airport shuttle service, Stansted airport shuttle service, London airport taxi transfer, London airport shuttle, airport transfers London, airport transfers, chauffeur driven car, chauffeur driven cars, airport pick up and drop."



const QuotationResults = (props) => {
  let { isTaxiDeal = false, env } = props

  const router = useRouter()
  const dispatch = useDispatch()
  const didMountRef = useRef(false);

  const state = useSelector(state => state.pickUpDropOffActions)
  let { reservations, params } = state
  let { sessionToken: reducerSessionToken, journeyType, direction, language, quotations, } = params
  const reservationsRef = useRef(reservations);

  const { appData } = useSelector(state => state.initialReducer)

  let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
    'pickup-search-value-0': '',
    'dropoff-search-value-0': '',
    'pickup-search-value-1': '',
    'dropoff-search-value-1': '',
    'collecting-pickup-points-0': [],
    'collecting-dropoff-points-0': [],
    'collecting-pickup-points-1': [],
    'collecting-dropoff-points-1': [],
    'pickup-search-loading-0': false,
    'dropoff-search-loading-0': false,
    'pickup-search-loading-1': false,
    'dropoff-search-loading-1': false,
    'show-pickup-extra-point-0': true,
    'show-dropoff-extra-point-0': true,
    'show-pickup-extra-point-1': false,
    'show-dropoff-extra-point-1': false,

    //quotation loading
    "quotation-loading": false,
    'errorHolder': [],
    "error-booking-message-0": "",
    "error-booking-message-1": "",

  })


  //it is valid when our journey is both way
  const gotoTransferDetailsClick = () => {
    let { quotation: transferQuotation } = reservations[0]
    let { quotation: returnQuotation } = reservations[1]
    //if quotation token doesnt exist ,it means he /she can go to next page

    if (!returnQuotation.token && !transferQuotation.token) {
      alert(appData?.words["strPleaseSelectaCarTypeFor"]);
      return
    }

    if (!returnQuotation.token) {
      alert(appData?.words["strPleaseSelectYourCarTypeForYour"]);
      return
    }
    if (!transferQuotation.token) {
      alert(appData?.words["strPleaseSelectaCarTypeFor"]);
      return
    }

    // router.replace("/transfer-details");
    router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)


  };
  const onChangeSetDateTimeHandler = (params = {}) => {
    let { value, hourOrMinute, journeyType } = params
    dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType, hourOrMinute, value } })
    // getQuotations()
  }

  const getQuotations = (params = {}) => {
    //when select point on postcode we sassing id empty string to be isible -select option 
    //so when we get back to refresh quotation we need to assumed that id is 0 <THIS is not reflecting what he select on trasnfer details page>
    //when we add postcode point we set id :" "  if smone come back to home page change datetime we need to set id:0
    //when we add postcode point we set id :" "  if smone come back to home page change datetime we need to set id:0
    const checkedReservations = reservations.map((obj) => {
      const selectedPickupPoints = obj.selectedPickupPoints.map((point) => {
        if (point.pcatId === 5) {
          return {
            ...point,
            postCodeDetails: { ...point.postCodeDetails, id: 0 },
          };
        }

        if (point.pcatId === 1) {
          return {
            ...point,
            flightDetails: {
              ...point.flightDetails,
              waitingPickupTime: 0,
            },
          };
        }

        return point;
      });

      const selectedDropoffPoints = obj.selectedDropoffPoints.map((point) => {
        if (point.pcatId === 5) {
          return {
            ...point,
            postCodeDetails: { ...point.postCodeDetails, id: 0 },
          };
        }

        if (point.pcatId === 1) {
          return {
            ...point,
            flightDetails: {
              ...point.flightDetails,
              waitingPickupTime: 0,
            },
          };
        }

        return point;
      });

      return {
        ...obj,
        selectedPickupPoints,
        selectedDropoffPoints,
      };
    });


    let errorHolder = reservationSchemeValidator({ reservations: checkedReservations });
    setInternalState({ errorHolder })

    if (errorHolder.status === 200) readyToCollectQuotationOptions({ dispatch, setInternalState, router, journeyType, reservations: checkedReservations, language, shouldNavigate: false, env, appData })
  }


  const [showMapOneWay, setShowMapOneWay] = useState(false)
  const [showMapReturn, setShowMapReturn] = useState(false)
  //when we go quotation page then go back In that case we should check
  //if we have points or not.According for that we will show add extrapoint or not
  useEffect(() => {
    let { selectedDropoffPoints, selectedPickupPoints } = reservations[0]
    if (selectedDropoffPoints?.length > 0 && selectedPickupPoints?.length > 0) {
      setInternalState({ [`show-pickup-extra-point-0`]: true })
      setInternalState({ [`show-dropoff-extra-point-0`]: true })
    }

    if (journeyType === 1) {
      let { selectedDropoffPoints, selectedPickupPoints } = reservations[1]
      if (selectedDropoffPoints?.length > 0 && selectedPickupPoints?.length > 0) {
        setInternalState({ [`show-pickup-extra-point-1`]: true })
        setInternalState({ [`show-dropoff-extra-point-1`]: true })
      }
    }

    //for mobile scrolling
    const container = document?.querySelector("#main_container");
    if (990 > document?.documentElement?.clientWidth) {
      window.scroll({
        top: container?.getBoundingClientRect()?.top - 82,
        left: 0,
        behavior: "smooth",
      });
    }

    localStorage.setItem("path", router.asPath);

  }, [])

  useEffect(() => {
    if (didMountRef.current) {
      if (
        reservations?.[0]?.transferDetails?.transferDateTimeString ||
        reservations?.[1]?.transferDetails?.transferDateTimeString
      ) {
        getQuotations();
      }
    } else {
      // İlk render'da çalışmaz ama flag setlenir
      didMountRef.current = true;
    }
  }, [
    reservations?.[0]?.transferDetails?.transferDateTimeString,
    reservations?.[1]?.transferDetails?.transferDateTimeString,
  ]);
  useEffect(() => {
    reservationsRef.current = reservations;
  }, [reservations]);

  const didmountRefStorage = useRef(false);

  useEffect(() => {
    if (!didmountRefStorage.current) {
      didMountRef.current = true;

      if (+journeyType === 1) {
        if (reservations[0].quotation.carId && reservations[1].quotation.carId) {
          localStorage.setItem("journeyQuotation", JSON.stringify(reservations[0].quotation));
          localStorage.setItem("returnJourneyQuotation", JSON.stringify(reservations[1].quotation));
        } else {
          localStorage.setItem("journeyQuotation", JSON.stringify(quotations[0].quotationOptions[0]));
          localStorage.setItem("returnJourneyQuotation", JSON.stringify(quotations[0].quotationOptions[0]));
        }
      }
    }
  }, []);
  return (
    <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true} >
      <div className={`${styles.quotation} page`}>
        <div className={`${styles.quotation_section} page_section`}>
          <div className={`${styles.quotation_section_container} page_section_container`}>
            {
              reservations.map((obj, index) => {
                let reservationError = (internalState.errorHolder.status === 403 && Array.isArray(internalState.errorHolder.reservations)) ? internalState.errorHolder.reservations?.[index] : {};

                let { transferDetails, selectedPickupPoints, selectedDropoffPoints } = obj
                let { transferDateTimeString } = transferDetails

                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []

                return (
                  <div key={index} style={{ marginBottom: `${index === 0 ? "1rem" : "0"}` }}>
                    {+journeyType === 0 && index === 0 ? <h2 className={`${styles.title} ${direction}`}>{appData?.words["seGoingDetails"]}</h2> : <React.Fragment></React.Fragment>}
                    {/* {index === 1 ? <h2 className={`${styles.title} ${direction}`}>{appData?.words["seReturnDetails"]}</h2> : <React.Fragment></React.Fragment>} */}
                    <div className={`${styles.main_container} ${direction} `}>
                      <div className={`${styles.quotation_panel}`} style={{ height: +journeyType === 0 ? "800px" : "" }}>
                        <div className={styles.form_div} action="">

                          {
                            ["pickup", "dropoff"].map((destination) => (
                              <QuotatıonInputHandleComponent
                                key={destination}
                                destination={destination}
                                selectedPoints={destination === "pickup" ? selectedPickupPoints : selectedDropoffPoints}
                                direction={direction}
                                index={index}
                                reservationError={reservationError}
                                internalState={internalState}
                                env={env}
                                language={language}
                                appData={appData}
                                setInternalState={setInternalState}
                                reservationsRef={reservationsRef}
                                reservations={reservations}
                                reducerSessionToken={reducerSessionToken}
                                getQuotations={getQuotations}
                              />
                            ))
                          }

                          <QuotationInputDate
                            appData={appData}
                            index={index}
                            splitedDate={splitedDate}
                            direction={direction}
                            reservations={reservations}
                            onChangeSetDateTimeHandler={onChangeSetDateTimeHandler}
                            selectedPickupPoints={selectedPickupPoints}

                          />

                          <QuotationHourMinute
                            appData={appData}
                            env={env}
                            language={language}
                            splitedMinute={splitedMinute}
                            selectedPickupPoints={selectedPickupPoints}
                            splitedHour={splitedHour}
                            index={index}
                            onChangeSetDateTimeHandler={onChangeSetDateTimeHandler}
                          />
                          {internalState[`error-booking-message-${index}`] ?
                            <div className={styles.errorBookedMessage}>
                              <p>{internalState[`error-booking-message-${index}`]}</p>
                            </div>
                            : <></>}
                          <button disabled={internalState[`quotation-loading`]} className={`btn btn_primary  ${styles.button}`} onClick={() => getQuotations()} style={{ marginTop: '1rem' }}>
                            <span>{internalState[`quotation-loading`] ? <WaveLoading /> : `${appData?.words["seUpdateQuotation"]}`}</span>
                          </button>
                        </div>
                        {(() => {
                          const showMap =
                            ((selectedDropoffPoints.length > 0 && index === 1) && showMapReturn) ||
                            ((selectedPickupPoints.length > 0 && index === 0) && showMapOneWay) ||
                            ((selectedDropoffPoints.length > 0 && selectedPickupPoints.length > 0) && +journeyType === 0);

                          return showMap ? (
                            <div className={styles.map_direction}>
                              <Map env={env} datas={quotations[index]} selectedPickPoints={selectedPickupPoints} selectedDroppOfPoints={selectedDropoffPoints} />
                            </div>
                          ) : null;
                        })()}
                      </div>
                      {/* //*Card item of results */}
                      <div>
                        {!internalState[`error-booking-message-${index}`] && selectedPickupPoints.length > 0 && selectedDropoffPoints.length > 0 &&
                          <CardQuotationItem
                            index={index}
                            isTaxiDeal={isTaxiDeal}
                            distance={quotations[index].distance}
                            duration={quotations[index].duration}
                            selectedQuotation={reservations[index]?.quotation}
                            quotationOptions={quotations[index].quotationOptions}
                            quotationLoading={internalState[`quotation-loading`]}
                            gotoTransferDetailsClick={gotoTransferDetailsClick}
                            journeyType={journeyType}
                            setShowMapOneWay={setShowMapOneWay}
                            setShowMapReturn={setShowMapReturn}
                            showMapOneWay={showMapOneWay}
                            showMapReturn={showMapReturn}
                          />
                        }
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </GlobalLayout>
  )
}

export default QuotationResults



const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  setNoCacheHeader(res);

  const initialLanguages = store.getState().initialReducer?.appData?.languages
  const langs = initialLanguages.map((lang) => lang.value)

  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i]
    const langUrl = lang === 'en' ? '/quotation-results' : `/${lang}/quotation-results`
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
