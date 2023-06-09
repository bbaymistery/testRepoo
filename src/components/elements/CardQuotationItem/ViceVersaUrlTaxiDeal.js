import React from 'react'
import { swapArray } from '../../../helpers/swapArray'
import styles from "./styles.module.scss"
const ViceVersaUrlTaxiDeal = ({ previousUrl, returnPageTitle ,returnHeadTitle ,returnPathname }) => {

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
                        {returnHeadTitle}
                    </a>
                </p>}
        </>
    )
}

export default ViceVersaUrlTaxiDeal