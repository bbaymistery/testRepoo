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
  let toursRoutes = [{ source: `/:lang(${allLangaugesAsString})/tours/:link`, destination: '/tours/:link', locale: false, }]
  // for each language, create a rewrite rule with the language code in the source path
  const rewriteRules = [...singleRoutes, ...linknameRoutes, ...toursRoutes,];


  return rewriteRules
}

const nextConfig = {
  reactStrictMode: false,
  env: {
    mapApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-S02J90JMSB",
  },
  // "assetPrefix": "https://https://aplairtest.netlify.app//",
  async rewrites() {
    const rules = await getRoutes();
    return rules;
  },
  images: {
    remotePatterns: [
      { hostname: 'api.london-tech.com' },
      { hostname: 'www.airport-pickups-london.com' },
    ],
  },
  async headers() {
    return [

      // Font dosyaları (TTF/WOFF/WOFF2)
      {
        source: '/:all*.(woff2|woff|ttf)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },],
      },
      // Diğer public statikler (js, css, img)
      {
        source: '/:all*.(js|css|png|jpg|jpeg|webp|svg|gif)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },],
      },
      // İstersen klasör bazlı ekstra güvence:
      {
        source: '/fontawesome/webfonts/:all*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },],
      },

    ];

  },

  async redirects() {
    return [
      {
        source: '/sofor-araniyor',
        destination: '/tr/sofor-araniyor',
        permanent: true, // SEO için true (301) veya test için false (307)
      },
    ];
  }
}

module.exports = nextConfig
