import "../styles/global.scss";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { fetchConfig } from "../resources/getEnvConfig";

function MyApp({ Component, pageProps }) {
  let { env } = pageProps

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
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);
MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  const env = await fetchConfig();
  return { pageProps: { env } }
});
export default wrapper.withRedux(MyApp);
