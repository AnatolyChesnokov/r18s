import React, { FC, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { RoutesProps } from 'react-router';
import EventMessage from '../../common/components/EventMessage';

import Grid from '../../common/components/Grid';
import moviesStyle from '../../assets/jss/pages/moviesStyle';

import { ReduxState } from '../../store/rootReducer';
import { triggerMovies } from '../../store/actions';
import Loading from '../Exception/Loading';

type Props = {
  children?: React.ReactNode;
  routeComponent: RoutesProps;
};

const Movies: FC<Props> = ({ children, routeComponent, ...props }) => {
  const classes = moviesStyle(props);

  const dispatch = useDispatch();
  const { movies } = useSelector((state: ReduxState) => state.app);
  // const { pathname, search } = routeComponent.location;

  const willMount = useRef(true);
  if (willMount.current && typeof window === 'undefined') {
    dispatch(triggerMovies('GET_MOVIES'));
    willMount.current = false;
  }

  useEffect(() => {
    dispatch(triggerMovies('GET_MOVIES'));
  }, [dispatch]);

  // if (routeComponent.staticContext && Object.prototype.hasOwnProperty.call(movies, 'error')) {
  //   // eslint-disable-next-line no-param-reassign
  //   routeComponent.staticContext.statusCode = movies.error.status;
  // }

  if (movies.isLoading) {
    return <Loading />;
  }

  const title = '';
  const description = 'List of the most recent movies';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>

      <div className={classes.box}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <h1 className={classes.title}>{title}</h1>
              <h1 className={classes.subtitle}>{description}</h1>

              {Object.prototype.hasOwnProperty.call(movies, 'error') && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <EventMessage event='error' message={movies.error.message} refresh />
                </Grid>
              )}
              {movies.data.length > 0 && (
                <ul className={classes.listMovies}>
                  {movies.data.map((e) => (
                    <li key={e.id}>
                      <div className={classes.movieJacket}>
                        <img
                          src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                          alt='jacket'
                          width={200}
                          height={300}
                        />
                      </div>
                      <div className={classes.movieDetails}>
                        <h2>{e.title}</h2>
                        <p>{e.overview}</p>
                        <p>{`Release date ${new Date(e.release_date).toLocaleDateString()}`}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Movies;
