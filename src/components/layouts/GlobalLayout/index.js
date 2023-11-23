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
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://cdn.socket.io/4.4.1/socket.io.min.js";
    script.integrity = "sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H";
    script.crossOrigin = "anonymous";

    // Append the script to the head
    document.head.appendChild(script);

    // Optionally, handle cleanup if the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty array ensures this runs once on mount
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
