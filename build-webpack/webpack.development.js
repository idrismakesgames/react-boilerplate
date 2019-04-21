const webpack = require('webpack');
const cssLoaders = require('./css-settings/cssSettings');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          cssLoaders.CSSLoader,
          cssLoaders.postCSSLoader,
          'sass-loader',
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          cssLoaders.CSSModuleLoader,
          cssLoaders.postCSSLoader,
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
  },
});
