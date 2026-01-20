
import styles from './styles.module.scss';

const PassengerDetails = ({ name, email, phone, notes, strPassengerDetails, strNotes,passengersNumber }) => {
    return (
        <section className={`${styles.card} ${styles.cardPaddedSm}`}>
            <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-user"></i> {strPassengerDetails}
            </h2>

            <div className={styles.pList}>
                {/* Name */}
                <div className={styles.pItem}>
                    <div className={styles.pIcon}><i className="fa-solid fa-user"></i></div>
                    <span className={styles.pName}>{name}</span>
                </div>

                {/* Email */}
                <div className={styles.pItem}>
                    <div className={styles.pIcon}><i className="fa-solid fa-envelope"></i></div>
                    <span className={`${styles.pText} ${styles.pTextTruncate}`}>{email}</span>
                </div>

                {/* Phone */}
                <div className={styles.pItem}>
                    <div className={styles.pIcon}><i className="fa-solid fa-phone"></i></div>
                    <span className={styles.pText}>{phone}</span>
                </div>
{/* Passsengers Number */}
  <div className={styles.pItem}>
                    <div className={styles.pIcon}><i className="fa-solid fa-users"></i></div>
                    <span className={styles.pText}>{passengersNumber}</span>
                </div>
                {/* Notes */}
                <div className={`${styles.pItem} ${styles.pNotes}`}>
                    <div className={styles.pIcon}><i className="fa-solid fa-note-sticky"></i></div>
                    <div>
                        <small>{strNotes}</small>
                        <em className={styles.pNotesText}>{notes}</em>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PassengerDetails;