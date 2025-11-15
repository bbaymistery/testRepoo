import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    let pageProps = null;
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          pageProps = props.pageProps;
          return <App {...props} />
        },
        enhanceComponent: (Component) => Component,
      })
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pageProps }
  }

  render() {

    return (
      <Html lang="en-GB">
        <Head >
          <link rel="preload" as="font" href="/criticalFontAwesome/webfonts/fa-solid-900.ttf" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" as="image" href="/images/hero1.webp" imageSrcSet="/images/hero1.webp 1x" imageSizes="100vw" fetchpriority="high" />
          <link rel="dns-prefetch" href="https://static.zdassets.com" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="theme-color" content="#e27513" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Airport Taxi" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="author" content="London Heathrow Taxi Ltd" />
          <meta name="robots" content="index,follow" />
          <meta name="language" content='en' />
          {/* constants */}
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Lhr_taxi" />
          <meta property="og:locale" content="en_GB" />
          <script
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-K78T77FQ');
              `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K78T77FQ"
              height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;