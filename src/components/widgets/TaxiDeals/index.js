import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import env from '../../../resources/env'
import styles from "./styles.module.scss"
import TaxiDealViewContent from './TaxiDealViewContent'
import useRipple from '../../../hooks/useRipple'
import { useRef } from 'react'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
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
        dealsName: "city airport"

    }
]
//showTabs=>they come from here > heathrow-airport-transfer
//isLinknameComponent comes driom [..linkname]
const TaxiDeals = (props) => {
    let { showTabs = true, bggray = false, islinknamecomponent = false } = props
    const dispatch = useDispatch()
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language, pointsModalStatus, hasTaxiDeals = "heathrow" } } = state
    const [tabs, setTabs] = useState(0)
    const [taxiPoints, setTaxiPoints] = useState([])
    const refs = tabsBttons.map(() => useRef(null));
    const ripples = refs.map((ref) => useRipple(ref));
    const router = useRouter();

    const { appData } = useSelector(state => state.initialReducer)

    const fecthPoints = async (params = {}) => {
        let { language, dealsNameProp = hasTaxiDeals } = params;
        let channelId = state.reservations[0].reservationDetails.channelId;
        // Encode the dealsNameProp to handle spaces and special characters
        let encodedDealsNameProp = encodeURIComponent(dealsNameProp);
        let url = `${env.apiDomain}/api/v1/taxi-deals/list?points=${encodedDealsNameProp}&language=${language}&channelId=${channelId}`;
        let response = await fetch(url);
        let { data, status } = await response.json();
        if (status === 200) setTaxiPoints(data.destinations);
    };


    const tabsHandler = async (params = {}) => {
        let { index, dealsNameProp } = params
        setTabs(index)

        fecthPoints({ dealsNameProp, language })
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: dealsNameProp } });
        localStorage.setItem("hasTaxiDeals", JSON.stringify(dealsNameProp));
    }


    const setModal = () => {
        dispatch({ type: "SET_POINTS_MODAL", data: { trueOrFalse: true } })
        document.body.style.overflow = "hidden";
    }

    useEffect(() => {
        fecthPoints({ dealsNameProp: hasTaxiDeals, language })
    }, [language, hasTaxiDeals,])

    useEffect(() => {
        // if (hasTaxiDeals === "heathrow") {
        //     setTabs(0)
        // }
        // if (hasTaxiDeals === "gatwick") {
        //     setTabs(1)
        // }
        // if (hasTaxiDeals === "stansted") {
        //     setTabs(2)
        // }

        // if (hasTaxiDeals === "luton") {
        //     setTabs(3)
        // }
        // if (hasTaxiDeals === "city") {
        //     setTabs(4)
        // // }
        const validPaths = ["/", "/es", "/tr", "/zh", "/ru", "/it", "/ar"];
        if (validPaths.includes(router.pathname)) {
            const hasTaxiDeals = "heathrow";
            localStorage.setItem("hasTaxiDeals", JSON.stringify(hasTaxiDeals));
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
            fecthPoints({ dealsNameProp: hasTaxiDeals, language });
        }

    }, [])
    return (
        <>
            {
                <div className={`${styles.taxideals} ${direction} ${islinknamecomponent ? styles.islinkname : ""} page `} bggray={String(bggray)} >
                    {pointsModalStatus && <PointsModal points={taxiPoints} title={`${hasTaxiDeals} Transfer Deals`} />}
                    <div className={`${styles.taxideals_section} page_section`}>
                        <div className={`${styles.taxideals_section_container} page_section_container`}>
                            {taxiPoints.length > 1 ?
                                <div className={styles.title}>
                                    {hasTaxiDeals === 'dover' || hasTaxiDeals === 'southampton' || hasTaxiDeals === 'portsmouth' || hasTaxiDeals === 'harwich' ? <h1>{hasTaxiDeals} Cruise Port</h1> : <h1>{appData.words[tabsBttons[tabs].name]}</h1>}
                                    {islinknamecomponent ? "" : <p>{appData?.words["strAllinclusiveprices"]}</p>}
                                </div> : <></>}
                            {showTabs ?
                                <div className={`${styles.tabs} ${styles.btn_div}`}>
                                    {tabsBttons.map((btn, index) => {
                                        return (<button onClick={() => tabsHandler({ index, dealsNameProp: btn.dealsName })} className={`${tabs === index ? styles.active : ""} btn`} key={index} ref={refs[index]}   >
                                            <div className="ripple-wrapper">{ripples[index]}</div>
                                            {appData.words[btn.name]}
                                        </button>)
                                    }
                                    )}
                                </div>
                                : <></>}
                            {taxiPoints.length > 1 ? <TaxiDealViewContent islinknamecomponent={islinknamecomponent} points={taxiPoints} dealsName={hasTaxiDeals} /> : <></>}
                            {taxiPoints.length > 1 ?
                                <div className={styles.btn_div}>
                                    <button className='btn' onClick={() => { setModal() }}>
                                        View All
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div> : <></>}
                        </div>
                    </div>
                </div >}
        </>
    )
}



export default TaxiDeals
