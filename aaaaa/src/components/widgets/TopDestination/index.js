import styles from "./style.module.scss";
import Image from "next/image";

const TopDestination = () => {
  return (
    <div className={styles.top_destination}>
      <div className={styles.dest_container}>
        <h2 className={styles.title}>Top Destinations</h2>

        <div className={styles.thumbs}>

          {/* CARD 1 — Heathrow ↔ Central London */}
          <div className={styles.thumb}>
            <header className={styles.thumb_header}>
              <a className={styles.hover_img_tag} href="/heathrow-central-london">
                <Image
                  layout="responsive"
                  width={400}
                  height={260}
                  className={styles.hover_img}
                  src="/images/destCard1.webp"
                  alt="Taxi transfer from Heathrow Airport to Central London landmarks including Big Ben and Westminster"
                />
              </a>
            </header>
            <div className={styles.icon_left}>
              <i className="fa fa-plane"></i>

            </div>
            <div className={styles.thumb_caption}>
              <h3 className={styles.thumb_title}>
                <a href="/heathrow-central-london">Heathrow Central London
                </a>
              </h3>
              <p className={styles.thumb_desc}>
                Travel between Heathrow Airport and Central London in comfort and style. Fixed-price private taxis with free meet & greet.

              </p>
            </div>
          </div>

          {/* CARD 2 — Heathrow Between Terminals */}
          <div className={styles.thumb}>
            <header className={styles.thumb_header}>
              <a className={styles.hover_img_tag} href="/heathrow-between-terminals">
                <Image
                  layout="responsive"
                  width={400}
                  height={260}
                  className={styles.hover_img}
                  src="/images/destCardTerminal2.webp"
                  alt="Heathrow Airport terminal map showing inter-terminal taxi transfer routes"
                />
              </a>
            </header>
            <div className={styles.icon_left}>
              <i className="fa fa-plane"></i>

            </div>
            <div className={styles.thumb_caption}>
              <h3 className={styles.thumb_title}>
                <a href="/heathrow-between-terminals">Heathrow Between Terminals
                </a>
              </h3>
              <p className={styles.thumb_desc}>
                Quick, direct transfers between Heathrow terminals. Private taxis with meet & greet , faster and easier than the airport shuttle.

              </p>
            </div>
          </div>

          {/* CARD 3 — Heathrow Hotels Transfers */}
          <div className={styles.thumb}>
            <header className={styles.thumb_header}>
              <a className={styles.hover_img_tag} href="/heathrow-hotels-taxi">
                <Image
                  layout="responsive"
                  width={400}
                  height={260}
                  className={styles.hover_img}
                  src="/images/destCard3.webp"
                  alt="Heathrow Airport hotel transfer service with private car to and from airport hotels"
                />
              </a>
            </header>
            <div className={styles.icon_left}>
              <i className="fa fa-plane"></i>

            </div>
            <div className={styles.thumb_caption}>
              <h3 className={styles.thumb_title}>
                <a href="/heathrow-hotels-taxi">Heathrow Hotels Taxi</a>
              </h3>
              <p className={styles.thumb_desc}>
                Private taxi transfers between Heathrow Airport and nearby hotels. Reliable, 24/7 service with free meet & greet and fixed fares.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopDestination;
