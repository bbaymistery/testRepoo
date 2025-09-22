import React from 'react'
import { expandedNavigatorMobile, navigatorMobile } from '../../../constants/navigatior'
import Link from 'next/link';
import styles from "./styles.module.scss";
import { useRouter } from 'next/router';

const MobileMenu = (({ handleClickNavLinkMobileMenuNotList, language, handleClickNavLinkMobileMenuList, openMenu, appData, expandedMenu }) => { // Note that `ref` is the second argument here
    const router = useRouter()
    return (
        <div className={`${styles.header_content_menu_mobile} ${openMenu ? styles.active_header_content_menu_mobile : ""} `} expand={String(expandedMenu)}>
            <ul className={styles.menu_content_ul}>
                {(expandedMenu ? expandedNavigatorMobile : navigatorMobile).map((item, index) => {
                    let { path, innerText, list, type, title, firstChild, strInnerText } = item
                    return (
                        <li key={innerText} id="navLink">
                            <Link target={index === 7 ? "_blank" : "_self"} onClick={() => handleClickNavLinkMobileMenuNotList({ index })} href={`${language === 'en' ? `${path}` : `${language}${path}`}`} title={appData?.words[title]} className={`${!path.length ? styles.nocursor : ""}  ${firstChild ? styles.first_child_a : ""} `} >
                                <span>{appData?.words[strInnerText]}</span>
                                {/* <span>{index === 0 ? appData?.words[innerText] : innerText}</span> */}
                                {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                            </Link>
                            {type === "list" ?
                                <ul className={styles.hoverUl}>
                                    {list.map((item) => {
                                        let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals, strInnerText } = item
                                        return (
                                            <li onClick={() => {
                                                handleClickNavLinkMobileMenuList({ hasTaxiDeals });
                                                router.push(`${language === 'en' ? `${listPath}` : `/${language}${listPath}`}`)
                                            }} key={listInnerText} className={`${!listPath.length ? styles.nocursor : ""} `}>
                                                <p title={appData?.words[listTitle]} tabIndex="-1">
                                                    <span>{appData?.words[strInnerText]}</span>

                                                </p>
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