import { createWrapper } from "next-redux-wrapper";
import { Provider, useDispatch, } from "react-redux";
import { useCallback, useEffect, } from "react";
import store from "../store/store";
import "../styles/global.scss";
import Error404 from './404/index'
import { useRouter } from 'next/router';
import { checkLanguageAttributeOntheUrl } from '../helpers/checkLanguageAttributeOntheUrl';
import { fetchConfig, } from '../resources/getEnvConfig';
import dynamic from 'next/dynamic';
import { useUserInteractionOnce } from "../hooks/useUserInteractionOnce";
const RouteLanguageSync = dynamic(() => import('../components/elements/RouteLanguageSync'), { ssr: false });
const ScrollPositionManager = dynamic(() => import('../components/elements/ScrollPositionManager'), { ssr: false });
const ErrorLoggerInjector = dynamic(() => import('../components/elements/ErrorLoggerInjector'), { ssr: false });
const AppDataInitializer = dynamic(() => import('../components/elements/AppDataInitializer'), { ssr: false });

export const MyApp = ({ Component, pageProps }) => {

  const router = useRouter()
  // Check if 'asPath' contains two or more consecutive slashes
  // If it does, return an error or handle it as needed
  if (/\/{2,}/.test(router.asPath)) return <Error404 />

  const dispatch = useDispatch()
  //it comes from index js serVerSide props
  const { store, props } = wrapper.useWrappedStore(pageProps);
  let { hasLanguage, appData } = props//has language used for when user comes it write lcalhost:3000/tr


  const setLanguage = useCallback(async (params = {}) => {
    let { language, } = params;


    let allAppDatas = JSON.parse(sessionStorage.getItem('allAppDatas'))

    if (language.length === 2 && allAppDatas) {
      dispatch({ type: "SET_NEW_APPDATA", data: allAppDatas?.[language] ? allAppDatas?.[language] : allAppDatas?.["en"], initialStateReducer: store.getState().initialReducer })
    } else {
      //ilk basda tek sefer calisicak sonra yukarisi calisir
      dispatch({ type: "SET_NEW_APPDATA", data: appData, initialStateReducer: store.getState().initialReducer })

    }
    let index
    appData?.languages.map((item, idx) => (language === item.value) ? index = idx : idx)
    let direction = language === 'ar' ? "rtl" : "ltr"
    localStorage?.setItem("direction", JSON.stringify(direction));
    const exists = appData?.languages?.some(lang => lang.value === language);

    dispatch({ type: "SET_NEW_LANGUAGE", data: { languageKey: exists ? language : "en", direction, langIndex: index } })

  }, [dispatch, appData,])
  useUserInteractionOnce(async () => {


    //bizde en oldugunda zaten birdene request gedir en requesti 
    //ru es falan oldugunda AppDataInitializer >  componenti vasitasiyla coklu requesti onun icinde yapiyoruz
    if (hasLanguage === 'en') {
      console.log("useUserInteractionOnce called");
      const { fetchAllLanguagesAppDatas } = await import("../helpers/fetchAllLanguagesAppDatas");
      fetchAllLanguagesAppDatas({ initialFetch: false });
    }
  });

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (<Provider store={store}>
    <main >
      <ScrollPositionManager />
      <RouteLanguageSync hasLanguage={hasLanguage} setLanguage={setLanguage} />
      <ErrorLoggerInjector env={pageProps.env} hasLanguage={hasLanguage} setLanguage={setLanguage} />
      <AppDataInitializer hasLanguage={hasLanguage} />

      <Component {...pageProps} />
    </main>
  </Provider>);
}



const makestore = () => store;
const wrapper = createWrapper(makestore);

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {

  const env = await fetchConfig();

  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //language congiguration based on the url (http://localhost:3500/it/gatwick-taxi-prices  if he pres enter we get lang)
  let lang = checkLanguageAttributeOntheUrl(ctx?.req?.url)
  let appDataInitial = store.getState().initialReducer?.appData
  let paymentTypesInitial = store.getState().initialReducer?.paymentTypes
  // Pathname kontrolü
  const excludePaths = ['/news', '/blog'];
  const isExcluded = excludePaths.some((path) => ctx?.req?.url.toLowerCase().startsWith(path));

  // Fetch app data and payment types
  if (ctx?.req?.url) {

    const appDataUrl = `${env.apiDomain}/app/${lang?.length === 2 ? lang : 'en'}`;
    const cdnDataUrl = `https://cdn.london-tech.com/app/${lang?.length === 2 ? lang : 'en'}.json`;
    let goFurtherToCdn = false
    let __appDataInitial = {}
    try {
      let requestFetch = await fetch(appDataUrl);
      __appDataInitial = await requestFetch.json();
      if ((__appDataInitial || {}).status !== 200) {
        goFurtherToCdn = true
      }

    } catch (error) {
      __appDataInitial = appDataInitial || {}
      goFurtherToCdn = true
    }
    try {
      if (goFurtherToCdn) {
        let requestFetch2 = await fetch(cdnDataUrl, { headers: { 'Cache-Control': 'no-cache' }, method: 'GET' });
        __appDataInitial = await requestFetch2.json();
      }
    } catch (error) {

    }

    __appDataInitial = __appDataInitial || {};

    appDataInitial = __appDataInitial
    paymentTypesInitial = __appDataInitial.paymentTypes || [];

    if (isExcluded) {
      // Eğer rota /News veya /blog ile başlıyorsa verileri null yap
      store.dispatch({ type: "GET_APP_DATA", data: { appData: null, paymentTypes: null, } });
    } else {
      // Dispatch values to Redux store
      store.dispatch({ type: "GET_APP_DATA", data: { appData: appDataInitial, paymentTypes: paymentTypesInitial, } });
    }

  }

  if (isExcluded) {
    pageProps = { hasLanguage: "en", appData: null, paymentTypes: null, }
  } else {
    pageProps = { appData: appDataInitial, hasLanguage: lang || "en", env, }
  }
  return { pageProps: { ...pageProps, } };

});
export default wrapper.withRedux(MyApp);
