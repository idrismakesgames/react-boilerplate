const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssLoaders = require("./css-settings/cssSettings");

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          cssLoaders.CSSLoader,
          cssLoaders.postCSSLoader,
          "sass-loader"
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          cssLoaders.CSSModuleLoader,
          cssLoaders.postCSSLoader,
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ]
});
