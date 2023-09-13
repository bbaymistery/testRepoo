import GlobalLayout from "../components/layouts/GlobalLayout";
import Hero from "../components/widgets/Hero";
import CarsSlider from "../components/widgets/CarsSlider";
import TaxiDeals from "../components/widgets/TaxiDeals";
import Tours from "./tours";
import { useEffect, useState } from "react";
import { createWrapper } from "next-redux-wrapper";


export default function Home(props) {
console.log(props);

  return (
    <GlobalLayout footerbggray={true}>
      <Hero />
      <div>
      </div>
      <TaxiDeals />
      <CarsSlider bggray={true} />
      <Tours insideGlobalLayout={false} />

    </GlobalLayout>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
  // const paymentUrl = `${env.apiDomain}/api/v1/payment-types`;
  // const appDataUrl = `${env.apiDomain}/app/en`;
  // const urls = [paymentUrl, appDataUrl];

  // let response = await Promise.all(urls.map(async url => {
  //   let resp = await fetch(url);
  //   return resp.json();
  // }));

  // const appData = response[1];
  // const paymentTypes = response[0].data;
  // // Dispatch values to Redux store
  // store.dispatch({ type: "GET_APP_DATA", data: { appData: appData, paymentTypes: paymentTypes, }, });
  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
  console.log(ip);

  return {
    props: {
      ip,
    },
  }
});


