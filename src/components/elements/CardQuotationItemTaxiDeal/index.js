import { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { quotationImagesObjWebp } from '../../../constants/quotationImages';
import Image from 'next/image';
import TaxiDealsContents from '../TaxiDealsContents';
import { postDataAPI } from '../../../helpers/fetchDatas';
import { splitAndTranslateDuration } from '../../../helpers/splitHelper';
import { carAccordionImages } from '../../../constants/carss';
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
function mergeDetails(points, objectDetails) {
    return points.map(point => {
        // Extract the pcatId from the point
        const { pcatId } = point;

        // Find the corresponding detail in objectDetails
        const detail = objectDetails[pcatId];

        // If detail exists, spread its properties into point
        if (detail) {
            return { ...point, ...detail };
        }

        return point;
    });
}
const CardQuotationItemTaxiDeal = (params = {}) => {

    //by this index  we r gonna assure in which journey we should add quotation
    let {
        quotationOptions: datas,
        selectedQuotation,
        index,
        duration,
        distance,
        isTaxiDeal = true,
        previousUrl,
        pageContent,
        objectDetailss,
        pageTitle,
        headTitle,
        returnPathname,
        returnHeadTitle,
        returnPageTitle,
        isVisible = false,
        review,
        env,
        appData,
        carObject,
        journeyType, direction, language, quotations
    } = params


    const router = useRouter();
    const dispatch = useDispatch();
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const [uploadedPageContent, setUploadedPageContent] = useState('');
    // Conditionally slice the array before mapping
    // Ortak işlemleri yapan fonksiyon
    const fetchAndHandleTaxiDealDetails = async ({ quotation }) => {
        if (isTaxiDeal && previousUrl) {
            try {
                const body = {
                    language,
                    checkRedirect: true,
                    taxiDealPathname: previousUrl,
                    withoutExprectedPoints: false,
                    "channelId": 2
                };
                const url = `${env.apiDomain}/api/v1/taxi-deals/details`;
                const { status, data } = await postDataAPI({ url, body });
                if (status === 200) {
                    let { taxiDeal: { pickupPoints, dropoffPoints } } = data;
                    pickupPoints = mergeDetails(pickupPoints, objectDetailss);
                    dropoffPoints = mergeDetails(dropoffPoints, objectDetailss);

                    dispatch({ type: "GET_QUOTATION_AT_PATHNAME", data: { results: data, journeyType }, });

                    checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations, env, });
                } else {
                    alert("CardQuotationItemTaxiDeal component failed please write to support");
                }
            } catch (error) {
                console.log(error);
                alert("CardQuotationItemTaxiDeal component failed please write to support");
            }
        }
    };

    // Masaüstü için
    const setQuotationHandleClick = async (params = {}) => {
        const { quotation } = params;
        if (451 < document.documentElement.clientWidth) {
            await fetchAndHandleTaxiDealDetails({ quotation });
        }
    };

    // Mobil için
    const handleClickForMobile = async ({ e, quotation }) => {
        if (e.target.innerText === "Luggage Info" || e.target.className.includes("fa-circle-info")) return;

        if (451 > document.documentElement.clientWidth) {
            await fetchAndHandleTaxiDealDetails({ quotation });
        }
    };

    // Check if distance exists, remove 'mile', and convert to km
    const distanceInMiles = distance ? parseFloat(distance?.replace(' mile', '')) : null;
    const distanceInKm = distanceInMiles ? (distanceInMiles * 1.60934).toFixed(2) : null;
    // Format the duration based on the language

    // Format the duration based on the language
    const formattedDuration = splitAndTranslateDuration(duration, language, appData);
    const [openAccordions, setOpenAccordions] = useState(() => new Set());


    const toggleAccordion = (id) => {

        setOpenAccordions(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    useEffect(() => {
        const imgTagRegex = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;
        // Check if there are any <img> tags
        if (imgTagRegex.test(pageContent)) {
            //Replace function with empty string ""
            const updatedPageContent = pageContent.replace(imgTagRegex, " ");
            setUploadedPageContent(updatedPageContent);
        } else {
            setUploadedPageContent(pageContent)
        }
    }, [datas,]);

    return (<div className={`${styles.taxideal_result_container}`}>
        {/* 111  */}


        <h1 alt={pageTitle} className={`${styles.title} ${styles.title_center} ${direction}`}>{headTitle ? (headTitle) : "..."}</h1>
        <p className={styles.breadcrumbs}>
            <span>
                <a href={`${language === 'en' ? "/" : `/${language}`}`} title="Airport Pickups London">
                    <span>Home</span>
                </a>
                →
            </span>
            &nbsp;
            &nbsp;
            <span>
                <span>{pageTitle}</span>
            </span>
        </p>
        <div direction={String(direction === "rtl")} className={styles.stars}>
            <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews" className={styles.reviews} rel="noreferrer"  >
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span style={{ marginLeft: "10px" }}> {review?.ratingValue}/{review?.bestRating}</span>

            </a>

            <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews  " className={styles.reviews} rel="noreferrer">
                <i className="fa-solid fa-comment"></i>
                {review?.reviewCount} {`${appData?.words["strReviews"]}`}
            </a>
        </div>
        {/* 111  */}
        <p className={styles.viceversa}>
            <a href={returnPathname} onClick={() => sessionStorage.removeItem('pathnameLinkCache')} title={returnPageTitle}> {returnHeadTitle ? (returnHeadTitle) : "..."} </a>

        </p>

        <div className={`${styles.quotation_header}`}>
            <ul>
                {distance ?
                    <li>
                        <span>
                            <i className={`fa-solid fa-check ${styles.li_icon}`}>
                            </i>
                        </span>
                        {appData?.words["strDistance"]} : {distanceInMiles ? <span>{distanceInMiles} {appData?.words["strMiles"]} ({distanceInKm} km)</span> : <span>{distance}</span>}
                    </li>
                    : (<></>)}
                {duration ?
                    <li>
                        <span>
                            <i className={`fa-solid fa-check ${styles.li_icon}`}></i>
                        </span>
                        <span className={styles.left} >{appData?.words["strJourneyDurationTitle"]}</span>
                        :<span>{formattedDuration}</span>
                    </li> : (<></>)}
                <li><span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>  {appData?.words["strWeConstantlyMonitorAllFlights"]}</li>
                <li><span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span> <span className={styles.strong}>{appData?.words["strAllInclusivePrices"]}</span> {appData?.words["strMeetandGreetIncludedForAirport"]} </li>
            </ul>
        </div>


        {datas?.map((item, index) => {
            const isSelected = Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId]?.id)
            const car = carObject?.[item.carId] || {};

            const isOpen = openAccordions.has(item?.carId);
            const accId = `acc-${item?.carId}`;
            // ✅ Bu arabanın galerisi
            const gallery = carAccordionImages[item?.carId] ?? [];
            return (
                <div id="main_container" key={item.carId + 10000} className={styles.main_container} >

                    <div
                        dataid={index === 0 ? "first_car" : (index === 1 ? "second_car" : "")}
                        className={`${styles.card_item} ${isSelected ? styles.selectedCard : ""}`}
                        onClick={(e) => handleClickForMobile({ e, quotation: item })} >
                        {/* style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }} */}
                        <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} >
                            <Image
                                src={quotationImagesObjWebp[item?.carId]?.image}
                                alt="Car Image"
                                width={300}
                                height={100}
                                style={{ objectFit: "contain", }}
                                priority
                            />
                        </div>
                        <div className={styles.column_second}>
                            <div className={styles.column_second_flex_column}>
                                <div className={styles.name_and_postcode_div}>
                                    <div className={styles.postcode}>
                                        {car?.transferType}
                                        <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                                    </div>
                                    <div className={styles.name}>
                                        {car?.name}
                                        <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{car?.pax}</span>  </div>
                                    </div>
                                </div>
                                <div className={styles.car_features}>
                                    <div className={styles.feature_column}>
                                        <i className="fa-solid fa-user"></i> <span>{car?.pax}</span>  </div>
                                    <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{car?.suitcases}</span></div>
                                    <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                                        <Image src={"/images/icons/blackMeetAndGreet.webp"} width="18" height="20" alt="Meet and Greet icon " priority />
                                        <span style={{ paddingLeft: "5px", fontWeight: '500' }}>Meet & Greet</span>
                                    </div>
                                    <div className={`${styles.feature_column} ${styles.luggage_info}`} onClick={() => toggleAccordion(item?.carId)} aria-expanded={isOpen} aria-controls={accId}>
                                        <i className="fa-solid fa-circle-info"></i> Luggage  Info
                                    </div>
                                </div>
                                <div className={styles.apl_features}>
                                    <div className={`${styles.feature_column} ${styles.luggage_info}`} onClick={() => toggleAccordion(item?.carId)} aria-expanded={isOpen} aria-controls={accId}>
                                        <i class="fa-solid fa-circle-info"></i> Luggage  Info
                                    </div>
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
                                            {`£${item?.price.split(".")[0]}.`}
                                            <span>00</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                            <div className={styles.price}>{`£${item?.price.split(".")[0]}.`} <span>00</span> </div>
                            <div className={styles.total}>{appData?.words["strTotalPrice"]}</div>
                            <button onClick={() => setQuotationHandleClick({ quotation: item })} className={`btn btn_primary ${Number(selectedQuotation?.carId) === Number(car.id) ? styles.selectedBtn : ""}`}   >
                                {Number(selectedQuotation?.carId) === Number(car.id) ? `${appData?.words["quSelectedButton"]}` : `${appData?.words["quSelectButton"]}`}
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
            )
        })}

        {isVisible && uploadedPageContent?.length > 5 ? <TaxiDealsContents pageContent={uploadedPageContent} isVisible={isVisible} /> : <></>}

    </div>
    )
}


export default CardQuotationItemTaxiDeal
