const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist/public"),
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 9000,
  },
  output: {
    filename: "[name].bundle.js",
  },
});
