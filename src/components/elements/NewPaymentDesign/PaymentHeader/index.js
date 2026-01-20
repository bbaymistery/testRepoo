import styles from './styles.module.scss'

const PaymentHeader = ({strPaymentMethod}) => {
  return (
    <div className={styles.section_header}>
                    <h1 className={styles.section_title}>{strPaymentMethod}</h1>
                    <div className={styles.payment_icons}>
                        <i className={`fa-brands fa-cc-visa ${styles.visa}`}></i>
                        <i className={`fa-brands fa-cc-mastercard ${styles.mastercard}`}></i>
                        <i className={`fa-brands fa-cc-amex ${styles.amex}`}></i>
                        <i className={`fa-brands fa-google-pay ${styles.google_pay}`}></i>
                        <i className={`fa-brands fa-apple-pay ${styles.apple_pay}`}></i>
                    </div>
                </div>
  )
}

export default PaymentHeader