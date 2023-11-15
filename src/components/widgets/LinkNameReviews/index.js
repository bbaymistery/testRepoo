import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
const LinkNameReviews = (props) => {
    let { bggray = false } = props


    const state = useSelector(state => state.pickUpDropOffActions)
    let { params } = state
    let { direction } = params
    return (
        <div className={`${styles.LinkNameReviews} ${direction} page`} bggray={String(bggray)}>
                <svg  className={styles.wave_svg}   xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 100 10"  preserveAspectRatio="none"   >
                    <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
                </svg>
            <div className={`${styles.LinkNameReviews_section} page_section`}>
                <div className={`${styles.LinkNameReviews_section_container} page_section_container`}>
                    <div className={styles.linkname}>
                        <div className={`${styles.left_info} ${styles.google_review}`} >
                            {/* <p className={`${styles.left_info_title} ${direction}`}>What are cutomers saying us</p> */}
                            <a target="_blank" href="https://g.co/kgs/Rg7vb8"  title="Customer Reviesw for Airport Pickups London"  >
                                <img className={styles.tripad_img}border="0"  alt="Customer Reviesw for Airport Pickups London " src={`${bggray ? "/images/reviewNoBg1.png" : "/images/review1.png"}`} />
                            </a>
                        </div>
                        <div className={`${styles.left_info} ${styles.acceptedcards}`} title="Accepted Cards for Airport Pickups London">
                            <img className={styles.acceptedcards_img} border="0" alt="Accepted Cards for Airport Pickups London " src="/images/payments.png" />
                        </div>
                        <div className={`${styles.left_info} ${styles.tripad}`} >
                            <a target="_blank" href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"    title="Tripadvisor Rating for Airport Pickups London">
                                {/* <img className={styles.tripad_img} border="0" alt="Tripadvisor Rating for Airport Pickups London" src="/images/TripAdvisor2.png" /> */}
                                <img className={styles.tripad_img} border="0" alt="Tripadvisor Rating for Airport Pickups London" src="/images/advisor3.0.png" />
                            </a>
                        </div>
                    </div>
                       
                </div>
            </div>
        </div>
    )
}

export default LinkNameReviews