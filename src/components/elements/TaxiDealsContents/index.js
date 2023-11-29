import React from 'react'
import styles from "./styles.module.scss"
const TaxiDealsContents = (props) => {
        let { pageContent } = props
        return (
                <div className={styles.description}>
                        <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>
                </div>

        )
}

export default TaxiDealsContents