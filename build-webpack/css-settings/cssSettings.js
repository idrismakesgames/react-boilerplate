const autoprefixer = require('autoprefixer');

module.exports = {
  CSSModuleLoader: {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: true,
      localIdentName: '[local]__[hash:base64:5]',
    },
  },
  CSSLoader: {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: true,
    },
  },
  postCSSLoader: {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      plugins: () => [
        autoprefixer({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        }),
      ],
    },
  },
};
