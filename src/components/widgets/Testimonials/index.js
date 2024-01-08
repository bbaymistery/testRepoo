import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import { useWindowSize } from '../../../hooks/useWindowSize'
import dynamic from 'next/dynamic';
const ShowContent = dynamic(() => import('../TestimonialContent/ShowContent'),);

const Testimonials = (props) => {
    let { bggray } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state
    const { appData } = useSelector(state => state.initialReducer)

    const [showText, setshowText] = useState(false)
    let size = useWindowSize()
    let { width } = size
    return (

        <div className={`${styles.testimonials} ${direction} page`} bggray={String(bggray)} style={{ backgroundColor: `${String(bggray) === "true" ? "#f5f5f5" : "white"}` }}>
            <div className={`${styles.testimonials_section} page_section`}>
                <div className={`${styles.testimonials_section_container} page_section_container`}>
                    <h1>{appData.words["strReliableComfortableLondonAirporttaxi"] || "Reliable & Comfortable London Airport Transfers with APL Cars"}</h1>
                    <p>
                        <span title='Airport Pickups London (APL Cars)' className={styles.bold_span}>Airport Pickups London (APL Cars) </span>
                        is a premier provider of London airport transfers and shuttle services.
                        {/* <br />  */}
                        Renowned for our reliability and comfort, we're committed to delivering
                        exceptional service and value for money.
                        <button style={{ display: width < 768 ? "inline" : "none" }} onClick={() => setshowText(!showText)}>
                            {showText ? "Hide" : "Show More"}
                        </button>
                    </p>
                    {width > 768 ? <ShowContent /> : <></>}
                    {showText && width <= 768 ? <ShowContent /> : <></>}
                </div>
            </div>
        </div>

    )
}

export default Testimonials