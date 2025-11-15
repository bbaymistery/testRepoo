import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LinkBreadCumb from "../../components/elements/LinkBreadcumb";
import TextContentDynamic from "../../components/elements/TextContentDynamic";
import Layout from "../../components/layouts/Layout";
import TransferCard from "../../components/widgets/TransferCard";
import { betwenItems } from "../../constants/heathrowBetweenTerminals";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import styles from "./styles.module.scss";
const betweenTerminalsContent = [
  {
    title: "Private Inter-Terminal Taxi Transfers",
    paragraphs: [
      `Avoid crowds and delays with a convenient door-to-door Heathrow terminal transfer.
       Your driver will meet you inside your arrival terminal, assist with luggage, and take you
       straight to your departure Heathrow terminal check-in entrance in complete comfort.`,
    ],
    list: [
      "Meet and Greet service included",
      "Fixed price — from £29 all-inclusive",
      "Clean, air-conditioned vehicles for all group sizes",
      "Available 24 hours a day, 7 days a week, across all Heathrow terminals",
    ],
  },
  {
    title: "Typical Transfer Times by Private Taxi",
    list: [
      "Terminal 2 ↔ Terminal 3: approximately 8–10 minutes",
      "Terminal 2/3 ↔ Terminal 4: approximately 10–12 minutes",
      "All Terminals ↔ Terminal 5: approximately 10–15 minutes",
    ],
    paragraphs: [
      `With London Heathrow Taxi Ltd, there’s no waiting for shuttles or trains and no need to walk
       long distances with luggage. You’ll travel directly, comfortably, and on time, ensuring a smooth
       connection between flights.`,
    ],
  },
  {
    title: "Premium Heathrow Assistant Service (£79)",
    paragraphs: [
      `For passengers who need extra help during their connection, we offer a Heathrow Assistant
       Service designed to make your journey through the airport completely stress-free.`,
      `Our assistant will:`,
    ],
    list: [
      "Meet you at your arrival terminal",
      "Help with luggage handling",
      "Escort you to check-in at your departure Heathrow terminal",
    ],
    paragraphsAfterList: [
      `<strong>Price:</strong> £79 (includes meet &amp; greet and full terminal-to-terminal assistance).`,
    ],
  },
  {
    title: "Why Choose London Heathrow Taxi Ltd?",
    list: [
      "Based beside Heathrow Airport — fast response guaranteed",
      "Licensed and professional drivers with full airport knowledge",
      "Meet and Greet service provided — our driver meets you by the arrival gate",
      "24/7 customer support",
      "Fixed fares — no surge pricing or hidden extras",
    ],
    paragraphs: [
      `We specialise in Heathrow Airport transfers and inter-terminal travel,
       offering complete comfort, punctuality, and reliability for every journey.`,
    ],
  },
  {
    title: "Frequently Asked Questions",
    accordion: [
      {
        q: "How long does it take to transfer between Heathrow terminals by taxi?",
        a: `Private taxi transfers between Heathrow terminals usually take 8–15 minutes,
            depending on traffic and the terminals involved. For example, Terminal 2 to 3 is around
            8–10 minutes, and Terminal 2/3 to Terminal 4 is around 10–12 minutes.`,
      },
      {
        q: "Where will the driver meet me for my inter-terminal transfer?",
        a: `Your London Heathrow Taxi Ltd driver meets you by the arrival gate inside your terminal,
            holding a name board. Meet &amp; Greet is included with all inter-terminal transfers.`,
      },
      {
        q: "What if my connection time is short?",
        a: `Book a private Heathrow inter-terminal taxi for the quickest, most reliable option.
            Your driver will be waiting, assist with luggage, and drive you directly to your departure
            Heathrow terminal. A Premium Heathrow Assistant Service (£79) is available if you need
            extra help, including guidance to check-in.`,
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
    title: "Book Your Heathrow Between-Terminals Transfer",
    paragraphs: [
      `Book online or call us on <strong>020 3887 3844</strong>.
       Let London Heathrow Taxi Ltd handle your Heathrow between-terminals transfer —
       fast, reliable, and affordable.`,
    ],
  },
];
const title = "Heathrow Between Terminals | Private Inter-Terminal Transfers from £29 | London Heathrow Taxi"
const description = "Private Heathrow inter-terminal transfers from £29 with meet & greet at the arrival gate. Optional Heathrow Assistant Service (£79) for arrival meet-up and check-in at your departure Heathrow terminal. Book fast, direct terminal-to-terminal taxi transfers."

const HeathrowBetweenTerminals = () => {

  const [crumbs, setCrumbs] = useState([
    { linkName: "/", name: "home" },
    { linkName: "/heathrow-between-terminals", name: "heathrow between terminals" },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_SELECT_ACTIVE_LINK, payload: "heathrow between terminals", });
  }, []);
  return (
    <Layout description={description} title={title}>
      <div className={`page ${styles.between_page}`}>
        <div className={`page_section ${styles.between_page_section}`}>
          <div className={`page_section_container ${styles.between_page_section_container}`}>
            <LinkBreadCumb crumbs={crumbs} />
            <h1 className={styles.title}>Heathrow Between Terminals</h1>
            <TransferCard items={betwenItems} />
            <TextContentDynamic content={betweenTerminalsContent} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HeathrowBetweenTerminals;
