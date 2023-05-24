import React from "react";
import style from "./styles.module.scss";
const CustomError = () => {
  return (
    <div className={style.main_box}>
      <div className={style.container}>
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <a href="/">Go back home</a>
      </div>

    </div>
  );
};

export default CustomError;
/*
import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; { title }</title>
      </Head>

      <Header isErrorPage />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}

*/