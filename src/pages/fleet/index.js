import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { quotationImagesObj } from '../../constants/quotationImages'
import env from '../../resources/env'
import Image from 'next/image';
import meetAndGret from '../../../public/images/icons/blackMeetAndGreet.svg'

let description = "Airport Pickups London vehicle types and all taxi capacity information"
let title = "Airport Pickups London (APL Cars)  fleet information. Our vehicle types. "
let keywords = "taxi types, london airport taxi information"

const Fleet = (props) => {
    let { bggray = false } = props;
     const { appData } = useSelector(state => state.initialReducer)
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});



    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.fleet} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.fleet_section} page_section`}>
                    <div className={`${styles.fleet_section_container} page_section_container`}>
                        <div className={`${styles.fleet_header}`}>
                            <ul>
                                <li>
                                    <span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>{" "}
                                    We constantly monitor all flights and do not charge for flight delays  or cancellations.
                                </li>
                                <li>
                                    <span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>
                                    <span className={styles.strong}>ALL INCLUSIVE PRICES</span> No Hidden
                                    Charges; Meet and Greet included for airport and port pickups.
                                </li>
                            </ul>
                        </div>
                            {Object.values(quotationImagesObj)?.map((item, index) => {
            
                            
                                return (
                                    <div dataid={index === 0 ? "first_car" : ""}  key={index} className={`${styles.card_item}`}    >
                                        <div data={item?.id} className={styles.column_first} style={{backgroundImage: `url(${env.apiDomain}${item?.image})`}}> </div>
                                        <div className={styles.column_second}>
                                            <div className={styles.column_second_flex_column}>
                                                <div className={styles.name_and_postcode_div}>
                                                    <div className={styles.postcode}> {carObject[item?.id]?.transferType}  </div>
                                                    <h3 className={styles.name}>{carObject[item?.id]?.name}   </h3>
                                                </div>
                                                <div className={styles.car_features}>
                                                    <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.id]?.pax}</span>  </div>
                                                    <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.id]?.suitcases}</span></div>
                                                    <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                                                        <Image src={meetAndGret} width="18" height="20" alt="" />
                                                        <span style={{ paddingLeft: "5px", fontWeight: '500' }}>Meet & Greet</span></div>
                                                </div>
                                                <div className={styles.apl_features}>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{"Free Cancellation (24h)"}</span> </p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{"Comfortable Cars"}</span> </p>


                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{"Comfortable Cars"}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{"Free Cancellation (24h)"}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                                                </div>
                                            </div>
                                        </div>

                                   
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Fleet