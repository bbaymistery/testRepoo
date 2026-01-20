
import styles from "./styles.module.scss";

// Bileşenin alabileceği prop'lar
// Bu örnekte, düğme hedefleri (href) dışarıdan alınabilir.
const BookingActions = (props) => {
    let { index, backHomeText, backReturnText, downloadText, generatePdf, journeyType, isJourneyReturn } = props


    return (
        <div id="booking-actions-to-hide" className={`${styles.actions} ${styles["no-print"]}`}>

            {/* Download Receipt Button (triggers print dialog) */}
            {isJourneyReturn && <button
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={generatePdf}
                type="button"
            >
                <i className="fa-solid fa-download"></i>
                {downloadText}
            </button>}
            {/* Book Return Journey Link */}
            {index === 0 && +journeyType === 0 && <a className={`${styles.btn} ${styles.colorPrimary}`} href={'/'}>
                {backReturnText}
            </a>}
            {/* Back to Home Link */}

                <a className={`${styles.btn} ${styles.btnOutline}`} href={"/"}>
                    {backHomeText}
                </a>
        </div>
    );
};

export default BookingActions;