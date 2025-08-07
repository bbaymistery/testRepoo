import React, { useEffect, useState } from 'react'
import ReusableModal from '../../components/elements/ReusableModal'
import Slider from '../../components/elements/Slider'
import { Skeleton } from '../../components/elements/Skeleton'
import styles from "./singletour.module.scss"

/**
 * Renders a mobile-friendly snapshot and slider component for a tour.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.loadAlert - Indicates whether the content is being loaded.
 * @param {boolean} props.shouldShowModal - Indicates showmodal if it is true
 * @param {function} props.setshouldShowModal - A function to set whether the modal should be shown.
 * @param {Object} props.appData - The application data.
 * @param {string} props.language - The current language.
 * @param {Object} props.finalTourDetails - The details of the tour.
 * @returns {JSX.Element} - The rendered component.
 */
const MobileSnapshhotAndSlider = (props) => {
    let { loadAlert, appData, language, finalTourDetails, shouldShowModal, setshouldShowModal } = props
    let { pageTitle, duration, snapshots, review, price, images } = finalTourDetails

    //state management for slider navigation
    const [index, setIndex] = useState(0);
    const [sliderItems, setSliderItems] = useState([]);

    /** Handlers for slider navigation **/
    const gotoPreviousSlider = () => setIndex(index - 1)
    const gotoNextSlider = () => setIndex(index + 1)

    // Set slider images once component mounts
    useEffect(() => {
        setSliderItems(images)
    }, [images]);

    useEffect(() => {
        const lastIndex = sliderItems.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, sliderItems]);


    return (
        <div className={styles.content} >
            <div className={styles.slider_for_mobile}>
                {loadAlert ? <div style={{ width: "100%", height: "300px", background: "#eae6e6" }}>
                    <Skeleton width={"100%"} height="100%" />
                </div> : <Slider appData={appData} setshouldShowModal={setshouldShowModal} index={index} gotoPreviousSlider={gotoPreviousSlider} gotoNextSlider={gotoNextSlider} sliderItems={sliderItems} />}
            </div>
            <ReusableModal shouldShowModal={shouldShowModal} onRequestClose={() => { setshouldShowModal(false) }} >
                <Slider appData={appData} gotoPreviousSlider={gotoPreviousSlider} gotoNextSlider={gotoNextSlider} insideModal={true} index={index} sliderItems={sliderItems} />
                <div className={styles.navigation_modal_slider}>
                    <span className={styles.prev_btn} onClick={gotoPreviousSlider}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </span>
                    <span className={styles.next_btn} onClick={gotoNextSlider}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            </ReusableModal>

            <div className={styles.title_content_for_desktop}>
                <div className={styles.title_div}>
                    {loadAlert ? <h1>
                        <div style={{ width: "100%", height: "100%", background: "#eae6e6" }}>
                            <Skeleton width={"100%"} height="100%" />
                        </div>
                    </h1> : <h1>{pageTitle} </h1>}
                    <div className={styles.title_div_description}>
                        <a style={{ color: "black" }} href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews" className={styles.reviews} rel="noreferrer"   >
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <span>{review} {appData?.words["strReviews"]}</span>
                        </a>
                    </div>
                </div>
            </div>

            <h3 className={styles.snapshot_title}>
                {appData?.words["strTourSnapshot"]}
            </h3>
            <div className={styles.snapshot_icons_content}>
                {Array.isArray(snapshots) && snapshots.slice(0, 4).map((snapshot, index) => (
                    <div key={index} className={styles.snapshot_icons_div}>
                        <i className={`${snapshot.icon}`}></i>
                        {loadAlert ? "..." : <div className={styles.snapshot_icons_div_description}>
                            {index === 2 ? appData?.words["strLuxuryCars"] : appData?.words[snapshot.alias]}
                            &nbsp;  {index === 0 ? duration : null}
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileSnapshhotAndSlider