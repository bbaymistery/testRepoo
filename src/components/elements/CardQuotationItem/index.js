import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quotationImagesObj } from '../../../constants/quotationImages';
import env from '../../../resources/env';
import styles from "./styles.module.scss";
import meetAndGret from '../../../../public/images/icons/blackMeetAndGreet.svg'
import Image from 'next/image';
import WaveLoading from '../LoadingWave';
import HeaderOfResults from './HeaderOfResults';
import TaxiDealsContents from '../TaxiDealsContents';
import TitleTaxiDeal from './TitleTaxiDeal';
import ViceVersaUrlTaxiDeal from './ViceVersaUrlTaxiDeal';
const checkJourneyTypeAndAddQuotationToReducer = (params = {}) => {
  //by this index  we r gonna assure in which journey we should add quotation
  //by journey type we r gonn assure should we directly pass to next page or not
  let { journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations } = params

  //if it is both way journey then do not push directly to other page
  if (parseInt(journeyType) === 1) {
    dispatch({ type: "SET_QUOTATION", data: { quotation, journeyType: index } })
  } else {
    dispatch({ type: "SET_QUOTATION", data: { quotation, journeyType: index } })
    //if is taxi deal tru it means we should remove selected point from redux (because someofthem can be with  --select--)
    if (isTaxiDeal) {
      if (quotations[0]?.taxiDeal?.pickupPoints.length > 1) {

        dispatch({ type: "RESELECT_POINTS_FROM_STORE", data: { type: "pickup" } })
      }
      if (quotations[0]?.taxiDeal?.dropoffPoints.length > 1) {
        dispatch({ type: "RESELECT_POINTS_FROM_STORE", data: { type: "dropoff" } })
      }
      router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)
    } else {
      router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)

    }
  }
}
const CardQuotationItem = (params = {}) => {

  //by this index  we r gonna assure in which journey we should add quotation
  let {
    quotationOptions: datas,
    selectedQuotation,
    index,
    quotationLoading,
    duration,
    distance,
    isTaxiDeal = false,
    headTitle,
    previousUrl,
    returnPathname,
    pageTitle,
    pageContent,
    returnPageTitle,
    returnHeadTitle
  } = params

  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { journeyType, direction, language, quotations } } = state
  const { appData } = useSelector(state => state.initialReducer)

  //cartypes object for card item as {1:{image:'sds, name:Economy}}
  const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

  const setQuotationHandleClick = (params = {}) => {
    let { quotation } = params

    // if (isTaxiDeal) {
    //   let errorHolder = reservationSchemeValidator({ reservations, appData });
    //   setInternalState({ errorHolder })
    //   if (errorHolder.status === 200)
    //     checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch })

    // } else {
    checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })

    // }

  };

  const handleClickForMobile = ({ e, quotation }) => {

    //taxideals props passed for cardQuotationItemCompont inside quotation results

    // if (isTaxiDeal) {
    //   let errorHolder = reservationSchemeValidator({ reservations, appData });
    //   setInternalState({ errorHolder })
    //   if (451 > document.documentElement.clientWidth && errorHolder.status === 200)
    //     checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch })
    // } else {
    if (451 > document.documentElement.clientWidth)
      checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })
    // }
  };

  return (
    <div className={`${styles.result_container} ${isTaxiDeal ? styles.taxideal_result_container : ""}`}>
      {/* {isTaxiDeal ? <BreadCrumbTaxiDeal previousUrl={previousUrl} breadCrumbFrom={breadCrumbFrom} breadCrumbTo={breadCrumbTo} direction={direction} /> : <></>} */}
      {isTaxiDeal && headTitle ? <TitleTaxiDeal headTitle={headTitle} direction={direction} pageTitle={pageTitle} /> : <></>}
      {isTaxiDeal && returnPathname ? <ViceVersaUrlTaxiDeal previousUrl={previousUrl} returnPathname={returnPathname} returnHeadTitle={returnHeadTitle} returnPageTitle={returnPageTitle} /> : <></>}

      <HeaderOfResults duration={duration} distance={distance} />
      <div id="main_container">
        {datas?.map((item, index) => {
          return (
            <div
              dataid={index === 0 ? "first_car" : ""}
              key={index}
              className={`
              ${styles.card_item}
              ${Number(selectedQuotation?.carId) === Number(quotationImagesObj[item?.carId].id) ? styles.selectedCard : <React.Fragment></React.Fragment>}
              `}
              onClick={(e) => handleClickForMobile({ e, quotation: item })} >
              <div data={quotationImagesObj[item?.carId].id} className={styles.column_first} style={{ backgroundImage: `url(${env.apiDomain}${quotationImagesObj[item?.carId]?.image})` }}> </div>
              <div className={styles.column_second}>
                <div className={styles.column_second_flex_column}>
                  <div className={styles.name_and_postcode_div}>
                    <div className={styles.postcode}>
                      {carObject[item?.carId]?.transferType}
                      <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                    </div>
                    <h3 className={styles.name}>
                      {carObject[item?.carId]?.name}
                      <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                    </h3>
                  </div>
                  <div className={styles.car_features}>
                    <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                    <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                    <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                      <Image src={meetAndGret} width="18" height="20" alt="" />
                      <span style={{ paddingLeft: "5px", fontWeight: '500' }}>Meet & Greet</span>
                    </div>

                  </div>
                  <div className={styles.apl_features}>
                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{"Free Cancellation (24h)"}</span> </p>
                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{"Comfortable Cars"}</span> </p>



                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                    <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                      <span>
                        <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                        </i>
                        <span>{"Free Cancellation (24h)"}</span>
                      </span>

                      <span className={styles.price_span}>
                        {quotationLoading ? "..." : `£${item?.price.split(".")[0]}.`}
                        <span>00</span>
                      </span>
                    </p>




                  </div>
                </div>
              </div>

              <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                <div className={styles.price}>{quotationLoading ? "..." : `£${item?.price.split(".")[0]}.`} <span>00</span> </div>
                <div className={styles.total}>{appData?.words["strTotalPrice"]}</div>
                <button onClick={() => setQuotationHandleClick({ quotation: item })} className={`btn btn_primary ${Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? styles.selectedBtn : <React.Fragment></React.Fragment>}`}   >
                  {quotationLoading ? <WaveLoading /> : Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? `${appData?.words["quSelectedButton"]}` : `${appData?.words["quSelectButton"]}`}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {isTaxiDeal && pageContent?.length > 1 ? <TaxiDealsContents pageContent={pageContent} /> : <></>}

    </div>
  )
}

export default CardQuotationItem