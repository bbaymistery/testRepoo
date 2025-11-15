import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layouts/Layout";
import Hero from "../components/elements/Hero";
import UiView from "../components/widgets/UiView";
import TopDestination from "../components/widgets/TopDestination";
import Faq from "../components/widgets/Faqs";
import dynamic from "next/dynamic";
import { useWindowSize } from "../hooks/useWindowSize";

const HappyCustomer = dynamic(() => import("../components/widgets/HappyCustomer"), {
  ssr: false,
  loading: () => <></>,
});

export default function HomePage(props) {
  const { env } = props;
  const { width } = useWindowSize(); // ✅ doğrudan width al
  const [loadReviews, setLoadReviews] = useState(false);

  useEffect(() => {
    // 🧠 Eğer desktopsa hemen yükle
    if (width > 990) {
      setLoadReviews(true);
      return;
    }

    // 📱 Mobile'da: etkileşim veya 3.5s sonra yükle
    const handleInteraction = () => setLoadReviews(true);

    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [width]);

  return (
    <Layout>
      <div className={styles.homecontainer}>
        <Hero env={env} isHeroContentActive={true} isBgImageActive={true} />
        <UiView />
        <TopDestination />
        {loadReviews && <HappyCustomer />}
        <Faq />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}
