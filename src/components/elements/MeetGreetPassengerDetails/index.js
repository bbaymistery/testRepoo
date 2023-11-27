import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"

const MeetGreetPassengerDetails = () => {
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { passengersForm, bookersDetails, flightDetails, buggy, porter, additionalGreeter } = useSelector((state) => state.meetAndGreetActions)
    let { params: { direction } } = state

    return (
        <div className={styles.journey_summary_panel} >
            <div className={styles.content}>
                <div className={styles.journey_card} direction={String(direction === 'rtl')}>
                    {passengersForm.length > 0 ?
                        <h3 className={styles.journey_card_title}>
                            Flight Details
                        </h3> : <></>}

                    <div className={styles.passsenger_details_div}>
                        <div>
                            <h5 className={`${direction}`}>AIRLINE</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{"flightDetails.airline"}</span></li>
                            <div className={styles.space}> </div>

                        </div>

                        <div>
                            <h5 className={`${direction}`}>BUGGY</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{buggy}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                    </div>
                    <div className={styles.passsenger_details_div}>
                        <div>
                            <h5 className={`${direction}`}>FLIGHT TIME</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{flightDetails.flightTime}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                        <div>
                            <h5 className={`${direction}`}>PORTER</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{porter}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                    </div>
                    <div className={styles.passsenger_details_div}>
                        <div>
                            <h5 className={`${direction}`}>FLIGHT NUMBER</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{flightDetails.flightNumber}</span></li>
                            <div className={styles.space}> </div>
                        </div>
                        <div>
                            <h5 className={`${direction}`}>ADDITIONAL GREETER </h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{additionalGreeter}</span></li>
                            <div className={styles.space}> </div>

                        </div>

                    </div>
                    <div className={styles.passsenger_details_div}>
                        <div>
                            <h5 className={`${direction}`}>FLIGHT CLASS</h5>
                            <li direction={String(direction === 'rtl')}><span>{flightDetails.flightClass}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                        <div>
                            <h5 className={`${direction}`}>NO OF LUGGAGE BAGS</h5>
                            <li direction={String(direction === 'rtl')}><span>{flightDetails.noOfLuggageBags}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                    </div>

                </div>
                <div className={styles.journey_card} direction={String(direction === 'rtl')}>
                    <h3 className={styles.journey_card_title}>
                        Bookers Details
                    </h3>
                    <div className={styles.passsenger_details_div}>
                        <div>
                            <h5 className={`${direction}`}>PASSENGER NAME</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{bookersDetails.firstname}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                        <div>
                            <h5 className={`${direction}`}>PASSENGER LASTNAME</h5>
                            <li className={styles.first_child} direction={String(direction === 'rtl')}><span>{bookersDetails.lastname}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                    </div>
                    <div className={styles.passsenger_details_div}>
                        <div>
                            <h5 className={`${direction}`}>EMAIL</h5>
                            <li direction={String(direction === 'rtl')}><span>{bookersDetails.email}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                        <div>
                            <h5 className={`${direction}`}>PHONE NUMBER</h5>
                            <li direction={String(direction === 'rtl')}><span>{bookersDetails.mobileNumber}</span></li>
                            <div className={styles.space}> </div>

                        </div>
                    </div>

                </div>
                {passengersForm.length > 0 ? <div className={styles.journey_card} direction={String(direction === 'rtl')}>
                    <h3 className={styles.journey_card_title}>
                        Passengers
                    </h3>
                    {passengersForm?.map((item, idx) => {
                        return (
                            <div key={idx} className={styles.passsenger_details_div}>
                                <div>
                                    <h5 className={`${direction}`}>{`${idx + 1}.`} PASSENGER NAME</h5>
                                    <li className={`${styles.first_child}`} direction={String(direction === 'rtl')}><span>{item.firstname}</span></li>
                                    <div className={styles.space}> </div>
                                </div>
                                <div>
                                    <h5 className={`${direction}`}>PASSENGER LASTNAME</h5>
                                    <li className={`${styles.first_child}`} direction={String(direction === 'rtl')}><span>{item.lastname}</span></li>
                                    <div className={styles.space}> </div>
                                </div>
                            </div>
                        )
                    })}

                </div> : <></>}

            </div>
        </div>


    )
}

export default MeetGreetPassengerDetails