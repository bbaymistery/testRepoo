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


    return (
      <Html lang="en">
        <Head >
          <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
          <link rel="icon" href="/favicon.ico" />
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