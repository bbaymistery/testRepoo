import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import env from '../../../resources/env'
import styles from "./styles.module.scss"
import TaxiDealViewContent from './TaxiDealViewContent'
import useRipple from '../../../hooks/useRipple'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { titleStringOfHastaxiDeals } from '../../../helpers/titleStringOfHasTaxiDeals'
const PointsModal = dynamic(() => import('../../elements/PointsModal'));
const tabsBttons = [
    {
        name: "strHeathrowTaxiPrices",
        id: 1,
        dealsName: "heathrow"
    },
    {
        name: "strGatwickTaxiPrices",
        id: 2,
        dealsName: "gatwick"

    },
    {
        name: "strStanstedTaxiPrices",
        id: 3,
        dealsName: "stansted"

    },
    {
        name: "strLutonTaxiPrices",
        id: 4,
        dealsName: "luton"

    },
    {
        name: "strLCYTaxiPrices",
        id: 5,
        dealsName: "city"

    }
]
//showTabs=>they come from here > heathrow-airport-transfer
//isLinknameComponent comes driom [..linkname]
const TaxiDeals = (props) => {
    let { showTabs = true, bggray = false, islinknamecomponent = false } = props
    const dispatch = useDispatch()
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language, pointsModalStatus, hasTaxiDeals } } = state

    const [tabs, setTabs] = useState(0)
    const [taxiPoints, setTaxiPoints] = useState([])
    const refs = tabsBttons.map(() => useRef(null));
    const ripples = refs.map((ref) => useRipple(ref));

    const { appData } = useSelector(state => state.initialReducer)
    function sortDestinationsAlphabetically(destinations) {
        return destinations.sort((a, b) => {
            // Simply compare the full pageTitle strings
            return a?.pageTitle?.localeCompare(b.pageTitle);
        });
    }
    // function sortDestinationsBySecondPart(destinations) {
    //     // Assuming 'destinations' is your array of destination objects
    //     return destinations.sort((a, b) => {
    //         // Split the pageTitle by "to" and get the part after "to"
    //         const destinationA = a.pageTitle.split(" to ")[1].trim();
    //         const destinationB = b.pageTitle.split(" to ")[1].trim();

    //         // Use localeCompare for a case-insensitive comparison
    //         return destinationA.localeCompare(destinationB);
    //     });
    // }
    // function getUniquePickups(destinations) {
    //     const pickups = new Set(); // Create a new Set to hold unique pickup locations

    //     destinations.forEach(destination => {
    //         pickups.add(destination.pickup); // Add each pickup location to the Set
    //     });

    //     return pickups; // The Set will automatically remove any duplicates
    // }

    const fecthPoints = async (params = {}) => {
        let { language, dealsNameProp = hasTaxiDeals } = params;
        let channelId = state.reservations[0].reservationDetails.channelId;
        // Encode the dealsNameProp to handle spaces and special characters
        let encodedDealsNameProp = encodeURIComponent(dealsNameProp);
        let url = `${env.apiDomain}/api/v1/taxi-deals/list?points=${encodedDealsNameProp}&language=${language}&channelId=${channelId}`;
        console.log(url);

        let response = await fetch(url);
        let { data, status } = await response.json();
        if (status === 200) {
            setTaxiPoints(sortDestinationsAlphabetically(data?.destinations));

            // Usage
            // const sortedDestinations = sortDestinationsAlphabetically(data.destinations); // 'destinations' should be the array from your provided JSON
            // console.log(sortedDestinations);
            // console.log(getUniquePickups(data.destinations));

        }
    };


    const tabsHandler = async (params = {}) => {
        let { index, dealsNameProp } = params
        setTabs(index)
        fecthPoints({ dealsNameProp, language })
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: dealsNameProp } });
    }


    const setModal = () => {
        dispatch({ type: "SET_POINTS_MODAL", data: { trueOrFalse: true } })
        document.body.style.overflow = "hidden";
    }

    useEffect(() => {
        fecthPoints({ dealsNameProp: hasTaxiDeals, language })
        //asagidaki iki kod asagidaki use effecti acanda yox olmalidir
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
    }, [language, hasTaxiDeals])




    return (
        <>
            <div className={`${styles.taxideals} ${direction}  page `} bggray={String(bggray)} style={{ backgroundColor: `${String(bggray) === "true" ? "#f5f5f5" : "white"}` }}>
                {pointsModalStatus && <PointsModal points={taxiPoints} title={appData?.words[`${titleStringOfHastaxiDeals(hasTaxiDeals)}`]} />}
                <div className={`${styles.taxideals_section} page_section`}>
                    <div className={`${styles.taxideals_section_container} page_section_container`}>
                        {taxiPoints.length > 1 ?
                            <div className={styles.title}>
                                <h1>{appData?.words[`${titleStringOfHastaxiDeals(hasTaxiDeals)}`]}</h1>

                                {islinknamecomponent ? "" : <p>{appData?.words["strAllinclusiveprices"]}</p>}
                            </div> : <></>}
                        {showTabs ?
                            <div className={`${styles.tabs} `}>
                                {tabsBttons.map((btn, index) => {
                                    return (<button onClick={() => tabsHandler({ index, dealsNameProp: btn.dealsName })} className={`${tabs === index ? styles.active : ""} btn`} key={index} ref={refs[index]}   >
                                        <div className="ripple-wrapper">{ripples[index]}</div>
                                        {appData.words[btn.name]}
                                    </button>)
                                }
                                )}
                            </div>
                            : <></>}
                        {taxiPoints.length > 1 ? <TaxiDealViewContent islinknamecomponent={islinknamecomponent} points={taxiPoints} dealsName={hasTaxiDeals} /> : <div className={styles.no_result}>There is no result on Taxi Deals</div>}
                        {taxiPoints.length > 1 ?
                            <div className={styles.btn_div}>
                                <button className='btn_hover_reverse_primary' onClick={() => { setModal() }}>
                                    {appData?.words["strViewAll"]}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div> : <></>}
                    </div>
                </div>
            </div >
        </>
    )
}



export default TaxiDeals
