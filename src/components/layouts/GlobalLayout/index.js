import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Footer from '../../widgets/Footer';
import { useSelector } from 'react-redux';
import TopHeader from '../../widgets/TopHeader';
import { LINKNAME_ROUTES, META_CONTENT_LINKNAME, seoDefaults } from '../../../constants/seoDefaults';
import { SOCIAL_MEDIA, META_CONTENT_HOME_PAGE, STATIC_ROUTES, } from '../../../constants/seoDefaults';
import { registerZendeskLoader, setHtmlLangAttr } from './globalHelpers';

const GlobalLayout = ({ innerHeadTags, children, mainCanonicalUrl, title = seoDefaults.title, description = seoDefaults.description, keywords = seoDefaults.keywords, footerbggray = seoDefaults.footerbggray, isVisible = seoDefaults.isVisible }) => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const state = useSelector(state => state.pickUpDropOffActions);
  const { params: { language } } = state;
  const websiteDomain = "https://www.airport-pickups-london.com";

  // ✅ Set the <html lang="xx"> attribute dynamically based on selected language
  // We moved this logic into a separate helper (`setHtmlLangAttr`) to:
  // - avoid repeating logic across files
  // - isolate `document` usage (which is browser-only)
  // - reduce reload triggers during development (Fast Refresh)
  useEffect(() => {
    setHtmlLangAttr(language);
  }, [language]);


  // ✅ Lazy-load Zendesk chat script after any user interaction
  // This is also abstracted into a helper (`registerZendeskLoader`) because:
  // - it contains browser-specific APIs (like `window` and `document`)
  // - keeping it in layout may caused unnecessary Fast Refresh reloads
  // - now it's easier to reuse or modify this logic centrally
  useEffect(() => {
    registerZendeskLoader();
  }, []);

  function decodeHtml(html) {
    if (typeof window === "undefined") return html; // server'da çalışırken direkt döner
    const area = document.createElement("textarea");
    area.innerHTML = html;
    return area.value;
  }

  return (
    <>
      {Array.isArray(innerHeadTags)
        ? <Head>
          {innerHeadTags.map((el, i) => {
            const isScript = el.tag === "script" && el.attrs?.type === "application/ld+json";

            if (isScript) {
              // 🧩 İçeriği decode et
              const decoded = decodeHtml(el.content || "").trim();

              // ✅ React’ta script içeriği props’ta dangerouslySetInnerHTML ile verilir
              return React.createElement(el.tag, {
                key: i,
                ...el.attrs,
                dangerouslySetInnerHTML: { __html: decoded },
              });
            }

            // 🟢 Diğer tag’ler için normal kullanım
            return React.createElement(el.tag, { key: i, ...el.attrs }, el.content || null);
          })}

        </Head> :
        <Head>
          <title>{title}</title>
          {keywords ? <meta key="keywords" name="keywords" content={keywords} /> : null}
          {description ? <meta key="description" name="description" content={description} /> : null}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />

          <meta name="facebook-domain-verification" content="a0x70uxvqjgd83edumsjevr1qbyehi" />
          <meta name="yandex-verification" content="7276fc604d2b38e6" />
          {/* //alternates for terms abouts us aand other Static pages We dont need schema so we didnt include*/}
          {Object.entries(STATIC_ROUTES).map(([key, path]) =>
            router.pathname === path && (
              <React.Fragment key={key}>
                <link rel="canonical" href={mainCanonicalUrl} />
                <link rel="alternate" hrefLang="en" href={`${websiteDomain}${path}`} />
                <link rel="alternate" hrefLang="tr" href={`${websiteDomain}/tr${path}`} />
                <link rel="alternate" hrefLang="ar" href={`${websiteDomain}/ar${path}`} />
                <link rel="alternate" hrefLang="es" href={`${websiteDomain}/es${path}`} />
                <link rel="alternate" hrefLang="it" href={`${websiteDomain}/it${path}`} />
                <link rel="alternate" hrefLang="ru" href={`${websiteDomain}/ru${path}`} />
                <link rel="alternate" hrefLang="zh-Hans" href={`${websiteDomain}/zh${path}`} />
                <link rel="alternate" hrefLang="x-default" href={`${websiteDomain}${path}`} />
              </React.Fragment>
            )
          )}
          {/* /here we avoid main thread blocking using nonscript and onload */}

          {router.pathname === "/" || router.pathname === "/[linkname]" ? <link rel="stylesheet" href={"/fontawesome/css/all.min.css"} /> : <link rel="stylesheet" href={"/fontawesomeAll/css/all.min.css"} />}
          {/* >>>Starting  [Linknname]  ALTERANTE CANONICAL configurations fFor all linknama query */}
          {Object.entries(LINKNAME_ROUTES).map(([key, path]) =>
            router.query.linkname === path && (
              <React.Fragment key={key}>
                <link rel="canonical" href={mainCanonicalUrl} />
                <link rel="alternate" hrefLang="en" href={`${websiteDomain}/${path}`} />
                <link rel="alternate" hrefLang="tr" href={`${websiteDomain}/tr/${path}`} />
                <link rel="alternate" hrefLang="ar" href={`${websiteDomain}/ar/${path}`} />
                <link rel="alternate" hrefLang="es" href={`${websiteDomain}/es/${path}`} />
                <link rel="alternate" hrefLang="it" href={`${websiteDomain}/it/${path}`} />
                <link rel="alternate" hrefLang="ru" href={`${websiteDomain}/ru/${path}`} />
                <link rel="alternate" hrefLang="zh-Hans" href={`${websiteDomain}/zh/${path}`} />
                <link rel="alternate" hrefLang="x-default" href={`${websiteDomain}/${path}`} />

                <meta property="og:title" content={META_CONTENT_LINKNAME[key][language].ogTitle} />
                <meta property="og:description" content={META_CONTENT_LINKNAME[key][language].ogDescription} />
                <meta property="og:url" content={`${websiteDomain}${META_CONTENT_LINKNAME[key][language]["schema"]["url"]}`} />
                <meta property="og:image" content={language === 'en' ? `${websiteDomain}/images/${META_CONTENT_LINKNAME[key][language].imageUrl}` : `${websiteDomain}/${language}/images/${META_CONTENT_LINKNAME[key][language].imageUrl}`} />

                <meta name="twitter:title" content={META_CONTENT_LINKNAME[key][language].twitterTitle} />
                <meta name="twitter:description" content={META_CONTENT_LINKNAME[key][language].twitterDescription} />
                <meta name="twitter:image" content={language === 'en' ? `${websiteDomain}/images/${META_CONTENT_LINKNAME[key][language].imageUrl}` : `${websiteDomain}/${language}/images/${META_CONTENT_LINKNAME[key][language].imageUrl}`} />


                <Script strategy='beforeInteractive' type="application/ld+json">
                  {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    "name": META_CONTENT_LINKNAME[key][language]["schema"]["name"],
                    "url": `${websiteDomain}${META_CONTENT_LINKNAME[key][language]["schema"]["url"]}`,
                    "sameAs": Object.values(SOCIAL_MEDIA),
                    "description": META_CONTENT_LINKNAME[key][language]["schema"]["description"],
                    "inLanguage": { language }
                  }, null, 2)}
                </Script>
              </React.Fragment>
            )
          )}




          {/* //Site verification  */}
          <meta name={"google"} content={"_Cn8CYgXUWiRe05oCJj_l5OkyXza4K4nIuDWUPs8P2w"} />
          <meta name={"ms"} content={"41FC097AFD6E06774C838AC3D486664F"} />
          <meta name={"baidu"} content={"x5apENcEmp"} />
          <meta name={"verify_v1"} content={"KKDrUvNuL/YKcQ6PqTYbnH+UUOq0/lz/pJU/z7M+Ro4="} />

          {/* <StandardMetaTags currentYear={currentYear} /> */}
          <meta name="distribution" content="Global" />
          <meta name="copyright" content={`Copyright Airport-pickups-london.com ${currentYear}. All rights reserved.`} />
          <meta name="resource-type" content="document" />
          <meta name="author" content="Airport-pickups-london.com" />
          <meta property="og:site_name" content="Airport Pickups London" />
          <meta property="og:type" content="website" />

          {/* Allow indexing and following links */}
          <meta name="googlebot" content="index, follow" />
          <meta name="robots" content="index, follow" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Airport_Pickups" />

          {router.pathname === "/" && (
            <>
              {/* Open Graph and Twitter Cards */}
              <meta property="og:url" content={`${websiteDomain}${language === 'en' ? '' : `/${language}`}`} />
              <meta property="og:image" content={language === 'en' ? `${websiteDomain}/images/homeScreenImage.webp` : `${websiteDomain}/${language}/images/homeScreenImage.webp`} />
              <meta name="twitter:image" content={language === 'en' ? `${websiteDomain}/images/homeScreenImage.webp` : `${websiteDomain}/${language}/images/homeScreenImage.webp`} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta property="og:title" content={META_CONTENT_HOME_PAGE[language].ogTitle} />
              <meta property="og:description" content={META_CONTENT_HOME_PAGE[language].ogDescription} />
              <meta name="twitter:title" content={META_CONTENT_HOME_PAGE[language].twitterTitle} />
              <meta name="twitter:description" content={META_CONTENT_HOME_PAGE[language].twitterDescription} />
              <Script strategy='beforeInteractive' type="application/ld+json">
                {JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "Airport Pickups London",
                  "url": `${language === "en" ? websiteDomain : `${websiteDomain}/${language}`}`,
                  "sameAs": Object.values(SOCIAL_MEDIA),
                  "inLanguage": { language }
                }, null, 2)}
              </Script>
            </>
          )}





        </Head>}

      <TopHeader />
      <main>{children}</main>
      <Footer bggray={footerbggray} />
    </>
  );
};

export default GlobalLayout;
