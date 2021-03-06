const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: "./src/pages/index.js",
    dashboard: "./src/pages/dashboard.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "index",
      inject: true,
      chunks: ["index"],
      template: "public/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "dashboard",
      inject: true,
      chunks: ["dashboard"],
      template: "public/index.html",
      filename: "dashboard.html",
    }),
    new Dotenv(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "resolve-url-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                compileType: "icss",
              },
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          "resolve-url-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                compileType: "module",
              },
            },
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: "src/styles/shared/*.scss",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
