import { useState } from "react";
import styles from "./styles.module.scss";

const SuccessMark = ({ confirm, referenceId, referenceText, copy, subtitleText, }) => {
    const [copied, setCopied] = useState(false);

    const bookingRef = `APL-${referenceId}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referenceId);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 500);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <>
            <div className={styles.successMark}>
                <i className="fa-solid fa-check" />
            </div>
            <h1 className={styles.heroTitle}>{confirm}</h1>
            <p className={styles.heroSubtitle}>{subtitleText}</p>
            <div className={styles.ref}>
                <div className={styles.refLabel}>{referenceText}</div>
                <div className={styles.refValue}>{bookingRef}</div>
                <button type="button" className={styles.refCopy} onClick={handleCopy} aria-live="polite" >
                    {copied ? (<i className="fa-solid fa-check" />) : (copy)}
                </button>
            </div>
        </>
    );
};

export default SuccessMark;
