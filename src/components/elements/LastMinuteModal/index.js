import styles from "./styles.module.scss";

const LastMinuteModal = ({ openModal, handleClose, setToFalse, text }) => {
    if (!openModal) return null;

    return (
        <div className={styles.modalOverlay} onClick={handleClose}>
            {/* // İçeriğe tıklayınca kapanmasın */}
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}   >
                <p className={styles.modalText}>{text}</p>

                <button className={styles.closeBtn} onClick={setToFalse}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
};

export default LastMinuteModal;
