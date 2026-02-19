import styles from "./styles.module.scss"

const WhatIsNext = (props) => {
    let { meetDriver, whatIsNext, confSentEmail, weSentaReceipt, email, loginto, manageBookingText, strYourDriverWillTrack = "" } = props

    const [before, after] = weSentaReceipt.split("{{}}");

    return (
        <section className={`${styles.card} ${styles.cardPaddedSm}`}>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleMuted}`}>
                {whatIsNext}
            </h2>

            <ul className={styles.steps}>

                <li className={styles.step}>
                    <div className={`${styles.stepNum} ${styles.stepNumGreen}`}>1</div>
                    <div className={styles.stepText}>
                        <strong>{confSentEmail}</strong>
                        {before}   <strong>{email}</strong>
                    </div>
                </li>
                <li className={styles.step}>
                    <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>2</div>
                    <div className={styles.stepText}>
                        <strong>{manageBookingText}</strong>
                        <a href="/manage-booking.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                            {loginto}
                        </a>
                    </div>
                </li>
                <li className={styles.step}>
                    <div className={`${styles.stepNum} ${styles.stepNumPurple}`}>3</div>
                    <div className={styles.stepText}>
                        <strong>{meetDriver}</strong>
                        {strYourDriverWillTrack}
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default WhatIsNext;