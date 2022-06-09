function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}
// module.exports = (api) => {
//   // This caches the Babel config
//   api.cache.using(() => process.env.NODE_ENV);
//   const web = api.caller(isWebTarget);
//
//   return {
//     presets: [
//       '@babel/preset-env',
//       '@babel/preset-typescript',
//       // Enable development transform of React with new automatic runtime
//       ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
//     ],
//     // Applies the react-refresh Babel plugin on non-production modes only
//     ...(!api.env('production') && { plugins: ['react-refresh/babel'] }),
//   };
// };

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const web = api.caller(isWebTarget);

  const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];

  const plugins = [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel',
    '@loadable/babel-plugin',
  ];
  if (process.env.NODE_ENV === 'development') {
    plugins.push('react-refresh/babel');
  }
  if (web) {
    plugins.push('@babel/plugin-syntax-dynamic-import');
  }
  return {
    presets,
    plugins,
  };
};
