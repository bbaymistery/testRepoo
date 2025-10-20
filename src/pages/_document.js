import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

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
    const { pageProps } = this.props;

    let {
      title = "The best way to travel between Heathrow to Gatwick | Gatwick airport to Heathrow transfer and transportation",
      description = "Heathrow to Gatwick and Gatwick to Heathrow transfer prices.  Heathrow airport and Gatwick travel and transportation information. How do i get from heathrow to gatwick.",
      keywords = "Heathrow to Gatwick,gatwick to heathrow,heathrow to Gatwick travel,Gatwick to Heathrow travel,Gatwick to Heathrow transfer,Heathrow to Gatwick transfer.",
    } = (typeof pageProps === 'object' && typeof pageProps?.head === 'object') ? pageProps?.head : {};

    let extraTags = typeof pageProps?.head === 'object' && Array.isArray(pageProps?.head?.extraTags) ? pageProps?.head?.extraTags : []
    if (typeof pageProps?.head === 'object') {
      delete pageProps?.head?.extraTags
    }

    return (
      <Html>
        <Head >
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* <link rel="stylesheet" href="/fontawesome/css/all.min.css" /> */}
          <meta name="keywords" content={keywords} />

          {/* LAZY LOAD ILE DE DENE */}
          {/* below code is duplicated , but the id si not match */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-954888543"></script>

          {/* below code is duplicated , but the id si not match */}
          {/* 
            this tag added => gtag('config', 'UA-108287779-1');
             */}
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-954888543')
            gtag('config', 'UA-108287779-1');
            ;`}}></script>


          {/* below code is not duplicated , but i dont remmember for what  */}
          <script dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-954888543/AUzgCLz8s5MBEN_iqccD',
                'transaction_id': '',
                'event_callback': callback
            });
            return false;
          }`}}></script>

          {/* below code is not duplicated, this is related to cookies for privicy polices  */}
          <script dangerouslySetInnerHTML={{
            __html: `
         (
          function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  new Date().getTime(),event:'gtm.js'});
           var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
           j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
           f.parentNode.insertBefore(j,f);})
           (window,document,'script','dataLayer','GTM-K3Z58DMH')
            ` }}></script>




          {extraTags.map((tag, i) => {
            let { attr, name, textContent } = tag;
            if (name === 'link') {
              return <link key={i} {...attr} />
            } else if (name === 'script') {
              let { type, data } = typeof textContent === 'object' ? textContent : {};
              if (type === 'object') {
                // return <script key={i} {...attr} dangerouslySetInnerHTML={{__html:JSON.stringify(data,null,2)}} ></script>
                return <Script key={i} {...attr} strategy='beforeInteractive' >{JSON.stringify(data, null, 2)}</Script>
                //{JSON.stringify(data, null, 2)}
              } else if (type === 'string') {
                // return <script key={i} {...attr} dangerouslySetInnerHTML={{__html:data}} ></script>
                return <Script key={i} {...attr} strategy='beforeInteractive' >{data}</Script>
              } {
                return <React.Fragment key={i}></React.Fragment>
              }
            } else {
              return <React.Fragment key={i}></React.Fragment>
            }
          })}
        </Head>

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                    (function() {
                                        // Check viewport width
                                        // Load Zendesk snippet script
                                        var zendeskScript = document.createElement('script');
                                        zendeskScript.id = 'ze-snippet';
                                        zendeskScript.src = 'https://static.zdassets.com/ekr/snippet.js?key=473f7b02-4850-4045-8010-1fedf9752180';
                                        zendeskScript.async = true;
                                        document.body.appendChild(zendeskScript);

                                        // Load custom chat widget script
                                        var chatWidgetScript = document.createElement('script');
                                        chatWidgetScript.src = 'https://www.airport-pickups-london.com/js/chat_widget.js?112';
                                        chatWidgetScript.async = true;
                                        document.body.appendChild(chatWidgetScript);
                                    })();
            `,
            }}
          />
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3Z58DMH" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;