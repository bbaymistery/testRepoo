import GlobalLayout from "../components/layouts/GlobalLayout";
import Hero from "../components/widgets/Hero";
import dynamic from 'next/dynamic'

// ✅ CLS FIX: All dynamic imports now have loading placeholders with min-height
// This prevents layout shifts when components load in.
// 
// TO GET EXACT HEIGHTS: Open your site in Chrome, inspect each section once 
// fully loaded, and note the rendered height. Replace the estimates below 
// with those real values for a pixel-perfect result.

const TaxiDeals = dynamic(() => import('../components/widgets/TaxiDeals'), {
  loading: () => <div style={{ minHeight: '1110px' }} />,
});

const SeaportTransfers = dynamic(() => import('../components/widgets/SeaportTransfers'), {
  loading: () => <div style={{ minHeight: '602.39px' }} />,
});

const Tours = dynamic(() => import('./tours'), {
  loading: () => <div style={{ minHeight: '671px' }} />,
  ssr: false,
});

// ✅ CLS FIX: Removed ssr:false was already set, added loading placeholder
const CarsSlider = dynamic(() => import('../components/widgets/CarsSlider'), {
  loading: () => <div style={{ minHeight: '654px' }} />,
  ssr: false,
});

const Testimonials = dynamic(() => import('../components/widgets/Testimonials'), {
  loading: () => <div style={{ minHeight: '1498px' }} />,
});

import { parse } from 'url';
import { fetchContent } from "../helpers/fetchContent";
import { checkLanguageAttributeOntheUrl } from "../helpers/checkLanguageAttributeOntheUrl";
import { setNoCacheHeader } from "../helpers/setNoCacheHeader";

const LocalBusinessSchema = {
  "@context": "http://schema.org/",
  "@type": "LocalBusiness",
  "@id": "https://www.airport-pickups-london.com/#apl",
  "name": "Airport Pickups London",
  "image": "https://www.airport-pickups-london.com/images/airport-pickups-london-logo.png",
  "url": "https://www.airport-pickups-london.com/",
  "telephone": "+44 208 688 7744",
  "priceRange": "££",
  "awards": "ISO 9001 Certified",
  "identifier": {
    "@type": "PropertyValue",
    "name": "TFL License Number",
    "value": "8004"
  },
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
  "sameAs": [
    "https://www.facebook.com/AirportPickupsLondon",
    "https://x.com/Airport_Pickups",
    "https://www.youtube.com/c/Airport-pickups-london"
  ]
}

const organizationSchema = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "@id": "https://www.airport-pickups-london.com/#org",
  "name": "Airport Pickups London",
  "url": "https://www.airport-pickups-london.com/",
  "logo": "https://www.airport-pickups-london.com/images/airport-pickups-london-logo.png",
  "sameAs": [
    "https://www.facebook.com/AirportPickupsLondon",
    "https://x.com/Airport_Pickups",
    "https://www.youtube.com/c/Airport-pickups-london"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+44 208 688 7744",
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": ["en", "tr", "ar", "es", "it", "ru", "zh-Hans"]
  }]
}

const websiteSchema = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "@id": "https://www.airport-pickups-london.com/#website",
  "url": "https://www.airport-pickups-london.com/",
  "name": "Airport Pickups London",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.airport-pickups-london.com/search?q={query}",
    "query-input": "required name=query"
  }
}

const breadcumbSchema = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "item": {
      "@id": "https://www.airport-pickups-london.com",
      "name": "Home"
    }
  }]
}


export default function Home(props) {
  let { metaTitle, keywords, metaDescription, pageContent, mainCanonicalUrl, llmsHref } = props;

  // ✅ CLS FIX: Removed the hasScrolled state and scroll listener entirely.
  // The old pattern: {hasScrolled && <CarsSlider />} caused CLS because
  // CarsSlider would suddenly appear on first scroll, pushing Testimonials down.
  // Now CarsSlider is always in the DOM with ssr:false + loading placeholder,
  // so it lazy-loads naturally without shifting layout.

  return (
    <GlobalLayout mainCanonicalUrl={mainCanonicalUrl} keywords={keywords} title={metaTitle} description={metaDescription} footerbggray={true} llmsHref={llmsHref} >
      <Hero env={props.env} />
      <TaxiDeals env={props.env} />
      <SeaportTransfers bggray={true} />
      <Tours insideGlobalLayout={false} env={props.env} />
      <CarsSlider bggray={true} />
      <Testimonials bggray={false} pageContent={pageContent} />
    </GlobalLayout>
  )
}


export async function getServerSideProps({ req, res }) {
  setNoCacheHeader(res, true);

  let { pathname, query } = parse(req?.url, true);

  let firstLoadLangauge = checkLanguageAttributeOntheUrl(req?.url);
  let pathnameUrlWHenChangeByTopbar = pathname
  const { cookie } = req.headers;
  let pathNameUrlCanonical = "/"
  let { metaTitle, keywords, pageContent, metaDescription, lang, canonicalUrl: mainCanonicalUrl, llmsHref } =
    await fetchContent("/", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar, pathNameUrlCanonical)
  let schemas = [LocalBusinessSchema, breadcumbSchema, organizationSchema,
    websiteSchema];

  return { props: { metaTitle, keywords, pageContent, metaDescription, schemas, mainCanonicalUrl, llmsHref } }
}