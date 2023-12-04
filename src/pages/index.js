import GlobalLayout from "../components/layouts/GlobalLayout";
import Hero from "../components/widgets/Hero";
import Testimonials from "../components/widgets/Testimonials";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
const TaxiDeals = dynamic(() => import('../components/widgets/TaxiDeals'), { loading: () => <div>Loading...</div> });
const CarsSlider = dynamic(() => import('../components/widgets/CarsSlider'),);
const SeaportTransfers = dynamic(() => import('../components/widgets/SeaportTransfers'),);
const Tours = dynamic(() => import('./tours'),);

export default function Home(props) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    if (!hasScrolled) {
      setHasScrolled(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]); // Add hasScrolled as a dependency to avoid unnecessary re-registrations

  return (
    <GlobalLayout footerbggray={true}>
      <Hero />
      <TaxiDeals />
      {hasScrolled && <SeaportTransfers bggray={true} />}
      {hasScrolled && <Tours insideGlobalLayout={false} />}
      {hasScrolled && <CarsSlider bggray={true} />}
      <Testimonials bggray={false} />
    </GlobalLayout>
  )
}
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {},
  }
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


