import React from 'react'
import styles from "./singletour.module.scss"
import Button from '../../components/elements/Button/Button'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes'
import { Skeleton } from '../../components/elements/Skeleton'



/**
 * Renders a component that displays a gallery of up to 4 images for a single tour, with a button to view all photos.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.loadAlert - Indicates whether the images are being loaded.
 * @param {function} props.setshouldShowModal - A function to set whether the modal should be shown.
 * @param {object} props.appData - The app data, including the "strSeeAllPhotos" string.
 * @param {object} props.finalTourDetails - The final tour details, including the `images` array.
 * @returns {JSX.Element} - The rendered SingleTourDesktopImages component.
 */
const SingleTourDesktopImages = ({ loadAlert, setshouldShowModal, appData, finalTourDetails }) => {

    let { images } = finalTourDetails
    return (
        <div className={styles.images}>
            <div className={styles.images_content}>
                {Array.isArray(images) && images.slice(0, 4).map((item, index) => (
                    <div key={index} className={styles.gallery_grid}>
                        {loadAlert ? (
                            <div style={{ height: index === 0 ? "100%" : "200px", background: "#eae6e6" }}>
                                <Skeleton width={"100%"} height="100%" />
                            </div>)
                            :
                            (<img src={item} alt={item} />)}
                        {/* If it's the last item, render the button */}
                        {index === 3 && (
                            <div className={styles.container_auto_center}>
                                <div className={styles.intro}>
                                    <Button type={BUTTON_TYPES.PRIMARY} onBtnClick={() => setshouldShowModal(true)} style={{ padding: '8px 14px' }} btnText={appData?.words["strSeeAllPhotos"]} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleTourDesktopImages