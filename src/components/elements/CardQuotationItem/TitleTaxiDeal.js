import React from 'react'
import styles from "./styles.module.scss";
import { formatPriceInTitle } from '../../../helpers/formatPriceInTitle';

const TitleTaxiDeal = ({ headTitle, direction, pageTitle }) => {

    return (
        <>
            <h1 alt={pageTitle} className={`${styles.title} ${styles.title_center} ${direction}`}>{formatPriceInTitle(headTitle)}</h1>
            <div direction={String(direction === "rtl")} className={styles.stars}>
                <a
                    href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com"
                    target={"_blank"}
                    title="Airport Pickups London Reviews"
                    className={styles.reviews}
                    rel="noreferrer"
                >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    {/* <i className="fa-solid fa-star-half-stroke"></i> */}
                    4.95/5
                </a>
                <a
                    href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com"
                    target={"_blank"}
                    title="Airport Pickups London Reviews"
                    className={styles.reviews}
                    rel="noreferrer"
                >
                    <i className="fa-solid fa-comment"></i>
                    {/* {direction === 'rtl' ? `(486 customer reviews)` :`( customer reviews 486 )`} */}
                    (  customer reviews  486)

                </a>
            </div>
        </>
    )
}

export default TitleTaxiDeal