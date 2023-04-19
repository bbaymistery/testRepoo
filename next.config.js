/** @type {import('next').NextConfig} */
// {
//   source: '/:lang(en|tr|es|ar|it|zh|ru)/:path',
//   destination: '/:path',
//   locale: false,
// },
async function getRoutes() {
  // fetch data here
  const response = await fetch(`https://api.london-tech.com/app/en`).then((res) => res.json())

  let languages = ["en"]
  if (response.status === 200) {
    languages = response?.languages.map(language => language.value);
  }

  const singleRoutes = languages.map(lang => ({
    source: `/${lang}`,
    destination: '/',
    locale: false
  }));
  const allLanguagesWithRouting = languages.map(lang => ({
    source: `/:${lang}/:path`,
    destination: '/:path',
    locale: false
  }));

  return [
    ...singleRoutes,
    ...allLanguagesWithRouting,
  ];
}

const nextConfig = {
  reactStrictMode: false,
  env: {
    mapApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-S02J90JMSB",
  },
  async rewrites() {
    const rules = await getRoutes();
    return rules;
  },
  async redirects() {
    return [

      //heathrow to ascot taxi deals secende Ordaki Hethrow breadcrumbina tikliyanda bura yonlenecek ||ve ya London
      //cunki aiports.com dahomenan sonraki breadcrumba tikliyanda yeni bir sayfaya yonlendirir(/Heathrow/Heathrow-Taxi-Prices.asp<bu sayfaya )
      //bizdede bu sayfa olmadiginnan asagidada o sayfa linkine yonlenerse direk >>/heathrow-airport-transfer bura yonlendiririk
      {
        source: "/Heathrow",
        destination: "/heathrow-airport-transfer",
        permanent: true,
      },
      {
        source: "/London",
        destination: "/heathrow-london-transfers",
        permanent: true,
      },
      {
        source: "/Heathrow/Heathrow-Taxi-Prices.asp",//bu adres ise Asipropt.com daki    hgt to ascotdaki ikinci breadcrumba tikliyanda yonledndirilen adresdi
        destination: "/heathrow-airport-transfer",
        permanent: true,
      },
      {
        //https://www.airport-pickups-london.com/Heathrow/taxi-from-bristol-to-heathrow.asp    >london airportsA TIKLAYINCA  yonledndirilen adresdi
        source: "/Heathrow/london/Taxi-Prices.asp",
        destination: "/heathrow-london-transfers",//>bu Url header navbarda linklerde yoxdu
        permanent: true,
      },
      {
        //https://www.airport-pickups-london.com/Heathrow/taxi-from-gatwick-to-heathrow.asp    > Gatwick pickups   TIKLAYINCA  yonledndirilen adresdi
        source: "/Gatwick/Gatwick-Taxi-Prices.asp",
        destination: "/gatwick-transfer",//>bu Url header navbarda linklerde yoxdu
        permanent: true,
      },
      {
        source: "/Contact_APL.asp",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/Terms.asp",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/Privacy_Policy.asp",
        destination: "/terms",
        permanent: true,
      },
      //!inside heathrow taxi deals
      {
        source: "/london/from-london-to-heathrow-taxi-transfer",
        destination: "/",
        permanent: true,
      },
      {
        source: "/london/from-london-to-heathrow-taxi-transfer.asp",
        destination: "/",
        permanent: true,
      }
      //!



    ]
  },

}

module.exports = nextConfig
