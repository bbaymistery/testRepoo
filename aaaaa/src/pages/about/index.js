import React, { useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import BreadCrumb from "../../components/elements/breadCrubm";
import HappyCustomer from "../../components/widgets/HappyCustomer";
import TextContentDynamic from "../../components/elements/TextContentDynamic";

const title = "About London Heathrow Taxi | Reliable Airport Transfers Near Heathrow"
const description = "Learn about London Heathrow Taxi — a trusted airport transfer company operating under APL and Churchill licences. We provide reliable, fixed-price private taxis, free meet and greet, and 24/7 support for Heathrow travellers."
const keywords = "Heathrow taxi, London Heathrow transfers, Heathrow Airport taxi, Heathrow private hire, Heathrow to London car, APL Transfers, Churchill Transfers, Heathrow meet and greet, Heathrow hotel taxi, airport transfer London"

const aboutContent = [
  {
    title: "More Than Just a Ride",
    paragraphs: [
      `At <strong>London Heathrow Taxi</strong>, we keep things simple: <strong>book, arrive, ride, stress-free</strong>.
      We are a London-based private transfer company operating under <strong>APL</strong> and <strong>Churchill Transfers licences</strong>, built around one clear idea: travel should be effortless.
      We are not a faceless app or a random driver from the internet.
       We are real people with clean cars, good manners, and a sharp eye on your flight time.
      `,
    ],
  },
  {
    title: "What We Do",
    paragraphs: [
      `We specialise in airport transfers.
     Every day, we move passengers smoothly between:`,
    ],
    list: [
      "Heathrow Airport terminals (T2, T3, T4, T5)",
      "Central London hotels, homes, and offices",
      "Nearby Heathrow hotels including Sofitel, Hilton, Sheraton Skyline, and Radisson Blu",
      "Other airports such as Gatwick, Stansted, Luton, and London City",
      "Cruise ports including Southampton and Dover",
    ],
    paragraphsAfterList: [
      `No waiting around, no surprises, no “price may vary.”<br/>
     You get instant quotes, fixed fares, and a driver who tracks your flight before you land.`,
    ],
  },
  {
    title: "Why People Book With Us",
    list: [
      "Real fixed prices – what you see is what you pay",
      "Free meet and greet at arrivals",
      "30 minutes of free waiting time after landing",
      "Modern vehicles from clean saloons to luxury Mercedes V-Class",
      "24/7 human support with real people answering",
      "Free child seats on request",
      "Instant WhatsApp help for quick updates",
    ],
    paragraphsAfterList: [
      `We know Heathrow. We know London.<br/>
       And we know that after a long flight, you just want peace and a smooth ride to your hotel.`,
    ],
  },
  {
    title: "Who We Are",
    paragraphs: [
      `Founded in London and run by travel-minded people, <strong>London Heathrow Taxi Ltd</strong> has spent more than 15 years building trust one trip at a time.`,
      `We combine local experience, modern technology, and transparent pricing to keep every journey simple and reliable.
    <br/>
    No outsourcing. No surge pricing.
    <br/>
    Just dependable service, clean cars, and drivers who care about doing things properly.`,
    ],
  },
  {
    title: "Where We’re Based",
    paragraphs: [
      `<strong>London Heathrow Taxi Ltd</strong><br/>
     Orega Offices, 4 Longwalk Road,<br/>
     Uxbridge UB11 1FE, United Kingdom.`,
      `We are located just minutes from Heathrow, which means we can reach any terminal quickly – ideal for last-minute or delayed flights.`,
    ],
  },

  {
    subtitle: "Get in Touch",
    paragraphs: [
      `<i class="fa-solid fa-phone" style="color:#004aad;margin-right:6px"></i>Tel: <a href="tel:+442038873844"> 020 3887 3844 (outside the UK: +44 20 3887 3844)</a><br/>
       <i class="fa-solid fa-globe" style="color:#004aad;margin-right:6px"></i>Web: <a href="https://www.london-heathrow.taxi" target="_blank">www.london-heathrow.taxi</a><br/>
       <i class="fa-brands fa-whatsapp" style="color:#25D366;margin-right:6px"></i>WhatsApp: <a href="https://wa.me/447387901028" target="_blank">+44 73 8790 1028</a><br/>
       <i class="fa-solid fa-envelope" style="color:#000;margin-right:6px"></i>Email: <a href="mailto:info@london-heathrow.taxi">info@london-heathrow.taxi</a>`,
    ],
  },
]

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_SELECT_ACTIVE_LINK, payload: "about", });
  }, []);

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className={`page ${styles.about_page}`}>
        <BreadCrumb title="" />
        <div className={`page_section ${styles.about_page_section}`}>
          <div className={`page_section_container ${styles.about_page_section_container}`}   >
            <h1 className={styles.title}>About London Heathrow Taxi</h1>
            <TextContentDynamic content={aboutContent} />
          </div>
        </div>
        <HappyCustomer aboutPage={true} />
      </div>
    </Layout>
  );
};

export default About;
