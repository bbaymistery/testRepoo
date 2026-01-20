import styles from "./styles.module.scss";

const Payment = (props) => {
    let { summaryText, paymentMethod, vatText, priceTitle, totalPaidText, quotation, paymentType ,strTotalPrice} = props
    const currencySymbol = '£';


    const { price: original, amountOfVAT: vat, normalPrice: net, } = quotation;

    return (
        <section className={`${styles.card} ${styles.cardPaddedSm} ${styles.payment}`}>
            <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-receipt"></i>
                {summaryText}
            </h2>

            {vat > 0 && <div className={styles.rows}>
                {/* Journey Price Row */}
                <div className={styles.row}>
                    <span>{priceTitle}</span>
                    <span>{currencySymbol}{net}</span>
                </div>
                {/* VAT Row */}
                {<div className={styles.row}>
                    <span>{vatText} </span>
                    <span>{currencySymbol}{vat}</span>
                </div>}
            </div>}

            {/* Total Paid */}
            <div className={styles.total}>
                <span className={styles.totalLabel}>{paymentType === 1 ? strTotalPrice  : totalPaidText}</span>
                <span className={styles.totalValue}>{currencySymbol}{Number(original).toFixed(2)}</span>
            </div>

            {/* Paid Status */}
            <div className={styles.paid}>
                <i className="fa-solid fa-circle-check"></i>{paymentMethod}
            </div>
        </section>
    );
};

export default Payment;