import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LinkBreadCumb from "../../components/elements/LinkBreadcumb";
import Layout from "../../components/layouts/Layout";
import TransferCard from "../../components/widgets/TransferCard";
import { dealsItems } from "../../constants/heathrowTransferDeals";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import styles from "./styles.module.scss";
import TextContentDynamic from "../../components/elements/TextContentDynamic";
// import TextContent from "./TextContent";
const title = "Heathrow Transfer Deals | Fixed Fare Private Taxis from £29 | London Heathrow Taxi Ltd"
const keywords = "Heathrow transfer deals, Heathrow taxi offers, Heathrow to Central London, Heathrow hotel transfers, Heathrow inter-terminal taxi, Heathrow airport transfer prices, London Heathrow Taxi Ltd"
const description = "Explore Heathrow transfer deals with London Heathrow Taxi Ltd. Fixed fares from £29 for private taxis between Heathrow Airport, Central London, hotels, and terminals — meet & greet and flight tracking included."
const heathrowtransferDealsContent = [
  {
    title: "Looking for a reliable Heathrow Airport transfer at a fair, all-inclusive price?",
    paragraphs: [
      ` <strong>London Heathrow Taxi Ltd</strong> offers transparent, fixed fares between Heathrow and London’s key destinations.
     No hidden costs, no surge pricing — just premium service and consistent reliability.`,
    ],
  },
  {
    title: "Why Choose London Heathrow Taxi Ltd",
    list: [
      "Offices located beside Heathrow Airport — fast response and availability",
      "Professional drivers with full airport knowledge",
      "24/7 customer support by phone or WhatsApp",
      "Free waiting time, flight tracking, and child seats on request",
    ],
    paragraphsAfterList: [
      `Whether you’re travelling for business or leisure, our Heathrow transfer service ensures you reach your destination comfortably, on time, and without hidden charges.`,
    ],
  },
  {
    title: "Book Your Heathrow Transfer",
    paragraphs: [
      `<strong>Call:</strong> <a href="tel:+442038873844">020 3887 3844</a><br/>
     <strong>From Abroad:</strong> <a href="tel:+442038873844">+44 20 3887 3844</a><br/>
     <strong>WhatsApp:</strong> <a href="https://wa.me/447387901028" target="_blank">+44 73 8790 1028</a><br/>
     <strong>Email:</strong> <a href="mailto:info@london-heathrow.taxi">info@london-heathrow.taxi</a><br/>
     <strong>Office Address:</strong> Orega Offices, 4 Longwalk Road, Uxbridge, United Kingdom, UB11 1FE`
    ]
  }




];
const HeathrowTaxiDeals = () => {
  const [crumbs, setCrumbs] = useState([{ linkName: "/", name: "home" }, { linkName: "/heathrow-transfer-deals", name: "heathrow transfer deals" }]);
  const dispatch = useDispatch();
  useEffect(() => { dispatch({ type: SET_SELECT_ACTIVE_LINK, payload: "heathrow transfer deals", }); }, []);
  return (
    <Layout title={title} keywords={keywords} description={description}>
      <div className={`page ${styles.deals_page}`}>
        <div className={`page_section ${styles.deals_page_section}`}>
          <div className={`page_section_container ${styles.deals_page_section_container}`}   >
            <LinkBreadCumb crumbs={crumbs} />
            <h1 className={styles.title}>Private Transfers to and from Heathrow Airport</h1>
            <TransferCard items={dealsItems} />
            <TextContentDynamic content={heathrowtransferDealsContent} />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HeathrowTaxiDeals;
