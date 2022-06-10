import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import * as ReactDOMServer from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { Provider } from 'react-redux';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import { HelmetProvider } from 'react-helmet-async';
import express, { Request, Response } from 'express';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { JssProvider, SheetsRegistry, createGenerateId, jss } from 'react-jss';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { UAParser } from 'ua-parser-js';
import CleanCSS from 'clean-css';
import initStore, { createHistory } from '../store/initStore';
import App from '../App';
import renderFullPage from './renderFullPage';
import rootSaga from '../store/sagas';
import { paths } from '../../scripts/utils';

const PORT = process.env.PORT || 3000;

const app = express();

app.enable('trust proxy');

app.use(cors());

app.use(compression());

if (process.env.NODE_ENV === 'production') {
  app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'UP' });
  });
}

if (
  process.env.NODE_ENV === 'development' ||
  (!process.env.STATIC_FILES_URL && process.env.NODE_ENV === 'production')
) {
  /**
   * This line is only used in development mode
   * In production mode we separate static files from the main Express.js frontend server
   * By separating them, you discharge tensions on this Express.js frontend server
   * It now depends what kind of router you are using, Nginx my favorite, Traefik. The rule
   * is to make a redirection for example like this https://react-easy-ssr-staticfiles.herokuapp.com/static/15.bundle-832a294529dcad5060bd.js
   * and now the static bundle file 15.bundle-832a294529dcad5060bd.js is served.
   * In order to achieve this you need a good CI which will do npm run build, then copy the build into an other
   * docker container to serve it through /static/ path
   */
  app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
}

app.use((req: Request, res: Response) => {
  const userAgent = new UAParser(req.headers['user-agent']).getResult();
  const acceptedLanguages = Array.isArray(req.acceptsLanguages()) ? req.acceptsLanguages()[0] : req.acceptsLanguages();
  const hostname = req.header('host');
  let language = 'fr-FR';
  const timezone = 'Europe/Paris';

  if (acceptedLanguages && acceptedLanguages !== '*') {
    language = acceptedLanguages;
  }

  const initialState = {
    app: {
      main: {
        language,
        timezone,
        hostname,
        userAgent,
      },
    },
  };

  const extractor = new ChunkExtractor({
    statsFile: path.join(paths.clientBuild, paths.publicPath, 'loadable-stats.json'),
    entrypoints: ['bundle'],
  });
  const history = createHistory([req.url]);
  const store = initStore(initialState, history);
  const sheet = new ServerStyleSheet();
  const jsx = (context = {}, helmetContext = { helmet: {} }) => (
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </Provider>
    </StaticRouter>
  );
  store
    .runSaga(rootSaga)
    .toPromise()
    .then(async () => {
      const staticContext: any = {};
      const helmetContext = { helmet: {} };
      const generateId = createGenerateId();
      const sheets = new SheetsRegistry();
      const html = ReactDOMServer.renderToString(
        <JssProvider jss={jss} registry={sheets} generateId={generateId} classNamePrefix='app-'>
          {sheet.collectStyles(extractor.collectChunks(jsx(staticContext, helmetContext)))}
        </JssProvider>,
      );

      let css = sheets.toString();
      const prefixer = postcss([autoprefixer]);
      const cleanCSS = new CleanCSS();
      const prefixerTreated = await prefixer.process(css, { from: undefined });
      css = prefixerTreated.css;
      css = cleanCSS.minify(css).styles;

      let fontAwesomeCss = dom.css();
      fontAwesomeCss = cleanCSS.minify(fontAwesomeCss).styles;
      const styleTags = sheet.getStyleTags();
      const { helmet } = helmetContext;
      const scriptTags = extractor.getScriptTags();

      res
        .status(staticContext.statusCode || 200)
        .send(renderFullPage(html, css, fontAwesomeCss, styleTags, serialize(store.getState()), helmet, scriptTags));
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send(e.message);
    });

  let didError = false;

  const { pipe, abort } = ReactDOMServer.renderToPipeableStream(jsx(), {
    // onAllReady() {
    //   // If NOT streaming
    //   res.statusCode = didError ? 500 : 200;
    //   res.setHeader('Content-type', 'text/html');
    //   res.write('<!DOCTYPE html>');
    //   pipe(res);
    // },
    onShellReady() {
      // If streaming
      console.log('onShellReady start');
      res.statusCode = didError ? 500 : 200;
      res.write('<!DOCTYPE html>');
      pipe(res);
      console.log('onShellReady stop');
    },
    onError(x) {
      didError = true;
      console.error(x);
    },
  });

  setTimeout(abort, 10000);

  store.close();
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else
    console.log(
      `App SSR running ${process.env.NODE_ENV === 'production' ? `port : ${PORT}` : `http://localhost:${PORT}`} 🌎`,
    );
});
