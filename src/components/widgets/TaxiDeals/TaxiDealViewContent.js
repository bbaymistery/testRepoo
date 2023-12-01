

import React from 'react'
import styles from "./styles.module.scss"
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { cruisePortimages, taxidealsImages } from '../../../constants/taxideals'

//taking delas name and making it dynamic for gatwixk for heathrow and the others
const taxiDealsValidLocations = (dealsName) => {
    //first letter uppercase
    dealsName = dealsName.charAt(0).toUpperCase() + dealsName.slice(1);
    if (dealsName === 'City') dealsName = 'City Airport'
    //we r destcructing to taxi trasnfer
    return [
        `${dealsName} to Oxford taxi`,
        `${dealsName} to Birmingham taxi`,
        `${dealsName} to Cambridge taxi`,
        `${dealsName} to Bath taxi`,
        `${dealsName} to Bristol taxi`,
        `${dealsName} to Brighton taxi`,
        `${dealsName} to Norwich taxi`,
        `${dealsName} to Canterbury taxi`
    ]
}


const TaxiDealViewContent = ({ points, dealsName, islinknamecomponent }) => {
    const { appData } = useSelector(state => state.initialReducer)
    function filterDatas(datas) {
        if (["portsmouth", "dover", "harwich", "southampton"].includes(dealsName)) {
            //we  do not need any destructing
            return datas = points
        } else {
            return datas
                .filter(({ pageTitle }) => taxiDealsValidLocations(dealsName).includes(pageTitle))
                .sort((a, b) => taxiDealsValidLocations(dealsName).indexOf(a.pageTitle) - taxiDealsValidLocations(dealsName).indexOf(b.pageTitle));
        }
    }
    //dealsName === 'dover' || dealsName === 'southampton' || dealsName === 'portsmouth' || dealsName === 'harwich'
    const filteredDatas = filterDatas(points);
    return (
        <>
            <div className={styles.cards}>
                {points.length > 1 ?
                    filteredDatas.slice(0, 4).map((item, index) => {
                        return (
                            <a data-id="a" title={item?.pageTitle} href={item.pathname} className={`${styles.card}`} key={item.id}>
                                <div className={styles.card_image_div}>
                                    {dealsName === 'dover' || dealsName === 'southampton' || dealsName === 'portsmouth' || dealsName === 'harwich' ?
                                        <Image src={`${cruisePortimages.slice(0, 4)?.[index]?.image}`} className={styles.img} fill alt={item.pageTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                        :
                                        <Image src={`${taxidealsImages.slice(0, 4)?.[index]?.image}`} className={styles.img} fill alt={item.pageTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                    }
                                </div>
                                <div className={styles.card_body}>
                                    <h2>{item?.translatedPageTitle ? item?.translatedPageTitle : item?.title}</h2>
                                    <div className={styles.review}>
                                        <div className={styles.review_left}>{item.point} </div>
                                        <div className={styles.review_center}>Exceptional </div>
                                        <div className={styles.review_right}>{item.review} reviews  </div>
                                    </div>
                                    <div className={styles.start_from}>
                                        <div className={styles.start_from_text_left}>{appData.words["strStartFrom"]} </div>
                                        <div className={styles.start_from_text_right}> {item?.price} </div>
                                    </div>

                                </div>
                            </a>
                        )
                    }) :
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        No content
                    </div>
                }
            </div>
            <div className={styles.haveSpace}> </div>

            <div className={styles.cards}>

                {points.length > 1 ?
                    filteredDatas.slice(4, 8).map((item, index) => {

                        return (
                            <a data-id="a" title={item?.pageTitle} href={item.pathname} className={`${styles.card}`} key={item.id}>
                                <div className={styles.card_image_div}>
                                    {dealsName === 'dover' || dealsName === 'southampton' || dealsName === 'portsmouth' || dealsName === 'harwich' ?
                                        <Image src={`${cruisePortimages.slice(4, 8)?.[index]?.image}`} className={styles.img} fill alt={item.pageTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                        :
                                        <Image src={`${taxidealsImages.slice(4, 8)?.[index]?.image}`} className={styles.img} fill alt={item.pageTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                    }

                                </div>
                                <div className={styles.card_body}>
                                    <h2>{item?.translatedPageTitle ? item?.translatedPageTitle : item?.title}</h2>
                                    <div className={styles.review}>
                                        <div className={styles.review_left}>{item.point} </div>
                                        <div className={styles.review_center}>Exceptional </div>
                                        <div className={styles.review_right}>{item.review} reviews  </div>
                                    </div>
                                    <div className={styles.start_from}>
                                        <div className={styles.start_from_text_left}>{appData.words["strStartFrom"]} </div>
                                        <div className={styles.start_from_text_right}> {item?.price} </div>
                                    </div>

                                </div>
                            </a>
                        )
                    }) :
                    <>
                    </>
                }


            </div>
        </>
    )
}

export default TaxiDealViewContent