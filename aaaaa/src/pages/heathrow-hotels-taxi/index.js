import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LinkBreadCumb from "../../components/elements/LinkBreadcumb";
import Layout from "../../components/layouts/Layout";
import TransferCard from "../../components/widgets/TransferCard";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import TextContentDynamic from "../../components/elements/TextContentDynamic";
import { hotelTrItems } from "../../constants/HeathrowHotelTransfer";
import styles from "./styles.module.scss";
const hotelTransferContent = [
  {
    title: "Why Book a Private Taxi for Heathrow Hotel Transfers",
    paragraphs: [
      `Many hotels are close to Heathrow, but airport shuttle services are often limited, slow,
      or require long walks with luggage.`,
      `Our <strong>door-to-door private taxi service</strong> ensures you reach your hotel or terminal
      quickly, safely, and stress-free — day or night.`,
      `Every booking includes:`,
    ],
    list: [
      "Meet &amp; Greet inside the terminal — driver waits by arrivals with your name board",
      "Assistance with luggage to and from the vehicle",
      "Fixed, all-inclusive fares — no hidden costs",
      "24/7 service, including early mornings and late nights",
      "Clean, air-conditioned vehicles for all group sizes",
    ],
  },
  {
    title: "Typical Journey Times & Prices",
    list: [
      "Terminal 2 to Sofitel Heathrow (T5): around 10–15 minutes",
      "Terminal 3 to Sheraton Skyline Hotel: around 8–12 minutes",
      "Terminal 4 to Hilton Garden Inn Heathrow: around 6–10 minutes",
      "Terminal 5 to Renaissance Hotel Heathrow: around 10 minutes",
    ],
    paragraphsAfterList: [
      "Prices start from <strong>£29</strong>, including Meet &amp; Greet and luggage assistance.",
      `Our office is located right beside Heathrow Airport, ensuring quick response times and reliable
      pickups — even for last-minute bookings.`,
    ],
  },
  {
    title: "Popular Heathrow Hotels We Serve",
    paragraphs: [
      "We provide private taxi transfers between Heathrow Airport and all nearby hotels, including:",
    ],
    list: [
      "Sofitel London Heathrow (Terminal 5)",
      "Hilton Garden Inn (Terminal 2 &amp; 3)",
      "Sheraton Skyline Hotel",
      "Renaissance London Heathrow Hotel",
      "Radisson Blu Edwardian Heathrow",
      "Holiday Inn Bath Road",
      "Novotel Heathrow Airport",
      "Premier Inn Heathrow Central",
      "Crowne Plaza Heathrow",
      "Ibis Heathrow Airport Hotel",
    ],
    paragraphsAfterList: [
      `If your hotel isn’t listed — don’t worry. We cover <strong>every hotel in and around Heathrow Airport</strong>,
       including Bath Road, Colnbrook, Hounslow, and Sipson.`,
    ],
  },
  {
    title: "Travelling from Your Hotel to the Airport",
    paragraphs: [
      `If you’re departing from Heathrow, we can collect you <strong>directly from your hotel lobby</strong>
       and drop you at your <strong>departure terminal entrance</strong>.`,
      `Your driver will assist with luggage and ensure a smooth, on-time journey.
       We also monitor flight schedules, ensuring you arrive promptly — even if your departure time changes.`,
    ],
  },
  {
    title: "Why Choose London Heathrow Taxi Ltd",
    list: [
      "Located beside Heathrow Airport — quick, efficient response",
      "Licensed and insured <strong>TFL-approved drivers</strong>",
      "Meet &amp; Greet by the arrival gate",
      "Fixed prices with no surge rates or hidden extras",
      "Free child seats upon request",
      "24/7 phone and WhatsApp support",
      "Over 15 years of experience in airport transfers and <strong>hotel pickups</strong>",
    ],
  },
  {
    title: "Frequently Asked Questions",
    accordion: [
      {
        q: "How far are the hotels from Heathrow Airport terminals?",
        a: `Most Heathrow hotels are just a 5–15 minute drive from the terminals. Some hotels, such as the Sofitel Heathrow (Terminal 5) and Hilton Garden Inn (Terminal 2), are directly connected by walkway.`,
      },
      {
        q: "Do you meet passengers inside the terminal?",
        a: `Yes — our Meet & Greet service is included in every booking.
        Your driver will meet you inside arrivals, holding a name board, and help with your luggage.`,
      },
      {
        q: "Can I book a return trip from my hotel to the airport?",
        a: `Absolutely. You can book hotel-to-airport transfers 24/7. We’ll collect you from your hotel lobby and take you directly to your departure terminal entrance.`,
      },
      {
        q: "What if my flight is delayed or arrives early?",
        a: `No problem — we track all flights in real time, so your driver will be there when you land, even if your flight time changes.`,
      },
    ],
  },
  {
    title: "Contact Details",
    subtitle: "Office Address",
    chainList: true,
    paragraphs: [
      `London Heathrow Taxi <br />Orega Offices,<br />4 Longwalk Road,<br />Uxbridge, United Kingdom, UB11 1FE`,
    ],
  },
  {
    subtitle: "Contact",
    paragraphs: [
      `<i class="fa-solid fa-phone" style="color:#004aad;margin-right:6px"></i>Tel: <a href="tel:+442038873844"> 020 3887 3844 (outside the UK: +44 20 3887 3844)</a><br/>
       <i class="fa-solid fa-globe" style="color:#004aad;margin-right:6px"></i>Web: <a href="https://www.london-heathrow.taxi" target="_blank">www.london-heathrow.taxi</a><br/>
       <i class="fa-brands fa-whatsapp" style="color:#25D366;margin-right:6px"></i>WhatsApp: <a href="https://wa.me/447387901028" target="_blank">+44 73 8790 1028</a><br/>
       <i class="fa-solid fa-envelope" style="color:#000;margin-right:6px"></i>Email: <a href="mailto:info@london-heathrow.taxi">info@london-heathrow.taxi</a>`,
    ],
  },
  {
    title: "Book Your Heathrow Hotel Taxi Transfer",
    paragraphs: [
      `Book online or call us on <strong>020 3887 3844</strong> to arrange your
       <strong>Heathrow hotel taxi</strong>.`,
      `Whether you’re staying overnight before departure or heading to your hotel after landing,
       <strong>London Heathrow Taxi Ltd</strong> ensures a safe, smooth, and hassle-free journey every time.`,
      `Need to change terminals instead? See our dedicated
       <a style="color:#BD5B00" href="/heathrow-between-terminals">Heathrow Between Terminals</a> service.`,
    ],
  },
];
const title = "Heathrow Hotels Taxi | Private Transfers Between Heathrow Airport & Hotels | London Heathrow Taxi"
const description = "Book private taxi transfers between Heathrow Airport and nearby hotels from £29. Free Meet & Greet, 24/7 service, and flight tracking. Reliable door-to-door transfers by London Heathrow Taxi Ltd."
const HeathrowHotelsTaxi = () => {

  const [crumbs, setCrumbs] = useState([
    { linkName: "/", name: "home" },
    { linkName: "/heathrow-hotels-taxi", name: "heathrow hotels taxi" },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_SELECT_ACTIVE_LINK, payload: "heathrow hotels taxi", });
  }, []);
  return (
    <Layout title={title} description={description}>
      <div className={`page ${styles.hotelTaxi_page}`}>
        <div className={`page_section ${styles.hotelTaxi_page_section}`}>
          <div className={`page_section_container ${styles.hotelTaxi_page_section_container}`}  >
            <LinkBreadCumb crumbs={crumbs} />
            <h1 className={styles.title}>Private Taxi Transfers Between Heathrow Airport and Nearby Hotels</h1>
            <TransferCard items={hotelTrItems} />
            <TextContentDynamic content={hotelTransferContent} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HeathrowHotelsTaxi;
