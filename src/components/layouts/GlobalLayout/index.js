import React from 'react'
import Head from 'next/head';
import TopHeader from '../../widgets/TopHeader';
import Footer from '../../widgets/Footer';
import { useRouter } from 'next/router';
const structuredSchema = {
  "@context": "http://schema.org/",
  "@type": "LocalBusiness",
  "name": "Airport Pickups London",
  "image": "https://www.airport-pickups-london.com/images/airport-pickups-london-logo.png",
  "@id": "6",
  "url": "https://www.airport-pickups-london.com//Heathrow/taxi-from-heathrow-to-brighton",
  "telephone": "+44 208 688 7744",
  "priceRange": "35",
  "address": {
    "@type": "PostalAddress",
    "postalCode": "UB7 9HJ",
    "streetAddress": "APL Office, Cherry Lane",
    "addressCountry": "GB",
    "addressLocality": "West Drayton"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.94",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "1772",
    "reviewCount": "1772"
  },
  "review": {
    "@type": "Review",
    "name": "Airport Pickups London",
    "reviewBody": "Driver was very professional  on time and good company ",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": "2024-02-14",
    "author": {
      "@type": "Person",
      "name": "Mrs. Elizabeth Williams"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Reviews.io"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.49759087451855,
    "longitude": -0.455451293899482
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/AirportPickupsLondon",
    "https://twitter.com/Airport_Pickups",
    "https://www.youtube.com/c/Airport-pickups-london"
  ]
  // Include other properties as needed
};
const GlobalLayout = (
  { children,
    title = "London Airport Transfers to Airport-Car Service-Minicab",
    description = "Airport Pickups London offers  London airport taxi, transfers and airport shuttle services. We cover Heathrow, Gatwick, Stansted, Luton and City Airport and UK Cruise port.",
    keywords = "London airport transfers ,Heathrow pickups,Gatwick pickups,airport pickups,Heathrow transfer,Gatwick transfer ,Stansted transfer ,Luton transfer ,Heathrow airport transfer ,Gatwick airport transfer.",
    footerbggray = false,
    isVisible = false,
    forHomePage = true
  }
) => {

  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        {/* no follow  */}
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex" />
        {/* <meta name="googlebot" content="index" /> */}
        {/* <meta name="robots" content="index,follow" /> */}
        {router.pathname === "/" ? <link rel="preload" href="/images/others/TripAdvisor2.webp" as="image" /> : <></>}
        {/* //for home page and /heathrow/heathrow-to-oxford-taxi we dont show all fontawesome csss */}
        {(router.pathname === "/") || (router.pathname === '/[...pathname]') ? <link rel="stylesheet" href="/fontawesome/css/all.min.css" /> : <link rel="stylesheet" href="/fontawesomeHomePage/css/all.min.css" />}
        {/* {router.pathname === "/" ? <></> : <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap" />} */}
        <script type="application/ld+json">
          {JSON.stringify(structuredSchema, null, 2)}
        </script>
      </Head>
      {forHomePage ? <TopHeader /> : <></>}
      <main>
        {children}
      </main>
      {((isVisible && router.pathname === '/[...pathname]') || (router.pathname !== '/[...pathname]' && forHomePage)) && (<Footer bggray={footerbggray} />)}


    </>
  )
}

export default GlobalLayout
