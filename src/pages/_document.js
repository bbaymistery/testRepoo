import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        let pageProps = null;
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => { return <App {...props} /> },
                enhanceComponent: (Component) => Component,
            })

        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, pageProps }
    }

    render() {
        //here i am destructing props which i passed  with MyApp.getInitialProps
        let { schemaOfTaxiDeals } = this?.props?.__NEXT_DATA__?.props?.pageProps//this comes from.[...pathname]
        return (
            <Html lang="en">
                <Head >
                    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
                    <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" media="all" /> */}
                    <script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossOrigin="anonymous"  ></script>
                    {schemaOfTaxiDeals?.length > 0 && schemaOfTaxiDeals?.map(((schema, index) => {
                        return <Script key={index} type="application/ld+json" strategy='beforeInteractive' >{JSON.stringify(schema, null, 2)}</Script>
                    }))}

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument;

