/** @type {import('next').NextConfig} */

async function getRoutes() {
  // fetch data here
  let languages = ["en"]
  try {
    const response = await fetch(`https://api.london-tech.com/app/en`).then((res) => res.json())
    if (response.status === 200) languages = response?.languages.map(language => language.value);
  } catch (error) { console.log(error); }
  const singleRoutes = languages.map(lang => ({ source: `/${lang}`, destination: '/', locale: false }));
  let allLangaugesAsString = languages.length > 1 ? languages.join("|") : "en" //en|tr|es|ar|it|zh|ru
  let linknameRoutes = [{ source: `/:lang(${allLangaugesAsString})/:path`, destination: '/:path', locale: false, }]
  // generate rewrite rules dynamically
  const rewriteRules = [
    // for each language, create a rewrite rule with the language code in the source path
    ...singleRoutes,
    //ornek olsun diye bu sekilde yazdik Pekcandan yolaca cikarak /kullar direk /aboutu gorseder
    {
      source: '/tr/kurallar',
      destination: '/terms',
      locale: false,
    },

    ...linknameRoutes
  ];


  return rewriteRules
}

const nextConfig = {
  reactStrictMode: false,
  env: {
    mapApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-S02J90JMSB",
  },
  // "assetPrefix": "https://tactac.netlify.app/",
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
