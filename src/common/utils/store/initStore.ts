import { createBrowserHistory, createMemoryHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

import createRootReducer from './rootReducer';

export const createHistory = (initialEntries = ['/']) => {
  if (typeof window !== 'undefined') {
    const history = window.browserHistory || createBrowserHistory();

    if (process.env.NODE_ENV === 'development' && !window.browserHistory) {
      window.browserHistory = history;
    }
    return history;
  }
  return createMemoryHistory({ initialEntries });
};

export default function initStore(preloadedState, history) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares: any[] = [thunk];
  middlewares.push(sagaMiddleware);

  let composeEnhancers = compose();
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

    middlewares.push(createLogger());
  }

  const store: any = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer(history));
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
