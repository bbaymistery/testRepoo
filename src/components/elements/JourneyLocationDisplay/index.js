import { useDispatch } from "react-redux";
import styles from "./styles.module.scss"
import CheckForFlight from "./CheckForFlight";
import CheckForCruises from "./CheckForCruises";
import CheckForTrain from "./CheckForTrain";
import CheckingForPostcodes from './CheckingForPostcodes';
import CheckForCitites from './CheckForCitites';
import CheckForUniversity from './CheckForUniversity';
import React from "react";
//showOnlyDetails FOR TOUR RELATED WE DONT NEED SHOW TWO POINT AT ONCE and we dont need to show pickup text on details

const JourneyLocationDisplay = (props) => {
    let { showOnlyDetailsForTour = false, label, points, appData, env, journeyType, type, pointsError = props.points.map(obj => ({})), isTaxiDeal = false, isTours = false } = props;
    const dispatch = useDispatch()
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: JSON.parse(item.detailsStatus), }), []);//cruiseNumber:{ pickup: 1, dropoff: 2, fieldType: 'text' }
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: item.image }), {}); //1:"/media/mglafg5zqlrsocfwodwj.svg"


    const pointsVisible = points?.map((point, i) => {

        return (
            <div key={point.id}>
                <div className={styles["journey-text"]}>
                    {imageObjects && (<img className={styles["journey-icon"]} src={`${env.apiDomain}${imageObjects[point.ptype === 3 ? 10 : point?.pcatId]}`} alt={point.address} />)}
                    {point.address}
                </div>
            </div>
        )
    }
    );

    const pointsVisibleDetails = points?.map((point, i) => {
        let pointError = Array.isArray(pointsError) && typeof pointsError[i] === 'object' ? pointsError[i] : {}

        return (
            <div key={point.id + 100} style={{ marginTop: '7px' }}>
                {point.pcatId === 1 ?
                    <CheckForFlight
                        type={type}
                        point={point}
                        error={pointError}
                        journeyType={journeyType}
                        objectDetailStatuses={objectDetailStatuses}
                        onChange={flightDetails => dispatch({ type: 'SET_FLIGHT_DETAILS_FOR_POINTS', 'data': { 'index': journeyType, type, 'pointIndex': i, flightDetails } })}
                    /> : <React.Fragment></React.Fragment>}

                {/* //! checking for CheckForCruises  */}
                {point.pcatId === 2 && point.ptype !== 3 ?
                    <CheckForCruises
                        point={point}
                        error={pointError}
                        journeyType={journeyType}
                        onChange={cruiseNumber => dispatch({ type: 'SET_CRUISE_NUMBER_FOR_POINTS', 'data': { 'index': journeyType, type, 'pointIndex': i, cruiseNumber } })}
                    /> : <React.Fragment></React.Fragment>}

                {/* //! checking for CheckForTrain  */}
                {point.pcatId === 3 && point.ptype !== 3 ?
                    <CheckForTrain
                        point={point}
                        journeyType={journeyType}
                        onChange={trainNumber => dispatch({ type: 'SET_TRAIN_NUMBER_FOR_POINTS', 'data': { 'index': journeyType, type, 'pointIndex': i, trainNumber } })}
                    /> : <React.Fragment></React.Fragment>}

                {/* //! checking for postcodes  */}
                {point.pcatId === 5 ?
                    <CheckingForPostcodes
                        point={point}
                        error={pointError}
                        journeyType={journeyType}
                        isTaxiDeal={isTaxiDeal}
                        onChange={postCodeDetails => dispatch({ type: 'SET_POSTCODE_DETAILS_FOR_POINTS', 'data': { 'index': journeyType, type, 'pointIndex': i, postCodeDetails } })}
                    /> : <React.Fragment></React.Fragment>}

                {/* //check for citites   */}
                {point.pcatId === 8 && point.ptype !== 3 ?
                    <CheckForCitites
                        point={point}
                        journeyType={journeyType}
                        onChange={value => dispatch({ type: 'SET_ADRESS_DESCRIPTION_FOR_POINTS', 'data': { 'index': journeyType, type, 'pointIndex': i, value } })}
                    />
                    : <React.Fragment></React.Fragment>}

                {/* universitirs Cotuit */}
                {point.pcatId === 9 && point.ptype !== 3 ?
                    <CheckForUniversity
                        point={point}
                        journeyType={journeyType}
                        onChange={value => dispatch({ type: 'SET_ADRESS_DESCRIPTION_FOR_POINTS', 'data': { 'index': journeyType, type, 'pointIndex': i, value } })}
                    />
                    : <React.Fragment></React.Fragment>}

            </div>

        )
    }
    );
    return (
        <div className={styles.box_wrapper}>
            {!showOnlyDetailsForTour &&
                <div className={styles["journey-box"]}>
                    <label className={styles["journey-label"]}>{label}</label>
                    {pointsVisible}
                </div>}
            <div>
                {pointsVisibleDetails}
            </div>
        </div>
    );
};

export default JourneyLocationDisplay;