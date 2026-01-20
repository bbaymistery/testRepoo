import React from 'react';
import styles from './styles.module.scss';
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation';
import { quotationImagesObjWebp } from '../../../constants/quotationImages';
import meetAndGret from '../../../../public/images/icons/blackMeetAndGreet.svg';
import Image from 'next/image';
import { carAccordionImages } from '../../../constants/carss';

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

                            <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>
                                <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                <span>{appData?.words["strCarFeatureFlightTracking"]}</span>
                            </p>
                            <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>
                                <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span>
                            </p>
                            <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>
                                <span>
                                    <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`} />
                                    <span>{appData?.words["strFreeCancellation24h"]}</span>
                                </span>
                            </p>
                            <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>

                                <span className={styles.price_span}>
                                   {quotationLoading ? "..." : `£ ${Number(original).toFixed(2)}`}
                                </span>
                                {vat > 0 && <span style={{ color: "#555", fontSize: '12px' }}>
                                    {`( ${quotationLoading ? "..." : `£${net}`} + £${vat} ${appData.words["strVat"]} )`}
                                </span>}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                    <div className={styles.total} style={{ color: 'black' }}>
                        <span style={{ display: 'block', fontSize: '18px' }}>
                           {quotationLoading ? "..." : `£ ${Number(original).toFixed(2)}`}
                        </span>
                        {vat > 0 && <span style={{ color: "#555", fontSize: '12px' }}>
                            {`( ${quotationLoading ? "..." : `£${net}`} + £${vat} ${appData.words["strVat"]} )`}
                        </span>}
                    </div>
                    <button onClick={changeCar} className={`btn btn_primary ${isSelected ? styles.selectedBtn : ""}`}  >
                        {!selectedQuotation?.carId ? appData?.words["strSeeAllCars"] : appData?.words["strYouSelected"]}
                    </button>
                </div>
            </div>
            {/* ✅ Accordion panel */}
            <div id={accId} className={`${styles.accordion} ${isOpen ? styles.open : ""}`} role="region" aria-hidden={!isOpen}    >
                {gallery.length > 0 ? (
                    <div className={styles.galleryGrid}>
                        {gallery.map((img, idx) => (
                            <div className={styles.galleryItem} key={idx}>
                                <Image src={img.imageUrl} alt={`${car?.name || 'Car'} luggage ${idx + 1}`} fill />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.emptyNote}>Luggage gallery is not available for this vehicle.</p>
                )}
            </div>
        </div>
    );
};

export default SelectedCardItem;
