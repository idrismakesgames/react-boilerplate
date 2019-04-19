const autoprefixer = require("autoprefixer");
const postCSSVars = require("postcss-simple-vars");

module.exports = {
  CSSModuleLoader: {
    loader: "css-loader",
    options: {
      modules: true,
      localIdentName: "[local]__[hash:base64:5]"
    }
  },
  CSSLoader: {
    loader: "css-loader",
    options: {
      modules: false
    }
  },
  postCSSLoader: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        autoprefixer({
          browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
        })
      ]
    }
  }
};
