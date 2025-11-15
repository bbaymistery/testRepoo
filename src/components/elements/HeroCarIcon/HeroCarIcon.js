import Image from "next/image";
import styles from "./styles.module.scss";

const HeroCarIcon = () => {
    return (
        <div className={styles.carIcon}>
            <ul className={styles.section_tab}>
                <li className={styles.navItem}>
                    <a href="/" className={styles.navLink} aria-label="Transfer Search">
                        {/* ✅ SVG yerine Next Image */}
                        <div className={styles.icon}>
                            <Image
                                src="/images/carRareWhite.svg"
                                alt="Transfer Search"
                                width={15}
                                height={14}
                                className={styles.icon}
                            />
                        </div>
                        <span>Transfer Search</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default HeroCarIcon;
