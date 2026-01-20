import { useState } from "react";
import styles from "./carousel.module.scss";

const ImageCarouselModal = ({ images, open, onClose }) => {
    const [index, setIndex] = useState(0);
    if (!open) return null;
    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);


    return (
        <div className={styles.overlay} onClick={onClose}>

            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <button className={styles.closeBtn} onClick={onClose}>
                    ✕
                </button>

                <img src={images[index].imageUrl} alt="Luggage View" className={styles.image} />

                {/* Arrows */}
                {images.length > 1 && (
                    <>
                        <button className={styles.prev} onClick={prev}>‹</button>
                        <button className={styles.next} onClick={next}>›</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageCarouselModal;
