import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { splitAndTranslateDuration } from "../../../helpers/splitHelper";

const HeaderOfResults = ({ distance, duration, language, selectedPickupPoints, selectedDropoffPoints }) => {
  const { appData } = useSelector((state) => state.initialReducer);
  const [isRouteDetailOpen, setIsRouteDetailOpen] = useState(false);

  // Mesafe hesaplamaları
  const distanceInMiles = distance ? parseFloat(distance.replace(" mile", "")) : null;
  const distanceInKm = distanceInMiles ? (distanceInMiles * 1.60934).toFixed(2) : null;

  // Süre formatı
  const formattedDuration = splitAndTranslateDuration(duration, language, appData);

  // Adresleri güvenli bir şekilde alalım (Dizi boşsa hata vermemesi için)
  const pickupAddress = selectedPickupPoints?.[0]?.address || selectedPickupPoints?.[0]?.value || "";
  const dropoffAddress = selectedDropoffPoints?.[0]?.address || selectedDropoffPoints?.[0]?.value || "";

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Üst Bilgi Şeridi */}
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            {distance && (
              <div className={styles.infoBadge}>
                <i className="fas fa-arrows-alt-h"></i>
                <span>
                  {appData?.words["strDistance"] || "Distance"}:{" "}
                  <strong>
                    {distanceInMiles} {appData?.words["strMiles"] || "Miles"} ({distanceInKm} km)
                  </strong>
                </span>
              </div>
            )}

            {duration && (
              <div className={styles.infoBadge}>
                <i className="fas fa-clock"></i>
                <span>
                  {appData?.words["strDuration"] || "Duration"}: <strong>{formattedDuration}</strong>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.content}>
          {/* MASAÜSTÜ GÖRÜNÜMÜ */}
          <div className={styles.desktopGrid}>
            {/* Sol: Rota Bilgileri */}
            <div className={styles.routeTimeline}>
              <div className={styles.dashedLine}></div>

              <div className={styles.routePoint}>
                <div className={`${styles.dot} ${styles.dotPickup}`}></div>
                <label>{appData?.words["strPickupPoint"] || "Pickup Point"}</label>
                <p>{pickupAddress}</p>
              </div>

              <div className={styles.routePoint}>
                <div className={`${styles.dot} ${styles.dotDropoff}`}></div>
                <label>{appData?.words["strDropoffPoint"] || "Dropoff Point"}</label>
                <p>{dropoffAddress}</p>
              </div>
            </div>

            {/* Sağ: Extra Bilgiler */}
            <div className={styles.extraInfoBox}>
              <div className={styles.infoRow}>
                <i className="fas fa-check-circle"></i>
                <div>
                  <h4>{appData?.words["strAllInclusivePrices"] || "ALL INCLUSIVE PRICES"}</h4>
                  <p>{appData?.words["strMeetandGreetIncludedForAirport"] || "Meet and Greet included for airport and port pickups."}</p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <i className="fas fa-plane-arrival"></i>
                <div>
                  <h4>{appData?.words["strFlightMonitoring"] || "Flight Monitoring"}</h4>
                  <p style={{lineHeight:"20px"}}>{appData?.words["strWeConstantlyMonitorAllFlights"] || "We constantly monitor all flights and do not charge for delays."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBİL GÖRÜNÜM (Accordion) */}
          <div className={styles.mobileAccordion}>
            <button
              className={styles.accordionToggle}
              onClick={() => setIsRouteDetailOpen(!isRouteDetailOpen)}
            >
              <div className={styles.toggleLeft}>
                <div className={styles.iconCircle}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.toggleText}>
                  <span className={styles.title_header}>{appData?.words["seJourneyDetails"] || "See Address Details"}</span>
                </div>
              </div>
              <i className={`fas fa-chevron-down ${styles.chevron} ${isRouteDetailOpen ? styles.rotate : ""}`}></i>
            </button>

            <div className={`${styles.accordionContent} ${isRouteDetailOpen ? styles.open : ""}`}>
              <div className={styles.mobileRouteDetails}>
                <div className={styles.mobilePoint}>
                  <div className={`${styles.mobileDot} ${styles.bgBlue}`}></div>
                  <label>{appData?.words["strPickupPoints"] || "Pickup"}</label>
                  <p>{pickupAddress}</p>
                </div>

                <div className={styles.mobilePoint}>
                  <div className={`${styles.mobileDot} ${styles.bgGreen}`}></div>
                  <label>{appData?.words["strDropoffPoints"] || "Dropoff"}</label>
                  <p>{dropoffAddress}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderOfResults; 