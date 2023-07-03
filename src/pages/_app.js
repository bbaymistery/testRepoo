import "../styles/global.scss";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { getAppData } from "../store/pickUpDropOffReducer/pickUpDropAction";
import { SET_SELECT_ACTIVE_LINK } from "../store/pickUpDropOffReducer/pickUpDropTypes";
import { useDispatch } from "react-redux";
import Head from "next/head";
import env from "../resources/env";


function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (typeof window === 'object') {
      window.handelErrorLogs = (error = {}, location = '', logs = {}) => {
        let raw = {};
        try {
          let { name, message, stack } = typeof error === 'string' ? new Error(error) : error;
          raw = { "error": { name, message, stack }, "location": location, "logs": logs };
        } catch (e) {
          raw = { "error": { ...e, ...error }, "location": location, "logs": logs };
        }

        let requestOptions = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(raw),
          redirect: 'follow'
        };
        if (!env.websiteDomain.includes("localhost")) {
          try {
            fetch(`${env.apiDomain}/tools/add-error-logs`, requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
          } catch (err) {
            console.log(err)
          }
        }
      }
    }
  }, [])
  useEffect(() => {
    dispatch({
      type: SET_SELECT_ACTIVE_LINK,
      payload: "home",
    });
    dispatch(getAppData());
  }, []);

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-99673497-1"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-99673497-1');
        `}</script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-851637210"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-851637210');`}} ></script>
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
