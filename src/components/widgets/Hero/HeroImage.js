import Image from 'next/image'
import styles from "./styles.module.scss"
const HeroImage = ({ islinknamecomponent, matchingLinkNameImage }) => {
    return (
        <div className={styles.hero_bg}>
            {/* Dalaman da Mugl olarak kalsin  */}
            <Image
                style={{ objectFit: `${islinknamecomponent ? "fill" : "cover"}` }}
                priority
                fetchPriority="high"
                quality={30}
                alt="APL Transfers "
                fill
                className={styles.landing_image}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 90vw, 1200px"
                src={islinknamecomponent ? matchingLinkNameImage : "/images/hero.webp"}
            />

            <Image quality={20} priority className={styles.shape_image} src={"/images/svgs/shape3.svg"} alt="APL Transfers " width={1700} height={600} style={{ height: "auto", width: "100%" }} />
        </div>
    )
}

export default HeroImage