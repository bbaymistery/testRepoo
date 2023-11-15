import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logoImage from '../../../../public/logos/blueLogoAirPort.png'
import fbImage from '../../../../public/social/fb.gif';
import twImage from '../../../../public/social/tw.gif';
import blogImage from '../../../../public/social/Blog.png';
import srImage from '../../../../public/social/rss.png';
import instaIamge from '../../../../public/social/Instigram.gif';
import styles from "./styles.module.scss"
import Link from 'next/link';
import { Airports, CruisePorts } from '../../../constants/navigatior';

const Footer = (props) => {
  let { bggray } = props
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language, journeyType } } = state
  const { appData } = useSelector(state => state.initialReducer)

  const dispatch = useDispatch()
  return (

    <div className={`${styles.footer}  ${direction} page`} bggray={String(bggray)}>
      <div className={`${styles.footer_section} page_section`}>
        <div className={`${styles.footer_section_container} page_section_container`}>
          <div className={styles.content}>
            <div className={`${styles.column} ${styles.first_column}`}>
              <div className={styles.logo}>
                <Image src={logoImage} alt="Airport-pickups-london Logo" width={300} height={28} />
              </div>
              <p>
                <span> Airport Pickups London (APL Cars) </span>is a leading provider of
                London airport transfers and shuttle services in London.
                Our standards of reliability and comfort are second to none.
                What’s more, we pride ourselves on offering the very
                best service and value for money.
              </p>
            </div>


            <div className={styles.column}>
              <h3>Company</h3>
              <ul className={styles.list_items}>
                <li>
                  <a href={`${language === 'en' ? `/drivers-wanted` : `${language}/drivers-wanted`}`} title='Drivers' >
                    Drivers
                  </a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href={`${language === 'en' ? `/about-us` : `${language}/about-us`}`} title={appData.words["aboutUs"]}>
                    {appData.words["aboutUs"]}
                  </a>
                </li>
                <li>
                  <a href={`${language === 'en' ? `/contact-us` : `${language}/contact-us`}`} title={appData.words["appContactUsHeader"]} >
                    {appData.words["appContactUsHeader"]}
                  </a>
                </li>
                <li>
                  <a href={`${language === 'en' ? `/terms` : `${language}/terms`}`} title={appData.words["strTermsOfUse"]}  >
                    {appData.words["strTermsOfUse"]}
                  </a>
                </li>
                <li>
                  <a href={`${language === 'en' ? `/terms` : `${language}/terms`}`} title={appData.words["strPrivacyPolicy"]}  >
                    {appData.words["strPrivacyPolicy"]}
                  </a>
                </li>

                <li>
                  <a href={`${language === 'en' ? `/heathrow-porter-service` : `${language}/heathrow-porter-service`}`}  >
                    Porter Service
                  </a>
                </li>
                <li>
                  <a href={`${language === 'en' ? `/heathrow-vip-meet-and-assist` : `${language}/heathrow-vip-meet-and-assist`}`}  >
                    Meet and assist
                  </a>
                </li>

              </ul>

            </div>
            <div className={styles.column}>
              <h3>Cruise Ports</h3>
              <ul className={styles.list_items}>

                {CruisePorts.map((airport, index) => {
                  let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals } = airport

                  return <li key={index}>
                    <Link

                      onClick={() => { dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } }); dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } }) }}
                      href={`${language === 'en' ? `${listPath}` : `${language}${listPath}`}`}
                      title={listTitle}>
                      <span>{listInnerText}</span>
                    </Link>
                  </li>
                })}
              </ul>

            </div>
            <div className={styles.column}>
              <h3>Airports</h3>
              <ul className={styles.list_items}>
                {Airports.map((airport, index) => {
                  let { path: listPath, innerText: listInnerText, title: listTitle, hasTaxiDeals } = airport

                  return <li key={index}>
                    <Link

                      onClick={() => { dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } }); dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } }) }}
                      href={`${language === 'en' ? `${listPath}` : `${language}${listPath}`}`}
                      title={listTitle}  >
                      <span>{listInnerText}</span>
                    </Link>
                  </li>
                })}
              </ul>

            </div>
            <div className={`${styles.column} ${styles.last_column}`}>
              <h3>Contact Us</h3>

              <div className={styles.description}>
                <p>Toll Free Customer Care</p>

                {direction === 'rtl' ?
                  <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} href="tel:+442086887744">
                    <span>  + </span>
                    4402086887744
                  </a>
                  : <a href="tel:+442086887744">

                    +44 (0) 208 688 7744
                  </a>}
              </div>
              <div className={styles.description}>
                <p>Need live support ?</p>
                <a href="mailto:info@aplcars.com" >info@aplcars.com</a>
              </div>


              <div className={styles.description}>
                <p>WhatsApp</p>


                {direction === 'rtl' ?
                  <a target="_blank" href="https://wa.me/447387901028" style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} tabIndex="-1">
                    <span>  + </span>
                    447387901028
                  </a>
                  : <a href="tel:+442086887744">

                    +44 73 8790 1028
                  </a>}
              </div>
            </div>
          </div>


          <div className={styles.subcontent}>

            <div className={styles.subcontent_left}>
              <div className={styles.copyright}>
                Copyrights  © 2022  Airport Pickups London
              </div>
              <ul className={styles.lists}>
                <li>
                  <a href={`${language === 'en' ? `/terms` : `${language}/terms`}`} title={appData.words["strPrivacyPolicy"]} >
                    {appData.words["strPrivacyPolicy"]}
                  </a>
                </li>
                <li>
                  <a href={`${language === 'en' ? `/terms` : `${language}/terms`}`} title={appData.words["strTermsOfUse"]} >
                    {appData.words["strTermsOfUse"]}
                  </a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>

            <div className={styles.subcontent_right}>
              <div className={styles.icons}>

                <a href="https://www.facebook.com/AirportPickupsLondon" target={"_blank"} title={"Airport Pickups London Facebook"}>
                  <Image src={fbImage} alt="Airport Pickups London Facebook" width={25} height={25} priority />
                </a>
                <a href="https://twitter.com/Airport_Pickups" target={"_blank"} title="Airport Pickups London Twitters">
                  <Image src={twImage} alt="Airport Pickups London Twitters" width={25} height={25} priority />
                </a>
                <a href="http://feeds2.feedburner.com/London-Airport-News" target="_blank" title="Airport Pickups London News RSS">
                  <Image src={srImage} alt="Airport Pickups London News RSS" width={25} height={25} priority />
                </a>
                <a href="https://www.instagram.com/airport_pickups_london/" target="_blank" title="irport Pickups London Instigram page">
                  <Image src={instaIamge} alt="Airport Pickups London Instigram page" width={25} height={25} priority />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer