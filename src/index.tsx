import React, { useEffect } from 'react';
import ReactDOMClient from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import { JssProvider, jss } from 'react-jss';

import window from 'global/window';
import vendorPrefixer from 'jss-plugin-vendor-prefixer';
import initStore, { createHistory } from './store/initStore';
import App from './App';
import rootSaga from './store/sagas';

const preloadedState = window.__PRELOADED_STATE__;

const container = document.querySelector('#root');

const history = createHistory();
const store = initStore(preloadedState, history);

store.runSaga(rootSaga);

jss.use(vendorPrefixer());

const Main = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
      const fontAwesomeCssStyles = document.querySelector('#fontawesome-server-side');
      if (fontAwesomeCssStyles) {
        fontAwesomeCssStyles.parentNode.removeChild(fontAwesomeCssStyles);
      }
    }
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <JssProvider jss={jss} classNamePrefix='app-'>
            <App />
          </JssProvider>
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  );
};

const clientApp = () => {
  const { hostname } = window.location;
  const children = <Main />;
  if (
    process.env.NODE_ENV === 'development' ||
    (process.env.NODE_ENV === 'production' &&
      (hostname === 'react-easy-ssr.herokuapp.com' ||
        hostname === 'www.react-easy-ssr.herokuapp.com' ||
        hostname === 'localhost' ||
        hostname === '192.168.0.20'))
  ) {
    loadableReady(() => {
      if (typeof window === 'undefined') {
        ReactDOMClient.hydrateRoot(container, children);
        return;
      }
      const root = ReactDOMClient.createRoot(container);
      root.render(children);
    });
  } else {
    // We don't want Google Cache to use our bundles JS and make whatever he wants with it
    console.error('Forbidden hostname');
  }
};

clientApp();
