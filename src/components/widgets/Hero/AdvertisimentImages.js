import styles from "./advertisiment.module.scss"
import Image from 'next/image'
import TrustBoxWidget from './TrustBoxWidget'
const AdvertisimentImages = ({ islinknamecomponent, width }) => {
    return (

        <div className={`${styles.advertisiment_images_section} ${!islinknamecomponent ? styles.advertisiment_images_section_islinkname : ""} page_section`}>
            <div className={`${styles.advertisiment_images_section_container} page_section_container`}>
                <div className={styles.advertisiment_images}>
                    <a rel="noreferrer" href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html" target={"_blank"} >
                        <div className={`${styles.review_trip_advisor} `}  >
                            <Image fetchPriority="high" width={300} height={100} loading="eager" priority src="/images/others/advisorTrip.webp" alt="Airport Pickups London Tripadvisor" />
                        </div>
                    </a>

                    <div className={`${styles.trustpilot} `} >
                        <TrustBoxWidget />
                    </div>

                    <a rel="noreferrer" href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} >
                        <div className={`${styles.review_trip_advisor} `} >
                            <Image width={300} height={100} loading="eager" priority src="/images/others/Reviews.webp" alt="Airport Pickups London Review" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AdvertisimentImages