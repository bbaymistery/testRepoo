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

    const { metaTitle, keywords, description, pageContent, pageTitle, shortDescription } = usePageContentHook("About_APL", language);


    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={description} footerbggray={true}>
            <div className={`${styles.about_us} ${direction} page`}>
                <div className={`${styles.about_us_section} page_section`}>
                    <div className={`${styles.about_us_section_container} page_section_container`}>
                        <div className={styles.content}>
                            <div className={styles.left}>
                                <h1 className={styles.title}>
                                    {pageTitle}
                                </h1>
                                <p>
                                    {shortDescription}
                                </p>
                            </div>
                            <div className={styles.right}>
                                <img src="/images/others/aboutPage.jpg" alt="APL about us " />
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