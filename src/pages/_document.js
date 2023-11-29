import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';
import { readFile } from 'fs/promises';
// import path from 'path';
// export async function getStaticProps() {
// const filePath = path.resolve(process.cwd(), '../../public/fontawesome/css/all.min.css');
// const content = await readFile(filePath, 'utf8');
// console.log(content);
// console.log("Salam");


//     return {
//         props: {
//             content,
//         },
//     };
// }
// import fs from 'fs';
// import path from 'path';


class CustomDocument extends Document {

    // constructor(props) {
    //     super(props)
    //     this.content = ""
    // }

    //     static async getInitialProps(ctx) {
    //         let content = ''
    //         if (typeof window === 'undefined') {
    //             const filePath = (process.cwd() + '/public/fontawesome/css/all.min.css');
    //             try {
    //                 content = fs.readFileSync(filePath, 'utf8');
    // //try to find way read content odf the file css and render it inside html tag
    //             } catch (error) {
    //                 console.log(process.cwd());
    //                 console.log({ error: error.meesage });
    //                 console.log(filePath);
    //             }

    //         }

    //         let pageProps = null;
    //         const originalRenderPage = ctx.renderPage;
    //         ctx.renderPage = () =>
    //             originalRenderPage({
    //                 enhanceApp: (App) => (props) => { return <App {...props} content={content} /> },
    //                 enhanceComponent: (Component) => Component,
    //             })

    //         const initialProps = await Document.getInitialProps(ctx);
    //         return { ...initialProps, pageProps }
    //     }

    render() {
        //here i am destructing props which i passed  with MyApp.getInitialProps
        let { schemaOfTaxiDeals } = this?.props?.__NEXT_DATA__?.props?.pageProps//this comes from.[...pathname]
        // console.log(this.props.content);
        // console.log("this.props.content");

        return (
            <Html lang="en">
                <Head >
                    <link rel="stylesheet" href="/fontawesome/css/all.min.css" />

                    {/* <script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossOrigin="anonymous"  ></script> */}

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

/*
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" media="all" />
<script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossOrigin="anonymous"  ></script>
*/