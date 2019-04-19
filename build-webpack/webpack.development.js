const webpack = require("webpack");
const cssLoaders = require("./css-settings/cssSettings");

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          "style-loader",
          cssLoaders.CSSLoader,
          cssLoaders.postCSSLoader,
          "sass-loader"
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          cssLoaders.CSSModuleLoader,
          cssLoaders.postCSSLoader,
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true
  }
});
