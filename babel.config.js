module.exports = (api) => {
  api.cache(true);
  const plugins = [];

  return {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins,
  };
};
