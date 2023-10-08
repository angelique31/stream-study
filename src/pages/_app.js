// pages/_app.js
import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import { wrapper } from "../store/store";

//wrapper.useWrappedStore(pageProps) est utilisé pour obtenir le store et
//les props qui seront ensuite passés au composant Provider et au  Component.
function MyApp({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...props} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
