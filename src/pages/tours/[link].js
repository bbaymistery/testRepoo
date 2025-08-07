import GlobalLayout from "../../components/layouts/GlobalLayout";
import { getTourByPathname, getTourMetaTagsByPathname, getTourPageContentByPathname, tourDatasTranslated } from '../../constants/keywordsAndContents/toursKeywordsContentSchemas';
import { parseCookies } from '../../helpers/cokieesFunc';
import { parse } from 'url';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import { fetchConfig } from '../../resources/getEnvConfig';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from "next/head";
import SeatlistAdults from "./SeatlistAdults";
import MobileSnapshhotAndSlider from "./MobileSnapshhotAndSlider";
import SingleTourDesktopImages from "./SingleTourDesktopImages";
import MobileSingleTourTitle from "./MobileSingleTourTitle";
import SingleTourBreadCrumb from "./SingleTourBreadCrumb";
import styles from "./singletour.module.scss";
import singleTourSchema, { tourDescriptionName } from "./schema";
import { adjustPathnameForLanguage } from "../../helpers/adjustedPageLanguage";
import { isUrlLoverCase } from "../../helpers/isUrlLoverCase";
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from "../../helpers/schemaMetaTagHelper";
import { setNoCacheHeader } from "../../helpers/setNoCacheHeader";
import { useRouter } from "next/router";

const TourContentDetails = (props) => {

    let { data } = props
    if (data === 'not found') {
        return <Error404 />
    }
    let { finalTourDetails, pageContent, tourDetails, schemaOfTourDetails } = props
    let { headTitle, keywords, metaDescription, metaTags } = finalTourDetails

    const [loadAlert, setLoadAlert] = useState(true);
    const initialReducer = useSelector(state => (state.initialReducer));
    const { appData } = initialReducer;
    const [shouldShowModal, setshouldShowModal] = useState(false)
    const pickUpDropOffActions = useSelector(state => (state.pickUpDropOffActions));
    const { params: { language, direction }, reservations } = pickUpDropOffActions;
    let transferDate = reservations[0]?.transferDetails?.transferDateTimeString;

    const dispatch = useDispatch()
    const router = useRouter()
    const { width } = useWindowSize();

    useEffect(() => {
        setLoadAlert(true);

        const selectedTour = tourDatasTranslated.find(t => t.pathname === `/tours/${router.query.link}`)

        let adultsPrice = selectedTour.adultPrice
        let childrenPrice = selectedTour.childrenPrice
        let isPound = selectedTour.isPound
        dispatch({ type: 'SET_TOUR_PRICE_SEATLIST', data: { adultsPrice, childrenPrice, isPound } })

        const timer = setTimeout(() => { setLoadAlert(false) }, 1200);
        return () => clearTimeout(timer);
    }, [language]);
    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription}>
            <Head>
                {createMetaTagElementsClientSide(metaTags)}
                {renderSchemaScriptsClientSide(schemaOfTourDetails)}
            </Head>
            <div className={`page ${styles.page} `}>
                <SingleTourBreadCrumb finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />
                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} style={{ display: "flex", flexDirection: "column" }} >
                        <div id="Wrapper" className={styles.wrapper}>
                            {/*visible on mobile*/}
                            {width <= 990 ? <MobileSingleTourTitle finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} /> : null}
                            {/*visible on desktop not mobile */}
                            <SingleTourDesktopImages finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} setshouldShowModal={setshouldShowModal} />
                            {/*display block at the 700px =>for mobile visible*/}
                            {<MobileSnapshhotAndSlider finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} shouldShowModal={shouldShowModal} setshouldShowModal={setshouldShowModal} />}
                            {/* adults children infants count component */}
                            <SeatlistAdults language={language} appData={appData} transferDate={transferDate} direction={direction} tourDetails={tourDetails} />
                            <div className={`${styles.page_content} `} dangerouslySetInnerHTML={{ __html: pageContent }} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}

export async function getServerSideProps({ req, res, query, resolvedUrl }) {

    const env = await fetchConfig(); // Fetch environment-specific configuration (e.g., API keys)
    setNoCacheHeader(res, true);

    isUrlLoverCase(resolvedUrl, res);

    //get cookie and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let { pathname } = parse(req.url, true)
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

    // Adjust pathname and language based on initial language
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
    pathname = adjusted.pathname;
    pageStartLanguage = adjusted.pageStartLanguage;

    const tourDetails = getTourByPathname(`${pathname}`);

    if (tourDetails.length !== 1) {
        return {
            props: { data: "not found" }
        };
    } else {
        let language = pageStartLanguage;
        const pageContent = getTourPageContentByPathname(`${pathname}`, language);
        const metaTags = getTourMetaTagsByPathname(pathname, language, env);
        const headTitle = tourDetails[0].headTitle[language]
        const keywords = tourDetails[0].keywords[language]
        const metaDescription = tourDetails[0].metaDescription[language]
        const breadcrumbTitle = tourDetails[0].breadcrumbTitle[language]
        const thumbnailTitle = tourDetails[0].thumbnailTitle[language]
        const pageTitle = tourDetails[0]?.pageTitle[language]
        const images = tourDetails[0]?.images

        //destructuring tourDetails
        const duration = tourDetails[0].duration[language]
        const snapshots = tourDetails[0]?.snapshots
        const review = 2000


        //!Handling schema 
        const schemaData = singleTourSchema(
            env,
            pathname,
            language,
            200,
            tourDescriptionName[pathname].tourName[language],
            tourDescriptionName[pathname].description[language],
            new Date().toISOString(),
            tourDescriptionName[pathname].categoryOfTour[language]
        );
        let schemaOfTourDetails = schemaData || []
        schemaOfTourDetails = Object.keys(schemaOfTourDetails).map(key => ({ [key]: schemaOfTourDetails[key] }));//array of objects [b:{ab:"1"},c:{ab:"2"},d:{ab:"3"}]
        schemaOfTourDetails = schemaOfTourDetails.map(obj => Object.values(obj)[0]);//Output: ["1", "2", "3"]

        tourDetails[0].schema = schemaOfTourDetails;

        let finalTourDetails = {
            headTitle, keywords, metaDescription, breadcrumbTitle,
            thumbnailTitle, pageTitle, images, duration, snapshots,
            review, metaTags,
        }
        return {
            //we pass tourdetails fot adding inside redux generally all together
            props: { tourDetails, pageContent, finalTourDetails, schemaOfTourDetails }
        };
    }

}


export default TourContentDetails;
