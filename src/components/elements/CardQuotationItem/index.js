import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.scss";
import HeaderOfResults from './HeaderOfResults';
import OneWayCardItemComponent from './OneWayCardItemComponent';
import VisibleAccordionContent from './VisibleAccordionContent';
import SelectedCardItem from './SelectedCardItem';

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
    gotoTransferDetailsClick = () => { },
    setShowMapOneWay = () => { },
    setShowMapReturn = () => { },
    showMapReturn = false,
    showMapOneWay = false,
  } = params

  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { journeyType, direction, language, quotations } } = state
  const { appData } = useSelector(state => state.initialReducer)
  //cartypes object for card item as {1:{image:'sds, name:Economy}}
  const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
  const [journeyAccrodionStatus, setJourneyAccrodionStatus] = useState(true)
  const [returnJourneyAccordionStatus, setReturnJourneyAccordionStatus] = useState(true)




  const setQuotationHandleClick = async (params = {}) => {
    let { quotation } = params
    checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })
    if (journeyType === 1) {
      if (index === 0) {
        localStorage.setItem("journeyQuotation", JSON.stringify(quotation));
        setJourneyAccrodionStatus(true)
      }
      if (index === 1) {
        localStorage.setItem("returnJourneyQuotation", JSON.stringify(quotation));
        setReturnJourneyAccordionStatus(localStorage?.getItem("returnJourneyQuotation") ? true : false)
      }
    }
  };

  const handleClickForMobile = ({ e, quotation }) => {
    if (451 > document.documentElement.clientWidth)
      checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })

  };

  const changeCar = () => {
    if (journeyType === 1) {
      if (index === 0) {
        localStorage.removeItem("journeyQuotation");
        setJourneyAccrodionStatus(false)
      }
      if (index === 1) {
        localStorage.removeItem("returnJourneyQuotation");
        setReturnJourneyAccordionStatus(false)
      }
    }
  }



  return (
    <div style={{ display: 'flex', flexDirection: "column", }}>
      {journeyType === 1 && (
        <h2 className={`${styles.title} ${direction}`}>
          <span onClick={() => index === 0 ? setShowMapOneWay(!showMapOneWay) : setShowMapReturn(!showMapReturn)}>
            {index === 0 ? (!showMapOneWay ? "Show Map" : "Hide Map") : (!showMapReturn ? "Show Map" : "Hide Map")}
          </span>
          <span>
            {index === 0 ? appData?.words["seGoingDetails"] : appData?.words["seReturnDetails"]}
          </span>
        </h2>
      )}
      <div className={`${styles.result_container}`}>
        <HeaderOfResults duration={duration} distance={distance} language={language} />

        {journeyType === 1 && [0, 1].includes(index) && (
          datas.map((item, i) => (
            <SelectedCardItem
              key={item.carId}
              item={item}
              index={index} //
              direction={direction}
              appData={appData}
              carObject={carObject}
              quotationLoading={quotationLoading}
              selectedQuotation={selectedQuotation}
              changeCar={changeCar}
              accordionStatus={index === 0 ? journeyAccrodionStatus : returnJourneyAccordionStatus}
              journeyType={journeyType}
            />
          ))
        )}

        <VisibleAccordionContent
          journeyType={journeyType}
          datas={datas}
          quotationLoading={quotationLoading}
          selectedQuotation={selectedQuotation}
          carObject={carObject}
          direction={direction}
          appData={appData}
          handleClickForMobile={handleClickForMobile}
          index={index}
          setQuotationHandleClick={setQuotationHandleClick}
          journeyAccrodionStatus={journeyAccrodionStatus}
          returnJourneyAccordionStatus={returnJourneyAccordionStatus}
          setJourneyAccrodionStatus={setJourneyAccrodionStatus}
        />

        <OneWayCardItemComponent
          journeyType={journeyType}
          datas={datas}
          quotationLoading={quotationLoading}
          selectedQuotation={selectedQuotation}
          carObject={carObject}
          direction={direction}
          appData={appData}
          handleClickForMobile={handleClickForMobile}
          setQuotationHandleClick={setQuotationHandleClick}
        />

      </div>
      {index === 1 &&
        <div className={styles.result_container}>
          <div className={`${styles.items_buttons}`}>
            <div> <div onClick={() => router.back()}> <button className='btn btn_primary'>{appData?.words["strGoBack"]}</button></div></div>
            <div> <div onClick={gotoTransferDetailsClick}><button className='btn btn_primary'>{appData?.words["strContinue"]}</button></div></div>
          </div>
        </div>
      }
    </div>
  )
}

export default CardQuotationItem