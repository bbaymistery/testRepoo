import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { Partytown } from '@qwik.dev/partytown/react';
class CustomDocument extends Document {

    // This is a static method in the CustomDocument class that fetches initial properties before rendering the document.
    static async getInitialProps(ctx) {
        // Initialize an empty object to hold page-specific props.

        let pageProps = {};

        // Store the original renderPage function from the context.
        const originalRenderPage = ctx.renderPage;

        // Override the renderPage function to customize the rendering of the app and components.
        ctx.renderPage = () =>
            originalRenderPage({
                // Enhance the App component, allowing you to wrap the entire app with additional props or functionality.
                enhanceApp: (App) => (props) => {
                    return <App {...props} />
                },
                // Enhance individual components if needed, but in this case, we just return them as is.
                enhanceComponent: (Component) => Component,
            });

        // Call the original getInitialProps method from the Document class to get the initial props.
        const initialProps = await Document.getInitialProps(ctx);

        // Return the initial props provided by Document along with any custom pageProps we might have set.
        return { ...initialProps, pageProps };
    }

    createMetaTagElements(metaTags) {
        if (metaTags.length > 0) {
            return metaTags.map((tagString, index) => {
                const matches = tagString.match(/<meta [^>]+>/g);
                if (matches) {
                    return matches.map((metaTag, idx) => {
                        const props = {};
                        metaTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
                            props[key] = value;
                            return m;
                        });
                        return <meta {...props} key={`meta-${index}-${idx}`} />;
                    });
                }
                // For link tags
                const linkMatches = tagString.match(/<link [^>]+>/g);
                if (linkMatches) {
                    return linkMatches.map((linkTag, idx) => {
                        const props = {};
                        linkTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
                            props[key] = value;
                            return m;
                        });
                        return <link {...props} key={`link-${index}-${idx}`} />;
                    });
                }
                return null;
            });
        }
    }
    renderSchemaScripts(schemas) {
        return schemas?.length > 0 && schemas.map((schema, index) => (
            <Script key={index} type="application/ld+json" strategy='beforeInteractive'>
                {JSON.stringify(schema, null, 2)}
            </Script>
        ));
    }


    render() {
        //here i am destructing props which i passed  with MyApp.getInitialProps
        let { schemaOfTaxiDeals, schemas, metaTags = [], toursDatas, hasLanguage } = this?.props?.__NEXT_DATA__?.props?.pageProps
        let schemasOfPages = schemas || []//home page Terms and the rest page has different schemas 


        //checking if datas comes from single tour (tours/link.js)
        if (toursDatas?.pagePathname) {
            schemasOfPages = toursDatas.schema
            metaTags = toursDatas.metaTags
        }

        return (
            <Html lang={hasLanguage ? hasLanguage : "en"}>
                <Head >

                    {this.renderSchemaScripts(schemaOfTaxiDeals)}
                    {this.renderSchemaScripts(schemasOfPages)}
                    {this.createMetaTagElements(metaTags)}
                    {/* Option One From Mr Mustafa */}
                    <Partytown debug={true} forward={['dataLayer.push']} />

                    <script
                        type="text/partytown"
                        dangerouslySetInnerHTML={{
                            __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-M8WXW8KC');
                        `,
                        }}
                        data-cfasync="false"
                    ></script>
                    <link rel="dns-prefetch" href="https://static.zdassets.com" />
                    <link rel="preload" as="font" href="/fontawesome/webfonts/fa-solid-900.ttf" type="font/ttf" crossOrigin="anonymous" />
                    <link rel="preconnect" href="https://api.london-tech.com" crossOrigin="anonymous" />
                </Head>
                <body>
                    <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8WXW8KC" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument;
