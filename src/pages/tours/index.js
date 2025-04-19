import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import Image from 'next/image'
import Link from 'next/link'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { fetchContent } from '../../helpers/fetchContent'
import { parse } from 'url';
//https://api.london-tech.com/api/v1/tours-deals/list >this brings with jpg and it hurts performance so i made it cusstom
const tourCustomImages = [
    {
        image: "/images/tourlist/cambridge.webp",
        title: "Cambridge Tour",
        id: 1
    },
    {
        image: "/images/tourlist/windsor.webp",
        title: "Windsor Castle & London Tour",
        id: 2
    },
    {
        image: "/images/tourlist/bicester.webp",
        title: "Bicester Village Shopping Tour",
        id: 3
    },
    {
        image: "/images/tourlist/oxford.webp",
        title: "Oxford and Blenheim Palace Tour",
        id: 4
    },
    {
        image: "/images/tourlist/londonHalfDay.webp",
        title: "London Tour - Half Day",
        id: 5
    },
    {
        image: "/images/tourlist/canterbury.webp",
        title: "Canterbury and Leeds Castle Tour",
        id: 6
    },
    {
        image: "/images/tourlist/londonFullDay.webp",
        title: "London Tour-Full Day",
        id: 7
    }
    ,
    {
        image: "/images/tourlist/stonehenge.webp",
        title: "Stonehenge & Bath Tour",
        id: 8
    }
]
const Tours = (props) => {
    let { bggray = false, insideGlobalLayout = true, env, mainCanonicalUrl } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)
    let description = "Daily Tours and excursions for London. London to Bath-Stonehenge-Cambridge-Oxford daily tours."
    let title = "Tour-Airport Pickups London"
    let keywords = "Travel tour,airport pickups Tour"
    // useState to control "View All" state
    const [viewAll, setViewAll] = useState(false);
    const [toursData, setToursData] = useState([])
    const displayedTours = viewAll ? toursData : toursData.slice(0, 4);

    const handleViewAllClick = () => {
        setViewAll(!viewAll);
    };
    const fecthPoints = async (language) => {
        let url = `${env.apiDomain}/api/v1/tours-deals/list?language=${language}`;
        let response = await fetch(url);
        let { data, status } = await response.json();
        if (status === 200) {
            setToursData(data)
        }
    };

    //!Daily tour expand collapse 
    //!yazilari kucult /heathrowdaki gibi
    useEffect(() => {
        fecthPoints(language)
    }, [language])



    return (insideGlobalLayout ?
        <GlobalLayout mainCanonicalUrl={mainCanonicalUrl} keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.tours} ${direction} page`} bggray={String(bggray)} style={{ backgroundColor: `${String(bggray) === "true" ? "#f5f5f5" : "white"}` }}>
                <div className={`${styles.tours_section} page_section`}>
                    <div className={`${styles.tours_section_container} page_section_container`}>
                        <div className={styles.title}>
                            <h1>{appData.words["strDailyTours"]}</h1>
                        </div>
                        <div className={styles.cards_content}>
                            <div className={styles.cards}>
                                {toursData.map((item, index) => {
                                    return (
                                        <Link href={`${language === "en" ? "" : `${language}`}${item.pathname}`} title={item?.pageTitle} className={`${styles.card}`} key={item.tourDealId}>
                                            <div className={styles.card_image_div}>
                                                <Image loading="lazy" src={`${tourCustomImages[index].image}`} className={styles.img} fill alt={item.headTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                            </div>
                                            <div className={styles.card_body}>
                                                <h2>{item.pageTitle}</h2>
                                                <div className={styles.card_desc}>
                                                    <div className={styles.card_desc_subtitle}>
                                                        <div className={styles.card_detail_btn_box}>
                                                            <div className={styles.detail_btn}>{(appData || {})?.words["strReadMore"]}</div>
                                                            <p className={styles.detail_arrow_icon}>
                                                                <i className="fa-solid fa-angle-right"></i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                    )
                                })
                                }
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout> :
        <div className={`${styles.tours} ${direction} page`} bggray={String(bggray)} style={{ backgroundColor: `${String(bggray) === "true" ? "#f5f5f5" : "white"}`, marginTop: `${!insideGlobalLayout ? '0px !important' : ""}` }}>
            <div className={`${styles.tours_section} page_section`}>
                <div className={`${styles.tours_section_container} page_section_container`} >
                    <div className={styles.title}>
                        <h2>{appData.words["strDailyTours"]}</h2>
                    </div>

                    <div className={styles.cards_content}>
                        <div className={styles.cards}>
                            {
                                displayedTours.map((item, index) => {
                                    return (
                                        <a href={`${language === "en" ? "" : `${language}`}${item.pathname}`} title={item?.pageTitle} className={`${styles.card}`} key={item.tourDealId}>
                                            <div className={styles.card_image_div}>
                                                <Image loading="lazy" src={`${tourCustomImages[index].image}`} className={styles.img} fill alt={item.headTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                            </div>
                                            <div className={styles.card_body}>
                                                <h3>{item.pageTitle}</h3>
                                                <div className={styles.card_desc}>
                                                    <div className={styles.card_desc_subtitle}>
                                                        <div className={styles.card_detail_btn_box}>
                                                            <div className={styles.detail_btn}>{(appData || {})?.words["strReadMore"]}</div>
                                                            <p className={styles.detail_arrow_icon}>
                                                                <i className="fa-solid fa-angle-right"></i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.btn_div}>
                            <button className="btn_hover_reverse_primary" onClick={handleViewAllClick}   >
                                {viewAll ? appData?.words["strViewLess"] || "View Less" : appData?.words["strViewAll"] || "View All"}
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tours
export async function getServerSideProps({ req, res }) {
    const { cookie } = req.headers;
    let { pathname } = parse(req?.url, true)
    if (pathname.includes("tours")) {
        let firstLoadLangauge = checkLanguageAttributeOntheUrl(req?.url)
        let pathnameUrlWHenChangeByTopbar = pathname
        let pathNameUrlCanonical = "/tours"
        let { canonicalUrl: mainCanonicalUrl } =
            await fetchContent("/", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar, pathNameUrlCanonical)
        return {
            props: { mainCanonicalUrl }
        }
    }
}