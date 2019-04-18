// Plugin that allows the merge of the different config files and presets
const webpackMerge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Load in a function that will require the `mode` / `env` specific config.
const modeConfig = env => require(`./build-webpack/webpack.${env}`)(env);

// Load in a function that will apply the presets that are passed in.
const presetConfig = require("./build-webpack/applyPresets");

// When running webpack script, a mode, & presets are passed in. (defined in
// These are defined in the `build-webpack` folder, & then merged in with this config.
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
    },
    // Merge in specific mode config defined in the script.
    modeConfig(mode),
    // Merge in any preset configs that are passed in.
    presetConfig({ mode, presets })
  );
};
