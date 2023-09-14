import GlobalLayout from "../components/layouts/GlobalLayout";
import Hero from "../components/widgets/Hero";
import CarsSlider from "../components/widgets/CarsSlider";
import TaxiDeals from "../components/widgets/TaxiDeals";
import Tours from "./tours";
import { useEffect, useState } from "react";
import { createWrapper } from "next-redux-wrapper";
// import geoip from 'geoip-lite';

export default function Home(props) {
  // console.log(`IP Address: ${props.ip}`);
  // console.log(`Country: ${props.country}`);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

    async function showPosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Use the latitude and longitude to fetch the address
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await response.json();
      console.log(data);

      setAddress(data.address);
    }
  }, []);


  return (
    <GlobalLayout footerbggray={true}>
      <Hero />
      {`Country is : ${address?.country_code} `}

      <TaxiDeals />
      <CarsSlider bggray={true} />
      <Tours insideGlobalLayout={false} />

    </GlobalLayout>
  )
}

// const makestore = () => store;
// const wrapper = createWrapper(makestore);

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
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
  
  //!get api adress based on geo 
  // const forwarded = req.headers["x-forwarded-for"];
  // const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;

  // // Use geoip-lite to lookup country based on IP address
  // const geo = geoip.lookup(ip);

  // let country = "gb";  // default country
  // if (geo && geo.country) {
  //   country = geo.country.toLowerCase();
  // }

  // console.log(`IP: ${ip}, Country: ${country}`);

  // return {
  //   props: {
  //     ip,
  //     country,
  //   },
  // }
// });


