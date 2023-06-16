import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import CustomerSvg from '../../../../public/customer.svg'
import Image from 'next/image'
const WhyChoiceUs = (props) => {
    let { bggray = false } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state

    return (
        <div className={`${styles.whychoice} ${direction} page`} bggray={String(bggray)}>
            <div className={`${styles.whychoice_section} page_section`}>
                <div className={`${styles.whychoice_section_container} page_section_container`}>
                    {/* <div className={styles.title}>
                        <h1>Why Choose Us</h1>
                        <p>These popular destinations have a lot to offer</p>
                    </div>
 */}


                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.image_div}>
                                <Image src={"/guarantee.svg"} width="70" height="70" alt='guaranteesvg' />
                            </div>
                            <div className={styles.card_body}>
                                <h4>Best Price Guarantee</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image_div}>
                                <Image src={"/booking.svg"} width="70" height="70" alt="bookingsvg" />

                            </div>
                            <div className={styles.card_body}>
                                <h4>Easy & Quick Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.image_div}>
                                <Image src={"/customer.svg"} width="70" height="70" alt="customersvg" />
                            </div>
                            <div className={styles.card_body}>
                                <h4>Customer Care 7/24</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoiceUs