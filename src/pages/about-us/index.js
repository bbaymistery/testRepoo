import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout';
import CarsSlider from "../../components/widgets/CarsSlider";
import usePageContentHook from '../../hooks/usePageContentHook';
const AboutUs = () => {
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)

    const { metaTitle, keywords, description, pageContent, pageTitle, shortDescription } = usePageContentHook("About_APL", language);

    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={description} footerbggray={true}>
            <div className={`${styles.about_us} ${direction} page`}>
                <div className={`${styles.about_us_section} page_section`}>
                    <div className={`${styles.about_us_section_container} page_section_container`}>
                        <div className={styles.content}>
                            {!pageContent ?
                                <div className={styles.left}>
                                    <h1 className={styles.title}>
                                        {appData?.words["aboutUs"]}
                                    </h1>
                                    <p>
                                        Wherever you happen to be in the world, as long as you have access to the internet,
                                        you are only a few clicks away from booking a car for collection from,
                                        or a journey to, any one of London five main passenger airports - <span>Heathrow, Gatwick , Stansted, Luton </span>  and <span>City Airport</span>.
                                        <br />
                                        Our online booking system is fully secure with 128 Bit SSL, as we understand the sensitivity of your privacy.
                                    </p>
                                    <div className={styles.title}>
                                        Telephone and Fax booking
                                    </div>
                                    <p>
                                        For telephone booking please call
                                        <span>  +44 (0) 20 8688 7744 </span>
                                        or
                                        <span> 0 208 684 9646  </span>
                                        For fax bookings please
                                        fax your Name,
                                        Surname, Flight number,
                                        arrival airport and contact
                                        details to
                                        <span> +44 (0) 20 8684 9418</span>
                                    </p>
                                </div>

                                :
                                <div className={styles.left} >
                                    <h1>About APL</h1>
                                    <div dangerouslySetInnerHTML={{ __html: pageContent }}/>  
                                    </div>

                            }
                            <div className={styles.right}>
                                <img src="/images/aboutPage.jpg" alt="" />
                            </div>
                        </div>
                        <div className={styles.destinations}>
                            <div className={styles.destinations_content}>
                                <div className={styles.column}>
                                    <div className={styles.numbers}>5,200 </div>
                                    <div className={styles.text}>Destinations</div>
                                </div>

                                <div className={styles.column}>
                                    <div className={styles.numbers}>757</div>
                                    <div className={styles.text}>Total Vehicles</div>
                                </div>

                                <div className={styles.column}>
                                    <div className={styles.numbers}>1.6 M</div>
                                    <div className={styles.text}>Happy customers</div>
                                </div>

                                <a rel="noreferrer"
                                    href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html" 
                                 target="_blank" title="Airport Pickups London Reviews"
                                  className={styles.column}>
                                    <div className={styles.numbers}>
                                        4.8

                                    </div>
                                    <div className={styles.text}>Service Ratings</div>
                                </a>

                            </div>
                        </div>
                        <CarsSlider noborder={true} />

                    </div>

                </div>
            </div>
        </GlobalLayout >
    )
}

export default AboutUs