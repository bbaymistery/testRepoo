import Image from 'next/image'
import styles from "./styles.module.scss"
const LuggageAccordion = ({ gallery, isOpen, accId, car,  }) => {
    return (
        <div id={accId} className={`${styles.accordion} ${isOpen ? styles.open : ""}`} role="region" aria-hidden={!isOpen}    >
            {gallery.length > 0 ? (
                <div className={styles.galleryGrid}>
                    {gallery.map((img, idx) => (
                        <div className={styles.galleryItem} key={idx}>
                            <Image src={img.imageUrl} alt={`${car?.name || 'Car'} luggage ${idx + 1}`} fill />
                        </div>
                    ))}
                </div>
            ) : (
                <p className={styles.emptyNote}>Luggage gallery is not available for this vehicle.</p>
            )}
        </div>
    )
}
export default LuggageAccordion