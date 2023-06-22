import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import logoImage from '../../../../public/logos/square_dark_blue.jpg'
// import logoImage from '../../../../public/logos/logowithtext.png'
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import env from "../../../resources/env";
import { navigator, navigatorMobile } from "../../../constants/navigatior";
import store from "../../../store/store";
import { useRouter } from "next/router";
import { extractLanguage } from "../../../helpers/extractLanguage";
import OutsideClickAlert from "../../elements/OutsideClickAlert";
import useRipple from "../../../hooks/useRipple";

const Header = () => {
  const ref = useRef(null);
  const ripples = useRipple(ref);
  const router = useRouter()
  const menuRef = useRef(null);
  const mobileMenu = useRef(null)
  const languagesDivRef = useRef(null)

  const dispatch = useDispatch()
  const { appData } = useSelector(state => state.initialReducer)
  const { params: { language, langIndex: reducerLangIndex, journeyType } } = useSelector(state => state.pickUpDropOffActions)
  const [langFlag, setLangFlag] = useState(language)
  const [langIndex, setLangIndex] = useState(reducerLangIndex)



  const handleLanguage = async (params = {}) => {
    let { e, text, key, direction, index } = params

    setLangFlag(key)
    setLangIndex(index)
    //set language and dicertion  to localstorage
    localStorage.setItem("language", JSON.stringify(key));
    localStorage.setItem("direction", JSON.stringify(direction));
    localStorage.setItem("langIndex", JSON.stringify(index));
    try {
      let response = await fetch(`${env.apiDomain}/app/${key}`)
      let data = await response.json()
      if (data.status === 200) {
        dispatch({ type: "SET_NEW_LANGUAGE", data: { languageKey: key, direction, langIndex: index } })
        //passing inital state in order make update in store js when language changing
        dispatch({ type: "SET_NEW_APPDATA", data, initialStateReducer: store.getState().initialReducer })
      } else {
        //if sth wrong it means we can use en for dont crush our website
        let response = await fetch(`${env.apiDomain}/app/en`)
        let data = await response.json()
        dispatch({ type: "SET_NEW_LANGUAGE", data: { languageKey: key, direction, langIndex: index } })
        //passing inital state in order make update in store js when language changing
        dispatch({ type: "SET_NEW_APPDATA", data, initialStateReducer: store.getState().initialReducer })
      }
    } catch (error) {
      let message = "AIRPORT-PICK-UP-LONDON  handleLanguage function Top HeaderComponent"
      window.handelErrorLogs(error, message, { url: `${env.apiDomain}/app/${key}` })
    }
    //url configuration based on language we select
    let checkTheUrlIfLangExist = extractLanguage(router.asPath) //tr es or it
    //to be sure that selected language is exist among languages or not
    let hasEn = appData?.languages.some((language) => language.value === checkTheUrlIfLangExist);
    if (checkTheUrlIfLangExist && hasEn) {
      //if length is 3 it means we r in the taxi deaals
      let replacedString = `${key === "en" ? "" : key}${router.asPath.length === 3 ? "" : "/"}`
      let url = router.asPath.replace(/^\/([a-z]{2})\/?/i, replacedString)
      //tr|it|sp/transfer-details...  replacing withh
      router.push(url);
    }
    else {
      //then when ever i change language i will add tr it ar
      //if it is english then  we dont need lang atrribute=>>>>>     /transfer-details...
      let url = `/${key === "en" ? "" : key}${router.asPath}`
      router.push(url);

    }
    //make hidden language dropdown in mobile menu After clicking
    languagesDivRef.current.style.opacity = 0
    languagesDivRef.current.style.visibility = 'hidden'
  }

  const toggleMenu = () => {
    menuRef.current.classList.toggle(`${styles.menuActive}`);
    mobileMenu.current.classList.toggle(`${styles.active_header_content_menu_mobile}`);

    // let positionOfBody = getComputedStyle(document.body).position
    // if (positionOfBody === "relative") {
    //   document.body.style.position = "fixed"
    // } else {
    //   document.body.style.position = "relative"
    // }

    const navLinks = document.querySelectorAll('#navLink');

    // setTimeout(() => {
    //   //Animate Links
    //   navLinks.forEach((link, index) => {
    //     if (link.style.animation) {
    //       link.style.animation = ''
    //     } else {
    //       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.3}s`;
    //     }
    //   });
    // }, 1000);
  }
  const gotoHomePage = (index) => {
    if (index === 0) {
      if (language === 'en') {
        router.push(`/`).then(() => { window.location.reload() });
      } else {
        router.push(`/${language}`).then(() => { window.location.reload() });
      }
    }
  }
  //for language dropdown
  const outsideClickDropDown = (e) => {
    languagesDivRef.current.style.opacity = 0
    languagesDivRef.current.style.visibility = 'hidden'
  }
  //when we click lang text it opens dropdown
  const setOpenLanguageDropdown = (e) => {
    // prevent to open dropdown
    if (router.asPath === "/drivers-wanted") return
    if (router.asPath === "/fleet") return
    languagesDivRef.current.style.opacity = 1
    languagesDivRef.current.style.visibility = 'visible'

  }

  const handleClickNavLinkMobileMenuNotList = ({ index }) => {
    //it means we r going to home page and we need to reset points
    if (index === 0) {
      dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } })
      dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: "heathrow" } })
    }
    toggleMenu()
  }
  const handleClickNavLinkMobileMenuList = (params = {}) => {
    let { hasTaxiDeals = '' } = params
    if (hasTaxiDeals) {
      dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
    }
    dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } })
    toggleMenu()

  }
  useEffect(() => {
    if ((localStorage?.getItem("language"))) {
      let langKey = JSON.parse(localStorage.getItem("language"))
      appData?.languages.map((item, index) => {
        let { value: key, } = item
        if (langKey === key) {
          setLangFlag(key)
          setLangIndex(index)
        }
      })
    }


  }, [language])

  return (
    <header className={styles.header} id="navbar_container" >
      <div className={styles.header_container}>
        <div className={styles.header_flex_div}>
          <div className={styles.left_items}>
            <div className={styles.left_items_flex_div}>
              <p className={`${styles.logo_tag} cursor_pointer`} onClick={() => gotoHomePage(0)}>
                <Image src={logoImage} alt="Airport-pickups-london Logo" width={30} height={30} priority />
                <span>Airport Pickups London</span>
              </p>
              <div className={styles.header_menu_content}>
                <ul>
                  {navigator.map((item, index) => {
                    let { path, innerText, list, type, title, } = item
                    return (
                      // as={`${path==='/'?"/":""}`}
                      <li key={innerText} className={`${styles.li_item} ${type === "list" ? styles.has_children : ""}`}>
                        <Link onClick={() => gotoHomePage(index)} tabIndex="-1" href={`${language === 'en' ? `${path}` : `${language}${path}`}`} title={title} className={`${!path.length ? styles.nocursor : ""}`}>
                          <span>{innerText}</span>
                          {/* <span>{index === 0 ? appData?.words[innerText] : innerText}</span> */}
                          {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                        </Link>
                        {type === "list" ?
                          <ul className={styles.hoverUl}>
                            {list.map((item) => {
                              //hasTaxideals setting taxiDealsName to redux
                              let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals } = item
                              //!

                              return (
                                <li key={listInnerText} className={`${styles.li_item}`}>
                                  <Link
                                    onClick={() => { dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } }); dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } }) }}
                                    href={`${language === 'en' ? `${listPath}` : `${language}${listPath}`}`}
                                    title={listTitle} tabIndex="-1" >
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
              {/* mobile  */}
              <div ref={mobileMenu} className={`${styles.header_content_menu_mobile} `}>
                <ul className={styles.menu_content_ul}>
                  {navigatorMobile.map((item, index) => {
                    let { path, innerText, list, type, title, firstChild } = item
                    return (
                      <li key={innerText} className={`${styles.li_item} ${type === "list" ? styles.has_children : ""}`} id="navLink">
                        <Link onClick={() => handleClickNavLinkMobileMenuNotList({ index })} tabIndex="-1" href={`${language === 'en' ? `${path}` : `${language}${path}`}`} title={title} className={`${!path.length ? styles.nocursor : ""}  ${firstChild ? styles.first_child_a : ""} `} >
                          <span>{innerText}</span>
                          {/* <span>{index === 0 ? appData?.words[innerText] : innerText}</span> */}
                          {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                        </Link>
                        {type === "list" ?
                          <ul className={styles.hoverUl}>
                            {list.map((item) => {
                              let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals } = item
                              return (
                                <li tabIndex="-1" key={listInnerText} className={`${styles.li_item} ${!listPath.length ? styles.nocursor : ""}  `}>
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
            </div>
          </div>

          <div className={styles.right_items}>
            {/* eliminate cursor  */}
            <div className={`${router.asPath === "/drivers-wanted" ? "no_cursor" : ""} ${styles.language_dropdown}`}>
              <div className={styles.top} >
                <div className={styles.img_div} onClick={setOpenLanguageDropdown} data-name="language">
                  <Image src={`/languages/${langFlag}.gif`} width={20} height={11} priority alt={langFlag} data-name="language" />
                </div>
                <span data-name="language" onClick={setOpenLanguageDropdown} className={styles.lang_text}>
                  {appData?.languages[langIndex]?.innerText}
                  {router.asPath === "/drivers-wanted" || router.asPath ==="/fleet"? <></> : <i className="fa-solid fa-angle-down"></i>}
                
                </span>
                <OutsideClickAlert onOutsideClick={outsideClickDropDown}>
                  <div ref={languagesDivRef} className={styles.all_languages} style={{ opacity: "0", visibility: "hidden" }} >
                    {appData?.languages.map((item, index) => {
                      let { innerText: text, value: key, dir: direction } = item

                      return (
                        <div className={styles.content} name={key} key={index} onClick={(e) => handleLanguage({ e, text, key, direction, index })}>
                          <div className={styles.img_div}>
                            <Image src={`/languages/${key}.gif`} width={20} height={11} priority alt={text} />
                          </div>
                          <span>{text}</span>
                        </div>
                      )
                    })}
                  </div>
                </OutsideClickAlert>
              </div>

            </div>

            <div className={styles.buttons}>
              <div className={styles.whitebtn_div}>
                <a href="/travelAgents" title="Travel Agents" >
                  <button ref={ref} >{ripples} Travel Agents</button>
                </a>
              </div>
              <div className={styles.bluebtn_div}>
                <a href="/manage-booking.html" title="Manage Booking" target="_blank">
                  <button>Manage My Booking</button>
                </a>
              </div>

            </div>
            <div onClick={toggleMenu} ref={menuRef} className={styles.menu} id="menu"   >
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;


