const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  target: "web",
  entry: { main: "./src/index.js" },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
    assetModuleFilename: "images/[name][ext]",
  },
  devtool:
    process.env.NODE_ENV === "development" ? "eval-source-map" : "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "feedback.html",
      filename: "feedback.html",
    }),
    new HtmlWebpackPlugin({
      template: "blog-list.html",
      filename: "blog-list.html",
    }),
    new HtmlWebpackPlugin({
      template: "blog.html",
      filename: "blog.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: require.resolve("jquery"),
      jQuery: require.resolve("jquery"),
    }),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ["*.html"],
  },
};
