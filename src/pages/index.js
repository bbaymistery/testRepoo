import GlobalLayout from "../components/layouts/GlobalLayout";
import Hero from "../components/widgets/Hero";
import dynamic from 'next/dynamic'
const TaxiDeals = dynamic(() => import('../components/widgets/TaxiDeals'), { loading: () => <div>Loading...</div> });
const Testimonials = dynamic(() => import('../components/widgets/Testimonials'),);
const CarsSlider = dynamic(() => import('../components/widgets/CarsSlider'), { ssr: false });
const SeaportTransfers = dynamic(() => import('../components/widgets/SeaportTransfers'),);
import { parse } from 'url';
// ⬇️ Dinamik olarak 'tours' bileşenini import ediyoruz.
// 'ssr: false' kullanmamız şu anlama gelir:
// - Bu bileşen sunucu tarafında (SSR) render edilmez ❌
// - Sadece tarayıcı (client-side) tarafında render edilir ✅
// - Bu, genelde window, localStorage gibi sadece tarayıcıda çalışan kodlar için tercih edilir
// - SSR devre dışı bırakıldığında bileşen Next.js'in sunucusunda değil, yalnızca kullanıcı tarayıcısında yüklenir

const Tours = dynamic(() => import('./tours'), {
  loading: () => <div>Loading...</div>, // Bileşen yüklenirken geçici gösterilecek içerik
  ssr: false // ⬅️ Bu satır ile bileşen sadece client-side'da render edilir
});

import { fetchContent } from "../helpers/fetchContent";
import { checkLanguageAttributeOntheUrl } from "../helpers/checkLanguageAttributeOntheUrl";
import { useEffect, useState } from "react";
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
  }
  ]
}


export default function Home(props) {
  let { metaTitle, keywords, metaDescription, pageContent, mainCanonicalUrl } = props;
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    if (!hasScrolled) setHasScrolled(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <GlobalLayout mainCanonicalUrl={mainCanonicalUrl} keywords={keywords} title={metaTitle} description={metaDescription} footerbggray={true} >
      <Hero env={props.env} />
      <TaxiDeals env={props.env} />
      <SeaportTransfers bggray={true} />
      <Tours insideGlobalLayout={false} env={props.env} />
      {hasScrolled && <CarsSlider bggray={true} />}
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
  let { metaTitle, keywords, pageContent, metaDescription, lang, canonicalUrl: mainCanonicalUrl } =
    await fetchContent("/", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar, pathNameUrlCanonical)
  let schemas = [LocalBusinessSchema, breadcumbSchema, organizationSchema,
    websiteSchema];


  return { props: { metaTitle, keywords, pageContent, metaDescription, schemas, mainCanonicalUrl } }
}
