import styles from "./styles.module.scss"

const ProceedPayment = ({ onBack, onProceed, backText = "Go Back", proceedText = "Proceed to Payment" }) => {
    return (
        <div className={styles.form_footer}>
            <button onClick={onBack} className={styles.btn_back}>
                {backText}
            </button>

            <button onClick={onProceed} className={styles.btn_payment}>
                {proceedText}
            </button>
        </div>
    );
};

export default ProceedPayment;
