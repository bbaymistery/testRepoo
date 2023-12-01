import React from 'react'
import styles from "./styles.module.scss"
import { formatPriceInTitle } from '../../../helpers/formatPriceInTitle'
const ViceVersaUrlTaxiDeal = ({ previousUrl, returnPageTitle, returnHeadTitle, returnPathname }) => {

    return (
        <>
            {/* {previousUrl.split("/").length === 4 ?
                <p className={styles.viceversa}>
                    <a href={returnPathname} title={"Return Page Title"}>
                        Return Page Title_ transfer quote, please click here
                    </a>
                </p> : <></>} */}
            {
                <p className={styles.viceversa}>
                    <a href={returnPathname} title={returnPageTitle}>
                        {formatPriceInTitle(returnHeadTitle)}
                    </a>
                </p>}
        </>
    )
}

export default ViceVersaUrlTaxiDeal