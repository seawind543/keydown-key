module.exports = (api) => {
  api.cache(true);
  const plugins = [];

  return {
    presets: ['@babel/preset-env'],
    plugins,
  };
};
