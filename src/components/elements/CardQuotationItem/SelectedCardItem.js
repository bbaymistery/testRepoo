import React from 'react';
import styles from './styles.module.scss';
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation';
import { quotationImagesObjWebp } from '../../../constants/quotationImages';
import meetAndGret from '../../../../public/images/icons/blackMeetAndGreet.svg';
import Image from 'next/image';
import { carAccordionImages } from '../../../constants/carss';
import LuggageAccordion from '../LuggageAccordion';
import stylesCardQuotationMobile from '../CardQuotationMobile/styles.module.scss';
const SelectedCardItem = ({ item, index, direction, quotationLoading, appData, carObject, selectedQuotation, changeCar, accordionStatus,indexId }) => {
    
    const quotationKey = index === 1 ? "returnJourneyQuotation" : "journeyQuotation";
    const storedQuotation = JSON.parse(localStorage?.getItem(quotationKey));
    const storedCarId = Number(storedQuotation?.carId);
    const imageObj = quotationImagesObjWebp[item?.carId];
    const _item_details = getPriceDetailsFromQuotation({ quotation: item }).data || {};
    const isSelected = Number(selectedQuotation?.carId) === Number(imageObj?.id);
    const renderSelectedItem = storedCarId === Number(imageObj?.id);

    if (!renderSelectedItem || !accordionStatus) return null;

    const car = carObject[item?.carId];
    // ✅ başlangıçta hepsi açık (SSR uyumlu)
    const [openAccordions, setOpenAccordions] = React.useState(() => new Set());


    const toggleAccordion = (id) => {
        setOpenAccordions(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };


    const isOpen = openAccordions.has(item?.carId);
    const accId = `acc-${item?.carId}`;
    // ✅ Bu arabanın galerisi
    const gallery = carAccordionImages[item?.carId] || [];


    let { price: original, normalPrice: net, amountOfVAT: vat } = _item_details


    return (
        <>
            <div className={styles.main_container} >

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
                                <div className={`${styles.feature_column} ${styles.luggage_info}`} onClick={() => toggleAccordion(item?.carId)} aria-expanded={isOpen} aria-controls={accId}>
                                    <i class="fa-solid fa-circle-info"></i> Luggage  Info
                                </div>
                            </div>

                            <div className={styles.apl_features}>
                                <div className={`${styles.feature_column} ${styles.luggage_info}`} onClick={() => toggleAccordion(item?.carId)} aria-expanded={isOpen} aria-controls={accId}>
                                    <i class="fa-solid fa-circle-info"></i> Luggage  Info
                                </div>
                                {["strCarFeatureFreeMeetAndGreet", "strCarFeatureNoCharge4Delay", "strCarFeatureFreeWaitingTime", "strFreeCancellation24h", "strCarFeatureFlightTracking", "strComfortableVehicles"]
                                    .map((key, i) => (
                                        <p key={i} className={`${styles.apl_feature} ${styles.show_more_than360}`}>
                                            <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                            <span>{appData?.words[key]}</span>
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                        <div className={styles.total} style={{ color: 'black' }}>
                            <span style={{ display: 'block', fontSize: '18px' }}>
                                {quotationLoading ? "..." : `£ ${Number(original).toFixed(2)}`}
                            </span>
                            {/* {vat > 0 && <span style={{ color: "#555", fontSize: '12px' }}>
                            {`( ${quotationLoading ? "..." : `£${net}`} + £${vat} ${appData.words["strVat"]} )`}
                        </span>} */}
                        </div>
                        <button onClick={changeCar} className={`btn btn_primary ${isSelected ? styles.selectedBtn : ""}`}  >
                            {!selectedQuotation?.carId ? appData?.words["strSeeAllCars"] : appData?.words["strYouSelected"]}
                        </button>
                    </div>
                </div>
                <LuggageAccordion gallery={gallery} car={car} isOpen={isOpen} accId={accId} />

            </div>
            {/* //for mobile */}
            <div key={item.carId + 20000} className={`${stylesCardQuotationMobile.mobile_card} ${isSelected ? stylesCardQuotationMobile.selected_mobile_card : ""}`}>
                {/* Üst Kısım: Resim, İsim ve Fiyat */}
                <div className={stylesCardQuotationMobile.mob_top_section}>

                    <div className={stylesCardQuotationMobile.mob_car_image_container}>
                        <div
                            // Burada 'index_' ön ekiyle stylesCardQuotationMobile objesinden dinamik çekiyoruz 
                            //storeCardId -1 eledik cunki datas objesi 6 tane ve id siralamasi 6 tane ama biz cardQuotaionmobile de indexe gore clas vermisiz
                            className={`${stylesCardQuotationMobile.mob_car_bg_image} ${stylesCardQuotationMobile[`car_index_${storedCarId-1}`]}`}
                            style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}
                            role="img"
                            aria-label={car?.name}
                        ></div>
                    </div>
                    <div className={stylesCardQuotationMobile.mob_car_details}>
                        <div className={stylesCardQuotationMobile.mob_header_flex}>
                            <span className={stylesCardQuotationMobile.mob_transfer_type}>{car?.transferType || 'ECONOMY'}</span>
                            <span className={stylesCardQuotationMobile.mob_price}>£ {Number(original).toFixed(2)}</span>
                        </div>
                        <h3 className={stylesCardQuotationMobile.mob_car_name}>{car?.name}</h3>
                        <div className={stylesCardQuotationMobile.mob_capacity}>
                            <div className={stylesCardQuotationMobile.cap_item}><i className="fa-solid fa-user"></i> <span>{car?.pax}</span></div>
                            <div className={stylesCardQuotationMobile.cap_item}><i className="fa-solid fa-suitcase"></i> <span>{car?.suitcases}</span></div>
                        </div>
                    </div>
                </div>

                {/* Orta Kısım: Özellik Rozetleri */}
                <div className={stylesCardQuotationMobile.mob_features_badges}>
                    <div className={stylesCardQuotationMobile.badge}><i className="fa-solid fa-plane-arrival"></i> {appData.words["strCarFeatureFlightTracking"]}</div>
                    <div className={`${stylesCardQuotationMobile.badge} ${stylesCardQuotationMobile.meet_greet}`}><i className="fa-solid fa-plane-arrival"></i> {appData.words["strCarFeatureFreeMeetAndGreet"]}</div>
                    <div className={`${stylesCardQuotationMobile.badge} ${stylesCardQuotationMobile.free_cancel}`}>
                        <i className="fa-solid fa-rotate-left"></i> {appData.words["strFreeCancellation24h"]}
                    </div>
                </div>



                {/* Luggage Info Toggle */}
                <div
                    className={stylesCardQuotationMobile.mob_luggage_trigger}
                    onClick={() => toggleAccordion(item?.carId)}
                    aria-expanded={isOpen}
                >
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Luggage Info</span>
                    <i className={`fa-solid fa-chevron-down ${isOpen ? stylesCardQuotationMobile.rotate_icon : ""} ${stylesCardQuotationMobile.chevron_down_icon} `}></i>
                </div>


                {/* ✅ Accordion panel */}
                <LuggageAccordion gallery={gallery} car={car} isOpen={isOpen} accId={accId} />

                {/* Alt Kısım: Seç Butonu */}
                <button
                   onClick={changeCar}
                    className={`${stylesCardQuotationMobile.mob_select_btn} ${isSelected ? stylesCardQuotationMobile.mob_selected_btn : ""}`}
                >
                            {!selectedQuotation?.carId ? appData?.words["strSeeAllCars"] : appData?.words["strYouSelected"]}
                </button>
            </div>
        </>
    );
};

export default SelectedCardItem;
