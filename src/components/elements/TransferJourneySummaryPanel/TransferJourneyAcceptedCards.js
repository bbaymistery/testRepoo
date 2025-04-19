import React from 'react'
import styles from "./styles.module.scss"
const TransferJourneyAcceptedCards = () => {
    return (
        <div className={`${styles.content} ${styles.summarycontent}`} style={{ marginTop: "2rem" }}>
            <div className={`${styles.left_info} ${styles.acceptedcards}`} title="Accepted Cards">
                <img className={styles.acceptedcards_img} alt="Accepted Cards" src="/images/others/accepted-cards.png" />
            </div>
        </div>
    )
}

export default TransferJourneyAcceptedCards