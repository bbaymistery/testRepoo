import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { quotationImagesObj } from '../../constants/quotationImages'
import env from '../../resources/env'
import Image from 'next/image';
import meetAndGret from '../../../public/images/icons/blackMeetAndGreet.svg'
import LeftSidebarInformation from '../../components/elements/LeftSidebarInformation'

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
                        <div className={styles.left_content}>

                            {/* bura eftsidebar componentin normal div formasi yazilmisdi onu sadece reusable olsun deye tek sekilde yazdm */}
                            <LeftSidebarInformation direction={direction} appData={appData} />
                        </div>
                        <div className={styles.right_content}>
                            <div className={`${styles.fleet_header}`}>
                                <h1>Welcome to our fleet page!</h1>
                                <p>We offer a range of vehicles to suit your needs, whether you're traveling for business or leisure.
                                    <br />
                                    Take a look at our options below:</p>
                            </div>
                            {Object?.values(quotationImagesObj)?.map((item, index) => {
                                return (
                                    <div dataid={index === 0 ? "first_car" : ""} key={index} className={`${styles.card_item}`}    >
                                        <div data={item?.id} className={styles.column_first} style={{ backgroundImage: `url(${env.apiDomain}${item?.image})` }}> </div>
                                        <div className={styles.column_second}>
                                            <div className={styles.column_second_flex_column}>
                                                <div className={styles.name_and_postcode_div}>
                                                    <div className={styles.postcode}> {carObject[item?.id]?.transferType}  </div>
                                                    <h3 className={styles.name}>{carObject[item?.id]?.name}   </h3>
                                                </div>
                                                <div className={styles.car_features}>
                                                    <div className={styles.feature_column}> <span>{carObject[item?.id]?.suitcases}</span> <span>Suitcases</span></div>
                                                    <div className={styles.feature_column}>  <span>{carObject[item?.id]?.pax}</span>  <span>Passengers</span></div>
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
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                                        <span>
                                                            {carObject[item?.id]?.id === 4
                                                                ? "Mercedes E class or equivalent"
                                                                : carObject[item?.id]?.id === 5
                                                                    ? "Mercedes V Class / EQV"
                                                                    : carObject[item?.id]?.id === 6
                                                                        ? "Mercedes Vito / E Vito"
                                                                        : "Comfortable Cars"}
                                                        </span>
                                                    </p>


                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                                        <span>
                                                            {carObject[item?.id]?.id === 4
                                                                ? "Mercedes E class  or equivalent"
                                                                : carObject[item?.id]?.id === 5
                                                                    ? "Mercedes V Class / EQV"
                                                                    : carObject[item?.id]?.id === 6
                                                                        ? "Mercedes Vito / E Vito"
                                                                        : "Comfortable Cars"}
                                                        </span>
                                                    </p>
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
                            &nbsp;
                            <div className={`${styles.fleet_footer}`}>

                                <h2>Economy Class</h2>
                                <ul>
                                    <li>
                                        <b>Saloon</b>
                                        <ul>
                                            <li>Capacity: 3 Passengers</li>
                                            <li>Luggage Capacity: 3 Suitcases</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>People Carrier</b>
                                        <ul>
                                            <li>Capacity: 5 Passengers</li>
                                            <li>Luggage Capacity: 5 Suitcases</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>8 Seater</b>
                                        <ul>
                                            <li>Capacity: 8 Passengers</li>
                                            <li>Luggage Capacity: 8 Suitcases</li>
                                        </ul>
                                    </li>
                                </ul>

                                <h2>Business Class</h2>
                                <ul>
                                    <li>
                                        <b>Executive Saloon (Mercedes E-Class or equivalent)</b>
                                        <ul>
                                            <li>Capacity: 3 Passengers</li>
                                            <li>Luggage Capacity: 3 Suitcases</li>
                                            <li>Complimentary Refreshments: Enjoy a selection of refreshments during your journey in our Business class executive saloon cars.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Executive People Carrier (Mercedes V-Class or EQV)</b>
                                        <ul>
                                            <li>Capacity: 5 Passengers</li>
                                            <li>Luggage Capacity: 5 Suitcases</li>
                                            <li>Complimentary Refreshments: Indulge in a variety of refreshments offered in our Business class executive people carriers.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Executive 8 Seater (Mercedes Vito or E-Vito)</b>
                                        <ul>
                                            <li>Capacity: 8 Passengers</li>
                                            <li>Luggage Capacity: 8 Suitcases</li>
                                            <li>Complimentary Refreshments: Stay refreshed with a range of complementary refreshments available in our Business class executive 8 seater vans.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <h3>Additional Services:</h3>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>Free Meet and Greet: For airport and cruise port pickups, we provide a complimentary Meet and Greet service. Our driver will be waiting for you at the arrival barriers, holding a passenger name board, to ensure a smooth and convenient start to your journey.</li>
                                            <li>Please note that all our vehicles are well-maintained, comfortable, and equipped with modern amenities to ensure a pleasant journey.</li>
                                            <li>To inquire about availability or make a reservation, please contact our customer service team. We look forward to serving you!</li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Fleet