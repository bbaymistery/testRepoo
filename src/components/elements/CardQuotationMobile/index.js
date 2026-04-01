import React from 'react'
import LuggageAccordion from '../LuggageAccordion';
import styles from "./styles.module.scss"
import { carAccordionImages } from '../../../constants/carss';
import { getPriceDetailsFromQuotation } from '../../../helpers/getPriceDetailsFromQuotation';
const CardQuotationMobile = ({renderOnlySelected=false,toggleAccordion,datas,selectedQuotation,carObject,openAccordions,quotationImagesObjWebp,appData,setQuotationHandleClick}) => {
  return (
           <div className={styles.mobile_quotations_wrapper}>
            {datas?.map((item, index) => {
                const isSelected = Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId]?.id);
                const car = carObject?.[item.carId] || {};
                const isOpen = openAccordions.has(item?.carId);
                const accId = `acc-mob-${item?.carId}`;
                const gallery = carAccordionImages[item?.carId] ?? [];
                let _item_details = getPriceDetailsFromQuotation({ quotation: item }).data || {};
                let { price: original } = _item_details;

                return (
                    <div key={item.carId + 20000} className={`${styles.mobile_card} ${isSelected ? styles.selected_mobile_card : ""}`}>
                        {/* Üst Kısım: Resim, İsim ve Fiyat */}
                        <div className={styles.mob_top_section}>

                            <div className={styles.mob_car_image_container}>
                                <div
                                    // Burada 'index_' ön ekiyle styles objesinden dinamik çekiyoruz
                                    className={`${styles.mob_car_bg_image} ${styles[`car_index_${index}`]}`}
                                    style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}
                                    role="img"
                                    aria-label={car?.name}
                                ></div>
                            </div>
                            <div className={styles.mob_car_details}>
                                <div className={styles.mob_header_flex}>
                                    <span className={styles.mob_transfer_type}>{car?.transferType || 'ECONOMY'}</span>
                                    <span className={styles.mob_price}>£ {Number(original).toFixed(2)}</span>
                                </div>
                                <h3 className={styles.mob_car_name}>{car?.name}</h3>
                                <div className={styles.mob_capacity}>
                                    <div className={styles.cap_item}><i className="fa-solid fa-user"></i> <span>{car?.pax}</span></div>
                                    <div className={styles.cap_item}><i className="fa-solid fa-suitcase"></i> <span>{car?.suitcases}</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Orta Kısım: Özellik Rozetleri */}
                        <div className={styles.mob_features_badges}>
                            <div className={styles.badge}><i className="fa-solid fa-plane-arrival"></i> {appData.words["strCarFeatureFlightTracking"]}</div>
                            <div className={`${styles.badge} ${styles.meet_greet}`}><i className="fa-solid fa-plane-arrival"></i> {appData.words["strCarFeatureFreeMeetAndGreet"]}</div>
                            <div className={`${styles.badge} ${styles.free_cancel}`}>
                                <i className="fa-solid fa-rotate-left"></i> {appData.words["strFreeCancellation24h"]}
                            </div>
                        </div>



                        {/* Luggage Info Toggle */}
                        <div
                            className={styles.mob_luggage_trigger}
                            onClick={() => toggleAccordion(item?.carId)}
                            aria-expanded={isOpen}
                        >
                            <i className="fa-solid fa-circle-info"></i>
                            <span>Luggage Info</span>
                            <i className={`fa-solid fa-chevron-down ${isOpen ? styles.rotate_icon : ""} ${styles.chevron_down_icon} `}></i>
                        </div>


                        {/* ✅ Accordion panel */}
                        <LuggageAccordion  gallery={gallery} car={car} isOpen={isOpen} accId={accId} />

                        {/* Alt Kısım: Seç Butonu */}
                        <button
                            onClick={() => setQuotationHandleClick({ quotation: item })}
                            className={`${styles.mob_select_btn} ${isSelected ? styles.mob_selected_btn : ""}`}
                        >
                            {isSelected ? appData?.words["quSelectedButton"] : "SELECT VEHICLE"}
                        </button>
                    </div>
                )
            })}
        </div>

  )
}

export default CardQuotationMobile