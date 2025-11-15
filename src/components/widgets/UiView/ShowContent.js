import styles from './styles.module.scss';
const ShowContent = () => {
    return (
        <div className={styles.showcontent}>

            <h2>Airport Meet & Greet</h2>
            <p>
                Our airport meet and greet service is included free of charge with every
                Heathrow taxi booking.
                Your driver will wait for you inside the arrivals hall holding a name board
                with your name, ready to assist with your luggage and accompany you to your vehicle.
            </p>
            <h2>Free Waiting Time & Flight Tracking</h2>
            <ul>
                <li>30 minutes of free waiting time after your flight lands</li>
                <li>Flight tracking — your driver will monitor your flight and adjust pickup time automatically</li>
                <li>No charge for delays beyond your control</li>
            </ul>

            <h2>Why Choose London Heathrow Taxi </h2>
            <ul>
                <li>Fixed fares , the price you see is the price you pay</li>
                <li>Free Meet &amp; Greet Service</li>
                <li>Free Flight Monitoring</li>
                <li>Free Cancellation (up to 12 hours before pickup)</li>
                <li>Licensed &amp; Insured Drivers (TFL licensed)</li>
                <li>24/7 Customer Support (Phone or WhatsApp)</li>
                <li>Complimentary Child Seats</li>
            </ul>

            <h2>Our Fleet</h2>
            <h3 className={styles.cars_h3}>Saloon Cars: <span>Ideal for up to 3 passengers and 3 suitcases.</span></h3>
            <h3 className={styles.cars_h3}>MPVs and 8-Seaters: <span>Perfect for families and group transfers.</span></h3>
            <h3 className={styles.cars_h3}>Business Class Vehicles: <span>Travel in luxury with Mercedes E-Class, S-Class, or V-Class.</span></h3>

            <h2>Heathrow Airport Transfers</h2>
            <p>We provide transfers between Central London and all Heathrow terminals (T2, T3, T4, and T5).</p>
            <p>
                Our <a  href="/heathrow-central-london">Heathrow to Central London taxi fares</a>
                start from £65, and <a href="/heathrow-central-london">Central London to Heathrow transfers</a>
                start from £60, inclusive of all fees and taxes.
            </p>


            <h3>Other Services</h3>
            <ul>
                <li>Hotel Transfers , from Heathrow terminals to nearby hotels such as Sofitel, Hilton, Sheraton, and Radisson Blu.</li>
                <li>
                    <a href="/heathrow-between-terminals">Inter-Terminal Transfers</a>, available 24/7 between any Heathrow terminals.
                </li>

                <li>Airport Connections , to Gatwick, Stansted, Luton, and London City Airport.</li>
                <li>Cruise Port Transfers , Southampton, Dover, Portsmouth.</li>
            </ul>
            <h2>Travelling with Children</h2>
            <p>We provide age-appropriate baby and child seats completely free of charge — simply let us know your child’s age when booking.</p>
            <h2>Fully Inclusive Pricing</h2>
            <ul>
                <li>Meet and Greet at the airport</li>
                <li>30 minutes of free waiting time</li>
                <li>Flight tracking</li>
                <li>Parking, tolls, and taxes included</li>
            </ul>
            <h3>Our Promise</h3>
            <p>We aim to provide Heathrow passengers with a stress-free, reliable, and comfortable journey every time. Our transparent pricing, professional drivers, and attention to detail ensure you always travel with confidence.</p>

            <h2>Trusted &amp; Reviewed</h2>
            <p>Thousands of happy customers choose us every year. Check our verified reviews on

                <a rel="noopener noreferrer" href="https://www.reviews.co.uk/company-reviews/store/london-heathrow-taxi" target='_blank'>

                    <strong> Google</strong> and <strong>Reviews.io</strong>
                </a> to see why we’re one of the most trusted Heathrow taxi companies in London.</p>


            <h2>About Us</h2>
            <p>London Heathrow Taxi  is a licensed private hire operator providing safe, reliable, and professional airport transfers. Our office is located close to Heathrow Airport, allowing us to offer prompt pickups and competitive fares.</p>
            <h3>Office Address</h3>
            <p>
                London Heathrow Taxi <br />
                Orega Offices,<br />
                4 Longwalk Road,<br />
                Uxbridge, United Kingdom, UB11 1FE
            </p>
            <h3>Contact Details</h3>
            <p style={{ lineHeight: "1.8", fontSize: "16px", }}>
                <i
                    className="fa-solid fa-phone"
                    style={{ color: "#004aad", fontWeight: "bold", marginRight: "6px" }}
                ></i>
                Tel:{" "}

                <a href="tel:+442038873844">
                    020 3887 3844
                </a>
                <br />
                <i
                    className="fa-solid fa-globe"
                    style={{ color: "#004aad", fontWeight: "bold", marginRight: "6px" }}
                ></i>
                Web:{" "}
                <a
                    href="https://www.london-heathrow.taxi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.london-heathrow.taxi
                </a>
                <br />
                <i
                    className="fa-brands fa-whatsapp"
                    style={{ color: "#25D366", fontWeight: "bold", marginRight: "6px" }}
                ></i>
                WhatsApp:{" "}
                <a
                    href="https://wa.me/447387901028"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    +44 73 8790 1028
                </a>
                <br />
                <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#000", fontWeight: "bold", marginRight: "6px" }}
                ></i>
                Email:{" "}
                <a
                    href="mailto:info@london-heathrow.taxi"
                >
                    info@london-heathrow.taxi
                </a>
            </p>



        </div>
    )
}

export default ShowContent