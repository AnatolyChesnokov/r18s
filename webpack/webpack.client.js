const webpack = require('webpack');
const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { paths } = require('../scripts/utils');

const isDev = process.env.NODE_ENV === 'development';

const devPlugins = [
  new LoadablePlugin(),
  new MiniCssExtractPlugin(),
  new ReactRefreshPlugin({
    overlay: {
      sockIntegration: 'whm',
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.BROWSER': 'true',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
  }),
];
const prodPlugins = [
  new LoadablePlugin(),
  new MiniCssExtractPlugin(),
  new webpack.DefinePlugin({
    'process.env.BROWSER': 'true',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
  }),
  new CompressionPlugin({ algorithm: 'gzip' }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'webpack-report.html',
    openAnalyzer: false,
  }),
];

module.exports = {
  name: 'client',
  mode: isDev ? 'development' : 'production',
  target: 'web',
  devtool: 'source-map',
  ...(isDev
    ? {
        devServer: {
          hot: true,
        },
      }
    : null),
  entry: {
    bundle: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcClient],
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: isDev ? 'bundle.js' : 'bundle-[fullhash].js',
    publicPath: isDev
      ? paths.publicPath
      : process.env.STATIC_FILES_URL
      ? `${process.env.STATIC_FILES_URL}${paths.publicPath}`
      : `${paths.publicPath}`,
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: require('./loaders.client.js'),
  plugins: isDev ? devPlugins : prodPlugins,
  stats: isDev ? 'minimal' : 'normal',
};
