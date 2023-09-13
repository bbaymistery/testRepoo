import GlobalLayout from "../components/layouts/GlobalLayout";
import Hero from "../components/widgets/Hero";
import CarsSlider from "../components/widgets/CarsSlider";
import TaxiDeals from "../components/widgets/TaxiDeals";
import Tours from "./tours";
import { useEffect, useState } from "react";


export default function Home() {
  const [countryCode, setCountryCode] = useState(''); // Default value is 'gb'

  useEffect(() => {
    // This function fetches the country code from our API route
    const fetchCountry = async () => {
      try {
        const res = await fetch('/api/getCountry');
        const data = await res.json();
        console.log(data);

        setCountryCode(data.country);
      } catch (error) {
        console.error("Failed to fetch the country:", error);
      }
    };
  

    fetchCountry();
  }, []);
  return (
    <GlobalLayout footerbggray={true}>
      <Hero />
      <div>
        Country code is: {countryCode}
      </div>
      <TaxiDeals />
      <CarsSlider bggray={true} />
      <Tours insideGlobalLayout={false} />

    </GlobalLayout>
  )
}

// const makestore = () => store;
// const wrapper = createWrapper(makestore);

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
//   const paymentUrl = `${env.apiDomain}/api/v1/payment-types`;
//   const appDataUrl = `${env.apiDomain}/app/en`;
//   const urls = [paymentUrl, appDataUrl];

//   let response = await Promise.all(urls.map(async url => {
//     let resp = await fetch(url);
//     return resp.json();
//   }));

//   const appData = response[1];
//   const paymentTypes = response[0].data;
//   // Dispatch values to Redux store
//   store.dispatch({ type: "GET_APP_DATA", data: { appData: appData, paymentTypes: paymentTypes, }, });

// });


