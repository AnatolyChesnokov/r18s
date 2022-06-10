import baseLoadable, { LoadableComponent } from '@loadable/component';
import React from 'react';
import Loading from './Exception/Loading';

// https://github.com/gregberge/loadable-components/issues/669#issuecomment-741539840
const loadable = (importer) => {
  const withoutForwardRef = typeof window !== 'undefined' ? (C) => (props) => <C {...props} /> : (C) => C;
  return withoutForwardRef(
    baseLoadable(importer, {
      fallback: <Loading />,
    }),
  );
};

const NoMatch = loadable(() => import(/* webpackChunkName: "NoMatch" */ './Exception/404'));

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './Home/index'));
const Movies = loadable(() => import(/* webpackChunkName: "Movies" */ './Movies/index'));
const AboutUs = loadable(() => import(/* webpackChunkName: "AboutUs" */ './AboutUs'));

export interface Route {
  name?: string;
  exact?: boolean;
  path?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: LoadableComponent<any>;
}

const indexRoutes: Route[] = [
  {
    exact: true,
    path: '/',
    Component: Home,
  },
  {
    path: '/movies',
    Component: Movies,
  },
  {
    path: '/about-us',
    Component: AboutUs,
  },
  { path: '*', name: 'NoMatch', Component: NoMatch },
];

export default indexRoutes;
