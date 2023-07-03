import React from "react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layouts/Layout";
import Hero from "../components/elements/Hero";
import UiView from "../components/widgets/UiView";
import HappyCustomer from "../components/widgets/HappyCustomer";
import TopDestination from "../components/widgets/TopDestination";
export default function HomePage(props) {
  return (
    <Layout>
      <div className={styles.homecontainer}>
        <Hero isHeroContentActive={true} isBgImageActive={true} />
        <UiView />
        <HappyCustomer />
        <TopDestination />
        {/* <Alert message="salam" alert={true} close={true} /> */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  return { props: { hi: 5 } };
}
