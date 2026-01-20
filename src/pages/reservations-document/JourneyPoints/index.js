
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import PickUpPoints from '../PickUpPoints';
import DropOffPoints from '../DropOffPoints';
import { useEffect, useState } from 'react';
const MeetDescription = ({ point, env }) => {
    const [meetPoint, setMeetPoint] = useState("");
    const url = `${env.apiDomain}/api/v1/drivers/meet-point`
    useEffect(() => {
        if (!point) return;

        const fetchMeetPoint = async () => {
            try {
                const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ point }), });

                const data = await res.json();
                console.log(data);

                if (data?.data?.["meet-point"]?.length > 0) {
                    setMeetPoint(data.data["meet-point"]);
                }
            } catch (err) {
                console.error("Meet point fetch error:", err);
            }
        };

        fetchMeetPoint();
    }, [point]);

    if (!meetPoint) return null;

    return (
        <div className={styles.info}>
            <i className="fa-solid fa-circle-info" style={{ marginTop: "2px", color: "#f59e0b" }}   ></i>

            <div>
                <h3 className={styles.infoTitle}>
                    Meeting Point Instructions
                </h3>

                {/* ✅ HTML render */}
                <div
                    className={styles.infoText}
                    dangerouslySetInnerHTML={{ __html: meetPoint }}
                />
            </div>
        </div>
    );
};

const JourneyPoints = (props) => {
    let { direction, pickUpDate, pickUpTime, index, selectedPickupPoints, selectedDropoffPoints, language, env, distance, duration } = props
    const { appData } = useSelector(state => state.initialReducer)
    // burda ise islem yapicaz request gondericez

    return (
        <section className={`${styles.card} ${styles.cardPadded}`}>

            {index === 1 ?
                <h2 className={styles.sectionTitle}>
                    <i className="fa-solid fa-route"></i>
                    {appData?.words["strReturnJourneyDetails"]}
                </h2>
                : <h2 className={styles.sectionTitle}>
                    <i className="fa-solid fa-route"></i>
                    {appData?.words["strYourBookingDetails"]}
                </h2>}

            <div className={styles.timeline}>
                <div className={styles.timelineLine}></div>
                <PickUpPoints selectedPickupPoints={selectedPickupPoints} pickUpDate={pickUpDate} pickUpTime={pickUpTime} direction={direction} language={language} distance={distance} duration={duration} />
                <br />

                <DropOffPoints selectedDropoffPoints={selectedDropoffPoints} direction={direction} language={language} distance={distance} duration={duration} />

            </div>

            {<MeetDescription point={selectedPickupPoints[0]} env={env} />}
        </section>
    );
};

export default JourneyPoints;