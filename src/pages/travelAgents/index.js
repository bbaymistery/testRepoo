import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import usePageContentHook from '../../hooks/usePageContentHook'
import CarsSlider from "../../components/widgets/CarsSlider";
import DestinationsCustomers from '../../components/elements/DestinationsCustomers';
import Link from 'next/link'


const Corporate = (props) => {
  let { bggray } = props
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state
  const { appData } = useSelector(state => state.initialReducer)

  const { metaTitle, keywords, description, pageContent, pageTitle, shortDescription } = usePageContentHook("open-a-corporate-accounts", language);


  return (
    <GlobalLayout keywords={keywords} title={metaTitle} description={description}>
      <div className={`${styles.corporate} ${direction} page`} bggray={String(bggray === "true")}>
        <div className={`${styles.corporate_section} page_section`}>
          <div className={`${styles.corporate_section_container} page_section_container`}>
            <div className={styles.content}>
              {!pageContent ?
                <div className={styles.left}>
                  <h1 className={styles.title}>
                    Travel Agents
                  </h1>
                  <div className={styles.account_div}>
                    {/* https://agency-apl.netlify.app */}
                    <Link target='_blank' href="https://www.airport-pickups-london.com/Agency" >
                      <button className='btn btn_primary'>Login</button>
                    </Link>

                    <Link href={language === 'en' ? '/AccountRegister' : `/${language}/AccountRegister`} title="AccountRegister" >
                      <button className='btn btn_primary'>Register</button>
                    </Link>
                  </div>

                  <p>
                    Wherever you happen to be in the world, as long as you have access to the internet,
                    you are only a few clicks away from booking a car for collection from,
                    or a journey to, any one of London five main passenger airports - <span>Heathrow, Gatwick , Stansted, Luton </span>  and <span>City Airport</span>.
                    <br />
                    Our online booking system is fully secure with 128 Bit SSL, as we understand the sensitivity of your privacy.
                  </p>
                  <div className={styles.title}>
                    Telephone and Fax booking
                  </div>
                  <p>
                    For telephone booking please call
                    <span>  +44 (0) 20 8688 7744 </span>
                    or
                    <span> 0 208 684 9646  </span>
                    For fax bookings please
                    fax your Name,
                    Surname, Flight number,
                    arrival airport and contact
                    details to
                    <span> +44 (0) 20 8684 9418</span>
                  </p>
                </div>

                :

                <div className={styles.left}>
                  <h1 className={styles.title}>
                    Travel Agents
                  </h1>
                  <div className={styles.account_div}>
                    <Link target='_blank' href="https://www.airport-pickups-london.com/Agency" >
                      <button className='btn btn_primary'>Login</button>
                    </Link>
                    <a href={language === 'en' ? '/AccountRegister' : `/${language}/AccountRegister`} title="AccountRegister" >
                      <button className='btn btn_primary'>Register</button>
                    </a>
                  </div>

                  <p>
                    Wherever you happen to be in the world, as long as you have access to the internet,
                    you are only a few clicks away from booking a car for collection from,
                    or a journey to, any one of London five main passenger airports - <span>Heathrow, Gatwick , Stansted, Luton </span>  and <span>City Airport</span>.
                    <br />
                    Our online booking system is fully secure with 128 Bit SSL, as we understand the sensitivity of your privacy.
                  </p>
                  <div className={styles.title}>
                    Telephone and Fax booking
                  </div>
                  <p>
                    For telephone booking please call
                    <span>  +44 (0) 20 8688 7744 </span>
                    or
                    <span> 0 208 684 9646  </span>
                    For fax bookings please
                    fax your Name,
                    Surname, Flight number,
                    arrival airport and contact
                    details to
                    <span> +44 (0) 20 8684 9418</span>
                  </p>
                </div>
              }
              <div className={styles.right}>

                <img src="/images/apl_family.jpg" alt="" />
              </div>
            </div>
            <DestinationsCustomers />

            <CarsSlider noborder={true} />


          </div>
        </div>
      </div>
    </GlobalLayout>
  )
}

export default Corporate