import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
const LinkNameDescription = (props) => {
    let { bggray = false } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, } } = state
    return (
        <div className={`${styles.linkname_description_section} ${direction} page`} bggray={String(bggray === "true")}>
            <div className={`${styles.linkname_description_section_section} page_section`}>
                <div className={`${styles.linkname_description_section_section_container} page_section_container`}>
                    <div className={styles.content}>
                        <h1 className='text_center mb_1'>Heathrow Taxi Prices & information</h1>
                        <p>
                                Airport Pickups London (APL Cars) specialises in taxi transfers to and from all London airports, including Heathrow.
                                Heathrow Airport pickup service quotes provided by APL are affordable and all inclusive.
                        </p>
                        <p>

                                Travelling to or from Heathrow Airport? Taxi prices are cheaper than you might think.
                                There are a number of public transport options when travelling to or from London Heathrow.
                                Private car fares often work out to be cheaper than you think, however, particularly by the time you factor in group size,
                                luggage, travel time and convenience.
                        </p>
                        <p>
                                APL’s impressive fleet ranges from saloon cars to people carriers, MPVs
                                and prestige model executive vehicles. Your safety and comfort is our absolute priority.
                                Our drivers are properly licenced and highly experienced. When booking your transfer to Heathrow Airport,
                                car service fares are calculated on the basis of
                                need (vehicle type, party size, destination and so on).
                                Quotes are then finalised and there will be nothing more to pay.
                        </p>
                        <p>
                                If you are a regular Heathrow airport traveller, why not open an account with APL Cars?
                                You’ll benefit from priority on bookings and can avail of our simple-to-use admin system
                                – generate your own invoices and cancel/amend bookings at the drop of a hat.
                                Another option is our executive Heathrow car service. Prices are competitive and
                                include on board wi-fi, refreshments and newspapers.
                        </p>
                        <p>
                                Find out more about travelling with APL Cars – from basic London Heathrow transport prices
                                to executive and business fares. Contact us on 020 8688 7744
                                (+44 (0)20 8688 7744 if calling from outside the UK) or send an email to info@aplcars.com.
                                We look forward to serving you!
                        </p>
                        <hr />
                        <h2 className='mt_1 mb_1 text_center'>4 ways to travel to and from Heathrow</h2>


                        <h3 className='text_center'> By Train </h3>
                        <p>
                            London Underground's Piccadilly Line  provides a simple rail route between Heathrow and the London
                            Journey time by Tube is under an hour  and you shouldn't have to wait longer than ten minutes for a train, even during
                            off-peak hours. The London to Heathrow travels are quick and efficient.
                            Heathrow has three London Underground  stations – one for Terminals 2 and 3 and one each at Terminal 4 and Terminal 5.
                            Underground tickets are available at all stations. The single fare to central  London (Zone 1) is £5.70. A one-day Travelcard,
                            giving unlimited travel in  Zones 1-6, costs £17. Airport transfers operate from as early as 6am to  midnight.
                        </p>
                        <h4 className="text_center">By Coach</h4>
                        <p>
                            Coach companies vary in rates, but are  generally the most cost effective as these
                            services are shared between other  passengers. They also have specific pickup locations including the airport
                            pickups where a set time and location will be mark the start of the journey.  Some companies provide individual
                            private pickups before setting off for your  transfer to Heathrow. Various websites can be found for such services
                            including  the commonly used National Express which operations mainly for Heathrow airport  including long distance
                            drop offs such as Oxford, Bristol, etc...
                        </p>
                        <h4 className='text_center'>By Bus</h4>
                        <p>
                            This public service costs only £1.50 per journey and operates from
                            Heathrow and to Heathrow Airport. This bus arrives on an average of every
                            15-20 minutes. During peak hours the average waiting time is every 10 minutes as
                            these buses are frequently used by the public.
                            The X26 bus starts its journey from Croydon to London Heathrow and takes various
                            routes before reaching its final destination.
                        </p>
                        <h4 className='text_center'>With Airport Pickups London Car service</h4>
                        <p>You can book your private transfer to Heathrow in advance where you know
                            the time of the pickup will be adjusted for you. APL operates 24 hours a day
                            and 7 days a week with fixed prices. All other bespoke services can be included
                            in your Heathrow pickup including collections from hotels in London to Heathrow or vice versa.
                            An option of multiple pickups/ drop offs can be tailored to suit your London transfer requirements.</p>

                        <h4 className="text_center">
                            Heathrow Airport Meeting Points
                        </h4>
                            <ul>
                                <li><span dir={direction}></span><b>Heathrow Terminal 1=</b> &nbsp;
                                    Meeting point for  international flights will be outside the Costa Coffee shop,
                                    just next to the  international arrivals gate. For domestic flights Meeting point is
                                    front of the  domestic arrivals gate. Please click here for <a className='text_underline' href="https://www.airport-pickups-london.com/Images/Heathrow_T1-Meeting-Point.jpg"
                                        target="_blank" title="Heathrow Terminal 1  meeting point">TERMINAL MAP </a></li>
                                <li><span dir={direction}></span><b>Heathrow Terminal 2=</b>   &nbsp; Meeting point for  international flights will be front of the Arrival Gate,
                                    just in front of the  Currency Exchange office. For Domestic flights Meeting point is front of the  Coffee Nero which is in front of the domestic
                                    arrivals gate. Please click here  for <a className='text_underline' href="https://www.airport-pickups-london.com/Images/Heathrow_T2_Map-6.jpg" target="_blank"
                                        title="Heathrow Terminal 2 meeting point">TERMINAL MAP</a></li>
                                <li><span dir={direction}></span><b>   Heathrow Terminal 3=</b>  &nbsp;Meeting point is in front of  the WH Smith shop under the Heathrow
                                    Terminal Welcome Board. Please click here  for <a className='text_underline' href="https://www.airport-pickups-london.com/Images/Heathrow_T3-Meeting-Point.jpg"
                                        target="_blank" title="Heathrow Terminal 3 meeting point">TERMINAL MAP</a></li>
                                <li><span dir={direction}></span><b>Heathrow Terminal 4=</b> &nbsp; Meeting point is in front of  the Costa Coffee shop, which
                                    is situated near to the arrivals gate. Please  click here for <a className='text_underline' href="https://www.airport-pickups-london.com/Images/Heathrow_T4-Meeting-Point.jpg"
                                        target="_blank" title="Heathrow terminal 4 meeting point">TERMINAL MAP</a></li>
                                <li><span dir={direction}></span><b>Heathrow Terminal 5=</b> Meeting point for  international flights will be outside the
                                    Costa Coffee shop, just opposite the  international arrivals gate. For domestic flights Meeting point is front of the  domestic arrivals gate.
                                    Please click here for <a className='text_underline' href="https://www.airport-pickups-london.com/Images/Heathrow_T5-Meeting-Point.jpg" target="_blank" title="Heathrow terminal 5 Meeting Point">TERMINAL MAP </a></li>
                            </ul>


                        <h4 className="text_center">
                            What is included in the price?
                        </h4>
                        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <p>
                                <li>All taxes</li>
                                <li>Fixed Prices -No hidden charges</li>
                                <li>Baby/Child Seat (where necessary)</li>
                                <li>Internet and Laptop usage (Business Class bookings only)</li>
                            </p>
                            <p>
                                <li>Waiting time</li>
                                <li>A comfortable car</li>
                                <li>Free credit card booking service</li>
                                <li>Greeting service ( inside the airport)</li>
                            </p>
                        </ul>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default LinkNameDescription