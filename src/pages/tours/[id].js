import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./singletour.module.scss"

// this are mock images
import Imagee1 from "../../../public/images/tourSlider/t1.png";
import Imagee2 from "../../../public/images/tourSlider/t2.png";
import Imagee3 from "../../../public/images/tourSlider/t3.png";
import ReusableModal from "../../components/elements/ReusableModal";
import TourCardQuotation from "../../components/elements/TourCardQuotation";
import Slider from "../../components/elements/Slider";
let mockQuotationOptions = [

    {
        "token": "c0fd07942af31c55cf15255e2a757400a46a95b7979905b4e04527df59725f5f1744d0329c58a09f62bf597b2c3431f4eebb977d8196586ad2384d6e5abed356de1852de976de703d5fd195631c3f7cb31b9815c5cec44b26511751e3c49d417a0e88f7b85653efe11e5482e1400a8810cc11d784b3e248686adf0d411cc96ff361a51388d6435fe4ca6b986f5ea34a4e979ec1be6026df013a7252be6b8d80275eda823cd2e821fa6d21ba61c75aa232133e41a2cb5fecc7e9bf8852522294e",
        "price": "299.00",
        "carId": 4
    },
    {
        "token": "c0fd07942af31c55cf15255e2a757400a46a95b7979905b4e04527df59725f5f1744d0329c58a09f62bf597b2c3431f4eebb977d8196586ad2384d6e5abed356de1852de976de703d5fd195631c3f7cb31b9815c5cec44b26511751e3c49d417a0e88f7b85653efe11e5482e1400a8810cc11d784b3e248686adf0d411cc96ff361a51388d6435fe4ca6b986f5ea34a4e979ec1be6026df013a7252be6b8d80275eda823cd2e821fa6d21ba61c75aa232133e41a2cb5fecc7e9bf8852522294e",
        "price": "319.00",
        "carId": 5
    },
    {
        "token": "c0fd07942af31c55cf15255e2a757400a46a95b7979905b4e04527df59725f5f1744d0329c58a09f62bf597b2c3431f4eebb977d8196586ad2384d6e5abed356de1852de976de703d5fd195631c3f7cb31b9815c5cec44b26511751e3c49d417a0e88f7b85653efe11e5482e1400a8810cc11d784b3e248686adf0d411cc96ff361a51388d6435fe4ca6b986f5ea34a4e979ec1be6026df013a7252be6b8d80275eda823cd2e821fa6d21ba61c75aa232133e41a2cb5fecc7e9bf8852522294e",
        "price": "384.00",
        "carId": 6
    }
]
export const slideImages = [
    {
        id: 1,
        img: Imagee1,
    },

    {
        id: 2,
        img: Imagee3,
    },

    {
        id: 3,
        img: Imagee2,
    },
];
const TourContentDetails = ({ data }) => {
    const router = useRouter();
    const id = router.query.id;
    const [shouldShowModal, setshouldShowModal] = useState(false)
    const [index, setIndex] = React.useState(0);
    const [sliderItems, setsliderItems] = useState(slideImages)


    const gotoPreviousSlider = () => setIndex(index - 1)
    const gotoNextSlider = () => setIndex(index + 1)

    useEffect(() => {
        const lastIndex = sliderItems.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, sliderItems]);
    return (
        <GlobalLayout  footerbggray={true}>
            <div className={`page ${styles.page} `}>
                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} >
                        <div className={styles.title_div}>
                            <h1>Bicester Village Shopping Tour </h1>
                            <div className={styles.title_div_description}>
                                <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews" className={styles.reviews} rel="noreferrer"   >
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <span>759 reviews</span>
                                </a>
                                <span>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Greater London, United Kingdom
                                </span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <Slider setshouldShowModal={setshouldShowModal} index={index} gotoPreviousSlider={gotoPreviousSlider} gotoNextSlider={gotoNextSlider} sliderItems={sliderItems} />
                            <ReusableModal shouldShowModal={shouldShowModal} onRequestClose={() => { setshouldShowModal(false) }} >
                                <Slider gotoPreviousSlider={gotoPreviousSlider} gotoNextSlider={gotoNextSlider} insideModal={true} index={index} sliderItems={sliderItems} />
                                <div className={styles.navigation_modal_slider}>
                                    <span className={styles.prev_btn} onClick={gotoPreviousSlider}>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </span>
                                    <span className={styles.next_btn} onClick={gotoNextSlider}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                </div>
                            </ReusableModal>



                            <h3 className={styles.snapshot_title}>
                                Tour Snapshot
                            </h3>
                            <div className={styles.snapshot_icons_content}>

                                <div className={styles.snapshot_icons_div}>
                                    <i className="fa-solid fa-clock"></i>
                                    <div className={styles.snapshot_icons_div_description}>
                                        Duration:<br /> 11h
                                    </div>
                                </div>

                                <div className={styles.snapshot_icons_div}>
                                    <i className="fa-solid fa-user-group"></i>
                                    <div className={styles.snapshot_icons_div_description}>
                                        Group size:<br /> 52
                                    </div>
                                </div>


                                <div className={styles.snapshot_icons_div}>
                                    <i className="fa-solid fa-route"></i>
                                    <div className={styles.snapshot_icons_div_description}>
                                        Near public:<br /> transportation
                                    </div>
                                </div>

                                <div className={styles.snapshot_icons_div}>
                                    <i className="fa-solid fa-square-check"></i>
                                    <div className={styles.snapshot_icons_div_description}>
                                        Free cancellation
                                    </div>
                                </div>
                            </div>

                            <div className={styles.overview_title}>
                                Overview
                            </div>
                            <div className={styles.overview_text}>
                                Unless you hire a car, visiting Stonehenge, Bath,
                                and Windsor Castle in one day is next to impossible.
                                Designed specifically for travelers with limited time in London,
                                this tour allows you to check off a range of southern {`England's`}
                                historical attractions in just one day by eliminating the hassle of
                                traveling between each one independently. Travel by comfortable coach and witness your guide bring each UNESCO World Heritage
                                Site to life with commentary. Plus, all admission tickets are included in the tour price.
                            </div>

                            <div className={styles.services}>
                                <p className={styles.services_title}>ALL Inclusive Prices</p>
                                <ul >
                                    <li >
                                        <i className="fa-solid fa-check"></i>
                                        Free Neet And Greet
                                    </li>
                                    <li >
                                        <i className="fa-solid fa-check"></i>
                                        Flight monitoring
                                    </li>
                                    <li >
                                        <i className="fa-solid fa-check"></i>
                                        Free Baby/Child Seat
                                    </li>
                                    <li >
                                        <i className="fa-solid fa-check"></i>
                                        Fixed Prices
                                    </li>
                                    <li >
                                        <i className="fa-solid fa-check"></i>
                                        No hidden charges
                                    </li>
                                    <li >
                                        <i className="fa-solid fa-check"></i>
                                        Feee Cancellation (24h)
                                    </li>

                                </ul>
                            </div>

                            < TourCardQuotation index={0} selectedQuotation={""} quotationOptions={mockQuotationOptions} />
                            {/* fake data in order to make visible quotation card item  */}
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}

export default TourContentDetails;
