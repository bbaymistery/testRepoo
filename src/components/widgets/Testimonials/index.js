import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
// import { useWindowSize } from '../../../hooks/useWindowSize'
// import dynamic from 'next/dynamic';
import usePageContentHook from '../../../hooks/usePageContentHook';
import GlobalLayout from '../../layouts/GlobalLayout';
// const ShowContent = dynamic(() => import('../TestimonialContent/ShowContent'),);

const Testimonials = (props) => {
    let { bggray } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    // const [showText, setshowText] = useState(false)
    // let size = useWindowSize()
    // let { width } = size

    const { metaTitle, keywords, description, pageContent, pageTitle, shortDescription } = usePageContentHook("", language);

    const createMarkup = (htmlString) => { return { __html: htmlString } };
    // const { appData } = useSelector(state => state.initialReducer)


    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={description} forHomePage={false}>
            <div className={`${styles.testimonials} ${direction} page`} bggray={String(bggray)} style={{ backgroundColor: `${String(bggray) === "true" ? "#f5f5f5" : "white"}` }}>
                <div className={`${styles.testimonials_section} page_section`}>
                    <div className={`${styles.testimonials_section_container} page_section_container`}>
                        <div className={styles.dangerous_div} dangerouslySetInnerHTML={createMarkup(pageContent)} />
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}

export default Testimonials