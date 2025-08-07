import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.scss"
import Image from "next/image"
import fbImage from '../../../../public/images/social/fb.gif';
import twImage from '../../../../public/images/social/tw.gif';
import srImage from '../../../../public/images/social/rss.png';
import instaIamge from '../../../../public/images/social/Instigram.gif';
import airportTranslations, { generalAllTranslations } from "../../../constants/generalTranslataions";
import { airportTaxiLinks } from "../../../constants/navigatior";
const officeLocations = [

      {
        id: "Baysaş",
        city: "Istanbul",
        address: "Baysaş İstanbul 216 Deluxe Residence, DORUK SOKAK NO:45 C BLOK D:10, 34720 Kadikoy/İstanbul, Türkiye"
    },
    {
        id: "fethiye",
        city: "Fethiye",
        address: "Taşyaka Mah. Ölüdeniz Caddesi No:21/A D:1, Mugla, Turkiye"
    },
    {
        id: "london",
        city: "London",
        address: "APL Office, Novotel Cherry Lane, UB7 9HJ, UK"
    }
];

const Footer = () => {

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language, journeyType } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const dispatch = useDispatch()
    return (
        <div className={`${styles.footer} ${direction} page`} >
            <div className={`${styles.footer_section} page_section`}>
                <Image className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "center" }} src={"/images/svgs/footerbg.svg"} alt="Heathrow Gatwick Transfers Hero Image" sizes="100vw" />
                <div className={`${styles.footer_section_container} page_section_container`}>
                    <div className={styles.footer_content}>
                        <div className={`${styles.column} ${styles.numbers_column}`}>
                            <p>{appData?.words["strContactUs"]}</p>
                            <ul>
                                <li className={styles.phone}>
                                    <span>
                                        <Image src={"/images/others/tel.webp"} alt="APL transfer hotline" width={25} height={20} />

                                        {appData?.words["appContactUsHotLine"] ? appData?.words["appContactUsHotLine"] : "Hotline 24/7"}:
                                    </span>
                                    <a href="tel:+902127085540">+90 212 708 5540</a>
                                </li>
                                <li className={styles.ep}>
                                    <span>
                                        <Image src={"/images/others/world.webp"} alt="APL transfer  Support" width={25} height={20} />
                                        {generalAllTranslations.strEurope[language]}:
                                    </span>
                                    <a href="tel:+442033259878">
                                        +44 203 325 9878
                                    </a>
                                </li>
                                <li className={styles.wp}>
                                    <span>
                                        <Image src={"/images/others/WhatsAppp.webp"} alt="APL transfer WhatsApp" width={25} height={25} />
                                        {appData?.words["strWhatsAppUs"]}:
                                    </span>
                                    <a target="_blank" href="https://wa.me/447387901028">
                                        +44 738 790 1028
                                    </a>
                                </li>
                                <li className={styles.mail}>
                                    <span>
                                        <Image src={"/images/others/mail.webp"} alt="APL transfer Email" width={25} height={20} />
                                        {appData.words["strEmail"]}:
                                    </span>
                                    <a href="mailto:info@apltransfers.com" >info@apltransfers.com</a>
                                </li>
                            </ul>


                        </div>
                        <div className={`${styles.column} ${styles.office_column}`}>
                            <p>{generalAllTranslations.strOurOffices[language]}</p>
                            <ul className={styles.officeList}>
                                {officeLocations.map(({ id, city, address }) => (
                                    <li key={id} className={styles.officeItem}>
                                        <span className={styles.icon}>📍</span>
                                        <strong>{city}:</strong> {address}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${styles.column}`}>
                            <p>{generalAllTranslations.strQuickLinks[language]}</p>
                            <div>
                                <a href={`${language === 'en' ? `/about-us` : `/${language}/about-us`}`} title={(appData || {}).words["strAboutUs"]}>
                                    {(appData || {}).words["strAboutUs"]}
                                </a>
                                <a href={`${language === 'en' ? `/contact-us` : `/${language}/contact-us`}`} title={(appData || {}).words["appContactUsHeader"]} >
                                    {(appData || {}).words["appContactUsHeader"]}
                                </a>
                                <a href={`${language === 'en' ? `/terms` : `/${language}/terms`}`} title={(appData || {}).words["strTermsOfUse"]}  >
                                    {(appData || {}).words["strTermsOfUse"]}
                                </a>
                                <a href={`${language === 'en' ? `/privacy-policy` : `/${language}/privacy-policy`}`} title={(appData || {}).words["strPrivacyPolicy"]}  >
                                    {(appData || {}).words["strPrivacyPolicy"]}
                                </a>
                                <a href={`${language === 'en' ? `/fleet` : `/${language}/fleet`}`} title={(appData || {}).words["strOurFleet"]}  >
                                    {(appData || {}).words["strOurFleet"]}
                                </a>
                                            <a href={`${language === 'en' ? `/travel-agents` : `/${language}/travel-agents`}`} title={(appData || {}).words["strTravelNews"]}  >
                                    {(appData || {}).words["strTravelNews"]}
                                </a>
                                <a href={"/tr/sofor-araniyor"} hrefLang="tr" title={generalAllTranslations.strDriverWanted[language]} >
                                    {generalAllTranslations.strDriverWanted[language]}
                                </a>

                                <a href={`${language === 'en' ? `/sitemap` : `/${language}/sitemap`}`} title={generalAllTranslations.strSiteMap[language]} >
                                    {generalAllTranslations.strSiteMap[language]}
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.column} `}>
                            <p>{appData.words["strAirportTaxi"]}</p>
                            <div>
                                {
                                    airportTaxiLinks
                                        .filter((item) => item.hasTaxiDeals !== "ADB" && item.hasTaxiDeals !== "GZP") // Exclude ADB & GZP
                                        .map((item) => {
                                            let { strInnerText, path: listPath, hasTaxiDeals } = item;

                                            return (
                                                <a
                                                    href={`${language === 'en' ? `${listPath}` : `/${language}${listPath}`}`}
                                                    key={strInnerText}
                                                    onClick={() => {
                                                        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
                                                        dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } });
                                                    }}
                                                    title={airportTranslations[language][strInnerText]}
                                                >
                                                    <span>{airportTranslations[language][strInnerText]}</span>
                                                </a>
                                            );
                                        })
                                }
                            </div>
                        </div>
                        <div className={`${styles.column} `}>
                            <div className={styles.social_icons}>
                                <a href="https://www.facebook.com/APLTransfers" target={"_blank"} title={"APL Transfers Facebook"}>
                                    <Image src={fbImage} alt="APL Transfers Facebook" width={25} height={25} />
                                </a>
                                <a href="https://x.com/APLTransfers" target={"_blank"} title="APL Transfers Twitters">
                                    <Image src={twImage} alt="APL Transfers Twitters" width={25} height={25} />
                                </a>
                                <a href="https://bsky.app/profile/apltransfers.bsky.social" target="_blank" title="APL Transfers News RSS">
                                    <Image src={srImage} alt="APL Transfers News RSS" width={25} height={25} />
                                </a>
                                <a href="https://www.instagram.com/apltransfers" target="_blank" title="APL Transfers Instigram page">
                                    <Image src={instaIamge} alt="APL Transfers Instigram page" width={25} height={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_section_container2} page_section_container`}>
                    <div className={styles.footer_bottom}>
                        <div className={styles.social_icons}>
                            <a href="https://www.facebook.com/APLTransfers" target={"_blank"} title={"APL Transfers Facebook"}>
                                <Image src={fbImage} alt="APL Transfers Facebook" width={25} height={25} />
                            </a>
                            <a href="https://x.com/APLTransfers" target={"_blank"} title="APL Transfers Twitters">
                                <Image src={twImage} alt="APL Transfers Twitters" width={25} height={25} />
                            </a>
                            <a href="https://bsky.app/profile/apltransfers.bsky.social" target="_blank" title="APL Transfers News RSS">
                                <Image src={srImage} alt="APL Transfers News RSS" width={25} height={25} />
                            </a>
                            <a href="https://www.instagram.com/apltransfers" target="_blank" title="APL Transfers Instigram page">
                                <Image src={instaIamge} alt="APL Transfers Instigram page" width={25} height={25} />
                            </a>
                        </div>
                        <p className={styles.allrights}>{new Date().getFullYear()} APLTransfers.com All Rights Reserved</p>
                        <div className={styles.footer_bottom_images}>
                            <div>
                                <Image src={"/images/visa.webp"} alt="APL Transfer Visa" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/master.webp"} alt="APL Transfer Master" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/applePay.webp"} alt="APL Transfer Apple" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/paypal.webp"} alt="APL Transfer Paypal" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/amex.webp"} alt="APL Transfer Amex" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer