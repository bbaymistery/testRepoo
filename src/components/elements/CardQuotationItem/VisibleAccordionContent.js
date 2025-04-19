import React from 'react'
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation'
import WaveLoading from '../LoadingWave'
import Image from 'next/image'
import { quotationImagesObjWebp } from '../../../constants/quotationImages'
import styles from "./styles.module.scss"
import meetAndGret from '../../../../public/images/icons/blackMeetAndGreet.svg'

const VisibleAccordionContent = (props) => {

    let { journeyType, journeyAccrodionStatus, returnJourneyAccordionStatus, datas, handleClickForMobile, carObject, appData, direction, setQuotationHandleClick, selectedQuotation, index, quotationLoading } = props
    return (!journeyAccrodionStatus && index === 0 && journeyType === 1 || !returnJourneyAccordionStatus && index === 1 && journeyType === 1) && datas?.map((item, index) => {
        let _item_details = getPriceDetailsFromQuotation({ quotation: item }).data || {}
        return (
            <div id="main_container" key={item?.carId + 1000}>
                <div
                    dataid={index === 0 ? "first_car" : ""}
                    className={`${styles.card_item} ${Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId].id) ? styles.selectedCard : ""}`}
                    onClick={(e) => handleClickForMobile({ e, quotation: item })} >
                    <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}> </div>
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
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strComfortableVehicles"]}</span> </p>
                                <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                                    <span>
                                        <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                                        </i>
                                        <span>{appData?.words["strFreeCancellation24h"]}</span>
                                    </span>

                                    <span className={`${styles.price_span}`} >
                                        {quotationLoading ? "..." : `£${String((_item_details || {}).normalPrice || '').split(".")[0]}.`}
                                        <span>00</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                        <div className={styles.price}>{quotationLoading ? "..." : `£${String(_item_details.normalPrice || '').split(".")[0]}.`} <span>00</span> </div>
                        <div className={styles.total}>{appData?.words["strTotalPrice"]}</div>
                        <button onClick={() => setQuotationHandleClick({ quotation: item })} className={`btn btn_primary ${Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? styles.selectedBtn : ""}`}   >
                            {quotationLoading ? <WaveLoading /> : Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? `${appData?.words["quSelectedButton"]}` : `${appData?.words["quSelectButton"]}`}
                        </button>
                    </div>
                </div>
            </div>
        )
    })
}

// en altına şunu ekle:
export default React.memo(VisibleAccordionContent);
