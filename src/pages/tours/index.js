import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import Image from 'next/image'
import Button from '../../components/elements/Button/Button'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes'
import { tourDatasTranslated } from '../../constants/keywordsAndContents/toursKeywordsContentSchemas'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { parseCookies } from '../../helpers/cokieesFunc'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { parse } from 'url';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage'
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase'
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader'
import { fetchConfig } from '../../resources/getEnvConfig'


const Tours = (props) => {
    let { insideGlobalLayout = true, seoDatas } = props

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)

    // useState to control "View All" state
    const [viewAll, setViewAll] = useState(false);
    const [toursData, setToursData] = useState(tourDatasTranslated)
    const displayedTours = viewAll ? toursData : insideGlobalLayout ? toursData : toursData.slice(0, 4);


    const handleViewAllClick = () => setViewAll(!viewAll);


    return (insideGlobalLayout ?
        <GlobalLayout title={seoDatas.title} keywords={seoDatas.keywords} description={seoDatas.description} mainCanonical={props.mainCanonical}>

            <div className={`${styles.tours} ${direction} page`}>
                <div className={`${styles.tours_section} page_section`}>
                    <div className={`${styles.tours_section_container} page_section_container`} style={{ marginTop: "100px" }} >
                        <div className={styles.title}>
                            <h2>{appData.words["strDailyTours"]}</h2>
                        </div>
                        <div className={styles.cards_content}>
                            <div className={styles.cards}>
                                {
                                    displayedTours.map((item, _) => {
                                        return (
                                            <a href={`${language === "en" ? "" : `${language}`}${item.pathname}`} title={item?.pageTitle} className={`${styles.card}`} key={item.tourDealId}>
                                                <div className={styles.card_image_div}>
                                                    <Image src={`${item.images[0]}`} className={styles.img} fill alt={item.headTitle[language]} sizes="(max-width: 768px) 100vw, 50vw" />
                                                </div>
                                                <div className={styles.card_body}>
                                                    <h3>{item.pageTitle[language]}</h3>
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

               
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout> :
        <div className={`${styles.tours} ${direction} page`}>
            <div className={`${styles.tours_section} page_section`}>
                <div className={`${styles.tours_section_container} page_section_container`} >
                    <div className={styles.title}>
                        <h2>{appData.words["strDailyTours"]}</h2>
                    </div>
                    <div className={styles.cards_content}>
                        <div className={styles.cards}>
                            {
                                displayedTours.map((item, _) => {
                                    return (
                                        <a href={`${language === "en" ? "" : `${language}`}${item.pathname}`} title={item?.pageTitle} className={`${styles.card}`} key={item.tourDealId}>
                                            <div className={styles.card_image_div}>
                                                <Image src={`${item.images[0]}`} className={styles.img} fill alt={item.headTitle[language]} sizes="(max-width: 768px) 100vw, 50vw" />
                                            </div>
                                            <div className={styles.card_body}>
                                                <h3>{item.pageTitle[language]}</h3>
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
                            <Button
                                type={BUTTON_TYPES.TERTIARY}
                                onBtnClick={handleViewAllClick}
                                style={{ width: '100%' }}
                                btnText={viewAll ? appData?.words["strViewLess"] || "View Less" : appData?.words["strViewAll"] || "View All"}
                                iconPos='RIGHT'
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tours

const seoData = {
    en: {
        title: "Best Guided Tours in Turkey | Boat, Adventure & Sightseeing Trips",
        description:
            "Discover the best tours in Turkey! Enjoy boat trips in Fethiye, thrilling quad bike safaris, breathtaking paragliding, and Istanbul's iconic Bosphorus cruises. Book now!",
        keywords:
            "Turkey tours, Fethiye boat tour, Oludeniz paragliding, Istanbul Bosphorus cruise, quad bike safari, Antalya sightseeing, Turkey travel experiences, best tours in Turkey",
    },
    ru: {
        title: "Лучшие туры по Турции | Морские прогулки, приключения и экскурсии",
        description:
            "Откройте для себя лучшие туры по Турции! Наслаждайтесь морскими прогулками в Фетхие, захватывающим сафари на квадроциклах, потрясающим параглайдингом и круизами по Босфору в Стамбуле. Бронируйте сейчас!",
        keywords:
            "туры по Турции, морские прогулки Фетхие, параглайдинг Олюдениз, круиз по Босфору, сафари на квадроциклах, экскурсии Анталия, путешествия по Турции, лучшие туры по Турции",
    },
    tr: {
        title: "Türkiye'nin En İyi Rehberli Turları | Tekne Gezileri, Macera & Şehir Turları",
        description:
            "Türkiye'deki en popüler turları keşfedin! Fethiye'de tekne turları, ATV safari, nefes kesen yamaç paraşütü ve İstanbul Boğazı'nda unutulmaz bir gezi sizi bekliyor. Hemen rezervasyon yapın!",
        keywords:
            "Türkiye turları, Fethiye tekne turu, Ölüdeniz yamaç paraşütü, İstanbul Boğaz turu, ATV safari, Antalya şehir turu, Türkiye'de gezilecek yerler, en iyi Türkiye turları",
    },
    ar: {
        title: "أفضل الجولات السياحية في تركيا | رحلات القوارب والمغامرات والجولات السياحية",
        description:
            "اكتشف أفضل الجولات السياحية في تركيا! استمتع برحلات القوارب في فتحية، وركوب الدراجات الرباعية، وتجربة الطيران المظلي المذهلة، والجولات السياحية الفريدة في مضيق البوسفور بإسطنبول. احجز الآن!",
        keywords:
            "جولات تركيا، جولة قارب فتحية، الطيران المظلي أولودينيز، جولة مضيق البوسفور، سفاري الدراجات الرباعية، جولات أنطاليا السياحية، أفضل الرحلات السياحية في تركيا",
    },
    es: {
        title: "Mejores Tours Guiados en Turquía | Paseos en Barco, Aventura y Excursiones",
        description:
            "Descubre los mejores tours en Turquía. Disfruta de paseos en barco por Fethiye, emocionantes safaris en quad, parapente impresionante y cruceros icónicos por el Bósforo en Estambul. ¡Reserva ahora!",
        keywords:
            "tours en Turquía, paseo en barco por Fethiye, parapente en Oludeniz, crucero por el Bósforo, safari en quad, excursiones en Antalya, experiencias de viaje en Turquía, mejores tours en Turquía",
    },
    it: {
        title: "I Migliori Tour Guidati in Turchia | Gite in Barca, Avventura & Escursioni",
        description:
            "Scopri i migliori tour in Turchia! Goditi gite in barca a Fethiye, safari in quad emozionanti, parapendio mozzafiato e le iconiche crociere sul Bosforo a Istanbul. Prenota ora!",
        keywords:
            "tour in Turchia, gita in barca Fethiye, parapendio Oludeniz, crociera sul Bosforo, safari in quad, escursioni Antalya, esperienze di viaggio in Turchia, migliori tour in Turchia",
    },
    zh: {
        title: "土耳其最佳导览游 | 乘船游览、冒险 & 观光之旅",
        description:
            "探索土耳其最棒的旅行路线！在费特希耶乘船游览，体验刺激的四轮摩托探险，享受令人惊叹的滑翔伞飞行，并参与伊斯坦布尔著名的博斯普鲁斯海峡游船之旅。立即预订！",
        keywords:
            "土耳其旅游, 费特希耶乘船游览, 厄吕代尼兹滑翔伞, 伊斯坦布尔博斯普鲁斯游船, 四轮摩托探险, 安塔利亚观光, 土耳其旅行体验, 最佳土耳其旅行",
    },
};
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

    setNoCacheHeader(res, true);

    isUrlLoverCase(resolvedUrl, res)

    //get cookie and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let { pathname } = parse(req.url, true)
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)
    // Adjust pathname and language based on initial language
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
    // pathname = adjusted.pathname;
    pageStartLanguage = adjusted.pageStartLanguage;
    const seoDatas = seoData[pageStartLanguage];
    const env = await fetchConfig();

    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/tours" : `/${pageStartLanguage}/tours`}`

    return {
        //we pass tourdetails fot adding inside redux generally all together
        props: { seoDatas, mainCanonical }
    };
}