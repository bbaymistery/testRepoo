import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LinkBreadCumb from "../../components/elements/LinkBreadcumb";
import Layout from "../../components/layouts/Layout";
import TransferCard from "../../components/widgets/TransferCard";
import { centralItems } from "../../constants/heaythrowCentralLondon";
import HappyCustomer from "../../components/widgets/HappyCustomer";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import styles from "./styles.module.scss";
import TextContentDynamic from "../../components/elements/TextContentDynamic";

const title = "Heathrow to Central London Taxi | Fixed Prices from £59 | Meet & Greet | London Heathrow Taxi Ltd"
const descripton = "Premium Heathrow ↔ Central London taxi transfers from £59 per vehicle. Fixed prices, free meet & greet at arrivals, flight tracking, child seats and free cancellation. 24/7 support."
const keywords="Heathrow to Central London taxi, Heathrow Airport transfer, private airport car, London Heathrow Taxi Ltd, Central London airport taxi, Heathrow to London transfer, Heathrow meet and greet, Heathrow taxi quote, airport pickup London"
const centralLondonContent = [
  {
    title: "Reliable Private Taxi from Heathrow to Central London",
    paragraphs: [
      `Need a <strong>reliable private taxi from Heathrow to Central London</strong>?
      <strong>London Heathrow Taxi Ltd</strong> offers direct, all-inclusive airport transfers —
       no queues, no surge pricing, no hidden extras.
       We specialise in Heathrow Airport journeys with <strong>24/7 availability</strong>,
       flight monitoring, and professional drivers who know every route into Central London.
      `,

    ],
  },
  {
    title: "Our Fixed Prices",
    list: [
      "<strong>Heathrow → Central London:</strong> from <strong>£59.00</strong>",
      "<strong>Heathrow → Nearby Areas (Hayes, Hounslow, Southall, Feltham):</strong> from <strong>£29.00</strong>",
    ],
    chainList: true,
  },
  {
    subtitle: "All prices include:",
    list: [
      `<span style="display:flex;align-items:center;gap:6px;"><i class='fa-solid fa-square-check' style='color:#1bbf00;'></i> Free Meet &amp; Greet inside arrivals</span>`,
      `<span style="display:flex;align-items:center;gap:6px;"><i class='fa-solid fa-square-check' style='color:#1bbf00;'></i> 30 minutes complimentary waiting</span>`,
      `<span style="display:flex;align-items:center;gap:6px;"><i class='fa-solid fa-square-check' style='color:#1bbf00;'></i> Parking, tolls, and taxes</span>`,
      `<span style="display:flex;align-items:center;gap:6px;"><i class='fa-solid fa-square-check' style='color:#1bbf00;'></i> Flight tracking in real time</span>`,

    ],
    paragraphsAfterList: [`You pay exactly what you see — nothing more.`],
  },
  {
    title: "Meet & Greet at Heathrow",
    paragraphs: [
      `Your driver meets you <strong>inside the arrivals hall</strong> with your name clearly displayed,
       assists with luggage, and guides you to your waiting car.
       <br/>
       We’re known for quick airport pickups, professional service, and modern vehicles that make your first minutes in London stress-free.
       `,

    ],
  },
  {
    title: "Travel Time & Coverage",
    paragraphs: ["Typical journey times:"],

    list: [
      "<strong>Heathrow T2/T3 → Central London: </strong> 40 – 60 min",
      "<strong>Heathrow T4/T5 → Central London: </strong> 	45 – 70 min",
    ],
    paragraphsAfterList: [`We serve every Central London postcode including Kensington, <strong>Paddington </strong>, <strong>Westminster </strong>, <strong>Marylebone </strong>, <strong>Holborn </strong>, Covent <strong>Garden </strong>, and Canary Wharf.`]
    ,

  },
  {
    title: "Executive & Group Transfers",
    paragraphs: ["Choose from:"],
    list: [
      "<strong>Saloon Cars</strong> for up to 3 passengers",
      "<strong>Mercedes E-Class / S-Class / V-Class</strong> for Business Class service",
      "<strong>Large MPVs (8-seaters)</strong> for families and small groups",
    ],
    paragraphsAfterList: [
      "All vehicles are licensed, insured, air-conditioned, and maintained to premium standards.",
    ],
  },
  {
    title: "Why Choose London Heathrow Taxi Ltd",
    list: [
      "Fixed transparent pricing",
      "Free Meet &amp; Greet at Heathrow",
      "Complimentary child seats on request",
      "24/7 customer support",
      "Office minutes from Heathrow terminals",
      "Trusted by thousands of repeat passengers",
    ],
  },
  {
    title: "Frequently Asked Questions",
    accordion: [
      {
        q: "How much is a taxi from Heathrow to Central London?",
        a: `
      Fares start from  £59  for Central London and  £29 for nearby areas. Prices include meet & greet, parking, and 30 minutes of waiting.
      `
      },
      {
        q: "How long does the journey take?",
        a: `Between 40 and 70 minutes, depending on time of day and destination.`,
      },
      {
        q: "Where will my driver meet me?",
        a: `Inside arrivals with your nameboard — meet & greet is always included.`,
      },
      {
        q: "Do you charge for flight delays?",
        a: `Never. Flights are tracked live; pickup times update automatically.`
      },
           {
        q: "Are child seats provided?",
        a: `Yes, free on request; just mention your child’s age when booking.`
      },
           {
        q: "Can I book a return to Heathrow?",
        a: `Yes — returns from Central London start at £59 and can be booked in advance.`
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
];

const HeathrowCentralLondon = () => {
  const [crumbs, setCrumbs] = useState([
    { linkName: "/", name: "home" },
    { linkName: "/heathrow-central-london", name: "heathrow central london" },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SET_SELECT_ACTIVE_LINK,
      payload: "heathrow central london",
    });
  }, []);
  //selectActiveLinkName
  return (
    <Layout title={title} description={descripton}  keywords={keywords}>
      <div className={`page ${styles.central_page}`}>
        <div className={`page_section ${styles.central_page_section}`}>
          <div className={`page_section_container ${styles.central_page_section_container}`}  >
            <LinkBreadCumb crumbs={crumbs} />
            <h1 className={styles.title}>
              Heathrow to Central London Taxi & Private Transfers
            </h1>
            <p className={styles.title_desc}>
              Smooth, Fixed-Fare Heathrow Transfers 24/7
            </p>
            <TransferCard items={centralItems} />
            <TextContentDynamic content={centralLondonContent} />
            <HappyCustomer aboutPage={true} />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default HeathrowCentralLondon;
