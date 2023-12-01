import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';
class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        // let content = ''
        // if (typeof window === 'undefined') {
        //     const filePathCss = (process.cwd() + '/public/fontawesome/css/all.min.css');
        //     try {
        //         content = fs.readFileSync(filePathCss, 'utf8');
        //     } catch (error) {
        //         console.log({ error: error.meesage });
        //     }
        // }
        let pageProps = {};
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => {

                    return <App {...props} />
                },
                enhanceComponent: (Component) => Component,
            })
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, pageProps, }
    }

    render() {
        //here i am destructing props which i passed  with MyApp.getInitialProps
        let { schemaOfTaxiDeals } = this?.props?.__NEXT_DATA__?.props?.pageProps//this comes from.[...pathname]

        return (
            <Html lang="en">
                <Head >

                    {/* {this?.props.pageProps.pathname ? <></> : <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap" />} */}
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

