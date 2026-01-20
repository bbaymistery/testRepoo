
import { useState } from 'react';
import styles from './styles.module.scss';
import ImageCarouselModal from '../../../components/elements/ImageCarouselModal';

const VehicleDetails = ({ strViewFullSize,vehicleName, vehicleImgSrc, strVehicleAndCapacity, strCarFeatureMaxPassengers, strCarFeatureMaxSuitcases, strLuggageCapacity, images }) => {

    const [openLightbox, setOpenLightbox] = useState(false);

    return (
        <section className={`${styles.card} ${styles.cardPaddedSm}`}>
            <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-car"></i> {strVehicleAndCapacity}
            </h2>

            {/* Vehicle Info Row */}
            <div className={styles.vehicleRow}>
                <img className={styles.vehicleImg} src={vehicleImgSrc} alt={vehicleName} />
                <div>
                    <div className={styles.vehicleName}>{vehicleName}</div>
                    <div className={styles.vehicleMeta}>
                        <i className="fa-solid fa-user-group"></i> {strCarFeatureMaxPassengers}
                    </div>
                    <div className={styles.vehicleMeta}>
                        <i className="fa-solid fa-suitcase"></i> {strCarFeatureMaxSuitcases}
                    </div>
                </div>
            </div>

            {/* Luggage Capacity Thumb */}
            <div className={styles.capLabel}>{strLuggageCapacity}</div>
            <div className={styles.capThumb} onClick={() => setOpenLightbox(true)}>
                <img src={images[0].imageUrl} alt="Boot Capacity" />
                <div className={styles.capOverlay}>
                    <span>
                        <i className="fa-solid fa-magnifying-glass" style={{ marginRight: '6px' }}></i> {strViewFullSize}
                    </span>
                </div>
            </div>

            <ImageCarouselModal images={images} open={openLightbox} onClose={() => setOpenLightbox(false)} />

        </section>
    );
};

export default VehicleDetails;