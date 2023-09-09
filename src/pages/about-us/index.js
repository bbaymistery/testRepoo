import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout';
import CarsSlider from "../../components/widgets/CarsSlider";
import usePageContentHook from '../../hooks/usePageContentHook';
import DestinationsCustomers from '../../components/elements/DestinationsCustomers';
const AboutUs = () => {
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)

    const { metaTitle, keywords, description, pageContent, pageTitle, shortDescription } = usePageContentHook("About_APL", language);
    console.log(metaTitle, keywords, description, pageContent, pageTitle, shortDescription);

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
                                        {/* Wherever you happen to be in the world, as long as you have access to the internet,
                                        you are only a few clicks away from booking a car for collection from,
                                        or a journey to, any one of London five main passenger airports - <span>Heathrow, Gatwick , Stansted, Luton </span>  and <span>City Airport</span>.
                                        <br />
                                        Our online booking system is fully secure with 128 Bit SSL, as we understand the sensitivity of your privacy. */}
                                        {metaTitle}
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
                                    <div dangerouslySetInnerHTML={{ __html: pageContent }} />
                                </div>

                            }
                            <div className={styles.right}>
                                <img src="/images/aboutPage.jpg" alt="APL about us " />
                            </div>
                        </div>
                        <DestinationsCustomers />

                        <CarsSlider noborder={true} />

                    </div>

                </div>
            </div>
        </GlobalLayout >
    )
}

export default AboutUs