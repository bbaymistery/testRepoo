import Head from "next/head";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { META_CONTENT_LINKNAME, STATIC_ROUTES } from "../../../constants/seodefaults";
import Header from "../../widgets/Header";
import TopHeader from "../../widgets/Topheader";
import { registerZendeskLoader } from "../globalHelpers";
import styles from "./styles.module.scss";
const FooterDynamic = dynamic(() => import("../../widgets/Footer/Footer"))



const Layout = ({
  children,
  title = "Heathrow Taxi Transfers | Fixed Prices & Meet & Greet | London-Heathrow.taxi",
  noFooter = false,
  noTopbar = false,
  description = "Heathrow taxi transfers with fixed prices, free meet & greet, flight tracking and free cancellation. 24/7 support. Book your London Heathrow ride online.",
  keywords = "",
}) => {
  const router = useRouter()
  const currentYear = new Date().getFullYear();
  const websiteDomain = "https://www.london-heathrow.taxi";

  // ✅ Lazy-load Zendesk chat script after any user interaction
  useEffect(() => { registerZendeskLoader() }, []);
  return (
    <div className={styles.container_layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <meta name="copyright" content={`Copyright London-heathrow.taxi  ${currentYear}. All rights reserved.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />
        <meta name="google-site-verification" content="9niN--Hxw6fLfS5Om0lK1dGEvoDbwo-ZTxjamC9oz64" />
        {/* //alternates for terms abouts us aand other Static pages We dont need schema so we didnt include*/}
        {Object.entries(STATIC_ROUTES).map(([key, path, language = "en"]) => {
          return (
            router.pathname === path && (
              <React.Fragment key={key}>
                <link rel="canonical" href={`${websiteDomain}${path}`} />

                {/* og */}
                <meta property="og:title" content={META_CONTENT_LINKNAME[key][language]?.ogTitle} />
                <meta property="og:description" content={META_CONTENT_LINKNAME[key][language]?.ogDescription} />
                <meta property="og:url" content={`${websiteDomain}${META_CONTENT_LINKNAME[key][language]["url"]}`} />
                <meta property="og:image" content={language === 'en' ? `${websiteDomain}/images/${META_CONTENT_LINKNAME[key][language]?.imageUrl}` : `${websiteDomain}/${language}/images/${META_CONTENT_LINKNAME[key][language]?.imageUrl}`} />

                {/* twitter */}
                <meta name="twitter:title" content={META_CONTENT_LINKNAME[key][language]?.twitterTitle} />
                <meta name="twitter:description" content={META_CONTENT_LINKNAME[key][language]?.twitterDescription} />
                <meta name="twitter:image" content={language === 'en' ? `${websiteDomain}/images/${META_CONTENT_LINKNAME[key][language]?.imageUrl}` : `${websiteDomain}/${language}/images/${META_CONTENT_LINKNAME[key][language]?.imageUrl}`} />

                {/* GEO meta Data */}
                {META_CONTENT_LINKNAME[key][language]?.siteName && <meta property="og:site_name" content={META_CONTENT_LINKNAME[key][language].siteName} />}
                {META_CONTENT_LINKNAME[key][language]?.geoRegion && <meta name="geo.region" content={META_CONTENT_LINKNAME[key][language].geoRegion} />}
                {META_CONTENT_LINKNAME[key][language]?.geoPlacename && <meta name="geo.placename" content={META_CONTENT_LINKNAME[key][language].geoPlacename} />}
                {META_CONTENT_LINKNAME[key][language]?.geoPosition && <meta name="geo.position" content={META_CONTENT_LINKNAME[key][language].geoPosition} />}
                {META_CONTENT_LINKNAME[key][language]?.icbm && <meta name="ICBM" content={META_CONTENT_LINKNAME[key][language].icbm} />}


                {/*  Business Contact Meta  */}
                {Object.entries(META_CONTENT_LINKNAME[key]?.[language]?.businessContact || {}).map(([prop, value]) => (
                  <meta key={prop} property={`business:contact_data:${prop.replace(/[A-Z]/g, m => `_${m.toLowerCase()}`)}`} content={value} />
                )
                )}


                {/* JSON-LD Schema */}
                {META_CONTENT_LINKNAME[key]?.[language]?.schema?.map((schemaObj, index) => (
                  <script
                    key={`${key}-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj, null, 2) }}
                  />
                ))}

              </React.Fragment>
            )
          )
        }
        )}
      </Head>
      {!noTopbar ? <TopHeader /> : ""}
      <Header />
      <main>{children}</main>
      {!noFooter ? <FooterDynamic /> : ""}
    </div>
  );
};

export default Layout;
