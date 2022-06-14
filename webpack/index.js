module.exports = (env) => {
  process.env.BACKEND_BASE_URL = 'https://api.themoviedb.org';
  if (typeof env !== 'undefined' && env === 'development') {
    process.env.NODE_ENV = 'development';
    return [require('./webpack.client'), require('./webpack.server')];
  } else {
    process.env.NODE_ENV = 'production';
    return [require('./webpack.client'), require('./webpack.server')];
  }
};
