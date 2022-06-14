const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { paths } = require('../scripts/utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const devPlugins = [
  new ReactRefreshPlugin({
    overlay: {
      sockIntegration: 'whm',
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
  new LoadablePlugin(),
  new MiniCssExtractPlugin(),
  new webpack.DefinePlugin({
    'process.env.BROWSER': 'false',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
  }),
];

const prodPlugins = [
  new MiniCssExtractPlugin(),
  new webpack.DefinePlugin({
    'process.env.BROWSER': 'false',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

module.exports = {
  name: 'server',
  mode: isDev ? 'development' : 'production',
  target: 'node',
  ...(isDev
    ? {
        devServer: {
          hot: true,
        },
      }
    : null),

  entry: {
    server: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcServer],
  },
  output: {
    path: paths.serverBuild,
    filename: 'index.js',
    publicPath: isDev
      ? paths.publicPath
      : process.env.STATIC_FILES_URL
      ? `${process.env.STATIC_FILES_URL}${paths.publicPath}`
      : `${paths.publicPath}`,
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: require('./loaders.server.js'),
  plugins: isDev ? devPlugins : prodPlugins,
  externals: [nodeExternals()],
  stats: isDev ? 'minimal' : 'normal',
};
