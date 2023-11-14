import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quotationImagesObj } from '../../../constants/quotationImages';//imagelerin sekilleri gorundeye kullanirix
import env from '../../../resources/env';
import styles from "./styles.module.scss";
import Image from 'next/image';
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
const TourCardQuotation = (params = {}) => {

  //by this index  we r gonna assure in which journey we should add quotation
  let { quotationOptions: datas, selectedQuotation, index, quotationLoading = false, } = params

  const router = useRouter();
  const dispatch = useDispatch();
  const { appData } = useSelector(state => state.initialReducer)
  //cartypes object for card item as {1:{image:'sds, name:Economy}}
  const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

  const setQuotationHandleClick = (params = {}) => {
    // let { quotation } = params
    // checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })
    // dispatch(setQuotation(item, journeyType));
    //
  };

  const handleClickForMobile = ({ e, quotation }) => {
    //  if (451 > document.documentElement.clientWidth)
    // checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })
  };
  // Define the function to return the result based on the condition
  const getClassNameResult = (selectedQuotation, item) => {
    if (Number(selectedQuotation?.carId) === Number(quotationImagesObj[item?.carId]?.id)) {
      return `${styles.card_item} ${styles.selectedCard}`;
    } else {
      return styles.card_item;
    }
  };

  return (
    <div className={`${styles.result_container} ${styles.taxideal_result_container}`}>
      <div id="main_container">
        {datas?.map((item, index) => {
          return (
            <div key={index} className={getClassNameResult(selectedQuotation, item)} onClick={(e) => handleClickForMobile({ e, quotation: item })}>
              {item ?
                <div data={quotationImagesObj[item?.carId]?.id} className={styles.column_first} style={{ backgroundImage: `url(${env.apiDomain}${quotationImagesObj[item?.carId]?.image})` }}> </div>
                : <></>}
              <div className={styles.column_second}>

                <div className={styles.column_second_flex_column}>
                  <div className={styles.car_features}>


                    <div className={styles.feature_column}>
                      <span>
                        <i className={`fa-solid fa-gauge-high ${styles.speed_icon}`}></i>


                      </span>
                    </div>
                    <div className={styles.feature_column}>
                      <span>
                        <span></span>
                        {carObject?.[item?.carId]?.transferType}
                      </span>
                    </div>
                    <div className={styles.feature_column}>
                      <span>
                        <span></span>
                        {carObject?.[item?.carId]?.name}
                      </span>
                    </div>
                  </div >
                  <div className={styles.car_features}>
                    <div className={styles.feature_column}><span><span>{carObject?.[item?.carId]?.suitcases}</span> Suitcases</span></div>
                    <div className={styles.feature_column}>
                      <span>
                        <span>{carObject?.[item?.carId]?.pax}</span>
                        Passengers
                      </span>
                    </div>
                  </div >
                </div >
              </div >

              {item ?
                < div className={` ${styles.column_third}`}>
                  <div className={styles.price}>{quotationLoading ? "..." : `£${item?.price.split(".")[0]}`}</div>
                  <div className={styles.total}>Total Price</div>
                  <button onClick={() => setQuotationHandleClick({ quotation: item })} className={`btn btn_primary ${Number(selectedQuotation?.carId) === Number(carObject?.[item?.carId]?.id) ? styles.selectedBtn : <React.Fragment></React.Fragment>}`}   >
                    {quotationLoading ? "<WaveLoading />" : Number(selectedQuotation?.carId) === Number(carObject?.[item?.carId]?.id) ? `Selected` : `Select`}
                  </button>
                </div>
                : <></>}


            </div>
          )
        })}

      </div>
    </div>
  )
}

export default TourCardQuotation
