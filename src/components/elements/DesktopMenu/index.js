import React from 'react'
import { navigator } from '../../../constants/navigatior'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styles from "./styles.module.scss";
const DesktopMenu = ({ language, gotoHomeFromLogoClick, journeyType }) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.header_menu_content}>
            <ul>
                {navigator.map((item, index) => {
                    let { path, innerText, list, type, title, } = item
                    return (
                        // as={`${path==='/'?"/":""}`}
                        <li key={innerText} className={`${styles.li_item} ${type === "list" ? styles.has_children : ""}`}>
                            {index === 0 ?
                                <a onClick={gotoHomeFromLogoClick} href={language === 'en' ? '/' : `/${language}`} title={title} className={`${path.length ? styles.nocursor : ""}`} >
                                    <span>{innerText}</span>
                                </a>
                                :
                                <a href={`${language === 'en' ? `${path}` : `/${language}${path}`}`} title={title} className={`${path.length ? styles.nocursor : ""}`}>
                                    <span>{innerText}</span>
                                    {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                                </a>
                            }

                            {type === "list" ?
                                <ul className={styles.hoverUl}>
                                    {list.map((item) => {
                                        //hasTaxideals setting taxiDealsName to redux
                                        let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals } = item
                                        //!

                                        return (
                                            <li key={listInnerText} className={`${styles.li_item}`}>
                                                <Link
                                                    onClick={
                                                        () => {
                                                            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
                                                            dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } });
                                                            localStorage.setItem("hasTaxiDeals", JSON.stringify(hasTaxiDeals));
                                                        }}
                                                    href={`${language === 'en' ? `${listPath}` : `${language}${listPath}`}`}
                                                    title={listTitle}>
                                                    <span>{listInnerText}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                    }
                                </ul> : <></>}
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default DesktopMenu