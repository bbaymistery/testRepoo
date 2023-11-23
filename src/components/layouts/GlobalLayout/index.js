import React, { useEffect } from 'react'
import Head from 'next/head';
import TopHeader from '../../widgets/TopHeader';
import Footer from '../../widgets/Footer';
import Alert from '../../elements/alert/Alert';

const GlobalLayout = (
  { children,
    title = "London Airport Transfers to Airport-Car Service-Minicab",
    description = "Airport Pickups London offers  London airport taxi, transfers and airport shuttle services. We cover Heathrow, Gatwick, Stansted, Luton and City Airport and UK Cruise port.",
    keywords = "London airport transfers ,Heathrow pickups,Gatwick pickups,airport pickups,Heathrow transfer,Gatwick transfer ,Stansted transfer ,Luton transfer ,Heathrow airport transfer ,Gatwick airport transfer.",
    footerbggray = false
  }
) => {

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
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/Excellent.webp" as="image" />
        <link rel="preload" href="/images/Reviews.webp" as="image" />
        <link rel="preload" href="/images/advisorTrip.webp" as="image" />
      </Head>
      <Alert />
      <TopHeader />
      <main>
        {children}
      </main>
      <Footer bggray={footerbggray} />
    </>
  )
}

export default GlobalLayout
