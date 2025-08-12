import React from 'react';
import styles from './styles.module.scss';
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation';
import { quotationImagesObjWebp } from '../../../constants/quotationImages';
import meetAndGret from '../../../../public/images/icons/blackMeetAndGreet.svg';
import Image from 'next/image';

const SelectedCardItem = ({ item, index, direction, quotationLoading, appData, carObject, selectedQuotation, changeCar, accordionStatus, }) => {

    const quotationKey = index === 1 ? "returnJourneyQuotation" : "journeyQuotation";
    const storedQuotation = JSON.parse(localStorage?.getItem(quotationKey));
    const storedCarId = Number(storedQuotation?.carId);
    const imageObj = quotationImagesObjWebp[item?.carId];
    const _item_details = getPriceDetailsFromQuotation({ quotation: item }).data || {};
    const isSelected = Number(selectedQuotation?.carId) === Number(imageObj?.id);
    const renderSelectedItem = storedCarId === Number(imageObj?.id);

    if (!renderSelectedItem || !accordionStatus) return null;

    const car = carObject[item?.carId];

    return (
        <div dataid={index === 0 ? "first_car" : ""} key={item.carId} className={`${styles.card_item} ${isSelected ? styles.selectedCard : ""}`}    >
            <div data={imageObj.id} className={styles.column_first} style={{ backgroundImage: `url(${imageObj?.image})` }} />
            <div className={styles.column_second}>
                <div className={styles.column_second_flex_column}>
                    <div className={styles.name_and_postcode_div}>
                        <div className={styles.postcode}>
                            {car?.transferType}
                            <div className={styles.feature_column}>
                                <i className="fa-solid fa-suitcase"></i>
                                <span>{car?.suitcases}</span>
                            </div>
                        </div>
                        <h3 className={styles.name}>
                            {car?.name}
                            <div className={styles.feature_column}>
                                <i className="fa-solid fa-user"></i>
                                <span>{car?.pax}</span>
                            </div>
                        </h3>
                    </div>
                    <div className={styles.car_features}>
                        <div className={styles.feature_column}>
                            <i className="fa-solid fa-user"></i>
                            <span>{car?.pax}</span>
                        </div>
                        <div className={styles.feature_column}>
                            <i className="fa-solid fa-suitcase"></i>
                            <span>{car?.suitcases}</span>
                        </div>
                        <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')} >
                            <Image src={meetAndGret} width="18" height="20" alt="" />
                            <span style={{ paddingLeft: '5px', fontWeight: '500' }}>Meet & Greet</span>
                        </div>
                    </div>

                    <div className={styles.apl_features}>
                        {["strCarFeatureFreeMeetAndGreet", "strCarFeatureNoCharge4Delay", "strCarFeatureFreeWaitingTime", "strFreeCancellation24h", "strCarFeatureFlightTracking", "strComfortableVehicles"]
                            .map((key, i) => (
                                <p key={i} className={`${styles.apl_feature} ${styles.show_more_than360}`}>
                                    <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                    <span>{appData?.words[key]}</span>
                                </p>
                            ))}

                        <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>
                            <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                            <span>{appData?.words["strCarFeatureFlightTracking"]}</span>
                        </p>
                        <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>
                            <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                            <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span>
                        </p>
                        <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                            <span>
                                <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`} />
                                <span>{appData?.words["strFreeCancellation24h"]}</span>
                            </span>
                            <span className={styles.price_span}>
                                {quotationLoading ? "..." : `£${String(item.normalPrice || '').split('.')[0]}.`}<span>00</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                <div className={styles.price}>
                    {quotationLoading ? "..." : `£${String(_item_details?.normalPrice || '').split('.')[0]}.`}
                    <span>00</span>
                </div>
                <div className={styles.total}>{appData?.words["strTotalPrice"]}</div>
                <button
                    onClick={changeCar}
                    className={`btn btn_primary ${isSelected ? styles.selectedBtn : ""}`}
                >
                    {!selectedQuotation?.carId ? appData?.words["strSeeAllCars"] : appData?.words["strYouSelected"]}
                </button>
            </div>
        </div>
    );
};

export default SelectedCardItem;
