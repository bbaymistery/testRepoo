import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { quotationImagesObjWebp } from '../../constants/quotationImages'
import Image from 'next/image';
import meetAndGret from '../../../public/images/icons/blackMeetAndGreet.svg'
import LeftSidebarInformation from '../../components/elements/LeftSidebarInformation'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { parse } from 'url';
import { fetchContent } from '../../helpers/fetchContent'


const Fleet = (props) => {
    let { bggray = false, metaTitle, keywords, metaDescription, shortDescription, pageTitle, pageContent ,mainCanonicalUrl} = props;
    const { appData } = useSelector(state => state.initialReducer)
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});



    return (
        <GlobalLayout mainCanonicalUrl={mainCanonicalUrl} keywords={keywords} title={metaTitle} description={metaDescription} footerbggray={true}>
            <div className={`${styles.fleet} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.fleet_section} page_section`}>
                    <div className={`${styles.fleet_section_container} page_section_container`}>
                        <div className={styles.left_content}>

                            {/* bura eftsidebar componentin normal div formasi yazilmisdi onu sadece reusable olsun deye tek sekilde yazdm */}
                            <LeftSidebarInformation direction={direction} appData={appData} />
                        </div>
                        <div className={styles.right_content}>
                            <div className={`${styles.fleet_header}`}>
                                <h1>{pageTitle}</h1>
                                <p>
                                    {shortDescription}
                                </p>
                            </div>
                            {Object?.values(quotationImagesObjWebp)?.map((item, index) => {
                                return (
                                    <div dataid={`${item.id}_car`} key={index} className={`${styles.card_item}`}    >
                                        <div data={item?.id} className={styles.column_first} style={{ backgroundImage: `url(${item?.image})` }}> </div>
                                        <div className={styles.column_second}>
                                            <div className={styles.column_second_flex_column} direction={String(direction === "rtl")}>
                                                <div className={styles.name_and_postcode_div}>
                                                    <div className={styles.postcode}> {carObject[item?.id]?.transferType}  </div>
                                                    <h3 className={styles.name}>{carObject[item?.id]?.name}   </h3>
                                                </div>
                                                <div className={styles.car_features}>
                                                    <div className={styles.feature_column}>
                                                        <span>{appData?.words["strNoofSuitcases"]}</span>
                                                        <span>{carObject[item?.id]?.suitcases}</span>
                                                    </div>
                                                    <div className={styles.feature_column}>
                                                        <span>{appData?.words["strNoofPassengers"]}</span>
                                                        <span>{carObject[item?.id]?.pax}</span>
                                                    </div>
                                                    <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                                                        <span style={{ paddingLeft: "5px", fontWeight: 'bold' }}>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span>
                                                        <Image src={meetAndGret} width="18" height="20" alt="" />
                                                    </div>
                                                </div>
                                                <div className={styles.apl_features}>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                                        <span>
                                                            {carObject[item?.id]?.id === 4
                                                                ? appData?.words["strMercedesEClassOr"]
                                                                : carObject[item?.id]?.id === 5
                                                                    ? appData?.words["strMercedesVClass"]
                                                                    : carObject[item?.id]?.id === 6
                                                                        ? appData?.words["strMercedesVito"]
                                                                        : appData?.words["strComfortableVehicles"]}
                                                        </span>
                                                    </p>


                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                                        <span>
                                                            {carObject[item?.id]?.id === 4
                                                                ? appData?.words["strMercedesEClassOr"]
                                                                : carObject[item?.id]?.id === 5
                                                                    ? appData?.words["strMercedesVClass"]
                                                                    : carObject[item?.id]?.id === 6
                                                                        ? appData?.words["strMercedesVito"]
                                                                        : appData?.words["strComfortableVehicles"]}
                                                        </span>
                                                    </p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span></p>
                                                    <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            &nbsp;
                            <div className={styles.page_content} dangerouslySetInnerHTML={{ __html: pageContent }} />

                        </div>

                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Fleet
export async function getServerSideProps({ req, res }) {
    let firstLoadLangauge = checkLanguageAttributeOntheUrl(req?.url)
    const { cookie } = req.headers;
    let { pathname } = parse(req?.url, true)
    let pathnameUrlWHenChangeByTopbar = pathname
    let pathNameUrlCanonical = "/fleet"
    let { metaTitle, keywords, pageContent, metaDescription, shortDescription, pageTitle,canonicalUrl: mainCanonicalUrl } =
     await fetchContent("/fleet", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar,pathNameUrlCanonical)

    return {
        props: { metaTitle, keywords, pageContent, metaDescription, shortDescription, pageTitle,mainCanonicalUrl }
    }
}