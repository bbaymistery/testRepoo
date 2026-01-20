import styles from "./mobileTabs.module.scss"
const MobileTabs = ({ mobileTabs = 0, appData, handleTabClick, index, isReturnJourney }) => {
    return (
        <div className={`${styles["mobile-tabs-wrapper"]} ${isReturnJourney ? styles["return-journey"] : ""}`} >
            <div className={styles["mobile-tabs-inner"]}>
                <button onClick={() => handleTabClick(index, 0)} className={`${styles["mobile-tab-button"]} ${mobileTabs[index] === 0 ? styles["active"] : ""}`}   >
                    <i className="fa-solid fa-user-pen" style={{ marginRight: "8px" }}></i>
                    {appData?.words["strJourneyPassengerDetails"]}
                </button>
                <button onClick={() => handleTabClick(index, 1)} className={`${styles["mobile-tab-button"]} ${mobileTabs[index] === 1 ? styles["active"] : ""}`}   >
                    <i className="fa-solid fa-list-check" style={{ marginRight: "8px" }}></i>
                    Booking Summary
                </button>
            </div>
        </div>
    );
}

export default MobileTabs