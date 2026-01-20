import JourneyLocationDisplay from "../JourneyLocationDisplay";
import TextAreaField from "../TeaxtAreaField";
import styles from "./journeyDetails.module.scss";
//showOnlyDetails FOR TOUR RELATED WE DONT NEED SHOW TWO POINT AT ONCE
const JourneyDetails = (props) => {
    let { showOnlyDetailsForTour = false, showTextArea = true, index, goTitle, returnTitle, textAreaLabel, specialRequests, handleTextarea, selectedPickupPoints, selectedDropoffPoints, appData, env, reservationError } = props

    return (
        <div className={styles["journey-wrapper"]}>

            {!showOnlyDetailsForTour && <h2 className={styles["journey-title"]}>{index === 0 ? goTitle : returnTitle}</h2>}
            <div className={styles["journey-grid"]}>
                <JourneyLocationDisplay
                    env={env}
                    label={appData?.words["sePickUpLocation"]}
                    points={selectedPickupPoints}
                    appData={appData}
                    pointsError={reservationError['selectedPickupPoints']}
                    type='pickup'
                    journeyType={index}
                    showOnlyDetailsForTour={showOnlyDetailsForTour}
                />
                {!showOnlyDetailsForTour &&
                    <JourneyLocationDisplay
                        env={env}
                        label={appData?.words["seDropOffLocation"]}
                        points={selectedDropoffPoints}
                        appData={appData}
                        type='dropoff'
                        journeyType={index}
                        pointsError={reservationError['selectedDropoffPoints']}
                        showOnlyDetailsForTour={showOnlyDetailsForTour}
                    />
                }
            </div>
            {showTextArea &&
                <div className={styles["form-grid"]}>
                    <div className={styles["span-2"]}>
                        <TextAreaField
                            label={textAreaLabel}
                            placeholder={textAreaLabel}
                            name="specialRequests"
                            value={specialRequests}
                            onChange={(e) => handleTextarea(e, index)}
                        />
                    </div>
                </div>
            }

        </div>
    );
};

export default JourneyDetails;
