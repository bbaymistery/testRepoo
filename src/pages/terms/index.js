import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BreadCrumb from "../../components/elements/breadCrubm";
import Layout from "../../components/layouts/Layout";
import HappyCustomer from "../../components/widgets/HappyCustomer";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import styles from "./styles.module.scss";
import TextContentDynamic from "../../components/elements/TextContentDynamic";
import LinkBreadCumb from "../../components/elements/LinkBreadcumb";

const termsContent = [
  {
    title: "Company Overview",
    paragraphs: [
      `
    <strong> London Heathrow Taxi Ltd </strong> (“LHT”, “we”, “our”, “us”) 
    is a UK-registered private hire operator providing premium airport transfer 
    and chauffeur services to and from Heathrow Airport 
    (all terminals) and destinations across London and the wider United Kingdom.
    `
    ],
    chainList: true,

  },
  {
    subtitle: "Registered Address",
    paragraphs: [
      `London Heathrow Taxi Ltd<br/>
     Orega Offices, 4 Longwalk Road,<br/>
     Uxbridge, UB11 1FE, United Kingdom.`
    ],

  },
  {
    title: "Definitions",
    paragraphs: [
      `<strong>Meet &amp; Greet:</strong> Your driver will be waiting inside the arrivals area holding a name board with your name clearly displayed.
      <br/>
      <strong>Requested Pickup Time:</strong> The pickup time chosen by the customer after considering immigration, customs, and baggage clearance. We recommend:
      `,
    ],
    list: [
      "15 minutes after landing for domestic flights",
      "60 minutes after landing for international flights"
    ],
    paragraphsAfterList: [
      `<strong>Waiting Time:</strong> The period after the requested pickup time during which the driver remains on standby at the terminal.
      <br/>
      <strong>Additional Charges:</strong> Applied after the complimentary 30-minute waiting period expires. Heathrow Airport parking fees are outlined in Clause 2.
      `,
    ],
  },
  {
    title: "1. Fixed Fare Guarantee",
    listNumbered: [
      `1.1 All fares displayed on our website are <strong>fixed, transparent, and inclusive</strong> of taxes, tolls, and service charges.`,
      `1.2 The Meet &amp; Greet service is included in all airport pickups.`,
      `1.3 A 30-minute grace period is provided from the requested pickup time at no additional cost.`,
      `1.4 We monitor all flights in real time and adjust driver dispatch accordingly.`,
      `1.5 No additional charges apply for flight delays.`
    ]
  }
  ,
  {
    title: "2. Waiting Time & Parking Policy",
    paragraphs: [
      "If the 30-minute complimentary waiting period is exceeded, Heathrow Airport parking charges apply as follows:"
    ],
    table: {
      th: 250,
      headers: ["Duration", "Charge"],
      rows: [
        ["0 – 15 minutes", "£15.00"],
        ["15 – 30 minutes", "£20.00"],
        ["30 – 45 minutes", "£25.00"],
        ["45 – 60 minutes", "£30.00"],
        ["60 – 90 minutes", "£40.00"]
      ]
    },
    afterTable: [
      `
      If you cannot locate your driver, please <strong>contact us immediately</strong>.
      <br/>
      If you leave the terminal without notifying us, the booking will be recorded as a <strong> no-show </strong> and the full fare will apply.
      `

    ]
  }
  ,
  {
    title: "3. Pickup Policies by Location",
    list: [
      "<strong>Hotels & Private Addresses:</strong> 15 minutes of complimentary waiting.",
      "<strong>Cruise or Ferry Terminals:</strong> 30 minutes of free waiting from scheduled disembarkation.",
      "<strong>Eurostar Arrivals:</strong> Driver will meet 30 minutes after train arrival, with 30 minutes of complimentary waiting.",
      "<strong>Domestic Train Services:</strong> Driver will meet 5 minutes after train arrival, with 30 minutes of complimentary waiting."
    ]
  },
  {
    title: "4. Liability Disclaimer",
    listNumbered: [
      `4.1 London Heathrow Taxi Ltd is not responsible for delays caused by traffic, weather, road closures, or other unforeseen circumstances. We cannot accept liability for missed flights, trains, or cruises.`,
      `4.2 In all cases, our maximum liability is limited to the amount paid for the booking.`,
      `4.3 London Heathrow Taxi Ltd is not liable for items left in vehicles. If found, we will assist with their return; postage or courier costs apply.`
    ]
  },
  {
    title: "5. Vehicle Condition & Cleaning Fees",
    listNumbered: [
      `5.1 All vehicles operated by London Heathrow Taxi Ltd are smoke-free.`,
      `5.2 A valeting charge of <strong>£80.00</strong> will apply if a passenger soils the vehicle interior (for example, vomiting or spilling food or drink).`,
      `5.3 If a passenger travels with excessive luggage requiring the use of passenger space, a <strong>£15 surcharge</strong> may apply, subject to driver discretion and vehicle capacity.`
    ]
  },
  {
    title: "6. Child Safety Seats",
    paragraphs: [
      `Complimentary child seats are available upon request, subject to availability.`
    ],

    table: {
      th: 250,
      headers: ["Vehicle Type", "Maximum Free Child Seats"],
      rows: [
        ["Saloon", "1"],
        ["MPV", "2"],
        ["8-Seater Minibus", "3"]
      ]
    },

    afterTable: [
      `<strong>Note:</strong> Under UK law, child seats are not legally required in private hire vehicles for short journeys. 
    If a child seat cannot be provided, children may travel in the rear seat under adult supervision. 
    Seatbelts must be worn by all passengers aged 3 years or above.`
    ]
  },
  {
    title: "7. Cancellations & Refunds",

    listNumbered: [
      `7.1 Free cancellation is available up to <strong>12 hours before pickup</strong>, subject to a £10.00 admin fee to cover processing costs.`,
      `7.2 Cancellations made <strong>6 – 12 hours</strong> before pickup will incur a 50% charge.`,
      `7.3 Cancellations made <strong>within 6 hours</strong> of the pickup time are <strong>non-refundable</strong>.`,
      `7.4 Approved refunds are processed within <strong>five business days</strong>.`
    ]
  },
  {
    title: "8. No-Show Policy",

    paragraphs: [
      `If the passenger fails to appear at the pickup location without
       prior notice, the journey will be marked as a <strong>no-show</strong>, and the full fare will be charged.
       <br/>
       Please refer to Clauses 1 and 2 for waiting time and contact requirements.
       `,

    ]
  },
  {
    title: "9. Payment Methods",

    paragraphs: [
      `London Heathrow Taxi Ltd accepts the following payment methods:`
    ],

    list: [
      `Credit and Debit Cards`,
      `PayPal`,
      `Apple Pay`,
      `Google Pay`
    ],

    paragraphsAfterList: [
      `All transactions appear under the merchant name <strong>“Taxi Services”</strong>.<br/>
    Payments are securely processed, and no card data is stored on our systems.`
    ]
  },
  {
    title: "10. Deposit Policy for Long-Distance Cash Bookings",

    paragraphs: [
      `For some long-distance cash-only journeys, we may request a small deposit to confirm the booking. 
    This ensures driver availability and helps prevent no-shows for lengthy or high-value trips.`
    ]
  },
  {
    title: "Contact Information",

    paragraphs: [
      `<strong>London Heathrow Taxi Ltd</strong><br/>
     Orega Offices, 4 Longwalk Road, Uxbridge, UB11 1FE, United Kingdom<br/><br/>

     <i class="fa-solid fa-phone" style="color:#1d9bf9;margin-right:6px"></i>
     Tel: <a href="tel:+442038873844">020 3887 3844</a><br/>

     <i class="fa-solid fa-globe" style="color:#c96810;margin-right:6px"></i>
     International: <a href="tel:+442038873844">+44 20 3887 3844</a><br/>

     <i class="fa-brands fa-whatsapp" style="color:#25D366;margin-right:6px"></i>
     WhatsApp: <a href="https://wa.me/447387901028" target="_blank">+44 73 8790 1028</a><br/>

     <i class="fa-solid fa-envelope" style="color:#000;margin-right:6px"></i>
     Email: <a href="mailto:info@london-heathrow.taxi">info@london-heathrow.taxi</a><br/>

     <i class="fa-solid fa-globe" style="color:#004aad;margin-right:6px"></i>
     Web: <a href="https://www.london-heathrow.taxi" target="_blank">
     www.london-heathrow.taxi</a>`
    ]
  }









]
const title = "Booking Terms & Conditions | London Heathrow Taxi Ltd | Heathrow Airport Transfers"
const keywords = "Heathrow taxi terms, London Heathrow Taxi Ltd terms, airport transfer policy, Heathrow taxi cancellation policy, Heathrow airport pickup, meet and greet Heathrow, airport taxi UK terms, Heathrow transfers, private hire London"
const descriptiuon = "Read the official Booking Terms & Conditions of London Heathrow Taxi Ltd. Fixed fares, free meet & greet, waiting time, and cancellation policies for Heathrow Airport transfers throughout London and the UK."
const Terms = () => {
  const dispatch = useDispatch();
  const [crumbs, setCrumbs] = useState([{ linkName: "/", name: "home" }, { linkName: "/terms", name: "Booking Terms & Conditions" }]);

  useEffect(() => { dispatch({ type: SET_SELECT_ACTIVE_LINK, payload: "terms", }); }, []);
  return (
    <Layout title={title} keywords={keywords} description={descriptiuon}  >
      <div className={`page ${styles.terms_page}`}>
        <BreadCrumb title="" />

        <div className={`page_section ${styles.terms_page_section}`}>
          <div className={`page_section_container ${styles.terms_page_section_container}`}  >
            <div className={styles.div_breadcrumb}>
              <LinkBreadCumb crumbs={crumbs} />
            </div>

            <h1 className={styles.title}>Booking Terms & Conditions</h1>
            <TextContentDynamic content={termsContent} />
          </div>
        </div>
        <HappyCustomer aboutPage={true} />
      </div>
    </Layout>
  );
};

export default Terms;
