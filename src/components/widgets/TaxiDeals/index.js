import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import env from '../../../resources/env'
import PointsModal from '../../elements/PointsModal'

import styles from "./styles.module.scss"
import TaxiDealViewContent from './TaxiDealViewContent'
const tabsBttons = [
    {
        name: "Heathrow Taxi Deals",
        id: 1,
        dealsName: "heathrow"
    },
    {
        name: "Gatwick Taxi Deals",
        id: 2,
        dealsName: "gatwick"

    },
    {
        name: "Stansted Taxi Deals",
        id: 3,
        dealsName: "stansted"

    },
    {
        name: "Luton Taxi Deals",
        id: 4,
        dealsName: "luton"

    },
    {
        name: "City Airport",
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
    let { params: { direction, language, pointsModalStatus, hasTaxiDeals="heathrow" } } = state

    const [tabs, setTabs] = useState(0)
    const [taxiPoints, setTaxiPoints] = useState([])
    const [dealsName, setdealsName] = useState(hasTaxiDeals)

    const fecthPoints = async (params = {}) => {
        let { language, dealsNameProp = hasTaxiDeals } = params
        let channelId = state.reservations[0].reservationDetails.channelId
        let url = `${env.apiDomain}/api/v1/taxi-deals/list?points=${dealsNameProp}&language=${language}&channelId=${channelId}`;
        let response = await fetch(url);
        let { data, status } = await response.json();
        if (status === 200) setTaxiPoints(data.destinations)
    }
    const tabsHandler = async (params = {}) => {
        let { index, dealsNameProp } = params
        setTabs(index)
        setdealsName(dealsNameProp)
        fecthPoints({ dealsNameProp, language })
    }

    const setModal = () => {
        dispatch({ type: "SET_POINTS_MODAL", data: { trueOrFalse: true } })
        document.body.style.overflow = "hidden";
    }

    useEffect(() => {
        fecthPoints({ dealsNameProp: hasTaxiDeals, language })
    }, [language, hasTaxiDeals])

    
    return (
        <>
            {
                taxiPoints.length > 1 ? <div className={`${styles.taxideals} ${direction} ${islinknamecomponent ? styles.islinkname : ""} page `} bggray={String(bggray)} >
                    {pointsModalStatus && <PointsModal points={taxiPoints} title={`${dealsName} Transfer Deals`} />}
                    <div className={`${styles.taxideals_section} page_section`}>
                        <div className={`${styles.taxideals_section_container} page_section_container`}>
                            <div className={styles.title}>
                                {hasTaxiDeals === 'dover' || hasTaxiDeals === 'southampton' || hasTaxiDeals === 'portsmouth' || hasTaxiDeals === 'harwich' ? <h1>{hasTaxiDeals} Cruise Port</h1> : <h1>{hasTaxiDeals} Taxi Deals</h1>}
                                {islinknamecomponent ? "" : <p>All Inclusive Price !</p>}
                            </div>

                            {showTabs ?
                                <div className={`${styles.tabs} ${styles.btn_div}`}>
                                    {tabsBttons.map((btn, index) =>
                                        <button onClick={() => tabsHandler({ index, dealsNameProp: btn.dealsName })} className={`${tabs === index ? styles.active : ""} btn`} key={index}>
                                            {btn.name}
                                        </button>
                                    )}
                                </div>
                                : <></>}
                            <TaxiDealViewContent islinknamecomponent={islinknamecomponent} points={taxiPoints} dealsName={showTabs ? dealsName : hasTaxiDeals} />
                            <div className={styles.btn_div}>
                                <button className='btn' onClick={() => { setModal() }}>
                                    View All
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }


        </>
    )
}



export default TaxiDeals
