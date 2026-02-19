import { useState } from "react";
import ImageCarouselModal from "../../../components/elements/ImageCarouselModal";
import styles from "./capacityAlert.module.scss";

const CapacityAlert = ({ images, appData, passengers, suitcases }) => {
    const [openLightbox, setOpenLightbox] = useState(false);
    let capacityLuggageText = appData?.words["strThisVehiclesMaximum"]?.replace("{{}}", passengers)?.replace("{{}}", suitcases);
    return (
        <div className={styles["capacity-alert"]}>
            <div>
                <h3 className={styles["capacity-title"]}>
                    <i className="fa-solid fa-circle-exclamation" style={{ marginRight: "4px" }}></i>
                    {appData?.words["strCapacityLimit"]}
                </h3>

                <div className={styles["capacity-info"]}>
                    <p className={styles["highlight"]}>
                        {capacityLuggageText}
                    </p>

                    <p className={styles["capacity-subtext"]}>
                        {appData?.words["strPleaseVerifyYourLuggage"]}
                    </p>
                </div>
            </div>
            <div  onClick={() => setOpenLightbox(true)} className={styles["luggage-photo"]}>
                <img src={images[0].imageUrl} alt="Boot Capacity" />

                <div className={styles["luggage-overlay"]}>
                    <span>
                        <i className="fa-solid fa-eye"></i>
                        {appData?.words["strViewAll"]}
                    </span>
                </div>
            </div>
            <ImageCarouselModal images={images} open={openLightbox} onClose={() => setOpenLightbox(false)} />
        </div>
    );
};

export default CapacityAlert;
