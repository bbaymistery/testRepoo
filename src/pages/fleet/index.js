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
import { carAccordionImages } from '../../constants/carss'


const Fleet = (props) => {
    let { bggray = false, metaTitle, keywords, metaDescription, shortDescription, pageTitle, pageContent, mainCanonicalUrl } = props;
    const { appData } = useSelector(state => state.initialReducer)
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    // ✅ Çoklu akordeon: açık olan kartların id’lerini tut
    // ✅ tüm id’leri çıkar
    const allIds = React.useMemo(
        () => Object.values(quotationImagesObjWebp).map(x => x.id),
        []
    );
    // ✅ başlangıçta hepsi açık (SSR uyumlu)
    const [openAccordions, setOpenAccordions] = React.useState(
        () => new Set(allIds)
    );


    const toggleAccordion = (id) => {
        setOpenAccordions(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };


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
                                <p>{shortDescription}  </p>
                            </div>
                            {/* c.18 is 16 seater which we remove froma rray */}
                            {Object?.values(quotationImagesObjWebp).filter((c) => c.id !== 18)?.map((item, index) => {
                                const car = carObject?.[item?.id] || {};

                                const isOpen = openAccordions.has(item?.id);
                                const accId = `acc-${item?.id}`;
                                // ✅ Bu arabanın galerisi
                                const gallery = carAccordionImages[item?.id] ?? [];
console.log(gallery);

                                return (
                                    <div key={index} className={styles.card_and_accordion_wrapper} >
                                        <div dataid={`${item.id}_car`} className={`${styles.card_item}`}    >
                                            <div data={item?.id} className={styles.column_first} style={{ backgroundImage: `url(${item?.image})` }}> </div>
                                            <div className={styles.column_second}>
                                                <div className={styles.column_second_flex_column} direction={String(direction === "rtl")}>
                                                    <div className={styles.name_and_postcode_div}>
                                                        <div>
                                                            <div className={styles.postcode}> {car?.transferType}  </div>
                                                            <h3 className={styles.name}>{car?.name} </h3>
                                                        </div>

                                                    </div>
                                                    <div className={styles.car_features}>
                                                        <div className={styles.feature_column}>
                                                            <i class="fa-solid fa-user"></i>
                                                            <span>{carObject[item?.id]?.suitcases}</span>
                                                        </div>
                                                        <div className={styles.feature_column}>
                                                            <i class="fa-solid fa-suitcase"></i>
                                                            <span>{carObject[item?.id]?.pax}</span>
                                                        </div>
                                                        <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                                                            <Image src={meetAndGret} width="18" height="20" alt="" />
                                                            <span style={{ paddingLeft: "5px", fontWeight: '500' }}>Meet & Greet</span>

                                                        </div>
                                                        <div className={`${styles.feature_column} ${styles.luggage_info}`} onClick={() => toggleAccordion(item?.id)} aria-expanded={isOpen} aria-controls={accId}>
                                                            <i class="fa-solid fa-circle-info"></i> Luggage  Info
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
                                                                {car === 4
                                                                    ? appData?.words["strMercedesEClassOr"]
                                                                    : car === 5
                                                                        ? appData?.words["strMercedesVClass"]
                                                                        : car === 6
                                                                            ? appData?.words["strMercedesVito"]
                                                                            : appData?.words["strComfortableVehicles"]}
                                                            </span>
                                                        </p>


                                                        <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                                        <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i>
                                                            <span>
                                                                {car === 4
                                                                    ? appData?.words["strMercedesEClassOr"]
                                                                    : car === 5
                                                                        ? appData?.words["strMercedesVClass"]
                                                                        : car === 6
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

                                        {/* ✅ Accordion panel */}
                                        <div id={accId} className={`${styles.accordion} ${isOpen ? styles.open : ""}`} role="region" aria-hidden={!isOpen}    >
                                            {gallery.length > 0 ? (
                                                <div className={styles.galleryGrid}>
                                                    {gallery.map((img, idx) => (
                                                        <div className={styles.galleryItem} key={idx}>
                                                            {/* Seçenek A: width/height ile (CLS yok) */}
                                                            <Image
                                                                src={img.imageUrl}
                                                                alt={`${car?.name || 'Car'} luggage ${idx + 1}`}
                                                                width={430}
                                                                height={320}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className={styles.emptyNote}>Luggage gallery is not available for this vehicle.</p>
                                            )}
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
    let { metaTitle, keywords, pageContent, metaDescription, shortDescription, pageTitle, canonicalUrl: mainCanonicalUrl } =
        await fetchContent("/fleet", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar, pathNameUrlCanonical)

    return {
        props: { metaTitle, keywords, pageContent, metaDescription, shortDescription, pageTitle, mainCanonicalUrl }
    }
}