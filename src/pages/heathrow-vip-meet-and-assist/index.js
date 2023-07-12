import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import LeftSidebarInformation from '../../components/elements/LeftSidebarInformation'
import ShowcaseRight from './ShowcaseRight'
import { useState } from 'react'
import useRipple from '../../hooks/useRipple'
import DropDown from '../../components/elements/Dropdown/dropdown'
import DateInput from '../../components/elements/DateInput'
import { currentDate } from '../../helpers/getDates'

let description = "Heathrow VIP Meet and Assist service includes meet by the plane door and assist the passenger to final detsination."
let title = "VIP Meet and assist at Heathrow Airport"
let keywords = "VIP Meet and assist"
const buttonLabels = ['Arrival', 'Departure', 'Connecting'];
const dropdownLabels = ["-- Select Terminal --", 'Heathrow Terminal 2 ', 'Heathrow Terminal 3', 'Heathrow Terminal 4', "Heathrow Terminal 5"];

const HeathrowVipMeet = (props) => {
    let { bggray = false } = props;
    const { appData } = useSelector(state => state.initialReducer)

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state

    //buttons
    const [activeButton, setActiveButton] = useState(0);
    const buttonRefs = [useRef(null), useRef(null), useRef(null)];

    //dropwodn
    const [dropdownTextSelection, setDropdownTextSelection] = useState(`${buttonLabels[activeButton]} Airport`)//LandingTimeHour
    const [seatLists, setseatLists] = useState([
        { name: "Adults", desc: "(above 12y.o.)", minNum: 1, maxNum: 20 },
        { name: "Children", desc: "(from 2 to  12y.o.)", minNum: 0, maxNum: 20 },
        { name: "Infants", desc: "(below 12y.o.)", minNum: 0, maxNum: 20 }
    ])
    //inputDate value
    const [inputDateValue, setInputDateValue] = useState(currentDate())
    const handleButtons = (index) => {
        setActiveButton(index);
    };
    const onchangeDate = (e) => {
        console.log(e.target.value);
        setInputDateValue(e.target.value)
    }
    const handleDecrement = (idx) => {
        let newSeatLists = [...seatLists];
        newSeatLists = newSeatLists.map((item, index) => {
            if (index === idx) {
                if (idx === 0) {
                    return (item = { ...item, minNum: item.minNum === 1 ? item.minNum : item.minNum - 1 });
                } else {
                    return (item = { ...item, minNum: item.minNum === 0 ? item.minNum : item.minNum - 1 });

                }
            } else {
                return item;
            }
        });
        setseatLists(newSeatLists)
    }

    const handleIncrement = (idx) => {
        let newSeatLists = [...seatLists];
        newSeatLists = newSeatLists.map((item, index) => {
            if (index === idx) {
                return (item = { ...item, minNum: item.minNum + 1 });
            } else {
                return item;
            }
        });
        setseatLists(newSeatLists)
    }
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.vipmeet} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={styles.showcase_column}>
                    <div className={styles.showcase_column_container}>
                        <div className={styles.showcase_column_container_content}>
                            <div className={styles.left}>
                                <div className={styles.form_div}>
                                    <h1>Airport Meet & Greet Services</h1>
                                    <p className={styles.description}>select and book your service</p>
                                    <div className={styles.buttons}>
                                        {buttonLabels.map((label, index) => (
                                            <button key={index} ref={buttonRefs[index]} isactive={String(activeButton === index)} onClick={() => handleButtons(index)} className={`btn`}  >
                                                {useRipple(buttonRefs[index])}
                                                {label}
                                                {index === 0 ? (<i className="fa-solid fa-plane-arrival"></i>) : index === 1 ? (<i className="fa-solid fa-plane-departure"></i>) : (<i className="fa-sharp fa-solid fa-circle-nodes"></i>)}
                                            </button>
                                        ))}
                                    </div>

                                    <div className={styles.arrivaldate_div}>
                                        <div className={styles.dropdown_div}>
                                            <DropDown headingStyle={{ fontSize: "15px", marginBottom: "-2px" }} heading={`${buttonLabels[activeButton]} Airport`} options={dropdownLabels} selectedOption={dropdownTextSelection} setSelectedOption={setDropdownTextSelection} />
                                        </div>
                                        <div className={styles.date_picker_div}>
                                            <DateInput showIcon={false} headingStyle={{ fontSize: "15px", marginBottom: "-2px" }} value={inputDateValue} min={currentDate()} title="Flight Date" onChange={onchangeDate} />
                                        </div>
                                    </div>


                                    <div className={styles.adults_selection_div}>
                                        {seatLists.map((item, index) => {
                                            return <div className={styles.adults_selection_div_column}>
                                                <p className={styles.name}> {item.name}</p>
                                                <p className={styles.desc}>  {item.desc}</p>
                                                <div className={styles.adults_selection_div_column_numbers_div}>
                                                    <p className={`${styles.left_arrow} ${item.minNum === 0 ? styles.disabled : ""}`} onClick={() => handleDecrement(index)}>
                                                        <i className="fa-solid fa-chevron-left"></i>
                                                    </p>
                                                    <p className={styles.number}>  {item.minNum}  </p>
                                                    <p className={`${styles.right_arrow} `} onClick={() => handleIncrement(index)}>
                                                        <i className="fa-solid fa-chevron-right"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        })}
                                    </div>

                                    <div className={styles.booknow_div}>
                                        <button className='btn '  >Book Now</button>
                                    </div>


                                    <div className={styles.needhelp_text}>
                                        Need Help Booking?
                                        <a href="tel:+442071481900" class="styles_phone_tag__H5Spt">Click to call +442071481900</a>
                                    </div>
                                </div>
                            </div>
                            <ShowcaseRight />
                        </div>
                    </div>
                </div>
                <div className={`${styles.vipmeet_section} page_section`}>
                    <div className={`${styles.vipmeet_section_container} page_section_container`}>

                        <div className={styles.information_column}>
                            <div className={styles.left_content}>

                                {/* bura eftsidebar componentin normal div formasi yazilmisdi onu sadece reusable olsun deye tek sekilde yazdm */}
                                <LeftSidebarInformation direction={direction} appData={appData} />
                            </div>
                            <div className={styles.right_content}>
                                <div className={`${styles.vipmeet_header}`}>
                                    <h1>Welcome to our Heathrow VIP Meet  page!</h1>
                                    <p>For bookings and information please email us at   <a style={{ fontWeight: "500" }} href="mailto: info@aplcars.com"> info@aplcars.com</a>
                                    </p>
                                </div>

                                &nbsp;
                                <div className={`${styles.vipmeet_footer}`}>

                                    <h2>Heathrow VIP Meet & Assist Services</h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li >
                                            Our VIP meet and assist service starts from your
                                            airplane door, this is where you will be greeted
                                            and assisted through passport control (fast-track immigration, based on availability)
                                            and the VIP lounges. Our assistant will contact your driver in due course and by
                                            the time you have gone to the arrivals hall, your driver will greet you there.
                                            The cost of service is only £170.00. (for 2 passengers, for groups over
                                            Over 2 passengers there will be an additional charge £50 per passenger))
                                            to give you extra comfort we can also arrange assistants to travel with you to your hotel
                                            or residential address, , the price of this service will be £295.00
                                            <br />

                                            For bookings and information please email us at  <a style={{ fontWeight: "500" }} href="mailto: info@aplcars.com"> info@aplcars.com</a>

                                        </li>

                                        <li>
                                            <img src="/images/meetGreet/meetCollective.jpg" alt="" />

                                        </li>
                                    </ul>

                                    <br />
                                    <h2>Arrival Experience includes:</h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            <ul>
                                                <li>You will be meet by a Concierge Agent from the aircraft gate</li>
                                                <li>Assistance provided for any visas or landing card requirements (Fast track passport</li>
                                                <li>Expedited through immigration and customs process (where relevant)</li>
                                                <li>Baggage porter can be pre-arranged if required to collect and transfer out to your final method of transport</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <img src="/images/meetGreet/meetGroup2.jpg" alt="" />

                                        </li>
                                    </ul>
                                    <br />
                                    <h2>Departure Experience includes:</h2>

                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            <ul className={styles.li_circle_ul}>
                                                <li className={styles.li_circle}>Met by a Concierge Agent on arrival at the airport (liaise with chauffeur or another mode of transport)</li>
                                                <li className={styles.li_circle}>Pre-booked porters, if required, to collect luggage and transfer to check-in</li>
                                                <li className={styles.li_circle}>Escort to check in and assist</li>
                                                <li className={styles.li_circle}>Expedited through all check-in and security processes where available</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <img src="/images/meetGreet/departureExperience.jpg" alt="" />

                                        </li>
                                    </ul>



                                    <br />
                                    <h2>Connecting / Transit VIP services:</h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            <ul className={styles.li_circle_ul}>
                                                <li className={styles.li_circle}>Meet at the arriving aircraft (or as close and possible if the aircraft is on a remote stand and passengers are coached to the terminal)</li>
                                                <li className={styles.li_circle}>If the luggage is checked through, escort through the flight connections security point and to airline desks if required. Escort to VIP lounge if applicable and final boarding gate</li>
                                                <li className={styles.li_circle}>If the luggage is not checked through, take it through immigration to baggage reclaim and then use surface transport/walkways to connecting terminals for re-checking of passenger</li>
                                                <li className={styles.li_circle}>Take them to the VIP lounge if they have a booking (time permitting) and then escort them to the aircraft of the connecting flight.</li>
                                            </ul>
                                        </li>


                                    </ul>

                                    <br />
                                    <h2>Porter Service:</h2>
                                    <ul>
                                        <li>Our porter service price is £65.00 inclusive of all taxes.  For more information please visit our <a style={{ fontWeight: "500" }} href="/heathrow-porter-service">Porter page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default HeathrowVipMeet