import React from 'react'
import { navigatorMobile } from '../../../constants/navigatior'
import Link from 'next/link';
import styles from "./styles.module.scss";

const MobileMenu = (({ handleClickNavLinkMobileMenuNotList, language, handleClickNavLinkMobileMenuList, openMenu }) => { // Note that `ref` is the second argument here
    return (
        <div className={`${styles.header_content_menu_mobile} ${openMenu ? styles.active_header_content_menu_mobile : ""} `}>
            <ul className={styles.menu_content_ul}>
                {navigatorMobile.map((item, index) => {
                    let { path, innerText, list, type, title, firstChild } = item
                    return (
                        <li key={innerText} className={`${styles.li_item} ${type === "list" ? styles.has_children : ""}`} id="navLink">
                            <Link onClick={() => handleClickNavLinkMobileMenuNotList({ index })} href={`${language === 'en' ? `${path}` : `${language}${path}`}`} title={title} className={`${!path.length ? styles.nocursor : ""}  ${firstChild ? styles.first_child_a : ""} `} >
                                <span>{innerText}</span>
                                {/* <span>{index === 0 ? appData?.words[innerText] : innerText}</span> */}
                                {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                            </Link>
                            {type === "list" ?
                                <ul className={styles.hoverUl}>
                                    {list.map((item) => {
                                        let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals } = item
                                        return (
                                            <li key={listInnerText} className={`${styles.li_item} ${!listPath.length ? styles.nocursor : ""}  `}>
                                                <Link onClick={() => handleClickNavLinkMobileMenuList({ hasTaxiDeals })} href={`${language === 'en' ? `${listPath}` : `${language}${listPath}`}`} title={listTitle} tabIndex="-1">
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
    );
});

export default MobileMenu