import styles from "./styles.module.scss";

const WalletButtons = () => {
    return (
        <div className={`${styles.wallets} no-print`}>
            {/* Apple Wallet Button */}
            <button className={`${styles.walletBtn} ${styles.walletBtnApple}`} type="button">
                <i className="fa-brands fa-apple" ></i>
                <div className={styles.walletBtnMeta}>
                    <small>Add to</small>
                    <span>Apple Wallet</span>
                </div>
            </button>

            {/* Google Wallet Button */}
            <button className={`${styles.walletBtn} ${styles.walletBtnGoogle}`} type="button">
                <i className="fa-brands fa-google" ></i>
                <div className={styles.walletBtnMeta}>
                    <small >Add to</small>
                    <span>Google Wallet</span>
                </div>
            </button>
        </div>
    );
};

export default WalletButtons;