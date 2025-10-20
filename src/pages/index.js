import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layouts/Layout";
import Hero from "../components/elements/Hero";
import Features from "../components/widgets/Features";
import CarsSlider from "../components/widgets/CarsSlider/FunctionComp";
import SpecialPrices from "../components/widgets/SpecialPrices";
import TestimonialLabel from "../components/widgets/TestimonialLabel";
import TestimanialInfo from "../components/widgets/TestimonialInfo";
import SeaportTransfers from "../components/widgets/SeaportTransfers";
import { useDispatch } from "react-redux";
import { GET_APP_DATA } from "../store/pickUpDropOffReducer/pickUpDropTypes";
import HotelsAirports from "../components/widgets/HotelAirports";
import { getAppData } from "../store/pickUpDropOffReducer/pickUpDropAction";

export default function HomePage(props) {

  let { env } = props

  const dispacth = useDispatch();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    // Check if window scroll position is more than 200 pixels
    if (window.scrollY > 210 && !hasScrolled) {
      setHasScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]); // Add hasScrolled as a dependency to avoid unnecessary re-registrations

  useEffect(() => {
    dispacth(getAppData());

    console.log("s");

    try {
      const url = `${env.apiDomain}/app/en`;
      const config = {
        method: "GET",
      };
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {

          dispacth({ type: GET_APP_DATA, payload: data });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);



  return (
    <Layout>
      <div className={styles.homecontainer}>
        <Hero env={env} isHeroContentActive={true} isBgImageActive={true} />
        <Features />
        {hasScrolled && <CarsSlider />}
        <SpecialPrices />
        <HotelsAirports />
        <SeaportTransfers />
        <TestimonialLabel />
        {hasScrolled && <TestimanialInfo />}
      </div>
    </Layout>
  );
}
