const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { paths } = require('../scripts/utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  devServer: {
    hot: true,
  },
  entry: {
    server: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcServer],
  },
  output: {
    path: paths.serverBuild,
    filename: 'index.js',
    publicPath: paths.publicPath,
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: require('./loaders.server.js'),
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
    }),
  ],
  externals: [nodeExternals()],
  stats: 'minimal',
};
