function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const web = api.caller(isWebTarget);

  const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];

  const plugins = [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
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
