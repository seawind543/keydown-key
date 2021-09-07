const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const pkg = require('./package.json');

const publicName = pkg.name; // package name
const banner = [
  `${publicName} v${pkg.version}`,
  `(c) ${new Date().getFullYear()} Mark Lin.`,
  pkg.license,
  pkg.homepage,
].join(' | ');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      name: {
        root: 'KeyDownKey',
        commonjs: 'keydown-key',
        amd: 'keydown-key',
      },
      /**
       * Fix issue `Minified React error #321`
       * An object with { root, amd, commonjs, ... } is only allowed for libraryTarget: 'umd'.
       * It's not allowed for other library targets.
       * https://webpack.js.org/configuration/externals/#object
       */
      type: 'umd',
    },
  },
  module: {
    rules: [
      // Process JS with Babel
      {
        test: /\.js?$/,
        exclude: /(node_modules|coverage)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // This has effect on the react lib size
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ESLintPlugin({
      eslintPath: require.resolve('eslint'),
      exclude: ['node_modules', 'coverage', 'lib'],
      emitWarning: true,
      cache: false,
    }),
    new webpack.BannerPlugin(banner),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
