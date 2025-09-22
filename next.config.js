/** @type {import('next').NextConfig} */

async function getCDNFileAsync(params = { language: "en" }) {
  let resp = { 'status': 403 }
  try {
    let requestt = await fetch(`https://api.london-tech.com/app/${params.language}`)

    let response = await requestt.json()
    if (response.status === 200)
      languages = response?.languages.map(language => language.value);
    resp = response
  } catch (error) {
    try {
      let requestt = await fetch(`https://cdn.london-tech.com/app/${params.language}.json`)

      let response = await requestt.json()
      if (response.status === 200)
        languages = response?.languages.map(language => language.value);
      resp = response
    } catch (error) { console.log(error); }
  }
  return resp
}

async function getRoutes() {
  // fetch data here
  let languages = ["en"]
  try {

    let response = await getCDNFileAsync({ language: 'en' })
    if (response.status === 200) languages = response?.languages.map(language => language.value);
  } catch (error) { console.log(error); }

  let singleRoutes = languages.map(lang => ({ source: `/${lang}`, destination: '/', locale: false }));

  let allLangaugesAsString = languages.length > 1 ? languages.join("|") : "en" //en|tr|es|ar|it|zh|ru

  let linknameRoutes = [{ source: `/:lang(${allLangaugesAsString})/:path`, destination: '/:path', locale: false, }]

  let toursRoutes = [{ source: `/:lang(${allLangaugesAsString})/tours/:link`, destination: '/tours/:link', locale: false, }]

  // Rewrite rule to prevent doubling the language prefix
  let specificToursPageRoutes = [
    // Prevent adding language prefix again when clicking on a link
    { source: `/:lang(${allLangaugesAsString})/tours/:link`, destination: '/tours/:link', locale: false },

    // Case for listing all tours with a language prefix
    { source: `/:lang(${allLangaugesAsString})/tours`, destination: `/:lang/tours`, locale: false },

    // Case for specific tour pages without language prefix
    { source: `/tours/:link`, destination: '/tours/:link', locale: false },
  ];


  const rewriteRules = [
    ...singleRoutes,
    ...linknameRoutes,
    ...toursRoutes,
    ...specificToursPageRoutes
  ];
  return rewriteRules
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
    // Extra redirects (if any)
    const axtraReDirection = [{
      source: '/blog/airport-transfers/booking-airport-transfers-during-the-busy-summer-season.html',
      destination: '/Blog',
      permanent: true
    },
    {
      source: '/blog/airport-transfers/how-to-enjoy-the-perfect-christmas-get-away.aspx',
      destination: '/Blog',
      permanent: true
    },
    {
      source: '/blog/airport-transfers/minimise-the-stress-and-risk-of-heathrow.aspx',
      destination: '/Blog',
      permanent: true
    }
    ];

    // Combine all redirects
    return [
      ...axtraReDirection,
    ];
  }
  ,
  images: {
    remotePatterns: [
      { hostname: 'api.london-tech.com' },
      { hostname: 'www.airport-pickups-london.com' },
      { hostname: 'api-backup.london-tech.com' },
    ],
    formats: ['image/webp',],
  },
  distDir: 'build',
  /**
 * Adds long-term cache headers to static assets like JavaScript, CSS, and images.
 *
 * These headers tell browsers and CDNs (like Cloudflare) to cache the files for 1 year (31536000 seconds)
 * and treat them as immutable, meaning they won't be revalidated unless the filename changes (e.g., via versioning).
 *
 * This is great for performance because static assets (like Next.js build output or public images)
 * usually don't change unless a new deployment happens and the filenames change.
 *
 */
  async headers() {
    return [
      {
        source: '/:all*(js|css|png|jpg|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  }
}

module.exports = nextConfig
