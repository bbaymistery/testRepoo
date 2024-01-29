import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import LeftSidebarInformation from '../../components/elements/LeftSidebarInformation'
import ShowcaseRight from './ShowcaseRight'
import DropDown from '../../components/elements/Dropdown/dropdown'
import DateInput from '../../components/elements/DateInput'
import { currentDate } from '../../helpers/getDates'
import { useRouter } from 'next/router';
import { meetAndGreetActions } from '../../store/meetAndGreetActions'
import store from '../../store/store'
import Loading from '../../components/elements/alert/Loading'

let description = "Heathrow VIP Meet and Assist service includes meet by the plane door and assist the passenger to final detsination."
let title = "VIP Meet and assist at Heathrow Airport"
let keywords = "VIP Meet and assist"
const buttonLabels = [
    { labelName: "strArrival", headingName: "strArrivalAirport", normalName: "Arrival" },
    { labelName: "strDeparture", headingName: "strDepartureAirport", normalName: "Departure" },
    { labelName: "strConnecting", headingName: "strConnectingAirport", normalName: "Connecting" }];


const HeathrowVipMeet = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()
    //buttons
    // const buttonRefs = [useRef(null), useRef(null), useRef(null)];
    let { bggray = false } = props;
    const { appData } = useSelector(state => state.initialReducer)

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    const meetAndGreetState = useSelector(state => state.meetAndGreetActions)
    const [loadAlert, setLoadAlert] = useState(true)
    const [headingSelectedService, setHeadingSelectedService] = useState("strArrivalAirport")
    const [dropdownLabels, setDropdownLabels] = useState([`-- Select Terminal --`, 'Heathrow Terminal 2 ', 'Heathrow Terminal 3', 'Heathrow Terminal 4', "Heathrow Terminal 5"])
    useEffect(() => {
        // Check if the new label is not undefined or null
        const newSelectLabel = appData?.words["strSelectTerminal"];
        console.log(newSelectLabel);

        if (newSelectLabel) {
            // Update the first element of the dropdownLabels array
            setDropdownLabels(previousLabels => [
                `-- ${newSelectLabel} --`,
                ...previousLabels.slice(1) // This keeps the rest of the array items unchanged
            ]);
            dispatch({ type: "SET_TERMINAL", data: { newTerminal: `-- ${newSelectLabel} --` } })

        }
        console.log(meetAndGreetState?.terminalName);

        //baslangcda terminali secirik book now tikliyrq
        //onnan sonra geri gelende yoxluyrug eger  --  yoxdursa demeli terminal name secilibdir ve oldugu kimi galacag
        if (!meetAndGreetState?.terminalName?.includes("--") && meetAndGreetActions?.terminalName?.length) {
            dispatch({ type: "SET_TERMINAL", data: { newTerminal: meetAndGreetState?.terminalName } })
        }
        if (loadAlert) {
            setTimeout(() => { setLoadAlert(false) }, 550);
        }

    }, [language]);


    if (!meetAndGreetState && loadAlert) {
        // Render a loading spinner or a placeholder
        store.injectReducer('meetAndGreetActions', meetAndGreetActions);
        setTimeout(() => { setLoadAlert(false) }, 550);
    }
    if (loadAlert) {
        return <Loading bgImage={"/images/meetGreet/meetShowCase2.jpg"} />
    }
    let { seatLists, meetgreetDate, meetgreetActiveBtn, selectedService, terminalName, seatListPrice } = meetAndGreetState

    const handleButtons = (params = {}) => {
        let { index, heading, normalName } = params
        setHeadingSelectedService(heading)
        dispatch({ type: "SET_MEET_GREET_ACTIVE_BTN", data: { activeBtnValue: index, newSelectedService: normalName } })
    }
    const onchangeDate = (e) => dispatch({ type: "SET_MEET_GREET_DATE", data: { dateValue: e.target.value } })
    const handleDecrement = (idx, incordec) => dispatch({ type: 'SET_SEATLISTS', data: { idx, incordec } })
    const handleIncrement = (idx, incordec) => dispatch({ type: 'SET_SEATLISTS', data: { idx, incordec } })
    const handleTerminalSelection = (option) => {
        dispatch({ type: "SET_TERMINAL", data: { newTerminal: option } })
    }


    const IsDropdownTextSelectionValid = () => dropdownLabels.slice(1).includes(terminalName)
    const handleBookNow = () => (IsDropdownTextSelectionValid()) && router.push("/meetgreet")



    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.vipmeet} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={styles.showcase_column}>
                    <div className={styles.showcase_column_container}>
                        <div className={styles.showcase_column_container_content}>
                            <div className={styles.left}>
                                <div className={styles.form_div}>
                                    <h1>{appData?.words["strAirportVIPMeetGreetServices"]}</h1>
                                    <p className={styles.description}> {appData?.words["strSelectAndBookYourService"]}</p>
                                    <div className={styles.buttons}>
                                        {buttonLabels?.map((obj, index) => {
                                            let { labelName: label, headingName: heading, normalName } = obj
                                            return (
                                                //ref={buttonRefs[index]}
                                                <button key={index} direction={String(direction === 'rtl')} isactive={String(meetgreetActiveBtn === index)} onClick={() => handleButtons({ index, heading, normalName })} className={`btn`}  >
                                                    {/* {useRipple(buttonRefs[index])} */}
                                                    {appData?.words[label]}
                                                    {index === 0
                                                        ? (<i direction={String(direction === 'rtl')} className={`fa-solid fa-plane-arrival `}></i>)
                                                        : index === 1 ? (<i direction={String(direction === 'rtl')} className="fa-solid fa-plane-departure"></i>)
                                                            : (<i direction={String(direction === 'rtl')} className="fa-sharp fa-solid fa-circle-nodes"></i>)}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <div className={styles.arrivaldate_div}>
                                        <div className={styles.dropdown_div}>
                                            <DropDown headingStyle={{ fontSize: "15px", marginBottom: "-2px" }} heading={appData?.words[headingSelectedService]} options={dropdownLabels} selectedOption={terminalName} setSelectedOption={handleTerminalSelection} />
                                        </div>
                                        <div className={styles.date_picker_div}>
                                            <DateInput form_control_input_div_style={{ width: "100%", maxWidth: "100%" }} showIcon={true} headingStyle={{ fontSize: "15px", marginBottom: "-2px" }} value={meetgreetDate} min={currentDate()} title={appData?.words["strFlightDate"]} onChange={onchangeDate} />
                                        </div>
                                    </div>

                                    <div className={styles.adults_selection_div}>
                                        {seatLists?.map((item, index) => {
                                            return <div key={index} className={styles.adults_selection_div_column}>
                                                <p className={styles.name}> {appData?.words[item.strName]}</p>
                                                <p className={styles.desc}>  {appData?.words[item.strDesc]}</p>
                                                <div className={styles.adults_selection_div_column_numbers_div} direction={String(direction === 'rtl')}>
                                                    <p className={`${styles.left_arrow} ${item.minNum === 0 ? styles.disabled : ""}`} onClick={() => handleDecrement(index, "dec")}>
                                                        <i className="fa-solid fa-chevron-left"></i>
                                                    </p>
                                                    <p className={styles.number}>  {item.minNum}  </p>
                                                    <p className={`${styles.right_arrow} `} onClick={() => handleIncrement(index, "inc")}>
                                                        <i className="fa-solid fa-chevron-right"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        })}
                                    </div>

                                    {/* {IsDropdownTextSelectionValid() ? <div className={styles.price}> {appData?.words["strTotalPrice"]}: £{seatListPrice} inc. VAT</div> : <></>} */}
                                    {IsDropdownTextSelectionValid() ? <div className={styles.price}> {appData?.words["strTotalPrice"]}: £{seatListPrice} </div> : <></>}

                                    <div className={styles.booknow_div}>
                                        <button active={String(IsDropdownTextSelectionValid())} onClick={handleBookNow} className='btn'  >
                                            {appData?.words["strBookNow"]}
                                        </button>
                                    </div>

                                    <div className={styles.needhelp_text}>
                                        {/* Need Help Booking? */}
                                        <a href="tel:+442086887744" >{appData?.words["strClicktocall"]} +4402086887744</a>
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
                                    <h1>Start Your Journey with a Smile."Meet, Greet, and Fly with Ease."</h1>
                                    <p>For bookings and information please email us at   <a style={{ fontWeight: "500" }} href="mailto: info@aplcars.com"> info@aplcars.com</a>
                                    </p>
                                </div>
                                &nbsp;
                                <div className={`${styles.vipmeet_footer}`}>

                                    <h2>Heathrow's Premier Personal Assistance Service</h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li >
                                            Navigating a bustling international airport like Heathrow can be overwhelming,
                                            especially after a long flight. Whether you're a seasoned traveler or on your first
                                            international journey, our Heathrow Meet and Assist service ensures a seamless and stress-free experience.
                                            <br />


                                        </li>

                                        <li>
                                            <img src="/images/meetGreet/meetCollective.jpg" alt="" />

                                        </li>
                                    </ul>

                                    <br />
                                    <h2>From the Airplane Door to Beyond</h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            Our dedicated agents will be waiting
                                            for you as soon as you step off the plane.
                                            With a friendly smile and an in-depth knowledge
                                            of Heathrow's layout and procedures, we'll ensure you feel taken care of from the moment you land.
                                        </li>

                                        <li>
                                            <img src="/images/meetGreet/meetGroup2.jpg" alt="" />

                                        </li>
                                    </ul>
                                    <br />
                                    <h2>Swift Passport Control</h2>

                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            Avoid the long queues and uncertainty at Passport Control.
                                            With our Meet and Assist service, our agents will guide you through a
                                            streamlined process, making sure all your documentation is in order and assisting with any questions or concerns.
                                        </li>

                                        <li>
                                            <img src="/images/meetGreet/passControl2.jpeg" alt="" />

                                        </li>
                                    </ul>



                                    <br />
                                    <h2>
                                        Hassle-Free Baggage Claim
                                    </h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            No more waiting around or searching for your luggage. Our team will assist you at the baggage claim area, ensuring that you retrieve all your belongings quickly and efficiently.
                                        </li>

                                        <li>


                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    <h2>Why Choose Our Meet and Assist Service?</h2>
                                    <ul className={styles.img_flex_ul}>
                                        <li>
                                            <ul className={styles.li_circle_ul}>
                                                <li className={styles.li_circle}>Personalized Service: Our agents are trained to cater to your specific needs, ensuring a tailor-made experience every time.</li>
                                                <li className={styles.li_circle}>Time-Saving: Navigate the airport quickly and efficiently, maximizing your time for what truly matters.</li>
                                                <li className={styles.li_circle}>Peace of Mind: Travel can be stressful. Let us handle the complexities of the airport while you relax and enjoy the journey.</li>
                                                <li className={styles.li_circle}>Take them to the VIP lounge if they have a booking (time permitting) and then escort them to the aircraft of the connecting flight.</li>
                                                <br />
                                                Join the hundreds of travelers who start their journey with a smile, knowing they're in capable hands. Choose Heathrow Meet and Assist for a smoother, more enjoyable travel experience.
                                            </ul>
                                        </li>

                                        <li>

                                        </li>
                                    </ul>

                                    <br />
                                    <h2>Porter Service</h2>
                                    <ul>
                                        <li>For porter service please visit our  <a style={{ fontWeight: "500" }} href="/heathrow-porter-service">Porter page</a></li>
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