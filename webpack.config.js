const path = require('path');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globule = require('globule');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getEntriesList = () => globule.find(path.resolve(__dirname, 'src/pages/**/*.jsx'));

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/public/index.html'),
      title: 'react as template engine',
      templateParameters: {
        BASE_URL: '/'
      }
    }),
    // new HtmlWebpackPlugin(),
    // ...getEntriesList().map(entry => new HtmlWebpackPlugin(entry)),
    // new HtmlWebpackPlugin({
    //   template: './src/pages/index.jsx',
    //   // filename: 'index.html'
    // }),
    new MiniCssExtractPlugin()
  ],
  entry: getEntriesList().map(entry => entry),
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // {loader: "style-loader", options: {injectType: "linkTag"}},
          {loader: "css-loader"}
        ]
      }
    ]
  },
  target: ["web", "es5"]
};
