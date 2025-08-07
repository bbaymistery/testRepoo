import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import airportTranslations from '../../../constants/generalTranslataions';
import { navigator } from '../../../constants/navigatior';
import { getTitleStringOfHastaxiDeals } from '../../../helpers/splitHelper';
import styles from "./styles.module.scss";
import Button from '../../elements/Button/Button';
import { BUTTON_TYPES } from '../../elements/Button/ButtonTypes';
const PointsModal = dynamic(() => import('../../elements/PointsModal'));



const tabsBttons = navigator[1].list.slice(0, 5)
const PopularDestinations = (props) => {
    const { showTabs = true, islinknamecomponent = false, env } = props

    const dispatch = useDispatch();
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction, language, pointsModalStatus, hasTaxiDeals, selectedCurrency } } = state;
    const { appData } = useSelector(state => state.initialReducer)

    const [points, setPoints] = useState([])

    const [tabs, setTabs] = useState(0)
    const fecthPoints = async (params = {}) => {
        let { language, dealsNameProp = hasTaxiDeals } = params;
        let channelId = state.reservations[0].reservationDetails.channelId;
        // Encode the dealsNameProp to handle spaces and special characters
        // IST>"istanbul airport"
        // SAW>"sabiha gokcen airport"
        // AYT>"antalya airport"
        // DLM>"dalaman airport"
        // BJV>"bodrum airport"
        if (dealsNameProp === "IST") {
            dealsNameProp = "istanbul airport"
        }
        else if (dealsNameProp === "SAW") {
            dealsNameProp = "sabiha gokcen airport"
        } else if (dealsNameProp === "AYT") {
            dealsNameProp = "antalya airport"
        } else if (dealsNameProp === "DLM") {
            dealsNameProp = "dalaman airport"
        } else if (dealsNameProp === "BJV") {
            dealsNameProp = "bodrum airport"
        }
        let encodedDealsNameProp = encodeURIComponent(dealsNameProp);
        let url = `${env.apiDomain}/api/v1/taxi-deals/list?points=${encodedDealsNameProp}&language=${language}&channelId=${channelId}&currencyId=${selectedCurrency.currencyId}`;
        console.log(url);


        let response = await fetch(url);

        let { data, status } = await response.json();
        console.log(data);

        if (status === 200) {
            setPoints(data.destinations)
        }
    };
    const tabsHandler = async (params = {}) => {
        let { index, dealsNameProp } = params
        setTabs(index)
        fecthPoints({ dealsNameProp, language })
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: dealsNameProp } });
    }

    useEffect(() => {
        fecthPoints({ dealsNameProp: hasTaxiDeals, language })
        //asagidaki iki kod asagidaki use effecti acanda yox olmalidir
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
    }, [language, hasTaxiDeals, selectedCurrency.currencyId])

    return (
        <div className={`${styles.populardestination} ${direction} page`} >
            {pointsModalStatus && <PointsModal dealsName={hasTaxiDeals} points={points} title={getTitleStringOfHastaxiDeals(hasTaxiDeals, language)} language={language} />}

            <div className={`${styles.populardestination_section} page_section`}>
                <div className={`${styles.populardestination_section_container} page_section_container`}>
                    {!islinknamecomponent && showTabs ?
                        <div className={`${styles.tabs} `}>
                            {tabsBttons.map((btn, index) => {
                                return (
                                    <Button
                                        type={tabs === index ? BUTTON_TYPES.PRIMARY : BUTTON_TYPES.PRIMARY_OUTLINE}
                                        onBtnClick={() => tabsHandler({ index, dealsNameProp: btn.hasTaxiDeals })}
                                        style={{ padding: "5px 9px", letterSpacing: "0px", }}
                                        btnText={airportTranslations[language][btn.strInnerText].split("(")[0]}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                        : <></>}
                    <div className={styles.title_div}>
                        {islinknamecomponent ? <h2>{getTitleStringOfHastaxiDeals(hasTaxiDeals, language)}</h2> : <></>}
                    </div>
                    <div className={styles.featureIcons}>
                        {points.map((item, idx) => {

                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <a href={item.pathname}>
                                        <div className={styles.tourcard_header}>
                                            <div className={styles.tourcard_image}>
                                                <Image alt={item.translatedPageTitle || item.pageTitle} sizes="(max-width: 768px) 100vw, (min-width: 769px) 300px" src={item.imageUrl ? item.imageUrl : "/images/default.webp"} width={250} height={198} />
                                            </div>
                                        </div>
                                        <div className={styles.tourcard_content}>
                                            <div className={styles.location}>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {item.pickup}
                                            </div>
                                            <h3 className={styles.title}>
                                                <span>{item.translatedPageTitle}</span>
                                            </h3>
                                            <div className={styles.tourcard_rating}>
                                                <div className={styles.stars}>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                </div>
                                                <span>4.8 (3000+)</span>
                                            </div>
                                            <div className={styles.tourcard_bottom}>
                                                <div>
                                                    <i className={"fa-solid fa-clock"}></i>
                                                </div>
                                                <div className={styles.price}>
                                                    {appData.words["strStartFrom"]} <span> {+selectedCurrency.currencyId === 1 ? item.price : item.exchangedPrice} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularDestinations;
