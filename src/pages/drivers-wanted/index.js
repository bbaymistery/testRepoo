import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout';
import CarsSlider from "../../components/widgets/CarsSlider";
import usePageContentHook from '../../hooks/usePageContentHook';
const DriversWanted = () => {
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state

  let keywords = "", metaTitle = "", description = ""
  return (
    <GlobalLayout keywords={keywords} title={metaTitle} description={description} footerbggray={true}>
      <div className={`${styles.driverswanted} ${direction} page`}>
        <div className={`${styles.driverswanted_section} page_section`}>
          <div className={`${styles.driverswanted_section_container} page_section_container`}>
            <div className={styles.content}>

              <div className={styles.left}>
                <h1>Become an APL Driver</h1>
                <p>
                  Join our growing team of professional drivers at APL Cars. We are currently accepting applications for MPV, SUV, and 8-seater vehicles. Additionally, we are accepting applications for Business Class saloon vehicles such as Mercedes, BMW, Tesla, and Jaguar.
                </p>
                <h2>
                  Driver Registration
                </h2>
                <p>
                  To register, please follow these steps:
                </p>
                <p>
                  Download our APL Driver App:
                  <ul>
                    <li>
                      Fill out the driver registration form in the app.
                    </li>
                    <li>
                      After completing the registration process, visit our office at APL Office, Novotel Cherry Lane, UB7 9HJ (FREE parking).
                    </li>
                  </ul>
                </p>
                <h2>APL Driver App</h2>
                {/* <p>
                  If you encounter any difficulties during the registration process, please contact us on WhatsApp at
                  <a target="_blank" href="https://wa.me/447809536620"> &nbsp; +44 7809 536620  &nbsp;</a>
                  for assistance.
                  After completing your registration, visit our office at APL Office, Novotel Cherry Lane, UB7 9HJ (FREE parking).
                </p> */}
               

                <div className={styles.ios_android_div}>
                  <p>1 - For Iphone: please click on the link below</p>
                  <a href="https://apps.apple.com/gb/app/apl-drivers/id1661484765">
                    <div>
                      <img src="images/iosicon.png" alt="Aiport pickups-london ios-icon" />
                      <p>APL Drivers<br /></p>
                    </div>
                  </a>
                </div>
                <p>Go to Settings / Privacy / Location Services, APL / Allow Location Always.</p>

                &nbsp;
                <div className={styles.ios_android_div}>
                  <p>2 - For Android Phones: Please click on the link below or download from Google PLAY Store</p>
                  <a href="https://apps.apple.com/gb/app/apl-drivers/id1661484765">
                    <div>
                      <img src="images/androidicon.png" alt="Aiport pickups-london ios-icon" />
                      <p>APL Drivers<br /></p>
                    </div>
                  </a>
                </div>
                <p>After installation is completed, accept notifications and location permissions.</p>
                &nbsp;

                <h2>APL Name Board App</h2>
                <p>Please download our APL Name Board App for an improved pickup experience:</p>
                <p>For iOS devices: Download from the <a href="https://apps.apple.com">App Store</a> : APL Nameboard</p>
                <p>For Android devices: Download from <a href="https://play.google.com">Google Play</a> : APL Nameboard</p>
                <p>Join our team today and start your journey towards a rewarding and successful driving career with APL!</p>
              </div>


              <div className={styles.right}>
                <div className={styles.img_div}>
                  <img src="/images/driversAPP.png" alt="Aiport pickups-london drivers-app" />
                </div>
              </div>
            </div>
            <div className={styles.destinations}>
              <div className={styles.destinations_content}>
                <div className={styles.column}>
                  <div className={styles.numbers}>5,200 </div>
                  <div className={styles.text}>Destinations</div>
                </div>

                <div className={styles.column}>
                  <div className={styles.numbers}>757</div>
                  <div className={styles.text}>Total Vehicles</div>
                </div>

                <div className={styles.column}>
                  <div className={styles.numbers}>1.6 M</div>
                  <div className={styles.text}>Happy customers</div>
                </div>

                <a rel="noreferrer"
                  href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"
                  target="_blank" title="Airport Pickups London Reviews"
                  className={styles.column}>
                  <div className={styles.numbers}>
                    4.8
                  </div>
                  <div className={styles.text}>Service Ratings</div>
                </a>

              </div>
            </div>
            <CarsSlider noborder={true} />

          </div>

        </div>
      </div>
    </GlobalLayout >
  )
}

export default DriversWanted



